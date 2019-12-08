Transposes last two dimensions of tensor  `a` .



### Aliases:

- [ `tf.compat.v1.linalg.matrix_transpose` ](/api_docs/python/tf/linalg/matrix_transpose)

- [ `tf.compat.v1.linalg.transpose` ](/api_docs/python/tf/linalg/matrix_transpose)

- [ `tf.compat.v1.matrix_transpose` ](/api_docs/python/tf/linalg/matrix_transpose)

- [ `tf.compat.v2.linalg.matrix_transpose` ](/api_docs/python/tf/linalg/matrix_transpose)



```
 tf.linalg.matrix_transpose(
    a,
    name='matrix_transpose',
    conjugate=False
)
 
```



#### For example:


```
 x = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.linalg.matrix_transpose(x)  # [[1, 4],
                               #  [2, 5],
                               #  [3, 6]]

x = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],
                 [4 + 4j, 5 + 5j, 6 + 6j]])
tf.linalg.matrix_transpose(x, conjugate=True)  # [[1 - 1j, 4 - 4j],
                                               #  [2 - 2j, 5 - 5j],
                                               #  [3 - 3j, 6 - 6j]]

# Matrix with two batch dimensions.
# x.shape is [1, 2, 3, 4]
# tf.linalg.matrix_transpose(x) is shape [1, 2, 4, 3]
 
```

Note that [ `tf.matmul` ](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul) provides kwargs allowing for transpose of arguments.
This is done with minimal cost, and is preferable to using this function. E.g.



```
 # Good!  Transpose is taken at minimal additional cost.
tf.matmul(matrix, b, transpose_b=True)

# Inefficient!
tf.matmul(matrix, tf.linalg.matrix_transpose(b))
 
```



#### Args:

- **`a`** : A  `Tensor`  with  `rank >= 2` .

- **`name`** : A name for the operation (optional).

- **`conjugate`** : Optional bool. Setting it to  `True`  is mathematically equivalent
to tf.math.conj(tf.linalg.matrix_transpose(input)).



#### Returns:
A transposed batch matrix  `Tensor` .



#### Raises:

- **`ValueError`** :  If  `a`  is determined statically to have  `rank < 2` .



#### Numpy Compatibility
In  `numpy`  transposes are memory-efficient constant time operations as they
simply return a new view of the same data with adjusted  `strides` .

TensorFlow does not support strides, [ `linalg.matrix_transpose` ](https://tensorflow.google.cn/api_docs/python/tf/linalg/matrix_transpose) returns a new
tensor with the items permuted.

