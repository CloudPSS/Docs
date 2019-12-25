---
title: 延时环节
author: 
author_email:

date: 2018/12/4 10:03:10
updated: 2018/12/4 10:03:10

type: components
category: -3004
order: 200

classname: _newDelay
symbol: newDelay
---
## 基本描述
{% compsymbol newDelay %}

> **该元件实现对输入信号延时设定时间输出**。

## 参数列表
### Configuration
| 参数名 | 单位 | 备注 | 类型 | 描述 |
| :--- | :--- | :--- | :--: | :--- |
| Name |  | 元件名称 | 文本 | 此处输入延时环节的名称（可缺省） |
| Delay Time | s | 延迟时间 | 实数（常量） | 输出信号相比于输入信号的延迟时间 |
| Max Sample Points |  | 最大采样点数 | 整数（常量） | 延迟时间内的最大采样点数 |
| Initial Output Value | | 初始值 | 实数（常量） | 延迟模块的初始输出值 |

## 端口列表

| 端口名 | 数据维数 | 描述 |
| :--- | :--:  | :--- |
| Input | 1×1 |输入端口 |
| Output | 1×1 | 输出端口|

## 使用说明

{% pullquote info %}
**最大采样点数**

如果延迟时间比仿真时间步长大得多，那么队列的大小可能变得过大。为了防止这种情况，采用在指定的时间延迟中，仅对输入值采样N次并放置在队列中。采样点数N越大，信号还原越好，但存储消耗越大，用户需平衡两者的取值。
{% endpullquote %}


## 相关元件

