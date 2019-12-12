Batch normalization.

```
 tf.compat.v1.nn.batch_norm_with_global_normalization(
    t=None,
    m=None,
    v=None,
    beta=None,
    gamma=None,
    variance_epsilon=None,
    scale_after_normalization=None,
    name=None,
    input=None,
    mean=None,
    variance=None
)
 
```

This op is deprecated. See [ `tf.nn.batch_normalization` ](https://tensorflow.google.cn/api_docs/python/tf/nn/batch_normalization).

#### Args:
- **`t`** : A 4D input Tensor.
- **`m`** : A 1D mean Tensor with size matching the last dimension of t.This is the first output from tf.nn.moments,or a saved moving average thereof.
- **`v`** : A 1D variance Tensor with size matching the last dimension of t.This is the second output from tf.nn.moments,or a saved moving average thereof.
- **`beta`** : A 1D beta Tensor with size matching the last dimension of t.An offset to be added to the normalized tensor.
- **`gamma`** : A 1D gamma Tensor with size matching the last dimension of t.If "scale_after_normalization" is true, this tensor will be multipliedwith the normalized tensor.
- **`variance_epsilon`** : A small float number to avoid dividing by 0.
- **`scale_after_normalization`** : A bool indicating whether the resulted tensorneeds to be multiplied with gamma.
- **`name`** : A name for this operation (optional).
- **`input`** : Alias for t.
- **`mean`** : Alias for m.
- **`variance`** : Alias for v.


#### Returns:
A batch-normalized  `t` .

