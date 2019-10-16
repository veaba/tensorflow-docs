## Class LossScaleOptimizer

An optimizer that applies loss scaling.
[Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.mixed_precision.experimental.LossScaleOptimizer`
- Class `tf.compat.v2.keras.mixed_precision.experimental.LossScaleOptimizer`

Loss scaling is a process that multiplies the loss by a multiplier called the loss scale, and divides each gradient by the same multiplier. The pseudocode for this process is:

```
 loss = ...
loss *= loss_scale
grads = gradients(loss, vars)
grads /= loss_scale
```

Mathematically, loss scaling has no effect, but can help avoid numerical underflow in intermediate gradients when float16 tensors are used. By multiplying the loss, each intermediate gradient will have the same multiplier applied.

The loss scale can either be a fixed constant, chosen by the user, or be dynamically determined. Dynamically determining the loss scale is convenient as a loss scale does not have to be explicitly chosen. However it reduces performance.
[LossScale.update()](https://www.tensorflow.org/api_docs/python/tf/train/experimental/LossScale#update)This optimizer wraps another optimizer and applies loss scaling to it via a LossScale. Loss scaling is applied whenever gradients are computed, either through minimize() or get_gradients(). The loss scale is updated via  whenever gradients are applied, either through minimize() or apply_gradients(). For example:


```
 opt = tf.keras.optimizers.SGD(0.1)
opt = tf.keras.mixed_precision.experimental.LossScaleOptimizer(opt, "dynamic")
# 'minimize' applies loss scaling to the loss and updates the loss sale.
opt.minimize(loss_fn)
```
[tf.GradientTape](https://www.tensorflow.org/api_docs/python/tf/GradientTape)If a  is used to compute gradients instead of LossScaleOptimizer.minimize or LossScaleOptimizer.get_gradients, the loss and gradients must be scaled manually. This can be done by calling LossScaleOptimizer.get_scaled_loss before passing the loss to , and LossScaleOptimizer.get_unscaled_gradients after computing the gradients with . For example:


```
 opt = tf.keras.mixed_precision.experimental.LossScaleOptimizer(...)
vars = ...
with tf.GradientTape() as tape:
  loss = ...
  scaled_loss = opt.get_scaled_loss(loss)
scaled_grads = tape.gradient(scaled_loss, vars)
grads = opt.get_unscaled_gradients(scaled_grads)
opt.apply_gradients(zip(grads, vars))  # Loss scale will be updated here
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L104-L142)


```
 __init__(
    optimizer,
    loss_scale
)
```

Initializes this loss scale optimizer.
#### Args:
- `optimizer`: The Optimizer instance to wrap.
- `loss_scale`: The loss scale to scale the loss and gradients. This can either be an int/float to use a fixed loss scale, the string "dynamic" to use dynamic loss scaling, or an instance of a LossScale. The string "dynamic" equivalent to passing `DynamicLossScale`(), and passing an int/float is equivalent to passing a FixedLossScale with the given loss scale.
## Properties
### iterations

Variable. The number of training steps this Optimizer has run.
### learning_rate
### loss_scale

The LossScale instance associated with this optimizer.
### lr
### weights

Returns variables of this Optimizer based on the order created.
## Methods
### add_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L324-L328)


```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
```

Add a new slot variable for var.
### add_weight
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L768-L808)


```
 add_weight(
    name,
    shape,
    dtype=None,
    initializer='zeros',
    trainable=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
```
### apply_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L214-L219)


```
 apply_gradients(
    grads_and_vars,
    name=None
)
```

Apply gradients to variables.

This is the second part of minimize(). It returns an Operation that applies gradients.
#### Args:
- `grads_and_vars`: List of (gradient, variable) pairs.
- `name`: Optional `name` for the returned operation. Default to the `name` passed to the `Optimizer` constructor.
#### Returns:

An Operation that applies the specified gradients. If global_step was not None, that operation also increments global_step.
#### Raises:
- `TypeError`: If `grads_and_vars` is malformed.
- `ValueError`: If none of the variables have gradients.
### from_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L256-L263)


```
 @classmethod
from_config(
    cls,
    config,
    custom_objects=None
)
```

Creates an optimizer from its config.

This method is the reverse of get_config, capable of instantiating the same optimizer from the config dictionary.
#### Arguments:
- `config`: A Python dictionary, typically the output of get_`config`.
- `custom_objects`: A Python dictionary mapping names to additional Python objects used to create this optimizer, such as a function used for a hyperparameter.
#### Returns:

An optimizer instance.
### get_config
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L248-L254)


```
 get_config()
```

Returns the config of the optimimizer.

An optimizer config is a Python dictionary (serializable) containing the configuration of an optimizer. The same optimizer can be reinstantiated later (without any saved state) from this configuration.
#### Returns:

Python dictionary.
### get_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L209-L212)


```
 get_gradients(
    loss,
    params
)
```

Returns gradients of loss with respect to params.
#### Arguments:
- `loss`: Loss tensor.
- `params`: List of variables.
#### Returns:

List of gradient tensors.
#### Raises:
- `ValueError`: In case any gradient cannot be computed (e.g. if gradient function not implemented).
### get_scaled_loss
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L149-L173)


```
 get_scaled_loss(loss)
```

Scales the loss by the loss scale.
[tf.GradientTape](https://www.tensorflow.org/api_docs/python/tf/GradientTape)This method is only needed if you compute gradients manually, e.g. with . In that case, call this method to scale the loss before passing the loss to . If you use LossScaleOptimizer.minimize or LossScaleOptimizer.get_gradients, loss scaling is automatically applied and this method is unneeded.

[tf.keras.mixed_precision.experimental.LossScaleOptimizer](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer)If this method is called, get_unscaled_gradients should also be called. See the  doc for an example.

#### Args:
- `loss`: The `loss`, which will be multiplied by the `loss` scale. Can either be a tensor or a callable returning a tensor.
#### Returns:
[LossScaleOptimizer.loss_scale()](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#loss_scale)loss multiplied by .

### get_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L313-L322)


```
 get_slot(
    var,
    slot_name
)
```
### get_slot_names
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L276-L277)


```
 get_slot_names()
```

A list of names for this optimizer's slots.
### get_unscaled_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L175-L198)


```
 get_unscaled_gradients(grads)
```

Unscales the gradients by the loss scale.
[tf.GradientTape](https://www.tensorflow.org/api_docs/python/tf/GradientTape)This method is only needed if you compute gradients manually, e.g. with . In that case, call this method to unscale the gradients after computing them with . If you use LossScaleOptimizer.minimize or LossScaleOptimizer.get_gradients, loss scaling is automatically applied and this method is unneeded.

[tf.keras.mixed_precision.experimental.LossScaleOptimizer](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer)If this method is called, get_scaled_loss should also be called. See the  doc for an example.

#### Args:
- `grads`: A list of tensors, each which will be divided by the loss scale. Can have None values, which are ignored.
#### Returns:
[LossScaleOptimizer.loss_scale()](https://www.tensorflow.org/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#loss_scale)A new list the same size as grads, where every non-None value in grads is divided by .

### get_updates
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)


```
 get_updates(
    loss,
    params
)
```
### get_weights
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L286-L287)


```
 get_weights()
```
### minimize
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L290-L319)


```
 minimize(
    loss,
    var_list,
    grad_loss=None,
    name=None
)
```

Minimize loss by updating var_list.
[tf.GradientTape](https://www.tensorflow.org/api_docs/python/tf/GradientTape)This method simply computes gradient using  and calls apply_gradients(). If you want to process the gradient before applying then call  and apply_gradients() explicitly instead of using this function.

#### Args:
- `loss`: A callable taking no arguments which returns the value to minimize.
- `var_list`: list or tuple of `Variable` objects to update to `minimize` `loss`, or a callable returning the list or tuple of `Variable` objects. Use callable when the variable list would otherwise be incomplete before `minimize` since the variables are created at the first time `loss` is called.
- `grad_loss`: Optional. A `Tensor` holding the gradient computed for `loss`.
- `name`: Optional `name` for the returned operation.
#### Returns:

An Operation that updates the variables in var_list. If global_step was not None, that operation also increments global_step.
#### Raises:
- `ValueError`: If some of the variables are not `Variable` objects.
### set_weights
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L289-L290)


```
 set_weights(weights)
```
### variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L279-L280)


```
 variables()
```

Returns variables of this Optimizer based on the order created.
