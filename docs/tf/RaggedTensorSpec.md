

## Class  `RaggedTensorSpec` 
Type specification for a [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor).

**别名** : [ `tf.compat.v1.RaggedTensorSpec` ](/api_docs/python/tf/RaggedTensorSpec), [ `tf.compat.v2.RaggedTensorSpec` ](/api_docs/python/tf/RaggedTensorSpec)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L1934-L1963)

```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32,
    ragged_rank=None,
    row_splits_dtype=tf.dtypes.int64
)
 
```

Constructs a type specification for a [ `tf.RaggedTensor` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor).

#### 参数：
- **`shape`** : The shape of the RaggedTensor, or  `None`  to allow any shape.  Ifa shape is specified, then all ragged dimensions must have size  `None` .
- **`dtype`** : [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) of values in the RaggedTensor.
- **`ragged_rank`** : Python integer, the ragged rank of the RaggedTensorto be described.  Defaults to  `shape.ndims - 1` .
- **`row_splits_dtype`** :  `dtype`  for the RaggedTensor's  `row_splits`  tensor.One of [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).


## 属性


###  `value_type` 
与此类型规范兼容的值的python类型。

## 方法


###  `__eq__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L262-L265)

```
 __eq__(other)
 
```

Return self==value.

###  `__ne__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L267-L268)

```
 __ne__(other)
 
```

Return self!=value.

###  `from_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor.py#L2062-L2067)

```
 @classmethod
from_value(
    cls,
    value
)
 
```

###  `is_compatible_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L87-L102)

```
 is_compatible_with(spec_or_value)
 
```

Returns true if  `spec_or_value`  is compatible with this TypeSpec.

###  `most_specific_compatible_type` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L104-L126)

```
 most_specific_compatible_type(other)
 
```

Returns the most specific TypeSpec compatible with  `self`  and  `other` .

#### 参数：
- **`other`** : A  `TypeSpec` .


#### 加薪：
- **`ValueError`** : If there is no TypeSpec that is compatible with both  `self` and  `other` .
