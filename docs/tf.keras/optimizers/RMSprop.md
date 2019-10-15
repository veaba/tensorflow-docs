## Class RMSprop

Optimizer that implements the RMSprop algorithm.
[Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.optimizers.RMSprop`
- Class `tf.compat.v2.keras.optimizers.RMSprop`
- Class `tf.compat.v2.optimizers.RMSprop`
- Class `tf.optimizers.RMSprop`
### Used in the guide:
- ``K``e``r``a``s`` ``c``u``s``t``o``m`` ``c``a``l``l``b``a``c``k``s``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``a``s``i``c`` ``r``e``g``r``e``s``s``i``o``n``:`` ``P``r``e``d``i``c``t`` ``f``u``e``l`` ``e``f``f``i``c``i``e``n``c``y``
- ``L``o``a``d`` ``N``u``m``P``y`` ``d``a``t``a``
- ``T``i``m``e`` ``s``e``r``i``e``s`` ``f``o``r``e``c``a``s``t``i``n``g``
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``a`` ``p``r``e``t``r``a``i``n``e``d`` ``C``o``n``v``N``e``t``

A detailed description of rmsprop.
- ``m``a``i``n``t``a``i``n`` ``a`` ``m``o``v``i``n``g`` ``(``d``i``s``c``o``u``n``t``e``d``)`` ``a``v``e``r``a``g``e`` ``o``f`` ``t``h``e`` ``s``q``u``a``r``e`` ``o``f`` ``g``r``a``d``i``e``n``t``s``
- ``d``i``v``i``d``e`` ``g``r``a``d``i``e``n``t`` ``b``y`` ``t``h``e`` ``r``o``o``t`` ``o``f`` ``t``h``i``s`` ``a``v``e``r``a``g``e``

This implementation of RMSprop uses plain momentum, not Nesterov momentum.

The centered version additionally maintains a moving average of the gradients, and uses that average to estimate the variance:

References See ([pdf] http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L63-L119)


```
 __init__(
    learning_rate=0.001,
    rho=0.9,
    momentum=0.0,
    epsilon=1e-07,
    centered=False,
    name='RMSprop',
    **kwargs
)
```

Construct a new RMSprop optimizer.
[tf.gather](https://www.tensorflow.org/api_docs/python/tf/gather)Note that in the dense implementation of this algorithm, variables and their corresponding accumulators (momentum, gradient moving average, square gradient moving average) will be updated even if the gradient is zero (i.e. accumulators will decay, momentum will be applied). The sparse implementation (used when the gradient is an IndexedSlices object, typically because of  or an embedding lookup in the forward pass) will not update variable slices or their accumulators unless those slices were used in the forward pass (nor is there an "eventual" correction to account for these omitted updates). This leads to more efficient updates for large embedding lookup tables (where most of the slices are not accessed in a particular graph execution), but differs from the published algorithm.

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `rho`: Discounting factor for the history/coming gradient
- `momentum`: A scalar tensor.
- `epsilon`: Small value to avoid zero denominator.
- `centered`: If True, gradients are normalized by the estimated variance of the gradient; if False, by the un`centered` second moment. Setting this to True may help with training, but is slightly more expensive in terms of computation and memory. Defaults to False.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "RMSprop". @compatibility(eager) When eager execution is enabled, `learning_rate`, `decay`, `momentum`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L256-L266)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L247-L254)


```
 set_weights(weights)
```
### variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)


```
 variables()
```

Returns variables of this Optimizer based on the order created.
