---
title: CloudPSS Signal Monitor
description: CloudPSS Signal Monitor 文档
sidebar_position: 20
---

本文档介绍实时数据查看器 CloudPSS Signal Monitor 的功能，并通过一个案例介绍它的使用方法。本工具需配合 CloudPSS-RT 实时仿真器使用，用于在实时仿真过程中监控数据和下发指令。

## 功能定义
本工具提供实时仿真的数据观测、数据录波和数据下发功能。

## 功能说明
### 主界面
实时数据查看器的主界面如图所示，可分为三大功能区，分别是**仿真控制**、**数据显示**和**数据下发**。  

其中，**数据显示**功能区又可以分为**实时数据显示**页面和**录波数据显示**页面。在**实时数据显示**页面，可以通过切换**数据显示**和**波形显示**两个子页面，查看数据的实时数值或动态波形。  

![实时数据查看器主界面](./0.png "实时数据查看器主界面")   

### 仿真控制
在实时仿真开始运行后，通过输入远程地址，连接指定的 CloudPSS-RT 服务器。点击**开始数据接收**，本工具会自动加载指定服务器上运行的实时仿真任务，并识别和列出任务模型中的所有**虚拟输出端口**和**虚拟输入端口**信号。

![仿真控制](./1-1.png "仿真控制")   

**虚拟输出端口**信号会在**数据显示**功能区中显示，**虚拟输入端口**信号会在**数据下发**功能区中显示，它们的定义以及添加方法将在下文中的**软件接口**中介绍。

### 实时数据显示
**数据显示**功能区包含**实时数据显示**页面和**录波数据显示**页面。

点击**开始数据接收**并成功连接到正在运行的实时仿真任务后，**实时数据显示**页面会显示任务模型中的所有**虚拟输出端口**信号。具体有两种显示方式：在**数值显示**子页面，显示数据的实时数值；在**波形显示**子页面，显示数据的动态波形，如下图所示。

![数值显示](./1-2.png "数据的实时数值显示")   

![波形显示](./1-3.png "数据的动态数值显示")   

**波形显示**的窗口长度固定为 1s，即在一个窗口内显示该数据 1s 内的波形。当鼠标悬停至波形上时，会显示数据通道的名称。

### 录波数据显示
切换到**录波数据显示**页面，可以对所有**虚拟输出端口**和**虚拟输入端口**的信号进行录波。

点击**开始录波**，会同时对所有通道进行录波。点击**停止录波**后，会自动生成录波文件。

选择录波文件，并勾选**通道选择栏**中相应通道的名称，可以在右侧查看录波波形。

![录波数据显示](./1-4.png "录波数据显示")   

在录波波形窗口的右上角，有一些功能菜单，可以放大、缩小波形或重置坐标轴，也可以使用鼠标框选放大波形，便于查看细节。

![查看录波波形细节](./1-5.png "查看录波波形细节")   

### 录波数据保存
在**录波数据显示**页面，选中录波文件后，可以点击右侧的**下载**按钮将录波文件保存到本地。下载的录波文件中包含所有通道的录波数据。

目前仅支持将录波文件保存为 CSV 格式。

![录波数据保存](./1-6.png "录波数据保存")   


### 数据下发
在**数据下发**功能区，会列出任务模型中的所有**虚拟输入端口**信号，并显示它们的当前值。

修改相应通道的值，并点击**确认下发**将数据指令下发到任务模型中。  

![数据下发](./1-7.png "数据下发")   

在数据录波的过程中，也可以进行数据下发。

### 软件接口  
本工具中，**数据显示**和**数据下发**功能区中列出的所有通道都与任务模型中的**虚拟输出端口**和**虚拟输入端口**一一对应。  

使用本工具观测实时仿真数据时，需要先在模型中添加端口元件。端口元件可在**实时仿真工具** 模型库中找到。

- 虚拟输出端口  

    ![虚拟输出端口](./2.png "虚拟输出端口")   

    **虚拟输出端口**可以将任务模型中的数据发送至 Signal Monitor 观测，需要设置的参数有：  

    - Port Name：虚拟输出端口的名称，也是在 Signal Monitor 中显示的名称，不可重复。  

    - Chart or Table：选择数据类型是曲线或者表格。  
    - Display Number：数据在 Signal Monitor 中显示的序号。  


- 虚拟输入端口

    ![虚拟输入端口](./1.png "虚拟输入端口")   

    **虚拟输入端口**可以将 Signal Monitor 中设置的参数数据下发到任务模型中，可用于在线修改模型中的参数或改变模型中一些元件的状态，如脉冲使能、控制切换、故障触发等。需要设置的参数有：  

    - Port Name：虚拟输入端口的名称，也是在 Signal Monitor 中显示的名称，不可重复。  

    - Initial Input Value：虚拟输入端口的初始值。  
    - Display Number：数据在 Signal Monitor 中显示的序号。  

在任务模型中添加端口元件如下图所示。需要注意的是，**虚拟输出端口**目前只支持 1 维信号。

![虚拟输入和输出端口的使用](./3.png "虚拟输入和输出端口的使用")   

## 案例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="case1" label="使用 Signal Monitor 触发一个故障并观测实时仿真数据">
- 构建一个故障测试模型
  
    在工作台新建打开一个 **10 机 39 节点标准测试系统**项目模板，在其中一个母线上添加一个**三相断路器**并接地。用三相断路器模拟母线的三相接地故障：当断路器闭合时，母线短路接地。

    ![构建故障测试模型](./2-3.png "构建故障测试模型")  
    
- 在任务模型中添加虚拟输出端口和虚拟输入端口
    
    点击模型库底部的**添加更多**，订阅**实时仿真工具**模型库。

    ![订阅实时仿真工具模型库](./2-4.png "订阅实时仿真工具模型库")  

    从实时仿真工具模型库中，添加**虚拟输出端口**元件和**虚拟输入端口**元件至图纸上。将母线电压的有效值量测填入**虚拟输出端口**的输入引脚，将三相断路器的开关控制信号填入**虚拟输入端口**的输出引脚，如下图所示。

    ![添加虚拟输出端口 =x400](./2-5.png "添加虚拟输出端口")  

    ![添加虚拟输入端口 =x390](./2-6.png "添加虚拟输入端口")  


- 实时仿真方案设置  
    
    在**运行**标签页，添加一个**电磁暂态仿真**计算方案，并设置**仿真类型**为**实时仿真**。  

    设置实时仿真的开始时间、结束时间和积分步长。**开始时间**默认为 `0`，**结束时间**可以设置为一个较大的值。  

    设置实时仿真的模式。当与外部设备（如 Signal Hub）通信时，模式选择为**从模式**。当仅用于观测数据或作为主机时，模式选择为**主模式**。  

    ![实时仿真方案设置](./2-7.png "实时仿真方案设置")   

- 点击启动任务运行仿真
   
   仿真启动成功后会出现 “start success!” 报文。

    ![启动任务运行仿真](./2-2.png "启动任务运行仿真")   
    
    实时仿真中，不会显示**输出通道**的波形，仅能通过**虚拟输出端口**和 Signal Monitor 观测数据结果。

- 启动 Signal Monitor
    
    输入实时仿真器的 IP 地址。  

    ![运行 Signal Monitor 并输入 IP 地址](./2-8.png "运行 Signal Monitor 并输入 IP 地址")   

- 点击开始接收数据
    
    在**数据显示**功能区可以查看数据的实时数值和动态波形。

    ![实时仿真数据数值显示](./2-9.png "实时仿真数据数值显示")   

    ![实时仿真数据波形显示](./2-10.png "实时仿真数据波形显示")   

- 录波与数据下发
  
    在**数据显示**功能区的**录波数据显示**页面，点击开始录波。

    开始录波后，在**数据下发**功能区修改 In1 的值，闭合三相断路器。并点击**确认下发**触发故障。

    ![数据录波](./2-11.png "数据录波")   

    点击**停止录波**结束录波并生成录波文件。选择录波文件，勾选 In1 和 Out1 通道观测录波波形。

    ![观测录波数据](./2-12.png "观测录波数据")   

</TabItem>
</Tabs>

## 常见问题
点击开始数据接收后，没有数据响应？
:   请先确认以下两点：  
    1. 远程地址是否输入正确。     
    2. 实时仿真任务是否运行成功。

    若两次仿真时间间隔太短，也有可能导致任务数据读取失败。点击 Signal Monitor 顶部菜单栏 View -> Reload 重置 Signal Monitor，再点击开始数据接收。

点击下载录波数据后，没有响应？
:   录波功能是对所有通道数据进行录波，若通道数量较多或录波时间较长，录波文件的数据量将会很大，需要更多时间响应。可尝试减少录波时间。

能否设置波形显示窗口长度或波形刷新频率？
:   不能。波形显示的窗口长度固定为 1s，暂不支持波形刷新频率的设置。