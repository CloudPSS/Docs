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
    tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
    others: [{ type: 'autogenerated', dirName: 'others' }],
    about: [{ type: 'autogenerated', dirName: 'about' }],
    meta: [{ type: 'autogenerated', dirName: 'meta' }],
    guide: [{ type: 'autogenerated', dirName: 'docs/guide' }],
    software: [{ type: 'autogenerated', dirName: 'docs/software' }],
    hardware: [{ type: 'autogenerated', dirName: 'docs/hardware' }],
    softwaretools: [{ type: 'autogenerated', dirName: 'docs/software-tools' }],
    developertools: [{ type: 'autogenerated', dirName: 'docs/developer-tools' }],
    archivedcontent: [{ type: 'autogenerated', dirName: 'docs/archived-content' }],
};

export default sidebars;
