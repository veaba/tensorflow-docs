

## Class  `DatasetSpec` 
Type specification for [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

**别名** : [ `tf.compat.v1.data.DatasetSpec` ](/api_docs/python/tf/data/DatasetSpec), [ `tf.compat.v1.data.experimental.DatasetStructure` ](/api_docs/python/tf/data/DatasetSpec), [ `tf.compat.v2.data.DatasetSpec` ](/api_docs/python/tf/data/DatasetSpec)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2468-L2470)

```
 __init__(
    element_spec,
    dataset_shape=()
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2499-L2501)

```
 @staticmethod
from_value(value)
 
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
