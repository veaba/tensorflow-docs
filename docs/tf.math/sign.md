Returns an element-wise indication of the sign of a number.

**别名** : [ `tf.compat.v1.math.sign` ](/api_docs/python/tf/math/sign), [ `tf.compat.v1.sign` ](/api_docs/python/tf/math/sign), [ `tf.compat.v2.math.sign` ](/api_docs/python/tf/math/sign), [ `tf.compat.v2.sign` ](/api_docs/python/tf/math/sign), [ `tf.sign` ](/api_docs/python/tf/math/sign)

```
 tf.math.sign(
    x,
    name=None
)
 
```

### 在教程中使用：
- [Adversarial example using FGSM](https://tensorflow.google.cn/tutorials/generative/adversarial_fgsm)
 `y = sign(x) = -1`  if  `x < 0` ; 0 if  `x == 0` ; 1 if  `x > 0` .

For complex numbers,  `y = sign(x) = x / |x|`  if  `x != 0` , otherwise  `y = 0` .

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

If  `x`  is a  `SparseTensor` , returns `SparseTensor(x.indices, tf.math.sign(x.values, ...), x.dense_shape)` 

