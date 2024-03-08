---
title: 热管式太阳能集热器
description: 该元件用以建模热管式太阳能集热器，能够根据气象数据和效率计算热功率，并提供热水制热。

sidebar_position: 500

tags: 
- 元件
- IESLab
---

## 元件定义

> **该元件指热管式太阳能集热器的设备设施。利用热管式真空集热管来吸收太阳辐射能，以无机传热元件为传热媒体，进而加热联集管或水箱中的水。热管式真空管太阳集热器具有集热效率高、得热量大、输出温度高、承压运行快、结构强度高、抗冻性强、安装维护方便、使用中无漏水隐患、易实现和建筑结合、具备较长的使用寿命等特点，可广泛应用于各种规模和用途的太阳能集热系统中。其工作原理是利用金属吸热板吸收紫外线，当金属吸热板温度达到20℃时，热管中的工质就汽化向上运动，在运动过程中不断吸收吸热板上的热量，到达冷凝端时可达到250℃，在冷凝端回流至热管底部，重复加过程。热管沿轴向分为蒸发段、绝热段和冷凝段，蒸发段使热量从管外热源传给管内的液相工质，并使其蒸发，气相工质在冷凝段冷凝，并把热量传递给管外的冷源。当冷源和热源隔开时，绝热段使管内的工质和外界不作热量传递，吸液芯靠毛细作用使液相工质由冷凝段回流到蒸发段及使液相工质在蒸发段沿径向分布。太阳能热水器中应用的热管一般为两相闭式热虹吸管 (简称TPCT),又叫重力热管，内部没有吸液芯，凝结的液体从冷凝段回到蒸发段不是靠吸液芯所产生的毛细力，而是依靠凝结液的自身重力。**


>水力模型：
> $$\mathrm{\Delta}p = p_{in} - p_{out} = k*m*|m|/\rho^{2}$$
> 热力模型：
> $$Q = rA\eta = m\left( h_{out}{- h}_{in}） \right.$$
> 式中：∆p是进出口压差(kPa)，$p_{in}、p_{out}$分别为流体进出口压力(kPa)，k是局部压降系数 (kPa/(m³·s⁻¹)²),m是质量流量(kg/s)，$\rho$是密度（kg/ m³·），Q是太阳能集热器的供热功率(kW)，A为总面积，η为光热转换效率，r为这一时间段内的实际光强(W/m2)，$h_{in}，h_{out}$分别为工质的进出口比焓（kj/kg）。


![热管式集热器](./IES-CH-4HPSC.png =x300)



## 元件说明

光伏系统元件参数标签页包括**属性**、**参数**、**引脚**三类参数，下面对每类参数进行详细说明。

### 属性

CloudPSS 提供了一套统一的元件属性功能，关于元件属性参数的配置，详见[元件属性配置](/docs/docs/software/xstudio/simstudio/basic/moduleEncapsulation/index.md)页面。

### 参数

#### 基础参数

| 参数名 | 键值 (key) | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 元件类型 | `CompType` |  | 选择元件类型 | 选择 | 选择**交流元件**时输出交流电，为**光伏交流系统**；选择**直流元件**时输出直流电，为**光伏直流系统**。 |
| 待选设备类型 | `DeviceSelection` |  | 从设备库中选择设备类型 | 选择 | **选择数据管理模块录入的设备型号**，将光伏系统元件的厂家、产品型号、额定运行参数自动绑定为对应设备在数据管理模块中录入的参数。|
| 损失系数组 | `LossCoes` |  | 配置光伏系统各个环节的能量损失系数 | 表格 | 可配置的损失类型包括直流电缆损失、光伏组件串并联不匹配损失、灰尘及雨雪遮挡损失、交流线路损失、逆变器 MPPT 的效率损失、太阳辐射入射（IAM）损失、变压器损失等， 当仿真参数组的**出力模式**项为**指定出力曲线**时失效。|

#### 仿真参数

在仿真参数中编辑光伏系统的仿真边界条件，主要包含**运行方式**和**运行策略曲线**。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 出力模式 | `PowerMode` |  | 选择光伏系统的出力模式 | 选择 | 在输入仿真运行策略前需要指定设备运行模式。有**由气象数据计算**和**指定出力曲线**两种模式。若选择**由气象数据计算**，则光伏系统出力根据气象数据计算得到。若用户已经计算或得到了光伏系统的出力曲线，可以修改为**指定出力曲线模式**，在**出力曲线**参数中录入出力曲线即可。|
| 启停策略 | `Strategy` |  | 配置光伏系统在不同时刻的设备启停策略 | 表格 | 仅当**出力模式**项为气象数据计算时生效，在表格中录入**各个时间段对应的设备启停策略**。 **开始时刻**对应每个仿真时刻，**启停设备台数**不能超过**设备配置台数**。|
| 出力曲线 | `PowerCurve` |  | 自定义光伏系统的出力曲线 | 表格 | 仅当**出力模式**项为**指定出力曲线**时生效，在表格中录入**各个时间段对应的光伏系统的出力**。 **开始时刻**对应每个仿真时刻。|
| 光伏板跟踪方式 | `TrackingMethod` |  | 选择光伏板跟踪方式 | 选择 | 仅当**出力模式**项为**由气象数据计算**时生效。可选择**固定倾角**或**单轴跟踪（NS轴）**|
| 光伏板倾角 | `DigAngle` | ° | 配置光伏板倾角 | 实数（常量） | 仅当**出力模式**项为**由气象数据计算**且**光伏板跟踪方式**项为**固定倾角**时生效。调节范围 0-360° |

#### 优化参数

在优化参数中编辑光伏系统的优化条件。

| 参数名 | 键值 (key)  | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- | :--- |
| 是否优化该设备 | `OptimizationChoice` |  | 是否对光伏系统元件的运行方式进行优化 | 选择 | 仅当仿真参数组的**出力模式**项为**由气象数据计算**时生效。选择**是**，则设备的运行策略由系统优化得到，不读取仿真参数中设置的运行模式和运行策略；选择**否**，则系统按照仿真参数的运行模式和运行策略运行。|

### 引脚

光伏系统只有一个**电接口**引脚，用于将光伏系统元件与其他电设备连接，支持**线连接**和**信号名**的连接方式。

引脚的**名称、键值、维度、定义描述**的详细说明如下表所示。

| 引脚名 | 键值 (key)  | 维度 | 描述 |
| :--- | :--: | :--- | :--- |
| 电接口 | `DC/AC` | 1×1 | 可以在引脚处输入相同的字符使得光伏系统与其他电元件相连，当基础参数**元件类型**项是**直流元件**时，键值为**DC**；**元件类型**项是**交流元件**时，键值为**AC**。|


## 案例

## 常见问题