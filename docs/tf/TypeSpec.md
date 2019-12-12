

## Class  `TypeSpec` 
Specifies a TensorFlow value type.

**Aliases** : [ `tf.compat.v1.TypeSpec` ](/api_docs/python/tf/TypeSpec), [ `tf.compat.v1.data.experimental.Structure` ](/api_docs/python/tf/TypeSpec), [ `tf.compat.v2.TypeSpec` ](/api_docs/python/tf/TypeSpec)

A [ `tf.TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec) provides metadata describing an object accepted or returnedby TensorFlow APIs.  Concrete subclasses, such as [ `tf.TensorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TensorSpec) and[ `tf.RaggedTensorSpec` ](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensorSpec), are used to describe different value types.

For example, [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)'s  `input_signature`  argument accepts a list(or nested structure) of  `TypeSpec` s.

Creating new subclasses of TypeSpec (outside of TensorFlow core) is notcurrently supported.  In particular, we may make breaking changes to theprivate methods and properties defined by this base class.

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
