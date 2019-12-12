

## Class  `TensorArraySpec` 
Type specification for a [ `tf.TensorArray` ](https://tensorflow.google.cn/api_docs/python/tf/TensorArray).

Inherits From: [ `TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)

**别名** : [ `tf.compat.v1.TensorArraySpec` ](/api_docs/python/tf/TensorArraySpec), [ `tf.compat.v2.TensorArraySpec` ](/api_docs/python/tf/TensorArraySpec)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/tensor_array_ops.py#L1250-L1263)

```
 __init__(
    element_shape=None,
    dtype=tf.dtypes.float32,
    dynamic_size=False,
    infer_shape=True
)
 
```

Constructs a type specification for a [ `tf.TensorArray` ](https://tensorflow.google.cn/api_docs/python/tf/TensorArray).

#### 参数：
- **`element_shape`** : The shape of each element in the  `TensorArray` .
- **`dtype`** : Data type of the  `TensorArray` .
- **`dynamic_size`** : Whether the  `TensorArray`  can grow past its initial size.
- **`infer_shape`** : Whether shape inference is enabled.


## 属性


###  `value_type` 


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/tensor_array_ops.py#L1320-L1330)

```
 @staticmethod
from_value(value)
 
```

###  `is_compatible_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/tensor_array_ops.py#L1265-L1274)

```
 is_compatible_with(other)
 
```

Returns true if  `spec_or_value`  is compatible with this TypeSpec.

###  `most_specific_compatible_type` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/tensor_array_ops.py#L1276-L1284)

```
 most_specific_compatible_type(other)
 
```

Returns the most specific TypeSpec compatible with  `self`  and  `other` .

#### 参数：
- **`other`** : A  `TypeSpec` .


#### 加薪：
- **`ValueError`** : If there is no TypeSpec that is compatible with both  `self` and  `other` .
