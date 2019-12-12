

## Class  `SparseConditionalAccumulator` 
聚集稀疏梯度的条件累加器。

Inherits From: [ `ConditionalAccumulatorBase` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/ConditionalAccumulatorBase)

Sparse gradients are represented by  `IndexedSlices` .

Up-to-date gradients (i.e., time step at which gradient was computed isequal to the accumulator's time step) are added to the accumulator.

Extraction of the average gradient is blocked until the required number ofgradients has been accumulated.

#### 参数：
- **`dtype`** : Datatype of the accumulated gradients.
- **`shape`** : Shape of the accumulated gradients.
- **`shared_name`** : Optional. If non-empty, this accumulator will be shared underthe given name across multiple sessions.
- **`name`** : Optional name for the accumulator.
- **`reduction_type`** : Reduction type to use when taking the gradient.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1382-L1395)

```
 __init__(
    dtype,
    shape=None,
    shared_name=None,
    name='sparse_conditional_accumulator',
    reduction_type='MEAN'
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


###  `apply_grad` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1421-L1467)

```
 apply_grad(
    grad_indices,
    grad_values,
    grad_shape=None,
    local_step=0,
    name=None
)
 
```

尝试对累加器应用稀疏渐变。

The attempt is silently dropped if the gradient is stale, i.e.,  `local_step` is less than the accumulator's global time step.

A sparse gradient is represented by its indices, values and possibly emptyor None shape. Indices must be a vector representing the locations ofnon-zero entries in the tensor. Values are the non-zero slices of thegradient, and must have the same first dimension as indices, i.e., the nnzrepresented by indices and values must be consistent. Shape, if not empty orNone, must be consistent with the accumulator's shape (if also provided).

#### 示例：
A tensor [[0, 0], [0, 1], [2, 3]] can be represented  indices: [1,2]  values: [[0,1],[2,3]]  shape: [3, 2]

#### 参数：
- **`grad_indices`** : Indices of the sparse gradient to be applied.
- **`grad_values`** : Values of the sparse gradient to be applied.
- **`grad_shape`** : Shape of the sparse gradient to be applied.
- **`local_step`** : Time step at which the gradient was computed.
- **`name`** : Optional name for the operation.


#### 返回：
（有条件地）对累加器应用梯度的操作。

#### 加薪：
- **`InvalidArgumentError`** : If grad is of the wrong shape


###  `apply_indexed_slices_grad` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1397-L1419)

```
 apply_indexed_slices_grad(
    grad,
    local_step=0,
    name=None
)
 
```

尝试对累加器应用渐变。

The attempt is silently dropped if the gradient is stale, i.e.,  `local_step` is less than the accumulator's global time step.

#### 参数：
- **`grad`** : The gradient  `IndexedSlices`  to be applied.
- **`local_step`** : Time step at which the gradient was computed.
- **`name`** : Optional name for the operation.


#### 返回：
（有条件地）对累加器应用梯度的操作。

#### 加薪：
- **`InvalidArgumentError`** : If grad is of the wrong shape


###  `num_accumulated` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1522-L1535)

```
 num_accumulated(name=None)
 
```

当前已在累加器中聚合的渐变数。

#### 参数：
- **`name`** : Optional name for the operation.


#### 返回：
累加器中当前累积的渐变数。

###  `set_global_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1537-L1553)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1469-L1491)

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
A tuple of indices, values, and shape representing the average gradient.

#### 加薪：
- **`InvalidArgumentError`** : If  `num_required`  < 1


###  `take_indexed_slices_grad` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/data_flow_ops.py#L1493-L1519)

```
 take_indexed_slices_grad(
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
An  `IndexedSlices`  holding the value of the average gradient.

#### 加薪：
- **`InvalidArgumentError`** : If  `num_required`  < 1
