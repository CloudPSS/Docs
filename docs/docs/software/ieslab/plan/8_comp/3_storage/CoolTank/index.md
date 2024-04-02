---
title: 储冷罐
description: 该元件用以建模储冷罐（蓄冰空调），通过储水实现储热。

sidebar_position: 200

tags: 
- 元件
- IESLab
---

## 元件定义

 **该元件指储水罐（蓄冰空调），利用水罐的能量储存和热惯性，解耦源与荷，动态调节机组出力**

蓄冰空调的工作原理如下：  
**电价低谷时蓄冰系统**运行：蓄冰空调系统中的制冷机组在夜间低谷负荷时段运行，使用电力将水冷却并制成冰，存储在蓄冰设备中。这种冷却过程降低了水的温度，直至其冻结成冰。  
**电价高峰或负荷高峰时融冰制冷系统**运行：在白天，当电力需求增加，空调负荷达到高峰时，系统通过水泵将冰融化，释放出存储的冷量。这些融化的冰水通过系统循环，提供冷量给空调系统，以满足制冷需求。  
这种系统设计可以有效地利用夜间低成本的电力来制冰，然后在白天高电价时段使用这些冰存储的冷量，减少对电网高峰时段的依赖，降低运行成本。蓄冰空调系统通常包括制冷机组、蓄冰设备（如蓄冰槽）、水泵和管道等组成部分。


**蓄能前后的蓄冷罐量关系为:**
 $$
 W_{B}^{1} = W_{B}^{0}+ \left( {Q_{B,C}\eta_{B,C} - \frac{Q_{B,D} }{\eta_{B,D} } } \right)\Delta t
 $$
 式中，$W_{B}^{0}$、 $W_{B}^{1}$分别表示蓄冷/释冷前后蓄能装置的蓄冷罐量（kWh）；Q_{B,C}$、$Q_{B,D}$分别表示蓄能装置的蓄冷/释冷功率（kW）；$\eta_{B,C}$ 、$\eta_{B,D}$分别表示蓄能装置蓄冷/释冷效率,$\Delta t$为时间步长。

![储冷罐](./coolstorage.svg )


## 元件说明

元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见[元件属性配置](/docs/docs/software/xstudio/simstudio/basic/moduleEncapsulation/index.md)页面。

### 参数

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件名称 | `CompName` |  | 元件名称 | 文本 | 元件名称 |



#### 规划参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，将自动绑定对应设备的厂家、产品型号和额定运行参数。 |
| 最小蓄冷罐容量配置 | `MinCoolStorageTankCapacity` | kWh | 设备的最小蓄冷罐容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|
| 最大蓄冷罐容量配置 | `MaxCoolStorageTankCapacity` | kWh | 设备的最大蓄冷罐容量配置 | 实数 | 仅当**待选设备类型**选择数据管理模块输入的设备后生效。|


#### 仿真参数

在规划参数中编辑元件的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 初始蓄冷罐比例 | `InitialCoolStorageTankSOC` |  | 初始蓄冷罐比例 | 实数 | 初始时刻蓄冷罐比例 = 初始时刻蓄冷罐量/蓄冷罐容量 |
| 最大蓄冷罐 SOC | `maxCoolStorageTankSOC` |  | 最大蓄冷罐 SOC | 实数 | 最大蓄冷罐 SOC = 最大蓄冷罐量/蓄冷罐容量 |
| 最小蓄冷罐 SOC | `minCoolStorageTankSOC` |  | 最小蓄冷罐 SOC | 实数 | 最下蓄冷罐 SOC = 最小蓄冷罐量/蓄冷罐容量，注意最小蓄冷罐 SOC 需小于最大蓄冷罐 SOC |


<!--
#### 优化参数

在优化参数中编辑元件的优化参数。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 始末最大水位比例偏差 | `MaxLevelDifference` | % | 始末时刻的最大水位比例差 | 实数  | 始末水位比例偏差 =  ABS (计算周期初始时刻水位 - 计算周期结束时刻水位) /水位高度，比例范围为 0-100%。|
| 始末最大水温差 | `MaxTemperatureDifference` | ℃ | 始末时刻最大水温差 | 实数 |始末最大水温差= ABS（计算周期初始时刻水温 - 计算周期结束时刻水温） |
-->

### 引脚

引脚用于将元件与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 冷接口 | `HeatPort` | 1×1 | 可以在引脚处输入相同的字符使得设备与其他电元件相连|



## 常见问题Q&A

元件模型是否具有代表性？

:   IESLab 平台的设备主要关注**能量流的变化和转换**过程，主要建立能量转换的**通用简化模型**。无论是水等**显式储冷**，还是蓄冰空调等**潜式储冷**，都是蓄冷设备，均可以使用该通用模型。

是否考虑了未充放能时系统的耗散？
:   未考虑。