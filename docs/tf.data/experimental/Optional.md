

## Class  `Optional` 
Wraps a value that may/may not be present at runtime.

**Aliases** : [ `tf.compat.v1.data.experimental.Optional` ](/api_docs/python/tf/data/experimental/Optional), [ `tf.compat.v2.data.experimental.Optional` ](/api_docs/python/tf/data/experimental/Optional)

An  `Optional`  can represent the result of an operation that may fail as avalue, rather than raising an exception and halting execution. For example,[ `tf.data.experimental.get_next_as_optional` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/get_next_as_optional) returns an  `Optional`  that eithercontains the next value from a [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) if one exists, ora "none" value that indicates the end of the sequence has been reached.

 `Optional`  can only be used by values that are convertible to  `Tensor`  or `CompositeTensor` .

## Properties


###  `value_structure` 
The structure of the components of this optional.

#### Returns:
A  `Structure`  object representing the structure of the components of this  optional.

## Methods


###  `from_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L87-L105)

```
 @staticmethod
from_value(value)
 
```

Returns an  `Optional`  that wraps the given value.

#### Args:
- **`value`** : A value to wrap. The value must be convertible to  `Tensor`  or `CompositeTensor` .


#### Returns:
An  `Optional`  that wraps  `value` .

###  `get_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L61-L75)

```
 get_value(name=None)
 
```

Returns the value wrapped by this optional.

If this optional does not have a value (i.e.  `self.has_value()`  evaluatesto  `False` ), this operation will raise [ `tf.errors.InvalidArgumentError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError)at runtime.

#### Args:
- **`name`** : (Optional.) A name for the created operation.


#### Returns:
The wrapped value.

###  `has_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L49-L59)

```
 has_value(name=None)
 
```

Returns a tensor that evaluates to  `True`  if this optional has a value.

#### Args:
- **`name`** : (Optional.) A name for the created operation.


#### Returns:
A scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) of type [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool).

###  `none_from_structure` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L107-L121)

```
 @staticmethod
none_from_structure(value_structure)
 
```

Returns an  `Optional`  that has no value.

NOTE: This method takes an argument that defines the structure of the valuethat would be contained in the returned  `Optional`  if it had a value.

#### Args:
- **`value_structure`** : A  `Structure`  object representing the structure of thecomponents of this optional.


#### Returns:
An  `Optional`  that has no value.

