[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/optimizers/Adagrad) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L38-L206)  
---|---  
  
## Class `Adagrad`

Optimizer that implements the Adagrad algorithm.

Inherits From:
[`Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

### Aliases:

  * Class [`tf.compat.v1.keras.optimizers.Adagrad`](/api_docs/python/tf/keras/optimizers/Adagrad)
  * Class [`tf.compat.v2.keras.optimizers.Adagrad`](/api_docs/python/tf/keras/optimizers/Adagrad)
  * Class [`tf.compat.v2.optimizers.Adagrad`](/api_docs/python/tf/keras/optimizers/Adagrad)
  * Class [`tf.optimizers.Adagrad`](/api_docs/python/tf/keras/optimizers/Adagrad)

Adagrad is an optimizer with parameter-specific learning rates, which are
adapted relative to how frequently a parameter gets updated during training.
The more updates a parameter receives, the smaller the updates.

#### Initialization:

$$accum_{g_0} := \text{initial_accumulator_value}$$

#### Update step:

$$t := t + 1$$

$$accum_{g_t} := accum_{g_{t-1}} + g^2$$

$$\theta_t := \theta_{t-1} - lr * g / (\sqrt{accum_{g_t}} + \epsilon)$$

#### References:

  * [Paper](http://www.jmlr.org/papers/volume12/duchi11a/duchi11a.pdf).
  * [Introduction](https://ppasupat.github.io/a9online/uploads/proximal_notes.pdf).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L61-L102)

    
    
    __init__(  
        learning_rate=0.001,  
        initial_accumulator_value=0.1,  
        epsilon=1e-07,  
        name='Adagrad',  
        **kwargs  
    )  
    

Construct a new Adagrad optimizer.

#### Args:

  * **`learning_rate`** : A `Tensor` or a floating point value. The learning rate.
  * **`initial_accumulator_value`** : A floating point value. Starting value for the accumulators, must be positive.
  * **`epsilon`** : A floating point value. Starting value for the accumulators, must be positive.
  * **`name`** : Optional name prefix for the operations created when applying gradients. Defaults to "Adagrad".
  * **`**kwargs`** : keyword arguments. Allowed to be {`clipnorm`, `clipvalue`, `lr`, `decay`}. `clipnorm` is clip gradients by norm; `clipvalue` is clip gradients by value, `decay` is included for backward compatibility to allow time inverse decay of learning rate. `lr` is included for backward compatibility, recommended to use `learning_rate` instead.

#### Raises:

  * **`ValueError`** : If the `initial_accumulator_value` or `epsilon` is invalid.

#### Eager Compatibility

When eager execution is enabled, `learning_rate` can be a callable that takes
no arguments and returns the actual value to use. This can be useful for
changing these values across different invocations of optimizer functions.

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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L128-L149)

    
    
    @classmethod  
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L198-L206)

    
    
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
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adagrad.py#L119-L126)

    
    
    set_weights(weights)  
    

### `variables`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)

    
    
    variables()  
    

Returns variables of this Optimizer based on the order created.

