## Class BatchNormalization

Batch Normalization layer from http://arxiv.org/abs/1502.03167.
[BatchNormalization](https://www.tensorflow.org/api_docs/python/tf/compat/v1/keras/layers/BatchNormalization)Inherits From: , Layer


"Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift"

Sergey Ioffe, Christian Szegedy

Keras APIs handle BatchNormalization updates to the moving_mean and moving_variance as part of their fit() and evaluate() loops. However, if a custom training loop is used with an instance of Model, these updates need to be explicitly included. Here's a simple example of how it can be done:

```
   # model is an instance of Model that contains BatchNormalization layer.
  update_ops = model.get_updates_for(None) + model.get_updates_for(features)
  train_op = optimizer.minimize(loss)
  train_op = tf.group([train_op, update_ops])
```
#### Arguments:
- `axis`: An `int` or list of `int`, the `axis` or axes that should be normalized, typically the features `axis`/axes. For instance, after a `Conv2D` layer with `data_format="channels_first"`, set `axis`=1. If a list of axes is provided, each `axis` in `axis` will be normalized simultaneously. Default is `-1` which uses the last `axis`. Note: when using multi-`axis` batch norm, the `beta`, `gamma`, `moving_mean`, and `moving_variance` variables are the same rank as the input Tensor, with dimension size 1 in all reduced (non-`axis`) dimensions).
- `momentum`: Momentum for the moving average.
- `epsilon`: Small float added to variance to avoid dividing by zero.
- `center`: If True, add offset of `beta` to normalized tensor. If False, `beta` is ignored.
- `scale`: If True, multiply by `gamma`. If False, `gamma` is not used. When the next layer is linear (also e.g. `nn.relu`), this can be disabled since the scaling can be done by the next layer.
- `beta`_initializer: Initializer for the `beta` weight.
- `gamma`_initializer: Initializer for the `gamma` weight.
- `moving_mean`_initializer: Initializer for the moving mean.
- `moving_variance`_initializer: Initializer for the moving variance.
- `beta`_regularizer: Optional regularizer for the `beta` weight.
- `gamma`_regularizer: Optional regularizer for the `gamma` weight.
- `beta`_constra`int`: An optional projection function to be applied to the `beta` weight after being updated by an `Optimizer` (e.g. used to implement norm constra`int`s or value constra`int`s for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constra`int`s are not safe to use when doing asynchronous distributed training.
- `gamma`_constra`int`: An optional projection function to be applied to the `gamma` weight after being updated by an `Optimizer`.
- `renorm`: Whether to use Batch Renormalization (https://arxiv.org/abs/1702.03275). This adds extra variables during training. The inference is the same for either value of this parameter.
- `renorm`_clipping: A `d`ictiona`r`y that may map keys '`r`max', '`r`min', '`d`max' to scala`r` `Tensors` use`d` to clip the `renorm` co`r``r`ection. The co`r``r`ection (`r, d`) is use`d` as co`r``r`ecte`d`_value = no`r`malize`d`_value * `r` + `d`, with `r` clippe`d` to [`r`min, `r`max], an`d` `d` to [-`d`max, `d`max]. Missing `r`max, `r`min, `d`max a`r`e set to inf, 0, inf, `r`espectively.
- `renorm`_`momentum`: Momentum use`d` to up`d`ate the moving means an`d` stan`d`a`r``d` `d`eviations with `renorm`. Unlike `momentum`, this affects t`r`aining an`d` shoul`d` be neithe`r` too small (which woul`d` a`d``d` noise) no`r` too la`r`ge (which woul`d` give stale estimates). Note that `momentum` is still applie`d` to get the means an`d` va`r`iances fo`r` infe`r`ence.
- `fused`: if `None` o`r` `True`, use a faste`r`, `fused` implementation if possible. If `False`, use the system `r`ecommen`d`e`d` implementation.
- `trainable`: Boolean, if `True` also a`d``d` va`r`iables to the g`r`aph collection `GraphKeys.TRAINABLE_VARIABLES` (see tf.Va`r`iable).
- `virtual_batch_size`: An `int`. By `d`efault, `virtual_batch_size` is `None`, which means batch no`r`malization is pe`r`fo`r`me`d` ac`r`oss the whole batch. When `virtual_batch_size` is not `None`, instea`d` pe`r`fo`r`m "Ghost Batch No`r`malization", which c`r`eates vi`r`tual sub-batches which a`r`e each no`r`malize`d` sepa`r`ately (with sha`r`e`d` `gamma`, `beta`, an`d` moving statistics). Must `d`ivi`d`e the actual batch size `d`u`r`ing execution.
- `adjustment`: A function taking the `Tensor` containing the (`d`ynamic) shape of the input tenso`r` an`d` `r`etu`r`ning a pai`r` (`scale`, bias) to apply to the no`r`malize`d` values (befo`r`e `gamma` an`d` `beta`), only `d`u`r`ing t`r`aining. Fo`r` example, if `axis`==`-1`, `adjustment` = lamb`d`a shape: ( tf.`r`an`d`om.unifo`r`m(shape[`-1`:], 0.93, 1.07), tf.`r`an`d`om.unifo`r`m(shape[`-1`:], -0.1, 0.1)) will `scale` the no`r`malize`d` value by up to 7% up o`r` `d`own, then shift the `r`esult by up to 0.1 (with in`d`epen`d`ent scaling an`d` bias fo`r` each featu`r`e but sha`r`e`d` ac`r`oss all examples), an`d` finally apply `gamma` an`d`/o`r` `beta`. If `None`, no `adjustment` is applie`d`. Cannot be specifie`d` if `virtual_batch_size` is specifie`d`.
- `name`: A st`r`ing, the `name` of the laye`r`.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/normalization.py#L119-L164)


```
 __init__(
    axis=-1,
    momentum=0.99,
    epsilon=0.001,
    center=True,
    scale=True,
    beta_initializer=tf.zeros_initializer(),
    gamma_initializer=tf.ones_initializer(),
    moving_mean_initializer=tf.zeros_initializer(),
    moving_variance_initializer=tf.ones_initializer(),
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
## Properties
### graph

DEPRECATED FUNCTION
### scope_name
