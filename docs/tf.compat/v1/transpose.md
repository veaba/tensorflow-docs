Transposes  `a` .

```
 tf.compat.v1.transpose(    a,    perm=None,    name='transpose',    conjugate=False) 
```

Permutes the dimensions according to  `perm` .

The returned tensor's dimension i will correspond to the input dimension `perm[i]` . If  `perm`  is not given, it is set to (n-1...0), where n isthe rank of the input tensor. Hence by default, this operation performs aregular matrix transpose on 2-D input Tensors. If conjugate is True and `a.dtype`  is either  `complex64`  or  `complex128`  then the values of  `a` are conjugated and transposed.

#### 例如：


```
 x = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.transpose(x)  # [[1, 4]
                 #  [2, 5]
                 #  [3, 6]]

# Equivalently
tf.transpose(x, perm=[1, 0])  # [[1, 4]
                              #  [2, 5]
                              #  [3, 6]]

# If x is complex, setting conjugate=True gives the conjugate transpose
x = tf.constant([[1 + 1j, 2 + 2j, 3 + 3j],
                 [4 + 4j, 5 + 5j, 6 + 6j]])
tf.transpose(x, conjugate=True)  # [[1 - 1j, 4 - 4j],
                                 #  [2 - 2j, 5 - 5j],
                                 #  [3 - 3j, 6 - 6j]]

# 'perm' is more useful for n-dimensional tensors, for n > 2
x = tf.constant([[[ 1,  2,  3],
                  [ 4,  5,  6]],
                 [[ 7,  8,  9],
                  [10, 11, 12]]])

# Take the transpose of the matrices in dimension-0
# (this common operation has a shorthand `linalg.matrix_transpose`)
tf.transpose(x, perm=[0, 2, 1])  # [[[1,  4],
                                 #   [2,  5],
                                 #   [3,  6]],
                                 #  [[7, 10],
                                 #   [8, 11],
                                 #   [9, 12]]]
 
```

#### 参数：
- **`a`** : A  `Tensor` .
- **`perm`** : A permutation of the dimensions of  `a` .
- **`name`** : A name for the operation (optional).
- **`conjugate`** : Optional bool. Setting it to  `True`  is mathematically equivalentto tf.math.conj(tf.transpose(input)).


#### 返回：
A transposed  `Tensor` .

#### numpy兼容性
In  `numpy`  transposes are memory-efficient constant time operations as theysimply return a new view of the same data with adjusted  `strides` .

TensorFlow does not support strides, so  `transpose`  returns a new tensor withthe items permuted.

