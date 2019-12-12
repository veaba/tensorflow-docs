Computes sine of x element-wise.

**别名** : [ `tf.compat.v1.math.sin` ](/api_docs/python/tf/math/sin), [ `tf.compat.v1.sin` ](/api_docs/python/tf/math/sin), [ `tf.compat.v2.math.sin` ](/api_docs/python/tf/math/sin), [ `tf.compat.v2.sin` ](/api_docs/python/tf/math/sin), [ `tf.sin` ](/api_docs/python/tf/math/sin)

```
 tf.math.sin(
    x,
    name=None
)
 
```

Given an input tensor, this function computes sine of every  element in the tensor. Input range is  `(-inf, inf)`  and  output range is  `[-1,1]` .

```
 x = tf.constant([-float("inf"), -9, -0.5, 1, 1.2, 200, 10, float("inf")])
tf.math.sin(x) ==> [nan -0.4121185 -0.47942555 0.84147096 0.9320391 -0.87329733 -0.54402107 nan]
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

