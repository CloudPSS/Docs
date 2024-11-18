<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### 基本参数

基本参数

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 设备名称 | `Name` | 文本 | 设备名称 |
| 系统频率 | `Freq` | 实数 [Hz] | 系统频率 |

#### 备自投参数整定

备自投参数整定

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 充电时间 | `Charge_time` | 实数 [s] | 充电时间 |
| 额定线电压有效值 | `Un` | 实数 [kV] | 额定线电压有效值 |
| 元件有压定值 | `Uyy` | 实数 [kV] | 元件有压定值 |
| 元件无压定值 | `Uwy` | 实数 [kV] | 元件无压定值 |
| 元件无流定值 | `Iwl` | 实数 [kA] | 元件无流定值 |
| 自投启动延时 | `Tq` | 实数 [s] | 自投启动延时 |
| 开关跳闸等待延时 | `TT` | 实数 [s] | 开关跳闸等待延时 |
| 判备投成功等待延时 | `Ts` | 实数 [s] | 判备投成功等待延时 |
| 合备用开关时间 | `Th` | 实数 [s] | 合备用开关时间 |

#### 日志记录

日志记录

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 闭锁告警信息 | `InfoBlock` | 文本 | 备自投闭锁告警信息 |
| 启动告警信息 | `InfoEnable` | 文本 | 备自投启动告警信息 |
| 失压跳闸告警信息1 | `InfoBreak1` | 文本 | 备自投判断1线失压跳闸告警信息 |
| 失压跳闸告警信息2 | `InfoBreak2` | 文本 | 备自投判断2线失压跳闸告警信息 |
| 备自投动作告警信息 | `InfoAct` | 文本 | 备自投动作告警信息 |
| 充电完成告警信息 | `InfoCharge` | 文本 | 备自投充电完成告警信息 |
| 放电告警信息 | `InfoDischarge` | 文本 | 备自投放电告警信息 |
| 成功告警信息 | `InfoSuccess` | 文本 | 备自投成功告警信息 |


</slot>