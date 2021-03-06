返回张量的形状。

```
 tf.compat.v1.shape(
    input,
    name=None,
    out_type=tf.dtypes.int32
)
 
```

This operation returns a 1-D integer tensor representing the shape of  `input` .

#### 例如：


```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.shape(t)  # [2, 2, 3]
 
```

#### 参数：
- **`input`** : A  `Tensor`  or  `SparseTensor` .
- **`name`** : A name for the operation (optional).
- **`out_type`** : (Optional) The specified output type of the operation ( `int32`  or `int64` ). Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).


#### 返回：
A  `Tensor`  of type  `out_type` .

