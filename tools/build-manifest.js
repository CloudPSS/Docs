const yaml = require('js-yaml');
const fs = require('fs').promises;
const glob = require('glob');
const path = require('path');
const { promisify } = require('util');

process.chdir(path.resolve(__dirname, '../docs'));

async function main() {
    let fm;
    const md = require('markdown-it')({
        html: true,
        typographer: true,
    }).use(require('markdown-it-front-matter'), (f) => (fm = f));
    /** @type {import('../src/app/interfaces/manifest').RootManifest} */
    const base = yaml.load(await fs.readFile('./manifest.yml', 'utf-8'));
    const matches = await promisify(glob)('**/*.md');
    base.documents = await Promise.all(
        matches.map(async (v) => {
            const file = await fs.readFile(v, 'utf-8');
            fm = undefined;
            md.render(file);
            console.log(fm)
            const front = fm ? yaml.safeLoad(fm) : undefined;
            const frontObj = typeof front == 'object' ? front : undefined;
            return { title: path.basename(v, '.md'), ...frontObj, path: `/${v}` };
        }),
    );
    fs.writeFile('./manifest.json', JSON.stringify(base), 'utf-8');
}

main().catch(console.error);