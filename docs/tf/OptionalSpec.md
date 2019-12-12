

## Class  `OptionalSpec` 
表示可能包含结构化值的可选值。

Inherits From: [ `TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)

**别名** : [ `tf.compat.v1.OptionalSpec` ](/api_docs/python/tf/OptionalSpec), [ `tf.compat.v1.data.experimental.OptionalStructure` ](/api_docs/python/tf/OptionalSpec), [ `tf.compat.v2.OptionalSpec` ](/api_docs/python/tf/OptionalSpec)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L169-L170)

```
 __init__(value_structure)
 
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L190-L192)

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
