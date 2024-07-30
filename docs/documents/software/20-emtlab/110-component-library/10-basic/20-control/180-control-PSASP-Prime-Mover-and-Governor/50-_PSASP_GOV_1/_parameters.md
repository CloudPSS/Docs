<!--
DO NOT EDIT THIS FILE DIRECTLY.
This file is generated by tools/comp-docs.js.
All changes will be overwritten by regeneration.
-->

<slot class="model-parameters">

#### PSASP\_Gov1：水、火电机组均适用的通用调速器模型

PSASP_Gov1：水、火电机组均适用的通用调速器模型

| 参数名 | 键名 | 类型 [单位] | 描述 |
|:------ |:---- |:-----------:|:---- |
| Kδ | `Kd` | 实数 | 量测环节放大倍数。 |
| Ki | `Ki` | 实数 | 硬负反馈放大倍数。 |
| Kβ | `Kb` | 实数 | 软负反馈放大倍数。 |
| σmax | `Smax` | 实数 [p\.u\.] | 配压阀行程上限，标幺值(p.u.) |
| σmin | `Smin` | 实数 [p\.u\.] | 配压阀行程下限，标幺值(p.u.) |
| μmax | `Mmax` | 实数 [p\.u\.] | 导水叶(汽门)开度上限，标幺值(p.u.) |
| μmin | `Mmin` | 实数 [p\.u\.] | 导水叶(汽门)开度下限，标幺值(p.u.) |
| ε | `eps` | 实数 [p\.u\.] | 调速器死区，标幺值(p.u.) |
| α | `alpha` | 实数 | 汽轮机过热系数。若无中间过热， α=1；对于水轮机， α=1 |
| Ti | `Ti` | 实数 [s] | 水轮机软反馈时间常数，单位为秒(s)。 |
| Ts | `Ts` | 实数 [s] | 伺服机构时间常数，单位为秒(s) |
| T0 | `T0` | 实数 [s] | 对于汽轮机， T0 为蒸汽容积时间常数，对于水轮机， T0=1/2Tw |
| Tw | `Tw` | 实数 [s] | 水锤效应时间常数，若无水锤效应，TW=0 |
| Trh | `Trh` | 实数 [s] | 汽轮机中间过热时间常数，单位为秒(s)。 |
| KmH | `KmH` | 实数 | 发电机额定功率与电机容量的比值 |


</slot>