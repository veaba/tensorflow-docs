

Computes square root of x element-wise.

**别名** : [ `tf.compat.v1.math.sqrt` ](/api_docs/python/tf/math/sqrt), [ `tf.compat.v1.sqrt` ](/api_docs/python/tf/math/sqrt), [ `tf.compat.v2.math.sqrt` ](/api_docs/python/tf/math/sqrt), [ `tf.compat.v2.sqrt` ](/api_docs/python/tf/math/sqrt), [ `tf.sqrt` ](/api_docs/python/tf/math/sqrt)

```
 tf.math.sqrt(
    x,
    name=None
)
 
```

### 在教程中使用：
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
I.e., y=√x=x1/2.

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.sqrt(x.values, ...), x.dense_shape)` 

