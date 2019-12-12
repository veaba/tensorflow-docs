返回张量的形状。

**别名** : [ `tf.compat.v1.shape_n` ](/api_docs/python/tf/shape_n), [ `tf.compat.v2.shape_n` ](/api_docs/python/tf/shape_n)

```
 tf.shape_n(
    input,
    out_type=tf.dtypes.int32,
    name=None
)
 
```

#### 参数：
- **`input`** : A list of at least 1  `Tensor`  object with the same type.
- **`out_type`** : The specified output type of the operation ( `int32`  or  `int64` ).Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32)(optional).
- **`name`** : A name for the operation (optional).


#### 返回：
A list with the same length as  `input`  of  `Tensor`  objects with  type  `out_type` .

