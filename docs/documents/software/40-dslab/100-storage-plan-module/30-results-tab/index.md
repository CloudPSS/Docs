---
title: 结果页面
description: DSLab 源网荷储协同仿真平台-储能规划模块-结果页面
sidebar_position: 30
tags:
- dslab
- function
---

本节主要介绍 DSLab 源网荷储协同仿真平台进行储能规划计算时查看计算结果的方法，包括统计性指标表格、元件时序运行结果等。

## 功能定义

用于展示 DSLab 储能规划计算的结果。

## 功能说明

### 启动仿真

通过点击**启动任务**按钮能执行当前计算方案下的储能规划。

![启动储能规划](./start.png "启动储能规划")

### 结果概览

计算开始后，平台自动跳转到**结果**栏页面，可在**结果概览**页面查看计算过程及规划结果。用户可选择是否将方案配置结果写回至数据管理模块或拓扑编辑模块。

![储能规划-结果-结果概览](./storage-results-overview.png "储能规划-结果-结果概览")

若需在**时序结果**页面查看分析规划结果，则需先在**结果概览**页面点击**修改项目文件**，将规划结果暂存到拓扑中。若不想保存应用的规划结果，只是临时查看，查看完后刷新浏览器页面；若要规划结果会写回拓扑编辑模块，则点击保存按钮。

![储能规划-结果-潮流断面](./storage-results-topo.png "储能规划-结果-潮流断面")

## 常见问题

运行结果回写和拓扑结果回写？
:   在**结果概览**页面，提供了**运行结果回写**和**拓扑结果回写**功能，点击触发后，系统会将储能规划结果进行回写，若用户不点击左上方**保存**按钮，回写的结果只会临时显示，在页面刷新后会恢复回写前状态。用户可利用此功能进行校验，并选择是否对规划结果进行保存应用。
