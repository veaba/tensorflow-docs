

## Class  `ConditionalAccumulator` 
用于聚合渐变的条件累加器。

Inherits From: [ `ConditionalAccumulatorBase` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConditionalAccumulatorBase)

Up-to-date gradients (i.e., time step at which gradient was computed isequal to the accumulator's time step) are added to the accumulator.

Extraction of the average gradient is blocked until the required number ofgradients has been accumulated.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1263-L1296)

```
 __init__(
    dtype,
    shape=None,
    shared_name=None,
    name='conditional_accumulator',
    reduction_type='MEAN'
)
 
```

创建新的条件累加器。

#### 参数：
- **`dtype`** : Datatype of the accumulated gradients.
- **`shape`** : Shape of the accumulated gradients.
- **`shared_name`** : Optional. If non-empty, this accumulator will be shared underthe given name across multiple sessions.
- **`name`** : Optional name for the accumulator.
- **`reduction_type`** : Reduction type to use when taking the gradient.


## 属性


###  `accumulator_ref` 
基础累加器引用。

###  `dtype` 
此累加器累积的渐变的数据类型。

###  `name` 
基础累加器的名称。

## 方法


###  `apply_grad` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1298-L1326)

```
 apply_grad(
    grad,
    local_step=0,
    name=None
)
 
```

尝试对累加器应用渐变。

The attempt is silently dropped if the gradient is stale, i.e., local_stepis less than the accumulator's global time step.

#### 参数：
- **`grad`** : The gradient tensor to be applied.
- **`local_step`** : Time step at which the gradient was computed.
- **`name`** : Optional name for the operation.


#### 返回：
（有条件地）对累加器应用梯度的操作。

#### 加薪：
- **`ValueError`** : If grad is of the wrong shape


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

###  `take_grad` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1328-L1357)

```
 take_grad(
    num_required,
    name=None
)
 
```

尝试从累加器中提取平均梯度。

The operation blocks until sufficient number of gradients have beensuccessfully applied to the accumulator.

Once successful, the following actions are also triggered:

- Counter of accumulated gradients is reset to 0.
- Aggregated gradient is reset to 0 tensor.
- Accumulator's internal time step is incremented by 1.


#### 参数：
- **`num_required`** : Number of gradients that needs to have been aggregated
- **`name`** : Optional name for the operation


#### 返回：
保持平均梯度值的张量。

#### 加薪：
- **`InvalidArgumentError`** : If num_required < 1
