Transposes the last two dimensions of and conjugates tensor  `matrix` .

**别名** : [ `tf.compat.v1.linalg.adjoint` ](/api_docs/python/tf/linalg/adjoint), [ `tf.compat.v2.linalg.adjoint` ](/api_docs/python/tf/linalg/adjoint)

```
 tf.linalg.adjoint(
    matrix,
    name=None
)
 
```

#### 例如：


```
 x = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],
                 [4 + 4j, 5 + 5j, 6 + 6j]])
tf.linalg.adjoint(x)  # [[1 - 1j, 4 - 4j],
                      #  [2 - 2j, 5 - 5j],
                      #  [3 - 3j, 6 - 6j]]
 
```

#### 参数：
- **`matrix`** :  A  `Tensor` . Must be  `float16` ,  `float32` ,  `float64` ,  `complex64` ,or  `complex128`  with shape  `[..., M, M]` .
- **`name`** :  A name to give this  `Op`  (optional).


#### 返回：
The adjoint (a.k.a. Hermitian transpose a.k.a. conjugate transpose) ofmatrix.

