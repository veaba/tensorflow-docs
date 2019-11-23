

## Class  `OptionalSpec` 

Represents an optional potentially containing a structured value.

Inherits From: [ `TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)


### Aliases:
- Class [ `tf.compat.v1.OptionalSpec` ](/api_docs/python/tf/OptionalSpec)
- Class [ `tf.compat.v1.data.experimental.OptionalStructure` ](/api_docs/python/tf/OptionalSpec)
- Class [ `tf.compat.v2.OptionalSpec` ](/api_docs/python/tf/OptionalSpec)


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L169-L170)


```
__init__(value_structure)

```


Initialize self.  See help(type(self)) for accurate signature.


## Properties


###  `value_type` 

The Python type for values that are compatible with this TypeSpec.


## Methods


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


#### Args:
- **`other`** : A  `TypeSpec` .


#### Raises:
- **`ValueError`** : If there is no TypeSpec that is compatible with both  `self` and  `other` .
