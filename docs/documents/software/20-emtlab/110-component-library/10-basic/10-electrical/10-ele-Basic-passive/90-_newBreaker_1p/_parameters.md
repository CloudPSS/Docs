<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### Configuration

Configuration

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Name | `Name` | 文本 | 元件名称 |
| Breaker OPEN Resistance | `Open` | 实数 [Ω] | 断路器断开电阻 |
| Breaker Close Resistance | `Close` | 实数 [Ω] | 断路器闭合电阻 |
| Breaker Open Type | `bot` | 选择 | 断路器断开方式 |
| Current Chopping Limit | `ccl` | 实数 [kA] | 最大允许断开电流 |

#### Breaker Control

Breaker Control

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Breaker Control Signal Name | `ctrlsignal` | 虚拟引脚（输入） | 断路器控制信号 |
| Initial Breaker Status | `Init` | 选择 | 断路器初始状态 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Breaker Current \[kA\] | `I` | 虚拟引脚（输出） | 断路器支路电流 |
| Breaker Voltage \[kV\] | `V` | 虚拟引脚（输出） | 断路器支路电压 |
| Breaker Status | `Status` | 虚拟引脚（输出） | 断路器状态 |


</slot>