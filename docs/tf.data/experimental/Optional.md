

## Class  `Optional` 
包装运行时可能/可能不存在的值。

**别名** : [ `tf.compat.v1.data.experimental.Optional` ](/api_docs/python/tf/data/experimental/Optional), [ `tf.compat.v2.data.experimental.Optional` ](/api_docs/python/tf/data/experimental/Optional)

An  `Optional`  can represent the result of an operation that may fail as avalue, rather than raising an exception and halting execution. For example,[ `tf.data.experimental.get_next_as_optional` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/get_next_as_optional) returns an  `Optional`  that eithercontains the next value from a [ `tf.compat.v1.data.Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator) if one exists, ora "none" value that indicates the end of the sequence has been reached.

 `Optional`  can only be used by values that are convertible to  `Tensor`  or `CompositeTensor` .

## 属性


###  `value_structure` 
此可选组件的结构。

#### 返回：
A  `Structure`  object representing the structure of the components of this  optional.

## 方法


###  `from_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L87-L105)

```
 @staticmethod
from_value(value)
 
```

Returns an  `Optional`  that wraps the given value.

#### 参数：
- **`value`** : A value to wrap. The value must be convertible to  `Tensor`  or `CompositeTensor` .


#### 返回：
An  `Optional`  that wraps  `value` .

###  `get_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L61-L75)

```
 get_value(name=None)
 
```

返回此可选值包装的值。

If this optional does not have a value (i.e.  `self.has_value()`  evaluatesto  `False` ), this operation will raise [ `tf.errors.InvalidArgumentError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError)at runtime.

#### 参数：
- **`name`** : (Optional.) A name for the created operation.


#### 返回：
包装的价值。

###  `has_value` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L49-L59)

```
 has_value(name=None)
 
```

Returns a tensor that evaluates to  `True`  if this optional has a value.

#### 参数：
- **`name`** : (Optional.) A name for the created operation.


#### 返回：
A scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) of type [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool).

###  `none_from_structure` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/optional_ops.py#L107-L121)

```
 @staticmethod
none_from_structure(value_structure)
 
```

Returns an  `Optional`  that has no value.

注意：This method takes an argument that defines the structure of the valuethat would be contained in the returned  `Optional`  if it had a value.

#### 参数：
- **`value_structure`** : A  `Structure`  object representing the structure of thecomponents of this optional.


#### 返回：
An  `Optional`  that has no value.

