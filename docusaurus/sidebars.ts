import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * 配置侧边栏
 * @see https://docusaurus.io/docs/sidebar
 */
const sidebars: SidebarsConfig = {
    docs: [
        { type: 'autogenerated', dirName: 'about' },
        { type: 'link', label: 'test', href: 'https://cloudpss.net' },
    ],
    overview: [{ type: 'autogenerated', dirName: 'overview' }],
    xstudio: [{ type: 'autogenerated', dirName: 'xstudio' }],
    emtlab: [{ type: 'autogenerated', dirName: 'emtlab' }],
    tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
    others: [{ type: 'autogenerated', dirName: 'others' }],
    about: [{ type: 'autogenerated', dirName: 'about' }],
    meta: [{ type: 'autogenerated', dirName: 'meta' }],
};

export default sidebars;
