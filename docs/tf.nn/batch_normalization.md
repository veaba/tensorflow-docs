

Batch normalization.

**Aliases** : [ `tf.compat.v1.nn.batch_normalization` ](/api_docs/python/tf/nn/batch_normalization), [ `tf.compat.v2.nn.batch_normalization` ](/api_docs/python/tf/nn/batch_normalization)

```
 tf.nn.batch_normalization(
    x,
    mean,
    variance,
    offset,
    scale,
    variance_epsilon,
    name=None
)
 
```

Normalizes a tensor by  `mean`  and  `variance` , and applies (optionally) a `scale`  \(\gamma\) to it, as well as an  `offset`  \(\beta\):

\(\frac{\gamma(x-\mu)}{\sigma}+\beta\)

 `mean` ,  `variance` ,  `offset`  and  `scale`  are all expected to be of one of twoshapes:

- In all generality, they can have the same number of dimensions as theinput  `x` , with identical sizes as  `x`  for the dimensions that are notnormalized over (the 'depth' dimension(s)), and dimension 1 for theothers which are being normalized over. `mean`  and  `variance`  in this case would typically be the outputs of[ `tf.nn.moments(..., keep_dims=True)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/moments) during training, or running averagesthereof during inference.
- In the common case where the 'depth' dimension is the last dimension inthe input tensor  `x` , they may be one dimensional tensors of the samesize as the 'depth' dimension.This is the case for example for the common  `[batch, depth]`  layout offully-connected layers, and  `[batch, height, width, depth]`  forconvolutions. `mean`  and  `variance`  in this case would typically be the outputs of[ `tf.nn.moments(..., keep_dims=False)` ](https://tensorflow.google.cn/api_docs/python/tf/nn/moments) during training, or running averagesthereof during inference.
See Source: [Batch Normalization: Accelerating Deep Network Training byReducing Internal Covariate Shift; S. Ioffe, C. Szegedy](http://arxiv.org/abs/1502.03167).

#### Args:
- **`x`** : Input  `Tensor`  of arbitrary dimensionality.
- **`mean`** : A mean  `Tensor` .
- **`variance`** : A variance  `Tensor` .
- **`offset`** : An offset  `Tensor` , often denoted β in equations, orNone. If present, will be added to the normalized tensor.
- **`scale`** : A scale  `Tensor` , often denoted γ in equations, or `None` . If present, the scale is applied to the normalized tensor.
- **`variance_epsilon`** : A small float number to avoid dividing by 0.
- **`name`** : A name for this operation (optional).


#### Returns:
the normalized, scaled, offset tensor.

