Computes softplus:  `log(exp(features) + 1)` .

**别名** : [ `tf.compat.v1.math.softplus` ](/api_docs/python/tf/math/softplus), [ `tf.compat.v1.nn.softplus` ](/api_docs/python/tf/math/softplus), [ `tf.compat.v2.math.softplus` ](/api_docs/python/tf/math/softplus), [ `tf.compat.v2.nn.softplus` ](/api_docs/python/tf/math/softplus), [ `tf.nn.softplus` ](/api_docs/python/tf/math/softplus)

```
 tf.math.softplus(
    features,
    name=None
)
 
```

#### 参数：
- **`features`** : A  `Tensor` . Must be one of the following types:  `half` ,  `bfloat16` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `features` .

