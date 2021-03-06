Computes the Gauss error function of  `x`  element-wise.

**别名** : [ `tf.compat.v1.erf` ](/api_docs/python/tf/math/erf), [ `tf.compat.v1.math.erf` ](/api_docs/python/tf/math/erf), [ `tf.compat.v2.math.erf` ](/api_docs/python/tf/math/erf)

```
 tf.math.erf(
    x,
    name=None
)
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.erf(x.values, ...), x.dense_shape)` 

