---
title: 交流变压器
description: 该元件用以建模交流变压器。

sidebar_position: 500

tags: 
- 元件
- IESLab
---

## 元件定义

**该元件指交流变压器的设备设施，交流变压器是配电系统的重要元件，按照变压器用途可以分为升压变压器和降压变压器。平台采用电力系统常用的非标准变比变压器模型。**

 **变压器简易模型：**

 ![交流变压器](./IES-GD-1Transformer-2.png =x100)

**变压器的Π型等值电路：**

![交流变压器](./IES-GD-1Transformer-1.png =x100)

> $$Z_{e} = k_{*}Z_{T}$$
> $$Y_{1e} = \frac{k_{*} - 1}{k_{*}Z_{T} }$$
> $$Y_{2e}=  \frac{1 - k_{*} }{ {k_{*} }^{2}Z_{T} }$$
> 式中：$k_{*}$为变比标幺值，Z为等值阻抗，Y为等值导纳。

**变压器非标准变比$k_{\ast}$：**
>$$k_{*} = \frac{k}{k_{B}}$$
>$k$为变压器的实际变比，$k_B$ 为变压器的标准变比，即变比的基准值；$k_\ast$ 为变比的标幺值，也称非标准变比。一般而言，变压器非标准变比的范围在0.95-1.05之间。

![交流变压器](./IES-GD-1Transformer.png =x300)

## 元件说明

光伏系统元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见[元件属性配置](/docs/docs/software/xstudio/simstudio/basic/moduleEncapsulation/index.md)页面。


### 引脚
交流电接口，可以在引脚处填写相同的字符使得两个元件相连。
