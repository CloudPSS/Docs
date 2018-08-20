//import Vue from '../../../../node_modules/vue/types/index';

(async function ()
{

    interface SearchRecord
    {
        url?: string;
        content?: string;
        title?: string;
        type?: string;
        categories?: string[];

        extend?: string;
    }

    interface SiteMap
    {
        [key: string]: Type;
    }

    interface Type
    {
        name: string;
        categories?: CategoryMap;
    }

    interface CategoryMap
    {
        [key: string]: Category | undefined;
    }

    interface Category
    {
        name: string;
        children?: CategoryMap;
    }

    class FormattedSearchRecord
    {
        url: string;
        content: string;
        categories: string[];
        score = 0;
        formattedTitle: string;
        formattedContent: string;
        title: string;
        extend: string;
        type?: string;

        constructor(record: SearchRecord)
        {
            this.url = record.url || '';
            this.type = record.type || undefined;
            this.content = (record.content || '').trim();
            this.formattedContent = this.content.toLowerCase();
            this.title = (record.title || '').trim();
            this.formattedTitle = this.title.toLowerCase();
            this.categories = record.categories || [];
            this.extend = record.extend || '';
        }
    }

    const queryinput = document.getElementById('search-query') as HTMLInputElement;
    const suggest = document.getElementById('search-suggest') as HTMLUListElement;
    queryinput.addEventListener('focus', () => { suggest.classList.add('open') });
    queryinput.addEventListener('blur', () => { setTimeout(() => { suggest.classList.remove('open') }, 50) });

    var vueApp = new Vue({
        el: '#search-form',
        data:
        {
            records: null as (null | Array<FormattedSearchRecord>),
            term: '',
            failed: false,
            loadedPercent: 0,
            suggestOpen: false,
            sitemap: null as (null | SiteMap)
        },
        methods:
        {
            showSuggest()
            {
                this.suggestOpen = true;
            },
            hideSuggest()
            {
                setTimeout(() =>
                {
                    this.suggestOpen = false;
                }, 100);
            },
            submit()
            {
                let match = this.matches[0];
                if (!match)
                    return;
                if (!this.term.trim() || match.title !== this.term.trim())
                    return;
                window.location.pathname = match.url;
            },
            getCategories(record: FormattedSearchRecord): string[]
            {
                if (!record.type || !this.sitemap)
                    return [];
                let cat = new Array<string>();
                let typemap = this.sitemap[record.type];
                cat.push(typemap.name);
                let catemap = typemap.categories;
                for (const catkey of record.categories)
                {
                    let cate = catemap![catkey];
                    cat.push(cate!.name);
                    catemap = cate!.children;
                }
                return cat;
            }
        },
        computed:
        {
            succeed: function ()
            {
                return !!(this.sitemap && this.records && !this.failed);
            },
            matches: function (): Array<FormattedSearchRecord>
            {
                if (!this.records || this.records.length === 0)
                    return new Array<FormattedSearchRecord>();
                const terms = this.term.split(/\s+/g).filter(function (s) { return s !== '' });
                function match(content: string): number
                {
                    if (!content)
                        return 0;
                    let score = 0;
                    terms.forEach(term =>
                    {
                        if (content.indexOf(term) >= 0)
                            score += (term.length + 1) / content.length;
                    })
                    return score;
                }
                function getScore(record: FormattedSearchRecord)
                {
                    return match(record.formattedTitle) * 10 + match(record.extend) * 5 + match(record.formattedContent);
                }
                let records = this.records.slice();
                records.forEach(r => { r.score = getScore(r); });
                records.sort((a, b) => { return b.score - a.score; });
                records = records.splice(0, 10).filter(r => { return r.score > 0; });
                return records;
            }
        }
    })

    try
    {
        let getSearch = getFile('/search.json', p => vueApp.loadedPercent = p);
        let getSitemap = getFile('/sitemap.json');
        let data = await getSearch as SearchRecord[];
        vueApp.loadedPercent = 100;
        vueApp.records = data.filter(r => r.title).map(r => new FormattedSearchRecord(r));
        vueApp.sitemap = await getSitemap as SiteMap;
    }
    catch
    {
        vueApp.failed = true;
    }

    function getFile(path: string, progress?: (progressPercent: number) => void)
    {
        return new Promise(function (resolve, reject)
        {
            try
            {
                const req = new XMLHttpRequest();
                req.open('get', path);
                req.onprogress = function (ev)
                {
                    if (ev.lengthComputable && progress)
                        progress.call(p, ev.loaded / ev.total * 100);
                };
                req.onload = function (ev)
                {
                    try
                    {
                        if (this.status == 200)
                        {
                            resolve(JSON.parse(this.response));
                        }
                    }
                    catch (ex)
                    {
                        reject(ex);
                    }
                };
                req.onerror = onerror;
                req.onabort = onerror;
                req.ontimeout = onerror;
                function onerror()
                {
                    reject(this.statusText);
                };
                req.send();
            }
            catch (ex)
            {
                reject(ex);
            }
        });
    }
})();