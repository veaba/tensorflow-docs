

Computes numerical negative value element-wise.

**别名** : [ `tf.compat.v1.math.negative` ](/api_docs/python/tf/math/negative), [ `tf.compat.v1.negative` ](/api_docs/python/tf/math/negative), [ `tf.compat.v2.math.negative` ](/api_docs/python/tf/math/negative), [ `tf.compat.v2.negative` ](/api_docs/python/tf/math/negative), [ `tf.negative` ](/api_docs/python/tf/math/negative)

```
 tf.math.negative(
    x,
    name=None
)
 
```

I.e., \(y = -x\).

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.negative(x.values, ...), x.dense_shape)` 

