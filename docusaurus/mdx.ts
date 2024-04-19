import type { PluginOptions as BlogOptions } from '@docusaurus/plugin-content-blog';
import type { PluginOptions as PagesOptions } from '@docusaurus/plugin-content-pages';
import type { PluginOptions as DocsOptions } from '@docusaurus/plugin-content-docs';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';
import remarkMath from 'remark-math';
import remarkIns from 'remark-ins';
import { remarkExtendedTable, extendedTableHandlers } from 'remark-extended-table';
import remarkJoinCjkLines from 'remark-join-cjk-lines';
import rehypeKatex from 'rehype-katex';
import rehypeFigure from './plugins/rehype/figure';
import rehypeUrl from './plugins/rehype/url';
import type { MarkdownConfig } from '@docusaurus/types';

export const mdxOptions: Partial<BlogOptions & PagesOptions & DocsOptions> = {
    admonitions: {
        extendDefaults: true,
        keywords: ['summary'],
    },
    remarkPlugins: [remarkJoinCjkLines, remarkIns, remarkMath, remarkExtendedTable, remarkDefinitionList],
    rehypePlugins: [rehypeUrl, rehypeKatex, rehypeFigure],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
};

export const remarkRehypeOptions: MarkdownConfig['remarkRehypeOptions'] = {
    handlers: {
        ...defListHastHandlers,
        ...extendedTableHandlers,
    },
};
