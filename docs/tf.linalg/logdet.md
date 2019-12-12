计算厄米正定矩阵行列式的对数。

**别名** : [ `tf.compat.v1.linalg.logdet` ](/api_docs/python/tf/linalg/logdet), [ `tf.compat.v2.linalg.logdet` ](/api_docs/python/tf/linalg/logdet)

```
 tf.linalg.logdet(    matrix,    name=None) 
```

```
 # Compute the determinant of a matrix while reducing the chance of over- orunderflow:A = ... # shape 10 x 10det = tf.exp(tf.linalg.logdet(A))  # scalar 
```

#### 参数：
- **`matrix`** :  A  `Tensor` . Must be  `float16` ,  `float32` ,  `float64` ,  `complex64` ,or  `complex128`  with shape  `[..., M, M]` .
- **`name`** :  A name to give this  `Op` .  Defaults to  `logdet` .


#### 返回：
The natural log of the determinant of  `matrix` .

#### numpy兼容性
Equivalent to numpy.linalg.slogdet, although no sign is returned since onlyhermitian positive definite matrices are supported.

