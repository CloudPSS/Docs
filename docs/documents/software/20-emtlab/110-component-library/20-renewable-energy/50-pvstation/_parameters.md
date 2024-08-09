<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### 光伏阵列参数

光伏阵列参数

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 开路电压 | `Voc` | 实数 [V] |  |
| 短路电流 | `Isc` | 实数 [A] |  |
| 额定电压 | `Vm` | 实数 [V] |  |
| 额定电流 | `Im` | 实数 [A] |  |
| 最大光照强度 | `Smax` | 实数 |  |
| 最小光照强度 | `Smin` | 实数 |  |
| 电池温度 | `T` | 实数 [℃] |  |

#### 逆变器参数

逆变器参数

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 转换效率 | `site` | 实数 |  |
| 直流侧稳压电容时间常数 | `TC` | 实数 |  |
| 交流侧滤波器时间常数 | `TL` | 实数 |  |
| 电流上限 | `Imax` | 实数 [p\.u\.] |  |
| 电流下限 | `Imin` | 实数 [p\.u\.] |  |
| 功率因数角上限 | `Amax` | 实数 [rad] |  |
| 功率因数角下限 | `Amin` | 实数 [rad] |  |

#### 电压调节器

电压调节器

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 比例系数 | `Kv` | 实数 |  |
| 时间常数 | `Tv` | 实数 |  |
| 积分系数 | `Kiv` | 实数 |  |

#### 电流调节器

电流调节器

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 比例系数 | `Ki` | 实数 |  |
| 时间常数 | `Ti` | 实数 |  |
| 积分系数 | `Ki2` | 实数 |  |

#### 光伏系统参数

光伏系统参数

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| 额定容量 | `Sbase` | 实数 [MVA] |  |
| 交流侧基准电压 | `Vrate` | 实数 [kV] |  |
| 有功初值 | `PG0` | 实数 [p\.u\.] |  |
| 无功初值 | `QG0` | 实数 [p\.u\.] |  |
| 机端电压初值 | `Vt0` | 实数 [p\.u\.] |  |
| 电压初始相位 | `Init_Phase` | 实数 [Deg] | 电压初始相位 |
| Startup Time | `Startup_Time` | 实数 | 启动时间 |

#### 单元测试



| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Name | `Name` | 文本 | Name |
| 启用单元测试元件？ | `UnitTest` | 布尔 | 是否启用单元测试元件？ |


</slot>