Computes cos of x element-wise.

**别名** : [ `tf.compat.v1.cos` ](/api_docs/python/tf/math/cos), [ `tf.compat.v1.math.cos` ](/api_docs/python/tf/math/cos), [ `tf.compat.v2.cos` ](/api_docs/python/tf/math/cos), [ `tf.compat.v2.math.cos` ](/api_docs/python/tf/math/cos), [ `tf.cos` ](/api_docs/python/tf/math/cos)

```
 tf.math.cos(
    x,
    name=None
)
 
```

Given an input tensor, this function computes cosine of every  element in the tensor. Input range is  `(-inf, inf)`  and  output range is  `[-1,1]` . If input lies outside the boundary,  `nan`   is returned.

```
 x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10000, float("inf")])
tf.math.cos(x) ==> [nan -0.91113025 0.87758255 0.5403023 0.36235774 0.48718765 -0.95215535 nan]
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

