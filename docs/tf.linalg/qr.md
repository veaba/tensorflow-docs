计算一个或多个矩阵的qr分解。

**别名** : [ `tf.compat.v1.linalg.qr` ](/api_docs/python/tf/linalg/qr), [ `tf.compat.v1.qr` ](/api_docs/python/tf/linalg/qr), [ `tf.compat.v2.linalg.qr` ](/api_docs/python/tf/linalg/qr)

```
 tf.linalg.qr(    input,    full_matrices=False,    name=None) 
```

Computes the QR decomposition of each inner matrix in  `tensor`  such that `tensor[..., :, :] = q[..., :, :] * r[..., :,:])` 

```
 # a is a tensor.# q is a tensor of orthonormal matrices.# r is a tensor of upper triangular matrices.q, r = qr(a)q_full, r_full = qr(a, full_matrices=True) 
```

#### 参数：
- **`input`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` ,  `half` ,  `complex64` ,  `complex128` .A tensor of shape  `[..., M, N]`  whose inner-most 2 dimensionsform matrices of size  `[M, N]` . Let  `P`  be the minimum of  `M`  and  `N` .
- **`full_matrices`** : An optional  `bool` . Defaults to  `False` .If true, compute full-sized  `q`  and  `r` . If false(the default), compute only the leading  `P`  columns of  `q` .
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (q, r).

- **`q`** : A  `Tensor` . Has the same type as  `input` .
- **`r`** : A  `Tensor` . Has the same type as  `input` .
