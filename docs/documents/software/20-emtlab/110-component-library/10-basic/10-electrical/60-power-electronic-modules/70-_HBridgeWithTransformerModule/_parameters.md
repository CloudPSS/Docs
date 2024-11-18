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
| Name | `Name` | 文本 | 元件名称<br/>此处输入H桥变压器模块的名称 |
| IGBT On Resistance | `RIon` | 实数 [Ω] | IGBT导通电阻 |
| IGBT Off Resistance | `RIoff` | 实数 [Ω] | IGBT关断电阻 |
| Diode On Resistance | `RDon` | 实数 [Ω] | 二极管导通电阻 |
| Diode Off Resistance | `RDoff` | 实数 [Ω] | 二极管关断电阻 |
| DC Side Capacitance | `C` | 实数 [F] | 直流侧电容值 |
| Initial Capacitor Voltage | `V0` | 实数 [kV] | 初始电容电压 |

#### Transformer

Transformer

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Rated Power | `Tmva` | 实数 [MVA] | 额定容量<br/>变压器每侧绕组的额定容量$S_N$（所填变压器参数的功率基值） |
| Winding \#1 Rated Voltage \(RMS\) | `V1` | 实数 [kV] | 绕组#1额定电压有效值<br/>绕组1的额定线电压有效值$V_{1N}$（所填变压器参数的电压基值） |
| Winding \#2 Rated Voltage \(RMS\) | `V2` | 实数 [kV] | 绕组#2额定电压有效值<br/>绕组2的额定线电压有效值$V_{2N}$（所填变压器参数的电压基值） |
| Base Operation Frequency | `f` | 实数 [Hz] | 额定频率<br/>变压器的额定频率$f_n$ |
| Leakage Reactance | `Xl` | 实数 [p\.u\.] | 漏电抗<br/>变压器的等值漏电抗$X_T$  ，可由变压器短路实验或变压器铭牌得出 |
| No Load Losses | `Rloss` | 实数 [p\.u\.] | 空载损耗<br/>变压器的空载损耗$P_0$，可由变压器空载实验或变压器铭牌得出 |
| Copper Losses | `Closs` | 实数 [p\.u\.] | 铜耗<br/>变压器的铜耗$P_Cu$，可由变压器短路实验或变压器铭牌得出 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| IGBT Voltage Vector \[kV\] | `VT` | 虚拟引脚（输出） | IGBT电压向量<br/>此处输入IGBT的电压向量量测信号的标签（4x1维），如 Vt |
| IGBT Current Vector \[kA\] | `It` | 虚拟引脚（输出） | IGBT电流向量<br/>此处输入IGBT的电流向量量测信号的标签（4x1维），如 It |
| Diode Current Vector \[kA\] | `Id` | 虚拟引脚（输出） | 二极管电流向量<br/>此处输入二极管的电流向量量测信号的标签（4x1维），如 Id |
| Voltage Between Port A and B \[kV\] | `Vab` | 虚拟引脚（输出） | AB两点间的电压<br/>此处输入H桥AB端口电压量测信号的标签（1x1维），如 Vab |
| Winding \#1 Current \[kA\] | `I1` | 虚拟引脚（输出） | 绕组1电流<br/>此处输入变压器绕组#1电流量测信号的标签（1x1维），如 Ip |
| Winding \#2 Current \[kA\] | `I2` | 虚拟引脚（输出） | 绕组2电流<br/>此处输入变压器绕组#2电流量测信号的标签（1x1维），如 Is |


</slot>