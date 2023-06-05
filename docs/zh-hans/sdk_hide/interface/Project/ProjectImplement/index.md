---
title: ProjectImplement类
type: examples
author: pcp
category: 101
order: 102
---

## 1. ProjectImplement
## ==class cloudpss.project.implements.ProjectImplement==
:::info
`实现类`
:::
### getDiagram() 
:::info
`获取`拓扑实现，不存在返回空
:::
**返回:**  示意图实例
```python
implement.getDiagram()
```
### toJSON()
:::info
类对象`序列化`为 dict :return: dict
:::
```python
implement.toJSON()
```
## 1.1 diagram
## ==class cloudpss.project.implements.diagram.DiagramImplement==
:::info
拓扑`实现`
:::
### getAllComponents()

:::info
`获取`所有元件
:::
**返回:** dict<Component>
```python
diagram.getAllComponents()
```
### toJSON()
:::info
类对象`序列化`为dict :return: dict
:::
```python
diagram.toJSON()
```

## 1.2 component
## ==class cloudpss.project.implements.component.Component==
:::info
`元件类` 
:::
**实例变量说明：**

**definition:** 元件定义， 连接线没有definition

**args:** 元件参数数据，连接线没有参数数据

**pins:** 元件引脚数据，连接线没有引脚数据

**shapes diagram-component:** 表示元件

**diagram-edge：** 表示连接线

### toJSON()
:::info
类对象`序列化`为dict:return:dict
:::
```python
comp.toJSON()
```