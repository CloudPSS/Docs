---
title: "浪涌发生器"
description: ""
---

## 元件定义
该元件用以产生浪涌信号。

$$
f\left(t\right)=\begin{cases}0,t<T_1\\\frac{P_k}{T_2-T_1}\left(t-T_1\right),T_1\leqslant t<T_2\\P_k,T_2\leqslant t<T_3\\\frac{P_k}{T_4-T_3}\left(T_4-t\right),T_3\leqslant t<T_4\\0,T_4\leqslant t\end{cases}
$$

## 元件说明



### 属性

CloudPSS 元件包含统一的**属性**选项，其配置方法详见 [参数卡](docs/documents/software/10-xstudio/20-simstudio/40-workbench/20-function-zone/30-design-tab/30-param-panel/index.md) 页面。

### 参数

import Parameters from './_parameters.md'

<Parameters/>

### 引脚

import Pins from './_pins.md'

<Pins/>

## 案例

## 常见问题

