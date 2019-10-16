## Class Ftrl

Optimizer that implements the FTRL algorithm.
[Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.optimizers.Ftrl`
- Class `tf.compat.v2.keras.optimizers.Ftrl`
- Class `tf.compat.v2.optimizers.Ftrl`
- Class `tf.optimizers.Ftrl`
[paper](https://www.eecs.tufts.edu/~dsculley/papers/ad-click-prediction.pdf)See Algorithm 1 of this . This version has support for both online L2 (the L2 penalty given in the  above) and shrinkage-type L2 (which is the addition of an L2 penalty to the loss function).

#### Initialization:

Update (

Check the documentation for the l2_shrinkage_regularization_strength parameter for more details when shrinkage is enabled, where gradient is replaced with gradient_with_shrinkage.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/ftrl.py#L57-L136)


```
 __init__(
    learning_rate=0.001,
    learning_rate_power=-0.5,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    name='Ftrl',
    l2_shrinkage_regularization_strength=0.0,
    **kwargs
)
```

Construct a new FTRL optimizer.
#### Args:
- `learning_rate`: A float value or a constant float `Tensor`.
- `learning_rate`_power: A float value, must be less or equal to zero. Controls how the learning rate decreases during training. Use zero for a fixed learning rate.
- `initial_accumulator_value`: The starting value for accumulators. Only zero or positive values are allowed.
- `l1_regularization_strength`: A float value, must be greater than or equal to zero.
- `l2_regularization_strength`: A float value, must be greater than or equal to zero.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Ftrl".
- `l2_shrinkage_regularization_strength`: A float value, must be greater than or equal to zero. This differs from L2 above in that the L2 above is a stabilization penalty, whereas this L2 shrinkage is a magnitude penalty. The FTRL formulation can be written as: w_{t+1} = argminw(\hat{g}{1:t}w + L1||w||_1 + L2||w||_2^2), where \hat{g} = g + (2L2_shrinkagew), and g is the gradient of the loss function w.r.t. the weights w. Specifically, in the absence of L1 regularization, it is equivalent to the following update rule: w_{t+1} = w_t - lr_t / (1 + 2L2lr_t) * g_t - 2L2_shrinkagelr_t / (1 + 2L2lr_t) * w_t where lr_t is the learning rate at t. When input is sparse shrinkage will only happen on the active weights.\
#### Raises:
- `ValueError`: If one of the arguments is invalid.
[paper](https://www.eecs.tufts.edu/~dsculley/papers/ad-click-prediction.pdf)References See 

## Properties
### iterations

Variable. The number of training steps this Optimizer has run.
### weights

Returns variables of this Optimizer based on the order created.
## Methods
### add_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L567-L594)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L408-L441)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L698-L721)


```
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/ftrl.py#L226-L244)


```
 get_config()
```

Returns the config of the optimimizer.

An optimizer config is a Python dictionary (serializable) containing the configuration of an optimizer. The same optimizer can be reinstantiated later (without any saved state) from this configuration.
#### Returns:

Python dictionary.
### get_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406)


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
### get_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L596-L599)


```
 get_slot(
    var,
    slot_name
)
```
### get_slot_names
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L563-L565)


```
 get_slot_names()
```

A list of names for this optimizer's slots.
### get_updates
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)


```
 get_updates(
    loss,
    params
)
```
### get_weights
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L743-L745)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L748-L766)


```
 set_weights(weights)
```
### variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)


```
 variables()
```

Returns variables of this Optimizer based on the order created.
