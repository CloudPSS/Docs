---
title: 电磁暂态仿真
description: 介绍 EMTLab 的电磁暂态仿真原理，并用模板算例介绍最电磁暂态仿真的使用方法
sidebar_position: 100

tags: 
- EMTLab
---
本节首先介绍电磁暂态和机电暂态的区别，并对 EMTLab 的电磁暂态仿真原理进行讲解，然后使用高压直流输电系统模板算例进行电磁暂态仿真。

## 功能定义
EMTLab 提供的电磁暂态仿真功能。

## 功能说明

### 暂态过程
#### 暂态过程分类
根据暂态过程所涉及的能量转换过程，系统的暂态过程分为机电暂态过程和电磁暂态过程。**机电暂态过程**是由于发电机或电动机的电磁转矩变化而引起的电机转子机械运动的改变，主要涉及到电机的机械能和电网的电能之间的相互作用。**电磁暂态过程**是由电场能量和磁场能量相互作用引起的电压电流变化，电磁暂态过程通常是**微秒到毫秒级**的。电磁暂态过程和机电暂态过程的频率范围如下：

![暂态过程时间尺度 =x190](./time-scale-of-transient-processes.png)

#### 电力系统暂态过程分析方法
电力系统时间尺度跨度大，传统解析法难以评估系统的稳定性和安全性，需要采用时域仿真方法对系统的运行状态进行分析。电力系统的各元件的动态都可以用微分方程表示，系统可以建模一个为微分方程组。电力系统时域仿真就是为系统的微分方程组提供在一些离散时间点的解。电力系统时域仿真方法可以分为电磁暂态仿真和机电暂态仿真。  

#### 电磁暂态仿真和机电暂态仿真对比
电磁暂态仿真中，元件都建模为微分方程，系统模型是微分方程组：  

$$
\frac{\mathrm d \boldsymbol{x}}{dt}=f(\boldsymbol{x})
$$  

机电暂态仿真中，电机等动态元件建模为微分方程，网络建模为代数方程，系统模型是微分-代数方程组：

$$
\left\{\begin{aligned} & \frac{\mathrm{d} \boldsymbol{x}}{\mathrm{d} t}=f(\boldsymbol{x}, \boldsymbol{y}) \\ &(\boldsymbol{x}, \boldsymbol{y})=0 \end{aligned}\right.
$$  

电磁暂态仿真和机电暂态仿真的对比如下表所示：

<center> 

| 对比项 | 机电暂态仿真 | 电磁暂态仿真 |
| :--- | :--- | :--- | 
| 信号 |  相量 | 瞬时量 | 
| 频率 | 低频(基频) | 高频 | 
| 网络方程 | 代数方程（潮流约束） | 微分方程 | 
| 仿真步长 | 时间步长大(典型值 10ms) | 时间步长小(us 级别) | 
| 计算速度 | 快 | 慢 | 
| 准确性 | 低 | 高 |  

</center>

从表格可以看出，只有使用电磁暂态仿真才能准确刻画现代电力电子化电力系统的暂态过程。

### 电磁暂态仿真原理
#### 电磁暂态仿真方法分类
电磁暂态仿真的方法大致可以分为两类：状态变量分析法和节点分析法。

**状态变量分析方法**是利用系统状态变量的数值积分来得到状态变量的值。这种方法中确定状态变量的独立性困难，尤其是系统较大的时候尤其困难。另外，方程的维度高，求解效率低。再次，状态变量分析方法的程序复杂冗长，不易维护。  

**节点分析法**将待求解的微分方程组转换为差分方程组求解。将各个支路上的元件用一个诺顿等效支路来代替。这一操作是针对单个元件进行的，而不像状态变量分析法那样将整个微分方程组作为一个整体进行差分化。**这种方法简单、高效，在商用电磁暂态仿真软件中广泛使用**。下面对基于节点分析的电磁暂态仿真进行介绍，其采用的离散化方法为梯形法。因为**梯形法简单又数值稳定性好，在节点分析法中被广泛用于差分化（离散化）微分方程**。  

 基于节点分析的电磁暂态仿真流程分类：

1. 利用梯形法对电力系统的元件转化为诺顿等效电路。以电感为例，其离散化的过程如下所示。  
   电感微分方程为：  
   $$
   v_{\mathrm{L}}=v_{k}-v_{m}=L \frac{\mathrm d i_{km}}{\mathrm d t}
   $$  
   离散化后得差分方程：
   $$
   i_{km(t)} =i_{k m(t-\Delta t)} + \frac{\Delta t}{2 L}\left(\left(v_{k}-v_{m}\right){(t)}+\left(v_{k}-v_{m}\right){(t-\Delta t)}\right)
   $$  
   整理后的差分方程为：  
   $$
   i_{k n}(t)=I_{\mathrm{hL}}(t-\Delta t)+G_{\mathrm{L}}\left(v_{k}(t)-v_{m}(t)\right)
   $$  
   $$
   G_{\mathrm{L}}=\frac{\Delta t}{2 L}
   $$  
   $$
   I_{\mathrm{hL}}(t-\Delta t)=i_{k m}(t-\Delta t)+G_{\mathrm{L}}\left(v_{k}(t-\Delta t)-v_{m}(t-\Delta t)\right)
   $$  
   根据差分方程，可以得到诺顿等效电路：  

![电感诺顿等效电路 =x120](./norton-equivalent-circuit-of-inductor.png)  

2. 将各个元件支路表示为诺顿等效电路后，可建立网络的节点方程。
3. 对网络方程循环循环求解，就可以获得系统的仿真结果，循环的时间从 0 开始到给定的终止时间结束。**网络方程的求解流程**如下：  
   -  在循环开始前，形成节点矩阵 $\boldsymbol G$；
   -  循环开始时，各历史电流 $\boldsymbol I_{\mathrm h}$ 为 0；
   -  在每一次循环中，先计算历史电流以及电流源电流；
   -  然后用网络方程求得节点电压向量；
   -  根据各个支路的电流方程求出这一时刻各支路的电流供下一次循环使用；
   -  当仿真时间到达设定的时间时，仿真结束。
   
![电磁暂态仿真流程图 =x500](./electromagnetic-transient-simulation-flowchart.png) 

#### 电磁暂态仿真建模示例
下面以一个含电压源的 RLC 网络为例，介绍电磁暂态仿真建模求解过程，其示意图如下所示：  

![RLC电路 =x160](./rlc-circuit.jpg) 

对其进行离散化可得：  

![RLC网络诺顿等效电路 =x200](./norton-equivalent-circuit-of-rlc-network.png)

根据离散化后的电路，可以建立网络的节点电压方程  
$$
G U(t)=I_{\mathrm{h}}+i(t)
$$  
其展开形式是：  
$$
\left[\begin{array}{ccc}
\frac{1}{R_{1}}+\frac{\Delta t}{2 L_{1}} & -\frac{\Delta t}{2 L_{1}} & 0 \\
-\frac{\Delta t}{2 L_{1}} & \frac{\Delta t}{2 L_{1}}+\frac{1}{R_{2}}+\frac{2 C_{1}}{\Delta t} & -\frac{1}{R_{2}} \\
0 & -\frac{1}{R_{2}} & \frac{1}{R_{2}}+\frac{\Delta t}{2 L_{2}}
\end{array}\right]\left[\begin{array}{c}
v_{1} \\
v_{2} \\
v_{3}
\end{array}\right]=\left(\begin{array}{c}
\frac{V_{m} \sin (\omega t)}{R_{1}}-I_{h_{L_{1}}} \\
I_{h_{2}}-I_{h_{C_2}} \\
-I_{h_{L_{2}}}
\end{array}\right)
$$
对上述网络方程进行过求解，即可得到系统的电磁暂态仿真结果。   

## 案例
### 高压直流输电系统
本案例介绍如何使用模板算例中的高压直流输电系统进行电磁暂态仿真。
- 首先在 CloudPSS SimStudio 工作台，点击新建电力系统仿真项目。  

![新建电力系统仿真项目 =x190](./new-project.png)

- 点击左上角的新建图标，选中高压直流输电系统，再选择单极12脉动，最后点击新建。

![新建单极12脉动算例 =x400](./lcc.png)

- 点击**运行**标签页，选中方案中模板算例中预先设置好的**参数方案**和**电磁暂态仿真方案**，然后点击运行按钮。

![运行设置 =x550](./run-settings.png)

- 在结果页面可显示出电磁暂态的仿真结果，部分仿真结果图如下所示：

![电磁暂态仿真结果 =x300](./simulation-result.png)

## 常见问题 Q&A