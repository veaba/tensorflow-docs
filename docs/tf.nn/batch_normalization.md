Batch normalization.
### Aliases:
- tf.compat.v1.nn.batch_normalization
- tf.compat.v2.nn.batch_normalization

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
Normalizes a tensor by mean and variance, and applies (optionally) a scale to it, as well as an offset :
mean, variance, offset and scale are all expected to be of one of two shapes:
- In all generality, they can have the same number of dimensions as the input x, with identical sizes as x for the dimensions that are not normalized over (the 'depth' dimension(s)), and dimension 1 for the others which are being normalized over. mean and variance in this case would typically be the outputs of tf.nn.moments(..., keep_dims=True) during training, or running averages thereof during inference.
- In the common case where the 'depth' dimension is the last dimension in the input tensor x, they may be one dimensional tensors of the same size as the 'depth' dimension. This is the case for example for the common [batch, depth] layout of fully-connected layers, and [batch, height, width, depth] for convolutions. mean and variance in this case would typically be the outputs of tf.nn.moments(..., keep_dims=False) during training, or running averages thereof during inference.
[Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift; S. Ioffe, C. Szegedy](http://arxiv.org/abs/1502.03167)See Source: .

#### Args:
- x: Input Tensor of arbitrary dimensionality.
- mean: A mean Tensor.
- variance: A variance Tensor.
- offset: An offset Tensor, often denoted
in equations, or None. If present, will be added to the normalized tensor.
- scale: A scale Tensor, often denoted
in equations, or None. If present, the scale is applied to the normalized tensor.
- variance_epsilon: A small float number to avoid dividing by 0.
- name: A name for this operation (optional).
#### Returns:
the normalized, scaled, offset tensor.
