---
title: Front-matter 介绍
order: 20
---

Front-matter 是文件最上方以 `---` 分隔的区域，用于指定文件的元数据。

示例如下：

```yaml front-matter
---
## 基本数据
title: 写作说明
order: 10

## 呈现选项
nav: false
toc: true
redirect to: ./another-page.md
---

```

具体使用说明见以下分类介绍。

## 基本数据

### 标题 `title`

文章的标题，用于网页标题和页面顶部的大标题，有最高的搜索权重。

Front-matter 之后可以直接开始正文，大标题将依据 `title` 生成，不需要重复书写。

由于大标题使用 `<h1>`(`#`), 后续小标题请直接从 `<h2>`(`##`) 开始编号：

```md subtitles
# 不要使用

## 标题 2

### 标题 3

#### 标题 4

##### 标题 5

###### 标题 6
```

> ## 标题 2
> 
> ### 标题 3
> 
> #### 标题 4
> 
> ##### 标题 5
> 
> ###### 标题 6


### 文章排序 `order`

可以使用任意浮点数，序号小的在前，序号相同则使用标题排序。如不指定，默认值为 `0`。

## 呈现选项

### 页面布局 `nav` `toc`

- `nav`

  指定是否显示页面左侧的侧边栏，默认为 `true`。

- `toc`

  指定是否显示页面右侧的目录，默认为 `true`。

:::info
效果可参考[隐藏侧边栏样例](../examples/no-nav-toc.md)。
:::

### 重定向 `redirect to`

将页面重定向到新位置，页面将在加载后立即跳转至指定的另一个页面。