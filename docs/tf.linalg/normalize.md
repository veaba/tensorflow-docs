Normalizes  `tensor`  along dimension  `axis`  using specified norm.

**别名** : [ `tf.compat.v1.linalg.normalize` ](/api_docs/python/tf/linalg/normalize), [ `tf.compat.v2.linalg.normalize` ](/api_docs/python/tf/linalg/normalize)

```
 tf.linalg.normalize(
    tensor,
    ord='euclidean',
    axis=None,
    name=None
)
 
```

This uses [ `tf.linalg.norm` ](https://tensorflow.google.cn/api_docs/python/tf/norm) to compute the norm along  `axis` .

This function can compute several different vector norms (the 1-norm, theEuclidean or 2-norm, the inf-norm, and in general the p-norm for p > 0) andmatrix norms (Frobenius, 1-norm, 2-norm and inf-norm).

#### 参数：
- **`tensor`** :  `Tensor`  of types  `float32` ,  `float64` ,  `complex64` ,  `complex128` 
- **`ord`** : Order of the norm. Supported values are  `'fro'` ,  `'euclidean'` ,  `1` , `2` ,  `np.inf`  and any positive real number yielding the correspondingp-norm. Default is  `'euclidean'`  which is equivalent to Frobenius norm if `tensor`  is a matrix and equivalent to 2-norm for vectors.Some restrictions apply: a) The Frobenius norm  `'fro'`  is not defined forvectors, b) If axis is a 2-tuple (matrix norm), only  `'euclidean'` ,' `fro'` ,  `1` ,  `2` ,  `np.inf`  are supported. See the description of  `axis` on how to compute norms for a batch of vectors or matrices stored in atensor.
- **`axis`** : If  `axis`  is  `None`  (the default), the input is considered a vectorand a single vector norm is computed over the entire set of values in thetensor, i.e.  `norm(tensor, ord=ord)`  is equivalent to `norm(reshape(tensor, [-1]), ord=ord)` . If  `axis`  is a Python integer, theinput is considered a batch of vectors, and  `axis`  determines the axis in `tensor`  over which to compute vector norms. If  `axis`  is a 2-tuple ofPython integers it is considered a batch of matrices and  `axis`  determinesthe axes in  `tensor`  over which to compute a matrix norm.Negative indices are supported. Example: If you are passing a tensor thatcan be either a matrix or a batch of matrices at runtime, pass `axis=[-2,-1]`  instead of  `axis=None`  to make sure that matrix norms arecomputed.
- **`name`** : The name of the op.


#### 返回：
- **`normalized`** : A normalized  `Tensor`  with the same shape as  `tensor` .
- **`norm`** : The computed norms with the same shape and dtype  `tensor`  but thefinal axis is 1 instead. Same as running `tf.cast(tf.linalg.norm(tensor, ord, axis keepdims=True), tensor.dtype)` .


#### 加薪：
- **`ValueError`** : If  `ord`  or  `axis`  is invalid.
