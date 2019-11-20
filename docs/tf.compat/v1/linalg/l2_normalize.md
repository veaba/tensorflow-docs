[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_impl.py#L599-L624)  
---  
  
Normalizes along dimension `axis` using an L2 norm. (deprecated arguments)

### Aliases:

  * [`tf.compat.v1.math.l2_normalize`](/api_docs/python/tf/compat/v1/linalg/l2_normalize)
  * [`tf.compat.v1.nn.l2_normalize`](/api_docs/python/tf/compat/v1/linalg/l2_normalize)

    
    
    tf.compat.v1.linalg.l2_normalize(
        x,
        axis=None,
        epsilon=1e-12,
        name=None,
        dim=None
    )
    

**Warning:** SOME ARGUMENTS ARE DEPRECATED: `(dim)`. They will be removed in a
future version. Instructions for updating: dim is deprecated, use axis instead

For a 1-D tensor with `axis = 0`, computes

    
    
    output = x / sqrt(max(sum(x**2), epsilon))
    

For `x` with more dimensions, independently normalizes each 1-D slice along
dimension `axis`.

#### Args:

  * **`x`** : A `Tensor`.
  * **`axis`** : Dimension along which to normalize. A scalar or a vector of integers.
  * **`epsilon`** : A lower bound value for the norm. Will use `sqrt(epsilon)` as the divisor if `norm < sqrt(epsilon)`.
  * **`name`** : A name for this operation (optional).
  * **`dim`** : Deprecated alias for axis.

#### Returns:

A `Tensor` with the same shape as `x`.

