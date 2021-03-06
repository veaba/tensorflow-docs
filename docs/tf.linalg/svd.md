

计算一个或多个矩阵的奇异值分解。

**别名** : [ `tf.compat.v1.linalg.svd` ](/api_docs/python/tf/linalg/svd), [ `tf.compat.v1.svd` ](/api_docs/python/tf/linalg/svd), [ `tf.compat.v2.linalg.svd` ](/api_docs/python/tf/linalg/svd)

```
 tf.linalg.svd(
    tensor,
    full_matrices=False,
    compute_uv=True,
    name=None
)
 
```

Computes the SVD of each inner matrix in  `tensor`  such that `tensor[..., :, :] = u[..., :, :] * diag(s[..., :, :]) * transpose(conj(v[..., :, :]))` 

```
 # a is a tensor.
# s is a tensor of singular values.
# u is a tensor of left singular vectors.
# v is a tensor of right singular vectors.
s, u, v = svd(a)
s = svd(a, compute_uv=False)
 
```

#### 参数：
- **`tensor`** :  `Tensor`  of shape  `[..., M, N]` . Let  `P`  be the minimum of  `M`  and `N` .
- **`full_matrices`** : If true, compute full-sized  `u`  and  `v` . If false(the default), compute only the leading  `P`  singular vectors.Ignored if  `compute_uv`  is  `False` .
- **`compute_uv`** : If  `True`  then left and right singular vectors will becomputed and returned in  `u`  and  `v` , respectively. Otherwise, only thesingular values will be computed, which can be significantly faster.
- **`name`** : string, optional name of the operation.


#### 返回：
- **`s`** : Singular values. Shape is  `[..., P]` . The values are sorted in reverseorder of magnitude, so s[..., 0] is the largest value, s[..., 1] is thesecond largest, etc.
- **`u`** : Left singular vectors. If  `full_matrices`  is  `False`  (default) thenshape is  `[..., M, P]` ; if  `full_matrices`  is  `True`  then shape is `[..., M, M]` . Not returned if  `compute_uv`  is  `False` .
- **`v`** : Right singular vectors. If  `full_matrices`  is  `False`  (default) thenshape is  `[..., N, P]` . If  `full_matrices`  is  `True`  then shape is `[..., N, N]` . Not returned if  `compute_uv`  is  `False` .


#### numpy兼容性
Mostly equivalent to numpy.linalg.svd, except that  * The order of output  arguments here is  `s` ,  `u` ,  `v`  when  `compute_uv`  is     `True` , as opposed to  `u` ,  `s` ,  `v`  for numpy.linalg.svd.  * full_matrices is  `False`  by default as opposed to  `True`  for     numpy.linalg.svd.  * tf.linalg.svd uses the standard definition of the SVD    ![](./svd.md_0.png), such that the left singular vectors of  `a`  are    the columns of  `u` , while the right singular vectors of  `a`  are the    columns of  `v` . On the other hand, numpy.linalg.svd returns the adjoint    ![](./svd.md_1.png) as the third output argument.

```
 import tensorflow as tf
import numpy as np
s, u, v = tf.linalg.svd(a)
tf_a_approx = tf.matmul(u, tf.matmul(tf.linalg.diag(s), v, adjoint_b=True))
u, s, v_adj = np.linalg.svd(a, full_matrices=False)
np_a_approx = np.dot(u, np.dot(np.diag(s), v_adj))
# tf_a_approx and np_a_approx should be numerically close.
 
```

