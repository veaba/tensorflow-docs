

## Class  `SparseTensorSpec` 
Type specification for a [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).

**别名** : [ `tf.compat.v1.SparseTensorSpec` ](/api_docs/python/tf/SparseTensorSpec), [ `tf.compat.v2.SparseTensorSpec` ](/api_docs/python/tf/SparseTensorSpec)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L268-L277)

```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32
)
 
```

Constructs a type specification for a [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).

#### 参数：
- **`shape`** : The dense shape of the  `SparseTensor` , or  `None`  to allowany dense shape.
- **`dtype`** : [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) of values in the  `SparseTensor` .


## 属性


###  `dtype` 
The [ `tf.dtypes.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) specified by this type for the SparseTensor.

###  `shape` 
The [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) specified by this type for the SparseTensor.

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L366-L376)

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
