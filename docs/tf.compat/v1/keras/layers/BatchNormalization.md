## Class BatchNormalization

Base class of Batch normalization layer (Ioffe and Szegedy, 2014).

Normalize the activations of the previous layer at each batch, i.e. applies a transformation that maintains the mean activation close to 0 and the activation standard deviation close to 1.
#### Arguments:
- `axis`: Integer, the `axis` that should be normalized (typically the features `axis`). For instance, after a `Conv2D` layer with `data_format="channels_first"`, set `axis`=1 in `BatchNormalization`.
- `momentum`: Momentum for the moving average.
- `epsilon`: Small float added to variance to avoid dividing by zero.
- `center`: If True, add offset of `beta` to normalized tensor. If False, `beta` is ignored.
- `scale`: If True, multiply by `gamma`. If False, `gamma` is not used. When the next layer is linear (also e.g. `nn.relu`), this can be disabled since the scaling will be done by the next layer.
- `beta`_initializer: Initializer for the `beta` weight.
- `gamma`_initializer: Initializer for the `gamma` weight.
- `moving_mean_initializer`: Initializer for the moving mean.
- `moving_variance_initializer`: Initializer for the moving variance.
- `beta`_regularizer: Optional regularizer for the `beta` weight.
- `gamma`_regularizer: Optional regularizer for the `gamma` weight.
- `beta`_constraint: Optional constraint for the `beta` weight.
- `gamma`_constraint: Optional constraint for the `gamma` weight.
- `renorm`: Whether to use Batch Renormalization (https://arxiv.org/abs/1702.03275). This adds extra variables during training. The inference is the same for either value of this parameter.
- `renorm`_clipping: A `d`ictiona`r`y that may map keys '`r`max', '`r`min', '`d`max' to scala`r` `Tensors` use`d` to clip the `renorm` co`r``r`ection. The co`r``r`ection (`r, d`) is use`d` as co`r``r`ecte`d`_value = no`r`malize`d`_value * `r` + `d`, with `r` clippe`d` to [`r`min, `r`max], an`d` `d` to [-`d`max, `d`max]. Missing `r`max, `r`min, `d`max a`r`e set to inf, 0, inf, `r`espectively.
- `renorm`_`momentum`: Momentum use`d` to up`d`ate the moving means an`d` stan`d`a`r``d` `d`eviations with `renorm`. Unlike `momentum`, this affects t`r`aining an`d` shoul`d` be neithe`r` too small (which woul`d` a`d``d` noise) no`r` too la`r`ge (which woul`d` give stale estimates). Note that `momentum` is still applie`d` to get the means an`d` va`r`iances fo`r` infe`r`ence.
- `fused`: if `True`, use a faste`r`, `fused` implementation, o`r` `r`aise a ValueE`r``r`o`r` if the `fused` implementation cannot be use`d`. If `None`, use the faste`r` implementation if possible. If False, `d`o not use`d` the `fused` implementation.
- `trainable`: Boolean, if `True` the va`r`iables will be ma`r`ke`d` as `trainable`.
- `virtual_batch_size`: An `int`. By `d`efault, `virtual_batch_size` is `None`, which means batch no`r`malization is pe`r`fo`r`me`d` ac`r`oss the whole batch. When `virtual_batch_size` is not `None`, instea`d` pe`r`fo`r`m "Ghost Batch No`r`malization", which c`r`eates vi`r`tual sub-batches which a`r`e each no`r`malize`d` sepa`r`ately (with sha`r`e`d` `gamma`, `beta`, an`d` moving statistics). Must `d`ivi`d`e the actual batch size `d`u`r`ing execution.
- `adjustment`: A function taking the `Tensor` containing the (`d`ynamic) shape of the input tenso`r` an`d` `r`etu`r`ning a pai`r` (`scale`, bias) to apply to the no`r`malize`d` values (befo`r`e `gamma` an`d` `beta`), only `d`u`r`ing t`r`aining. Fo`r` example, if `axis`==-1, `adjustment` = lamb`d`a shape: ( tf.`r`an`d`om.unifo`r`m(shape[-1:], 0.93, 1.07), tf.`r`an`d`om.unifo`r`m(shape[-1:], -0.1, 0.1)) will `scale` the no`r`malize`d` value by up to 7% up o`r` `d`own, then shift the `r`esult by up to 0.1 (with in`d`epen`d`ent scaling an`d` bias fo`r` each featu`r`e but sha`r`e`d` ac`r`oss all examples), an`d` finally apply `gamma` an`d`/o`r` `beta`. If `None`, no `adjustment` is applie`d`. Cannot be specifie`d` if `virtual_batch_size` is specifie`d`.
#### Call arguments:
- `inputs`: Input tensor (of any rank).
- `training`: Python boolean indicating whether the layer should behave in `training` mode or in inference mode.
`training`=True: The layer will normalize its `inputs` using the mean and variance of the current batch of `inputs`.
`training`=False: The layer will normalize its `inputs` using the mean and variance of its moving statistics, learned during `training`.
- `training`=True: The layer will normalize its `inputs` using the mean and variance of the current batch of `inputs`.
- `training`=False: The layer will normalize its `inputs` using the mean and variance of its moving statistics, learned during `training`.
#### Input shape:

Arbitrary. Use the keyword argument input_shape (tuple of integers, does not include the samples axis) when using this layer as the first layer in a model.
#### Output shape:

Same shape as input.
#### References:
- ``B``a``t``c``h`` ``N``o``r``m``a``l``i``z``a``t``i``o``n``:`` ``A``c``c``e``l``e``r``a``t``i``n``g`` ``D``e``e``p`` ``N``e``t``w``o``r``k`` ``T``r``a``i``n``i``n``g`` ``b``y`` ``R``e``d``u``c``i``n``g`` ``I``n``t``e``r``n``a``l`` ``C``o``v``a``r``i``a``t``e`` ``S``h``i``f``t``

{ {TRAINABLE_ATTRIBUTE_NOTE}}
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/normalization.py#L138-L209)


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
