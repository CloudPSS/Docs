---
title: Clark Transformer
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3007
order: 200

classname: _newClarkTransform
symbol: newClarkTransform
---
## Basic Description
{% compsymbol newClarkTransform %}

> **This component performs Clark transformation and inverse Clark transformation.**

## Parameter
### Configuration
| Parameter name | Remark | Type  | Description |
| :-------------------------- | :------- | :---: | :------------------------------------- |
| Name | Name of component | Text  | Enter the name of this component |
| Direction of Transformation | Direction of transformation | Select  | Select Clark transformation or inverse Clark transformation |


## Pin List

| Pin name | Dimension | Description                       |
| :----- | :------: | :------------------------- |
| α      |   1×1    | Input pin of α-axis during inverse Clark transformation |
| β      |   1×1    | Input pin of β-axis during inverse Clark transformation |
| A      |   1×1    | Output pin of phase A during inverse Clark transformation |
| B      |   1×1    | Output pin of phase B during inverse Clark transformation |
| C      |   1×1    | Output pin of phase C during inverse Clark transformation |
| A      |   1×1    | Input pin of phase A during Clark transformation |
| B      |   1×1    | Input pin of phase B during Clark transformation |
| C      |   1×1    | Input pin of phase C during Clark transformation |
| α      |   1×1    | Output pin of α-axis during Clark transformation |
| β      |   1×1    | Output pin of β-axis during Clark transformation |

## Using Instructions

![坐标位置](comp_newClarkTransform/Clark.png "坐标位置")
αβ轴为静止坐标轴，其相对位置为图所示。Park变换及逆Park变换的计算公式为：
 + **Clark变换**
$$\begin{bmatrix}
U_{\alpha }\\ 
U_{\beta }
\end{bmatrix}
=\frac{2}{3}*\begin{bmatrix}
1 &-\frac{1}{2}  &-\frac{1}{2} \\ 
 0&\frac{\sqrt{3}}{2}  &-\frac{\sqrt{3}}{2} 
\end{bmatrix}
\begin{bmatrix}
U_{a}\\ 
U_{b}\\ 
U_{c}
\end{bmatrix}$$

+ **逆Clark变换**
$$\begin{bmatrix}
U_{a}\\ 
U_{b}\\ 
U_{c}
\end{bmatrix}
=
\begin{bmatrix}
1 &0 \\ 
 -\frac{1}{2}&\frac{\sqrt3}{2} \\ 
 -\frac{1}{2}& -\frac{\sqrt3}{2}
\end{bmatrix}
\begin{bmatrix}
U_{\alpha }\\ 
U_{\beta }
\end{bmatrix}$$

## See Also

[Park Transformer](comp_newParkTransform.html)、[dq-αβ Coordinates Transformer](comp_newXYtoDQ.html)