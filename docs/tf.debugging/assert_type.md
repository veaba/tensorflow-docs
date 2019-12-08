Asserts that the given  `Tensor`  is of the specified type.



### Aliases:

- [ `tf.compat.v2.debugging.assert_type` ](/api_docs/python/tf/debugging/assert_type)



```
 tf.debugging.assert_type(
    tensor,
    tf_type,
    message=None,
    name=None
)
 
```

This can always be checked statically, so this method returns nothing.



#### Args:

- **`tensor`** : A  `Tensor` .

- **`tf_type`** : A tensorflow type ([ `dtypes.float32` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes#float32), [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64), [ `dtypes.bool` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes#bool),
etc).

- **`message`** : A string to prefix to the default message.

- **`name`** :  A name for this operation. Defaults to "assert_type"



#### Raises:

- **`TypeError`** : If the tensor's data type doesn't match  `tf_type` .

