[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/Adam) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L32-L271)  
---|---  
  
## Class `Adam`

Optimizer that implements the Adam algorithm.

Inherits From:
[`Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

### Aliases:

  * Class [`tf.compat.v1.keras.optimizers.Adam`](/api_docs/python/tf/keras/optimizers/Adam)
  * Class [`tf.compat.v2.keras.optimizers.Adam`](/api_docs/python/tf/keras/optimizers/Adam)
  * Class [`tf.compat.v2.optimizers.Adam`](/api_docs/python/tf/keras/optimizers/Adam)
  * Class [`tf.optimizers.Adam`](/api_docs/python/tf/keras/optimizers/Adam)

### Used in the guide:

  * [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
  * [Keras overview](https://tensorflow.google.cn/guide/keras/overview)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)
  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

### Used in the tutorials:

  * [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
  * [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
  * [Custom training: basics](https://tensorflow.google.cn/tutorials/customization/custom_training)
  * [Custom training with tf.distribute.Strategy](https://tensorflow.google.cn/tutorials/distribute/custom_training)
  * [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)

Adam optimization is a stochastic gradient descent method that is based on
adaptive estimation of first-order and second-order moments. According to the
paper [Adam: A Method for Stochastic Optimization. Kingma et al.,
2014](http://arxiv.org/abs/1412.6980), the method is " _computationally
efficient, has little memory requirement, invariant to diagonal rescaling of
gradients, and is well suited for problems that are large in terms of
data/parameters_ ".

For AMSGrad see [On The Convergence Of Adam And Beyond. Reddi et al.,
5-8](https://openreview.net/pdf?id=ryQu7f-RZ).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L48-L140)

    
    
    __init__(
        learning_rate=0.001,
        beta_1=0.9,
        beta_2=0.999,
        epsilon=1e-07,
        amsgrad=False,
        name='Adam',
        **kwargs
    )
    

Construct a new Adam optimizer.

If amsgrad = False: Initialization:

\\(m_0 := 0 \text{(Initialize initial 1st moment vector)}\\)

\\(v_0 := 0 \text{(Initialize initial 2nd moment vector)}\\)

\\(t := 0 \text{(Initialize timestep)}\\)

The update rule for `variable` with gradient `g` uses an optimization
described at the end of section 2 of the paper:

\\(t := t + 1\\)

\\(lr_t := \text{learning\\_rate} * \sqrt{1 - beta_2^t} / (1 - beta_1^t)\\)

\\(m_t := beta_1 * m_{t-1} + (1 - beta_1) * g\\)

\\(v_t := beta_2 * v_{t-1} + (1 - beta_2) * g * g\\)

\\(variable := variable - lr_t * m_t / (\sqrt{v_t} + \epsilon)\\)

If amsgrad = True: Initialization:

\\(m_0 := 0 \text{(Initialize initial 1st moment vector)}\\)

\\(v_0 := 0 \text{(Initialize initial 2nd moment vector)}\\)

\\(v_hat_0 := 0 \text{(Initialize initial 2nd moment vector)}\\)

\\(t := 0 \text{(Initialize timestep)}\\)

The update rule for `variable` with gradient `g` uses an optimization
described at the end of section 2 of the paper:

\\(t := t + 1\\)

\\(lr_t := \text{learning\\_rate} * \sqrt{1 - beta_2^t} / (1 - beta_1^t)\\)

\\(m_t := beta_1 * m_{t-1} + (1 - beta_1) * g\\)

\\(v_t := beta_2 * v_{t-1} + (1 - beta_2) * g * g\\)

\\(v_hat_t := max(v_hat_{t-1}, v_t)\\)

\\(variable := variable - lr_t * m_t / (\sqrt{v_hat_t} + \epsilon)\\)

The default value of 1e-7 for epsilon might not be a good default in general.
For example, when training an Inception network on ImageNet a current good
choice is 1.0 or 0.1. Note that since AdamOptimizer uses the formulation just
before Section 2.1 of the Kingma and Ba paper rather than the formulation in
Algorithm 1, the "epsilon" referred to here is "epsilon hat" in the paper.

The sparse implementation of this algorithm (used when the gradient is an
IndexedSlices object, typically because of
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather) or an
embedding lookup in the forward pass) does apply momentum to variable slices
even if they were not used in the forward pass (meaning they have a gradient
equal to zero). Momentum decay (beta1) is also applied to the entire momentum
accumulator. This means that the sparse behavior is equivalent to the dense
behavior (in contrast to some momentum implementations which ignore momentum
unless a variable slice was actually used).

#### Args:

  * **`learning_rate`** : A Tensor or a floating point value. The learning rate.
  * **`beta_1`** : A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
  * **`beta_2`** : A float value or a constant float tensor. The exponential decay rate for the 2nd moment estimates.
  * **`epsilon`** : A small constant for numerical stability. This epsilon is "epsilon hat" in the Kingma and Ba paper (in the formula just before Section 2.1), not the epsilon in Algorithm 1 of the paper.
  * **`amsgrad`** : boolean. Whether to apply AMSGrad variant of this algorithm from the paper "On the Convergence of Adam and beyond".
  * **`name`** : Optional name for the operations created when applying gradients. Defaults to "Adam". @compatibility(eager) When eager execution is enabled, `learning_rate`, `beta_1`, `beta_2`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
  * **`**kwargs`** : keyword arguments. Allowed to be {`clipnorm`, `clipvalue`, `lr`, `decay`}. `clipnorm` is clip gradients by norm; `clipvalue` is clip gradients by value, `decay` is included for backward compatibility to allow time inverse decay of learning rate. `lr` is included for backward compatibility, recommended to use `learning_rate` instead.

## Properties

### `iterations`

Variable. The number of training steps this Optimizer has run.

### `weights`

Returns variables of this Optimizer based on the order created.

## Methods

### `add_slot`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L567-L594)

    
    
    add_slot(
        var,
        slot_name,
        initializer='zeros'
    )
    

Add a new slot variable for `var`.

### `add_weight`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L768-L808)

    
    
    add_weight(
        name,
        shape,
        dtype=None,
        initializer='zeros',
        trainable=None,
        synchronization=tf.VariableSynchronization.AUTO,
        aggregation=tf.compat.v1.VariableAggregation.NONE
    )
    

### `apply_gradients`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L408-L441)

    
    
    apply_gradients(
        grads_and_vars,
        name=None
    )
    

Apply gradients to variables.

This is the second part of `minimize()`. It returns an `Operation` that
applies gradients.

#### Args:

  * **`grads_and_vars`** : List of (gradient, variable) pairs.
  * **`name`** : Optional name for the returned operation. Default to the name passed to the `Optimizer` constructor.

#### Returns:

An `Operation` that applies the specified gradients. If `global_step` was not
None, that operation also increments `global_step`.

#### Raises:

  * **`TypeError`** : If `grads_and_vars` is malformed.
  * **`ValueError`** : If none of the variables have gradients.

### `from_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L698-L721)

    
    
    from_config(
        cls,
        config,
        custom_objects=None
    )
    

Creates an optimizer from its config.

This method is the reverse of `get_config`, capable of instantiating the same
optimizer from the config dictionary.

#### Arguments:

  * **`config`** : A Python dictionary, typically the output of get_config.
  * **`custom_objects`** : A Python dictionary mapping names to additional Python objects used to create this optimizer, such as a function used for a hyperparameter.

#### Returns:

An optimizer instance.

### `get_config`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L261-L271)

    
    
    get_config()
    

Returns the config of the optimimizer.

An optimizer config is a Python dictionary (serializable) containing the
configuration of an optimizer. The same optimizer can be reinstantiated later
(without any saved state) from this configuration.

#### Returns:

Python dictionary.

### `get_gradients`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406)

    
    
    get_gradients(
        loss,
        params
    )
    

Returns gradients of `loss` with respect to `params`.

#### Arguments:

  * **`loss`** : Loss tensor.
  * **`params`** : List of variables.

#### Returns:

List of gradient tensors.

#### Raises:

  * **`ValueError`** : In case any gradient cannot be computed (e.g. if gradient function not implemented).

### `get_slot`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L596-L599)

    
    
    get_slot(
        var,
        slot_name
    )
    

### `get_slot_names`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L563-L565)

    
    
    get_slot_names()
    

A list of names for this optimizer's slots.

### `get_updates`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)

    
    
    get_updates(
        loss,
        params
    )
    

### `get_weights`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L743-L745)

    
    
    get_weights()
    

### `minimize`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L290-L319)

    
    
    minimize(
        loss,
        var_list,
        grad_loss=None,
        name=None
    )
    

Minimize `loss` by updating `var_list`.

This method simply computes gradient using
[`tf.GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape)
and calls `apply_gradients()`. If you want to process the gradient before
applying then call
[`tf.GradientTape`](https://tensorflow.google.cn/api_docs/python/tf/GradientTape)
and `apply_gradients()` explicitly instead of using this function.

#### Args:

  * **`loss`** : A callable taking no arguments which returns the value to minimize.
  * **`var_list`** : list or tuple of `Variable` objects to update to minimize `loss`, or a callable returning the list or tuple of `Variable` objects. Use callable when the variable list would otherwise be incomplete before `minimize` since the variables are created at the first time `loss` is called.
  * **`grad_loss`** : Optional. A `Tensor` holding the gradient computed for `loss`.
  * **`name`** : Optional name for the returned operation.

#### Returns:

An Operation that updates the variables in `var_list`. If `global_step` was
not `None`, that operation also increments `global_step`.

#### Raises:

  * **`ValueError`** : If some of the variables are not `Variable` objects.

### `set_weights`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L174-L182)

    
    
    set_weights(weights)
    

### `variables`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)

    
    
    variables()
    

Returns variables of this Optimizer based on the order created.

