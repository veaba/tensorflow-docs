返回张量的大小。

```
 tf.compat.v1.size(
    input,
    name=None,
    out_type=tf.dtypes.int32
)
 
```

Returns a 0-D  `Tensor`  representing the number of elements in  `input` of type  `out_type` . Defaults to tf.int32.

#### 例如：


```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.size(t)  # 12
 
```

#### 参数：
- **`input`** : A  `Tensor`  or  `SparseTensor` .
- **`name`** : A name for the operation (optional).
- **`out_type`** : (Optional) The specified non-quantized numeric output type of theoperation. Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).


#### 返回：
A  `Tensor`  of type  `out_type` . Defaults to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).

#### numpy兼容性
Equivalent to np.size()

