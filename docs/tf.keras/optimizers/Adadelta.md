[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/Adadelta) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adadelta.py#L32-L169)  
---|---  
  
## Class `Adadelta`

Optimizer that implements the Adadelta algorithm.

Inherits From:
[`Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

### Aliases:

  * Class [`tf.compat.v1.keras.optimizers.Adadelta`](/api_docs/python/tf/keras/optimizers/Adadelta)
  * Class [`tf.compat.v2.keras.optimizers.Adadelta`](/api_docs/python/tf/keras/optimizers/Adadelta)
  * Class [`tf.compat.v2.optimizers.Adadelta`](/api_docs/python/tf/keras/optimizers/Adadelta)
  * Class [`tf.optimizers.Adadelta`](/api_docs/python/tf/keras/optimizers/Adadelta)

Adadelta optimization is a stochastic gradient descent method that is based on
adaptive learning rate per dimension to address two drawbacks: 1) the
continual decay of learning rates throughout training 2) the need for a
manually selected global learning rate

Two accumulation steps are required: 1) the accumulation of gradients squared,
2) the accumulation of updates squared.

#### Initialization:

$$E[g^2]_0 := 0 \text{(Initialize gradient 2nd order moment vector)}$$

$$E[\Delta x^2]_0 := 0 \text{(Initialize 2nd order variable update)}$$

$$t := t + 1$$

$$E[g^2]_t := \rho * E[g^2]_{t-1} + (1 - \rho) * g^2$$

$$\Delta x_t = -RMS[\Delta x]_{t-1} * g_t / RMS[g]_t$$

$$E[\Delta x^2]_t := \rho * E[\Delta x^2]_{t-1} + (1 - \rho) * \Delta x_t^2$$

$$x_t := x_{t-1} + \Delta x_{t}$$

References See [M. D. Zeiler](http://arxiv.org/abs/1212.5701)
([pdf](http://arxiv.org/pdf/1212.5701v1.pdf))

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adadelta.py#L61-L101)

    
    
    __init__(
        learning_rate=0.001,
        rho=0.95,
        epsilon=1e-07,
        name='Adadelta',
        **kwargs
    )
    

Construct a new Adadelta optimizer.

Adadelta is a more robust extension of Adagrad that adapts learning rates
based on a moving window of gradient updates, instead of accumulating all past
gradients. This way, Adadelta continues learning even when many updates have
been done. Compared to Adagrad, in the original version of Adadelta you don't
have to set an initial learning rate. In this version, initial learning rate
can be set, as in most other Keras optimizers.

#### Args:

  * **`learning_rate`** : A `Tensor` or a floating point value. The learning rate. To match the exact form in the original paper use 1.0.
  * **`rho`** : A `Tensor` or a floating point value. The decay rate.
  * **`epsilon`** : A `Tensor` or a floating point value. A constant epsilon used to better conditioning the grad update.
  * **`name`** : Optional name prefix for the operations created when applying gradients. Defaults to "Adadelta".
  * **`**kwargs`** : keyword arguments. Allowed to be {`clipnorm`, `clipvalue`, `lr`, `decay`}. `clipnorm` is clip gradients by norm; `clipvalue` is clip gradients by value, `decay` is included for backward compatibility to allow time inverse decay of learning rate. `lr` is included for backward compatibility, recommended to use `learning_rate` instead.

#### Eager Compatibility

When eager execution is enabled, `learning_rate`, `rho`, and `epsilon` can
each be a callable that takes no arguments and returns the actual value to
use. This can be useful for changing these values across different invocations
of optimizer functions.

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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adadelta.py#L161-L169)

    
    
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adadelta.py#L117-L124)

    
    
    set_weights(weights)
    

### `variables`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)

    
    
    variables()
    

Returns variables of this Optimizer based on the order created.

