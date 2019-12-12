Computes the trignometric inverse tangent of x element-wise.

**别名** : [ `tf.atan` ](/api_docs/python/tf/math/atan), [ `tf.compat.v1.atan` ](/api_docs/python/tf/math/atan), [ `tf.compat.v1.math.atan` ](/api_docs/python/tf/math/atan), [ `tf.compat.v2.atan` ](/api_docs/python/tf/math/atan), [ `tf.compat.v2.math.atan` ](/api_docs/python/tf/math/atan)

```
 tf.math.atan(
    x,
    name=None
)
 
```

The [ `tf.math.atan` ](https://tensorflow.google.cn/api_docs/python/tf/math/atan) operation returns the inverse of [ `tf.math.tan` ](https://tensorflow.google.cn/api_docs/python/tf/math/tan), such thatif  `y = tf.math.tan(x)`  then,  `x = tf.math.atan(y)` .

**Note** : The output of [ `tf.math.atan` ](https://tensorflow.google.cn/api_docs/python/tf/math/atan) will lie within the invertible range of tan, i.e (-pi/2, pi/2).

#### 例如：


```
 # 注意：[1.047, 0.785] ~= [(pi/3), (pi/4)]
x = tf.constant([1.047, 0.785])
y = tf.math.tan(x) # [1.731261, 0.99920404]

tf.math.atan(y) # [1.047, 0.785] = x
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

