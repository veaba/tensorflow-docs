

## Class  `ConditionalAccumulatorBase` 
用于聚合渐变的条件累加器。

Up-to-date gradients (i.e., time step at which gradient was computed isequal to the accumulator's time step) are added to the accumulator.

Extraction of the average gradient is blocked until the required number ofgradients has been accumulated.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1173-L1191)

```
 __init__(
    dtype,
    shape,
    accumulator_ref
)
 
```

创建新的条件累加器。

#### 参数：
- **`dtype`** : Datatype of the accumulated gradients.
- **`shape`** : Shape of the accumulated gradients.
- **`accumulator_ref`** : A handle to the conditional accumulator, created by sub-classes


## 属性


###  `accumulator_ref` 
基础累加器引用。

###  `dtype` 
此累加器累积的渐变的数据类型。

###  `name` 
基础累加器的名称。

## 方法


###  `num_accumulated` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1208-L1225)

```
 num_accumulated(name=None)
 
```

当前已在累加器中聚合的渐变数。

#### 参数：
- **`name`** : Optional name for the operation.


#### 返回：
累加器中当前累积的渐变数。

###  `set_global_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1227-L1249)

```
 set_global_step(
    new_global_step,
    name=None
)
 
```

设置累加器的全局时间步长。

The operation logs a warning if we attempt to set to a time step that islower than the accumulator's own time step.

#### 参数：
- **`new_global_step`** : Value of new time step. Can be a variable or a constant
- **`name`** : Optional name for the operation.


#### 返回：
设置累加器时间步长的操作。

