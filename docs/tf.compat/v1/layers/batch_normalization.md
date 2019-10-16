
Functional interface for the batch normalization layer. (deprecated)

```
 tf.compat.v1.layers.batch_normalization(
    inputs,
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
    training=False,
    trainable=True,
    name=None,
    reuse=None,
    renorm=False,
    renorm_clipping=None,
    renorm_momentum=0.99,
    fused=None,
    virtual_batch_size=None,
    adjustment=None
)
```

Reference: http://arxiv.org/abs/1502.03167

"Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift"

Sergey Ioffe, Christian Szegedy

```
   x_norm = tf.compat.v1.layers.batch_normalization(x, training=training)

  # ...

  update_ops = tf.compat.v1.get_collection(tf.GraphKeys.UPDATE_OPS)
  train_op = optimizer.minimize(loss)
  train_op = tf.group([train_op, update_ops])
```
#### Arguments:
- `inputs`: Tensor input.
- `axis`: An `int`, the `axis` that should be normalized (typically the features `axis`). For instance, after a `Convolution2D` layer with `data_format="channels_first"`, set `axis`=1 in `BatchNormalization`.
- `momentum`: Momentum for the moving average.
- `epsilon`: Small float added to variance to avoid dividing by zero.
- `center`: If True, add offset of `beta` to normalized tensor. If False, `beta` is ignored.
- `scale`: If True, multiply by `gamma`. If False, `gamma` is not used. When the next layer is linear (also e.g. `nn.relu`), this can be disabled since the scaling can be done by the next layer.
- `beta`_initializer: Initializer for the `beta` weight.
- `gamma`_initializer: Initializer for the `gamma` weight.
- `moving_mean_initializer`: Initializer for the moving mean.
- `moving_variance_initializer`: Initializer for the moving variance.
- `beta`_regularizer: Optional regularizer for the `beta` weight.
- `gamma`_regularizer: Optional regularizer for the `gamma` weight.
- `beta`_constra`int`: An optional projection function to be applied to the `beta` weight after being updated by an `Optimizer` (e.g. used to implement norm constra`int`s or value constra`int`s for layer weights). The function must take as input the unprojected variable and must return the projected variable (which must have the same shape). Constra`int`s are not safe to use when doing asynchronous distributed training.
- `gamma`_constra`int`: An optional projection function to be applied to the `gamma` weight after being updated by an `Optimizer`.
- `training`: Either a Python boolean, or a TensorFlow boolean scalar tensor (e.g. a placeholder). Whether to return the output in `training` mode (normalized with statistics of the current batch) or in inference mode (normalized with moving statistics). NOTE: make sure to set this parameter correctly, or else your `training`/inference will not work properly.
- `trainable`: Boolean, if `True` also add variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES` (see tf.Variable).
- `name`: String, the `name` of the layer.
- `reuse`: Boolean, whether to `reuse` the weights of a previous layer by the same `name`.
- `renorm`: Whether to use Batch Renormalization (https://arxiv.org/abs/1702.03275). This adds extra variables during `training`. The inference is the same for either value of this parameter.
- `renorm`_clipping: A `d`ictiona`r`y that may map keys '`r`max', '`r`min', '`d`max' to scala`r` `Tensors` use`d` to clip the `renorm` co`r``r`ection. The co`r``r`ection (`r, d`) is use`d` as co`r``r`ecte`d`_value = no`r`malize`d`_value * `r` + `d`, with `r` clippe`d` to [`r`min, `r`max], an`d` `d` to [-`d`max, `d`max]. Missing `r`max, `r`min, `d`max a`r`e set to inf, 0, inf, `r`espectively.
- `renorm`_`momentum`: Momentum use`d` to up`d`ate the moving means an`d` stan`d`a`r``d` `d`eviations with `renorm`. Unlike `momentum`, this affects `training` an`d` shoul`d` be neithe`r` too small (which woul`d` a`d``d` noise) no`r` too la`r`ge (which woul`d` give stale estimates). Note that `momentum` is still applie`d` to get the means an`d` va`r`iances fo`r` infe`r`ence.
- `fused`: if `None` o`r` `True`, use a faste`r`, `fused` implementation if possible. If `False`, use the system `r`ecommen`d`e`d` implementation.
- `virtual_batch_size`: An `int`. By `d`efault, `virtual_batch_size` is `None`, which means batch no`r`malization is pe`r`fo`r`me`d` ac`r`oss the whole batch. When `virtual_batch_size` is not `None`, instea`d` pe`r`fo`r`m "Ghost Batch No`r`malization", which c`r`eates vi`r`tual sub-batches which a`r`e each no`r`malize`d` sepa`r`ately (with sha`r`e`d` `gamma`, `beta`, an`d` moving statistics). Must `d`ivi`d`e the actual batch size `d`u`r`ing execution.
- `adjustment`: A function taking the `Tensor` containing the (`d`ynamic) shape of the input tenso`r` an`d` `r`etu`r`ning a pai`r` (`scale`, bias) to apply to the no`r`malize`d` values (befo`r`e `gamma` an`d` `beta`), only `d`u`r`ing `training`. Fo`r` example, if `axis`==-1, `adjustment` = lamb`d`a shape: ( tf.`r`an`d`om.unifo`r`m(shape[-1:], 0.93, 1.07), tf.`r`an`d`om.unifo`r`m(shape[-1:], -0.1, 0.1)) will `scale` the no`r`malize`d` value by up to 7% up o`r` `d`own, then shift the `r`esult by up to 0.1 (with in`d`epen`d`ent scaling an`d` bias fo`r` each featu`r`e but sha`r`e`d` ac`r`oss all examples), an`d` finally apply `gamma` an`d`/o`r` `beta`. If `None`, no `adjustment` is applie`d`. Cannot be specifie`d` if `virtual_batch_size` is specifie`d`.
#### Returns:

Output tensor.
#### Raises:
- `ValueError`: if eager execution is enabled.
