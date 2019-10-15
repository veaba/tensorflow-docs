
Batch normalization.
### Aliases:
- `tf.compat.v1.nn.batch_normalization`
- `tf.compat.v2.nn.batch_normalization`

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

Normalizes a tensor by mean and variance, and applies (optionally) a scale γ to it, as well as an offset β:

mean, variance, offset and scale are all expected to be of one of two shapes:
- In all generality, they can have the same number of dimensions as the input `x`, with identical sizes as `x` for the dimensions that are not normalized over (the 'depth' dimension(s)), and dimension 1 for the others which are being normalized over. `mean` and `variance` in this case would typically be the outputs of tf.nn.moments(..., keep_dims=True) during training, or running averages thereof during inference.
- In` ``t``h``e`` ``c`ommon` ``c``a`s`e`` ``w``h``e`r`e`` ``t``h``e`` `'`d``e``p``t``h`'` ``d``i`m`e`ns`i`on` ``i`s` ``t``h``e`` `l`a`s`t`` ``d``i`m`e`ns`i`on` ``i`n` ``t``h``e`` ``i`n`p`u`t`` ``t``e`nsor` ``x``,`` ``t``h``e`y` `m`a`y` ``b``e`` `on`e`` ``d``i`m`e`ns`i`on`a`l` ``t``e`nsors` `of` ``t``h``e`` `s`a`m`e`` `s`i`z`e`` ``a`s` ``t``h``e`` `'`d``e``p``t``h`'` ``d``i`m`e`ns`i`on.` `T`h``i`s` ``i`s` ``t``h``e`` ``c``a`s`e`` `for` ``e``x``a`m`p`l`e`` `for` ``t``h``e`` ``c`ommon` `[`b``a``t``c``h``,`` ``d``e``p``t``h`]` `l`a`you`t`` `of` `fully-`c`onn`e``c``t``e``d`` `l`a`y`e`rs`,`` ``a`n`d`` `[`b``a``t``c``h``,`` ``h``e``i``g``h``t``,`` ``w``i``d``t``h``,`` ``d``e``p``t``h`]` `for` ``c`onvolu`t``i`ons.` ``mean`` ``a`n`d`` ``variance`` ``i`n` ``t``h``i`s` ``c``a`s`e`` ``w`oul`d`` ``t`y`p``i``c``a`lly` ``b``e`` ``t``h``e`` `ou`t``p`u`t`s` `of` ``t`f.nn.mom`e`n`t`s(...`,`` `k`e``e``p`_`d``i`ms=F`a`ls`e`)` ``d`ur`i`n`g`` ``t`r`a``i`n`i`n`g``,`` `or` `runn`i`n`g`` ``a`v`e`r`a``g``e`s` ``t``h``e`r`e`of` ``d`ur`i`n`g`` ``i`nf`e`r`e`n`c``e`.
[Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift; S. Ioffe, C. Szegedy](http://arxiv.org/abs/1502.03167)See Source: .

#### Args:
- `x`: Input `Tensor` of arbitrary dimensionality.
- `mean`: A `mean` `Tensor`.
- `variance`: A `variance` `Tensor`.
- `offset`: An `offset` `Tensor`, often denoted
in equations, or None. If present, will be added to the normalized tensor.
- `scale`: A `scale` `Tensor`, often denoted
in equations, or `None`. If present, the `scale` is applied to the normalized tensor.
- `variance`_epsilon: A small float number to avoid dividing by 0.
- `name`: A `name` for this operation (optional).
#### Returns:

the normalized, scaled, offset tensor.
