Statically asserts that the given  `Tensor`  is of the specified type.

```
 tf.compat.v1.assert_type(
    tensor,
    tf_type,
    message=None,
    name=None
)
 
```

#### 参数：
- **`tensor`** : A  `Tensor` .
- **`tf_type`** : A tensorflow type ([ `dtypes.float32` ](/api_docs/python/tf/dtypes#float32), [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64), [ `dtypes.bool` ](/api_docs/python/tf/dtypes#bool),etc).
- **`message`** : A string to prefix to the default message.
- **`name`** :  A name to give this  `Op` .  Defaults to "assert_type"


#### 加薪：
- **`TypeError`** : If the tensors data type doesn't match  `tf_type` .


#### 返回：
A  `no_op`  that does nothing.  Type can be determined statically.

