将序列化的tensorflow.tensor proto proto转换为张量。

**别名** : [ `tf.compat.v1.io.parse_tensor` ](/api_docs/python/tf/io/parse_tensor), [ `tf.compat.v1.parse_tensor` ](/api_docs/python/tf/io/parse_tensor), [ `tf.compat.v2.io.parse_tensor` ](/api_docs/python/tf/io/parse_tensor)

```
 tf.io.parse_tensor(
    serialized,
    out_type,
    name=None
)
 
```

#### 参数：
- **`serialized`** : A  `Tensor`  of type  `string` .A scalar string containing a serialized TensorProto proto.
- **`out_type`** : A [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType).The type of the serialized tensor.  The provided type must match thetype of the serialized tensor and no implicit conversion will take place.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `out_type` .

