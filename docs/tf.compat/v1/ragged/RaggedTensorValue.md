

## Class  `RaggedTensorValue` 
Represents the value of a  `RaggedTensor` .


**Warning:**   `RaggedTensorValue`  should only be used in graph mode; ineager mode, the [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) class contains its value directly.
See [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor) for a description of ragged tensors.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor_value.py#L36-L53)

```
 __init__(
    values,
    row_splits
)
 
```

Creates a  `RaggedTensorValue` .

#### 参数：
- **`values`** : A numpy array of any type and shape; or a RaggedTensorValue.
- **`row_splits`** : A 1-D int32 or int64 numpy array.


## 属性


###  `dtype` 
此张量中值的numpy类型。

###  `flat_values` 
The innermost  `values`  array for this ragged tensor value.

###  `nested_row_splits` 
The row_splits for all ragged dimensions in this ragged tensor value.

###  `ragged_rank` 
此不规则张量值中不规则维度的数目。

###  `row_splits` 
不规则张量值的分裂指数。

###  `shape` 
表示此RaggedSensorValue形状的元组。

###  `values` 
此张量中所有行的连接值。

## 方法


###  `to_list` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor_value.py#L101-L110)

```
 to_list()
 
```

将这个不规则的张量值作为嵌套的python列表返回。

