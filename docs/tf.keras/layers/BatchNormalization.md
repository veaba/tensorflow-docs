## Class BatchNormalization
Base class of Batch normalization layer (Ioffe and Szegedy, 2014).
### Aliases:
- Class `tf.compat.v2.keras.layers.BatchNormalization`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``l``a``y``e``r``s``
- ``P``i``x``2``P``i``x``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
Normalize the activations of the previous layer at each batch, i.e. applies a transformation that maintains the mean activation close to 0 and the activation standard deviation close to 1.
#### Arguments:
- `axis`: Integer, the `axis` that should be normalized (typically the features `axis`). For instance, after a `Conv2D` layer with `data_format="channels_first"`, set `axis`=1 in `BatchNormalization`.
- `momentum`: Momentum for the moving average.
- `epsilon`: Small float added to variance to avoid dividing by zero.
- `center`: If True, add offset of `beta` to normalized tensor. If False, `beta` is ignored.
- `scale`: If True, multiply by `gamma`. If False, `gamma` is not used. When the next layer is linear (also e.g. `nn.relu`), this can be disabled since the scaling will be done by the next layer.
- `beta_initializer`: Initializer for the beta weight.
- `gamma_initializer`: Initializer for the gamma weight.
- `moving_mean_initializer`: Initializer for the moving mean.
- `moving_variance_initializer`: Initializer for the moving variance.
- `beta_regularizer`: Optional regularizer for the beta weight.
- `gamma_regularizer`: Optional regularizer for the gamma weight.
- `beta_constraint`: Optional constraint for the beta weight.
- `gamma_constraint`: Optional constraint for the gamma weight.
- `renorm`: Whether to use Batch Renormalization (https://arxiv.org/abs/1702.03275). This adds extra variables during training. The inference is the same for either value of this parameter.
- `renorm_clipping`: A `d`ictiona`r`y that may map keys '`r`max', '`r`min', '`d`max' to scala`r` `Tensors` use`d` to clip the `r`eno`r`m co`r``r`ection. The co`r``r`ection `r, d)` is use`d` as co`r``r`ecte`d`_value = no`r`malize`d`_value * `r` + `d`, with `r` clippe`d` to [`r`min, `r`max], an`d` `d` to [-`d`max, `d`max]. Missing `r`max, `r`min, `d`max a`r`e set to inf, 0, inf, `r`espectively.
- `renorm_momentum`: Momentum used to update the moving means and standard deviations with renorm. Unlike `momentum`, this affects training and should be neither too small (which would add noise) nor too large (which would give stale estimates). Note that `momentum` is still applied to get the means and variances for inference.
- `fused`: if `True`, use a faster, `fused` implementation, or raise a ValueError if the `fused` implementation cannot be used. If `None`, use the faster implementation if possible. If False, do not used the `fused` implementation.
- `trainable`: Boolean, if `True` the variables will be marked as `trainable`.
- `virtual_batch_size`: An `int`. By default, `virtual_batch_size` is `None`, which means batch normalization is performed across the whole batch. When `virtual_batch_size` is not `None`, instead perform "Ghost Batch Normalization", which creates virtual sub-batches which are each normalized separately (with shared gamma, beta, and moving statistics). Must divide the actual batch size during execution.
#### Call arguments:
- `inputs`: Input tensor (of any rank).
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode.
`training`=True: The layer will normalize its inputs using the mean and variance of the current batch of inputs.
`training`=False: The layer will normalize its inputs using the mean and variance of its moving statistics, learned during `training`.
- `training=True`: The layer will normalize its inputs using the mean and variance of the current batch of inputs.
- `training=False`: The layer will normalize its inputs using the mean and variance of its moving statistics, learned during training.
#### Input shape:
Arbitrary. Use the keyword argument `input_shape` (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:
Same shape as input.
#### References:
- ``B``a``t``c``h`` ``N``o``r``m``a``l``i``z``a``t``i``o``n``:`` ``A``c``c``e``l``e``r``a``t``i``n``g`` ``D``e``e``p`` ``N``e``t``w``o``r``k`` ``T``r``a``i``n``i``n``g`` ``b``y`` ``R``e``d``u``c``i``n``g`` ``I``n``t``e``r``n``a``l`` ``C``o``v``a``r``i``a``t``e`` ``S``h``i``f``t``
{ {TRAINABLE_ATTRIBUTE_NOTE}}
## __init__
View source

```
 __init__(
    axis=-1,
    momentum=0.99,
    epsilon=0.001,
    center=True,
    scale=True,
    beta_initializer='zeros',
    gamma_initializer='ones',
    moving_mean_initializer='zeros',
    moving_variance_initializer='ones',
    beta_regularizer=None,
    gamma_regularizer=None,
    beta_constraint=None,
    gamma_constraint=None,
    renorm=False,
    renorm_clipping=None,
    renorm_momentum=0.99,
    fused=None,
    trainable=True,
    virtual_batch_size=None,
    adjustment=None,
    name=None,
    **kwargs
)
```
