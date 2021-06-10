const markdownIt = require('markdown-it');
const { escapeHtml } = require('markdown-it/lib/common/utils');
const VideoServiceBase = require('markdown-it-block-embed/lib/services/VideoServiceBase');
const { MdHighlight } = require('./markdown-components/highlight');
const { MdMermaid } = require('./markdown-components/mermaid');
const { MdChart } = require('./markdown-components/chart');
const { MdMath } = require('./markdown-components/math');
const { extend, loadPlugin, slugify } = require('./utils');
const { injector } = require('@/constants');
const { TranslateService } = require('@ngx-translate/core');
require('./post-render');

/**
 *
 */
function loadCustomHighlights() {
    customElements.define(MdHighlight.tagName, MdHighlight, { extends: 'code' });
    customElements.define(MdMermaid.tagName, MdMermaid);
    customElements.define(MdChart.tagName, MdChart);
    return (string, lang, attr) => {
        const code = escapeHtml(string);
        attr = (attr ?? '').trim();
        const htmlAttr = attr ? `id="${escapeHtml(slugify(attr))}" title="${escapeHtml(attr)}"` : '';
        switch (lang) {
            case 'mermaid':
                return `<${MdMermaid.tagName} ${htmlAttr}>${code}</${MdMermaid.tagName}>`;
            case 'chart':
                return `<${MdChart.tagName} ${htmlAttr}>${code}</${MdChart.tagName}>`;
            default: {
                const langAttr = lang ? `language="${escapeHtml(lang)}"` : '';
                return `<pre ${htmlAttr}><code is="${MdHighlight.tagName}" ${langAttr}>${code}</code></pre>`;
            }
        }
    };
}

/**
 * @param {markdownIt.Options & {frontMatter: (fm:string)=>void}} options
 *
 * @returns {markdownIt.MarkdownItExt}
 */
module.exports = function (options) {
    options = Object.assign(
        {
            html: true,
            typographer: true,
            frontMatter: () => {},
        },
        options,
    );
    if (options.highlight == null && customElements) {
        options.highlight = loadCustomHighlights();
    }
    let md = markdownIt(options);

    /** @type {Array<[string, {
     *      validate?(params:string): boolean;
     *      render?(tokens: import('markdown-it/lib/token')[], idx: number): string;
     *      marker?: string;
     * }]>} */
    const containers = [
        [
            'summary',
            {
                render(tokens, idx, _opt, env, _slf) {
                    const token = tokens[idx];
                    const m = token.info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (token.nesting === 1) {
                        const detailsOpen = `<details data-source-line="${token.map[0] + 1}">\n`;
                        if (summary) {
                            return `${detailsOpen}<summary>${md.renderInline(summary, {
                                ...env,
                                footnotes: null,
                            })}</summary>\n`;
                        } else {
                            return detailsOpen;
                        }
                    } else {
                        return '</details>\n';
                    }
                },
            },
        ],
        ...['tip', 'question', 'error', 'warning', 'info', 'success', 'fail'].map((name) => [
            name,
            {
                /**
                 * @param {import('markdown-it/lib/token')[]} tokens
                 */
                render(tokens, idx, _opt, env, _slf) {
                    const token = tokens[idx];
                    const m = token.info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (token.nesting === 1) {
                        const divOpen = `<div is="md-container" class="${escapeHtml(name)}" data-source-line="${
                            token.map[0] + 1
                        }">\n`;
                        if (summary) {
                            return `${divOpen}<summary>${md.renderInline(summary, {
                                ...env,
                                footnotes: null,
                            })}</summary>\n`;
                        } else {
                            return divOpen;
                        }
                    } else {
                        return '</div>\n';
                    }
                },
            },
        ]),
    ];
    /** @type {[import('markdown-it').PluginWithParams, ...any][]} */
    const plugins = [
        [require('markdown-it-emoji')],
        [require('markdown-it-sub')],
        [require('markdown-it-sup')],
        [
            extend(require('markdown-it-footnote'), (md, use) => {
                let labels = {};
                injector
                    .get(TranslateService)
                    .getStreamOnTranslationChange('article.footnote')
                    .subscribe((v) => {
                        if (!v) {
                            return;
                        }
                        for (const key in v) {
                            labels[key] = escapeHtml(v[key]);
                        }
                    });

                use();
                md.renderer.rules.footnote_block_open = function render_footnote_block_open(_tokens, _idx, _options) {
                    return `<footer class="footnotes" aria-label="${labels.label}">\n<ol class="footnotes-list">\n`;
                };
                md.renderer.rules.footnote_block_close = function render_footnote_block_close() {
                    return '</ol>\n</footer>\n';
                };
                md.renderer.rules.footnote_anchor_name = function render_footnote_anchor_name(
                    tokens,
                    idx,
                    _options,
                    env /*, slf*/,
                ) {
                    var label = slugify(tokens[idx].meta.label ?? Number(tokens[idx].meta.id + 1).toString());
                    var prefix = '';

                    if (typeof env.docId === 'string') {
                        prefix = env.docId + '-';
                    }

                    return prefix + label;
                };
                md.renderer.rules.footnote_caption = function render_footnote_caption(
                    tokens,
                    idx /*, options, env, slf*/,
                ) {
                    return Number(tokens[idx].meta.id + 1).toString();
                };
                md.renderer.rules.footnote_ref = function render_footnote_ref(tokens, idx, options, env, slf) {
                    const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
                    const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
                    let refid = id;

                    if (tokens[idx].meta.subId > 0) {
                        refid += '::' + (tokens[idx].meta.subId + 1);
                    }
                    const href = md.normalizeLink(`#fn-${id}`);
                    const linkId = escapeHtml(`fnref-${refid}`);
                    return (
                        `<a id="${linkId}" href="${href}" class="footnote-ref" ` +
                        `aria-label="${labels.toFootnote}" aria-describedby="fn-${escapeHtml(id)}">${caption}</a>`
                    );
                };
                md.renderer.rules.footnote_open = function render_footnote_open(tokens, idx, options, env, slf) {
                    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

                    if (tokens[idx].meta.subId > 0) {
                        id += '::' + tokens[idx].meta.subId;
                    }

                    return `<li id="fn-${escapeHtml(id)}"" class="footnote-item">`;
                };
                md.renderer.rules.footnote_anchor = function render_footnote_anchor(tokens, idx, options, env, slf) {
                    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

                    if (tokens[idx].meta.subId > 0) {
                        id += '::' + (tokens[idx].meta.subId + 1);
                    }
                    const href = md.normalizeLink(`#fnref-${id}`);
                    return `<a href="${href}" class="footnote-backref" aria-label="${labels.backToArticle}"></a>`;
                };
            }),
        ],
        [
            extend(require('markdown-it-math'), (_md, use) => {
                customElements?.define(MdMath.tagName, MdMath);
                use();
            }),
            {
                inlineOpen: '$',
                inlineClose: '$',
                blockOpen: '$$',
                blockClose: '$$',
                inlineRenderer: (content, _token) => {
                    return `<${MdMath.tagName} language="tex" mode="inline">${escapeHtml(content)}</${MdMath.tagName}>`;
                },
                blockRenderer: (content, _token) => {
                    return `<${MdMath.tagName} language="tex" mode="display">${escapeHtml(content)}</${
                        MdMath.tagName
                    }>`;
                },
            },
        ],
        [require('markdown-it-deflist')],
        [require('markdown-it-abbr')],
        [require('markdown-it-ins')],
        [require('markdown-it-mark')],
        [require('markdown-it-imsize'), { autofill: false }],
        [
            require('markdown-it-multimd-table'),
            {
                multiline: true,
                rowspan: true,
                headerless: true,
            },
        ],
        [require('markdown-it-center-text')],
        [require('markdown-it-kbd')],
        [
            require('markdown-it-anchor'),
            {
                slugify: slugify,
                permalink: true,
                permalinkSpace: false,
                permalinkSymbol: '',
                permalinkHref: (slug) => md.normalizeLink(`#${slug}`),
                permalinkAttrs: (slug) => ({ 'aria-label': slug }),
            },
        ],
        [require('markdown-it-front-matter'), options.frontMatter],
        [require('markdown-it-implicit-figures'), { figcaption: true }],
        [
            extend(require('markdown-it-block-embed'), (md, use) => {
                use();
                const original = md.renderer.rules['video'];
                md.renderer.rules['video'] = (tokens, idx, opt, env, slf) => {
                    const ret = original(tokens, idx, opt, env, slf);
                    return `<div data-source-line="${tokens[idx].map[0] + 1}" ` + ret.slice('<div'.length);
                };
            }),
            {
                outputPlayerSize: false,
                services: {
                    bilibili: class extends VideoServiceBase {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(
                                /https?:\/\/(?:www\.|player\.)?bilibili.com\/(?:player.html\?aid=|player.html\?bvid=|video\/)([a-z0-9]+)/i,
                            );
                            const id = match && typeof match[1] === 'string' ? match[1] : reference;
                            if (id.match(/^\d+$/)) return `av${id}`;
                            return id;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            const id = videoID.match(/^(av|bv|)(.*)$/i);
                            let idArg;
                            if (id[1] != null && id[1].toLowerCase() === 'bv') {
                                idArg = 'bvid=' + id[0];
                            }
                            if (id[1] != null && id[1].toLowerCase() === 'av') {
                                idArg = 'aid=' + id[2];
                            }
                            if (id[1] == '') {
                                idArg = 'aid=' + id[2];
                            }
                            return `//player.bilibili.com/player.html?${idArg}&as_wide=1&high_quality=1&danmaku=0`;
                        }
                    },
                    youku: class extends VideoServiceBase {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(/id_([a-z0-9+])/i);
                            return match && typeof match[1] === 'string' ? match[1] : reference;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            return `//player.youku.com/embed/${videoID}`;
                        }
                    },
                    tencent: class extends VideoServiceBase {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(/x\/page\/([a-z0-9+])/i);
                            return match && typeof match[1] === 'string' ? match[1] : reference;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            return `//v.qq.com/txp/iframe/player.html?vid=${videoID}&auto=0`;
                        }
                    },
                },
            },
        ],
        ...containers.map((v) => [require('markdown-it-container'), ...v]),
        [require('markdown-it-source-map')],
    ];
    md = plugins.reduce((i, [plugin, ...options]) => {
        return i.use(loadPlugin(plugin), ...options);
    }, md);

    return md;
};
