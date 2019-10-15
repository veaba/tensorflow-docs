## Class Adam

Optimizer that implements the Adam algorithm.
[Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.optimizers.Adam`
- Class `tf.compat.v2.keras.optimizers.Adam`
- Class `tf.compat.v2.optimizers.Adam`
- Class `tf.optimizers.Adam`
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``C``y``c``l``e``G``A``N``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``a`` ``m``o``d``e``l`` ``u``s``i``n``g`` ``a`` ``d``i``s``t``r``i``b``u``t``i``o``n`` ``s``t``r``a``t``e``g``y``
- ``S``a``v``e`` ``a``n``d`` ``l``o``a``d`` ``m``o``d``e``l``s``
- ``T``e``n``s``o``r``F``l``o``w`` ``2`` ``q``u``i``c``k``s``t``a``r``t`` ``f``o``r`` ``e``x``p``e``r``t``s``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``e``x``t`` ``g``e``n``e``r``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w`` ``H``u``b``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
[Adam: A Method for Stochastic Optimization. Kingma et al., 2014](http://arxiv.org/abs/1412.6980)Adam optimization is a stochastic gradient descent method that is based on adaptive estimation of first-order and second-order moments. According to the paper , the method is "computationally efficient, has little memory requirement, invariant to diagonal rescaling of gradients, and is well suited for problems that are large in terms of data/parameters".

[On The Convergence Of Adam And Beyond. Reddi et al., 5-8](https://openreview.net/pdf?id=ryQu7f-RZ)For AMSGrad see .

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L48-L140)


```
 __init__(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999,
    epsilon=1e-07,
    amsgrad=False,
    name='Adam',
    **kwargs
)
```

Construct a new Adam optimizer.

If amsgrad = False: Initialization:

The update rule for variable with gradient g uses an optimization described at the end of section 2 of the paper:

If amsgrad = True: Initialization:

The update rule for variable with gradient g uses an optimization described at the end of section 2 of the paper:

The default value of 1e-7 for epsilon might not be a good default in general. For example, when training an Inception network on ImageNet a current good choice is 1.0 or 0.1. Note that since AdamOptimizer uses the formulation just before Section 2.1 of the Kingma and Ba paper rather than the formulation in Algorithm 1, the "epsilon" referred to here is "epsilon hat" in the paper.
[tf.gather](https://www.tensorflow.org/api_docs/python/tf/gather)The sparse implementation of this algorithm (used when the gradient is an IndexedSlices object, typically because of  or an embedding lookup in the forward pass) does apply momentum to variable slices even if they were not used in the forward pass (meaning they have a gradient equal to zero). Momentum decay (beta1) is also applied to the entire momentum accumulator. This means that the sparse behavior is equivalent to the dense behavior (in contrast to some momentum implementations which ignore momentum unless a variable slice was actually used).

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `beta_1`: A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
- `beta_2`: A float value or a constant float tensor. The exponential decay rate for the 2nd moment estimates.
- `epsilon`: A small constant for numerical stability. This `epsilon` is "`epsilon` hat" in the Kingma and Ba paper (in the formula just before Section 2.1), not the `epsilon` in Algorithm 1 of the paper.
- `amsgrad`: boolean. Whether to apply AMSGrad variant of this algorithm from the paper "On the Convergence of Adam and beyond".
- `name`: Optional `name` for the operations created when applying gradients. Defaults to "Adam". @compatibility(eager) When eager execution is enabled, `learning_rate`, `beta_1`, `beta_2`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L261-L271)


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L174-L182)


```
 set_weights(weights)
```
### variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)


```
 variables()
```

Returns variables of this Optimizer based on the order created.
