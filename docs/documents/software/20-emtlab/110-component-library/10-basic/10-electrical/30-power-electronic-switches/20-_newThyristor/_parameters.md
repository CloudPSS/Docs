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
| Name | `Name` | 文本 | 元件名称<br/>此处输入晶闸管的名称（可缺省） |
| Enable Snubber Circuit? | `Snubber` | 选择 | 有无缓冲电路<br/>选择“Yes”或“No”以启用或禁用晶闸管并联的缓冲电路 |
| ON Resistance | `Ron` | 实数 [Ω] | 导通电阻<br/>晶闸管导通时的等效电阻 |
| OFF Resistance | `Roff` | 实数 [Ω] | 关断电阻<br/>晶闸管关断时的等效电阻 |
| Forward Voltage Drop | `Vfd` | 实数 [kV] | 正向导通压降<br/>晶闸管导通时的等效压降 |
| Forward Breakover Voltage | `Vfb` | 实数 [kV] | 正向击穿电压<br/>晶闸管正向击穿电压，当正向超过这个数值时，二极管将被正向击穿 |
| Reverse Withstand Voltage | `Vrw` | 实数 [kV] | 反向耐受电压<br/>晶闸管反向耐受电压，当反向超过这个数值时，二极管将被反向击穿 |
| Minimum Extinction Time | `Tme` | 实数 [s] | 导通延迟时间<br/>晶闸管导通延迟时间，即从接受到导通信号到电气导通的时间间隔 |
| Snubber Resistance | `Rs` | 实数 [Ω] | 缓冲电路电阻<br/>晶闸管并联RC缓冲电路的电阻，仅当“有无缓冲电路”选择"Yes"时有效 |
| Snubber Capacitance | `Cs` | 实数 [μF] | 缓冲电路电容<br/>晶闸管并联RC缓冲电路的电容，仅当“有无缓冲电路”选择"Yes"时有效 |

#### Monitoring

Monitoring

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Current \(Snubber Excluded\) \[kA\] | `I` | 虚拟引脚（输出） | 晶闸管支路电流（不含缓冲电路）<br/>此处输入不含缓冲电路的支路电流信号量测信号的标签，如 Is1 |
| Total Current \[kA\] | `Itotal` | 虚拟引脚（输出） | 晶闸管总电流<br/>此处输入流过晶闸管及缓冲电路的总电流信号量测信号的标签，如 Is2 |
| Branch Voltage \[kV\] | `V` | 虚拟引脚（输出） | 支路电压<br/>此处输入支路电压量测信号的标签，如 Vt |
| Last Turn On Time \[s\] | `Ton` | 虚拟引脚（输出） | 最近一次开通时间<br/>此处输入最近开通时间量测信号的标签，如 Ton |
| Last Turn Off Time \[s\] | `Toff` | 虚拟引脚（输出） | 最近一次关断时间<br/>此处输入最近关断时间量测信号的标签，如 Toff |
| Alpha Angle \[s\] | `Alpha` | 虚拟引脚（输出） | 实际触发角（延迟触发时间）<br/>此处输入触发角量测信号的标签，如 Alpha |
| Gamma Angle \[s\] | `Gamma` | 虚拟引脚（输出） | 实际熄弧角（关断后承受负电压持续时间）<br/>此处输入熄弧角量测信号的标签，如 Gamma |


</slot>