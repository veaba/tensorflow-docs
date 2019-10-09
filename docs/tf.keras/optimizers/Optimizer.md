## Class Optimizer

Updated base class for optimizers.
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Optimizer`
- Class `tf.compat.v2.keras.optimizers.Optimizer`
- Class `tf.compat.v2.optimizers.Optimizer`
- Class `tf.optimizers.Optimizer`
[tf.keras.optimizers.SGD](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/SGD)This class defines the API to add Ops to train a model. You never use this class directly, but instead instantiate one of its subclasses such as , tf.keras.optimizers.Adam.

### Usage

```
 # Create an optimizer with the desired parameters.
opt = tf.keras.optimizers.SGD(learning_rate=0.1)
# `loss` is a callable that takes no argument and returns the value
# to minimize.
loss = lambda: 3 * var1 * var1 + 2 * var2 * var2
# In graph mode, returns op that minimizes the loss by updating the listed
# variables.
opt_op = opt.minimize(loss, var_list=[var1, var2])
opt_op.run()
# In eager mode, simply call minimize to update the list of variables.
opt.minimize(loss, var_list=[var1, var2])
```
### Custom training loop with Keras models

In Keras models, sometimes variables are created when the model is first called, instead of construction time. Examples include 1) sequential models without input shape pre-defined, or 2) subclassed models. Pass var_list as callable in these cases.
#### Example:

```
 opt = tf.keras.optimizers.SGD(learning_rate=0.1)
model = tf.keras.Sequential()
model.add(tf.keras.layers.Dense(num_hidden, activation='relu'))
model.add(tf.keras.layers.Dense(num_classes, activation='sigmoid'))
loss_fn = lambda: tf.keras.losses.mse(model(input), output)
var_list_fn = lambda: model.trainable_weights
for input, output in data:
  opt.minimize(loss_fn, var_list_fn)
```
### Processing gradients before applying them.

Calling minimize() takes care of both computing the gradients and applying them to the variables. If you want to process the gradients before applying them you can instead use the optimizer in three steps:
#### Example:

```
 # Create an optimizer.
opt = tf.keras.optimizers.SGD(learning_rate=0.1)

# Compute the gradients for a list of variables.
with tf.GradientTape() as tape:
  loss = <call_loss_function>
vars = <list_of_variables>
grads = tape.gradient(loss, vars)
processed_grads = [process_gradient(g) for g in grads]
grads_and_vars = zip(processed_grads, var_list)

# grads_and_vars is a list of tuples (gradient, variable).  Do whatever you
# need to the 'gradient' part, for example cap them, etc.
capped_grads_and_vars = [(MyCapper(gv[0]), gv[1]) for gv in grads_and_vars]

# Ask the optimizer to apply the capped gradients.
opt.apply_gradients(capped_grads_and_vars)
```
### Use with tf.distribute.Strategy.
[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)This optimizer class is  aware, which means it automatically sums gradients across all replicas. To average gradients, you divide your loss by the global batch size, which is done automatically if you use tf.keras built-in training or evaluation loops. See the reduction argument of your loss which should be set to tf.keras.losses.Reduction.SUM_OVER_BATCH_SIZE for averaging or tf.keras.losses.Reduction.SUM for not.

[tf.math.reduce_sum](https://www.tensorflow.org/api_docs/python/tf/math/reduce_sum)If you are not using these and you want to average gradients, you should use  to add up your per-example losses and then divide by the global batch size. Note that when using tf.distribute.Strategy, the first component of a tensor's shape is the replica-local batch size, which is off by a factor equal to the number of replicas being used to compute a single step. As a result, using tf.math.reduce_mean will give the wrong answer, resulting in gradients that can be many times too big.

### Variable Constraint

All Keras optimizers respect variable constraints. If constraint function is passed to any variable, the constraint will be applied to the variable after the gradient has been applied to the variable. Important: If gradient is sparse tensor, variable constraint is not supported.
### Thread Compatibility

The entire optimizer is currently thread compatible, not thread-safe. The user needs to perform synchronization if necessary.
### Slots

Many optimizer subclasses, such as Adam and Adagrad allocate and manage additional variables associated with the variables to train. These are called Slots. Slots have names and you can ask the optimizer for the names of the slots that it uses. Once you have a slot name you can ask the optimizer for the variable it created to hold the slot value.

This can be useful if you want to log debug a training algorithm, report stats about the slots, etc.
### Hyper parameters

These are arguments passed to the optimizer subclass constructor (the __init__ method), and then passed to self._set_hyper(). They can be either regular Python values (like 1.0), tensors, or callables. If they are callable, the callable will be called during apply_gradients() to get the value for the hyper parameter.

Hyper parameters can be overwritten through user code:
#### Example:

```
 # Create an optimizer with the desired parameters.
opt = tf.keras.optimizers.SGD(learning_rate=0.1)
# `loss` is a callable that takes no argument and returns the value
# to minimize.
loss = lambda: 3 * var1 + 2 * var2
# In eager mode, simply call minimize to update the list of variables.
opt.minimize(loss, var_list=[var1, var2])
# update learning rate
opt.learning_rate = 0.05
opt.minimize(loss, var_list=[var1, var2])
```
### Write a customized optimizer.

If you intend to create your own optimization algorithm, simply inherit from this class and override the following methods:
- ``r``e``s``o``u``r``c``e``_``a``p``p``l``y``_``d``e``n``s``e`` ``(``u``p``d``a``t``e`` ``v``a``r``i``a``b``l``e`` ``g``i``v``e``n`` ``g``r``a``d``i``e``n``t`` ``t``e``n``s``o``r`` ``i``s`` ``d``e``n``s``e``)``
- ``r``e``s``o``u``r``c``e``_``a``p``p``l``y``_``s``p``a``r``s``e`` ``(``u``p``d``a``t``e`` ``v``a``r``i``a``b``l``e`` ``g``i``v``e``n`` ``g``r``a``d``i``e``n``t`` ``t``e``n``s``o``r`` ``i``s`` ``s``p``a``r``s``e``)``
- ``c``r``e``a``t``e``_``s``l``o``t``s`` ``(``i``f`` ``y``o``u``r`` ``o``p``t``i``m``i``z``e``r`` ``a``l``g``o``r``i``t``h``m`` ``r``e``q``u``i``r``e``s`` ``a``d``d``i``t``i``o``n``a``l`` ``v``a``r``i``a``b``l``e``s``)``
- ``g``e``t``_``c``o``n``f``i``g`` ``(``s``e``r``i``a``l``i``z``a``t``i``o``n`` ``o``f`` ``t``h``e`` ``o``p``t``i``m``i``z``e``r``,`` ``i``n``c``l``u``d``e`` ``a``l``l`` ``h``y``p``e``r`` ``p``a``r``a``m``e``t``e``r``s``)``
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L228-L288)


```
 __init__(
    name,
    **kwargs
)
```

Create a new Optimizer.

This must be called by the constructors of subclasses. Note that Optimizer instances should not bind to a single graph, and so shouldn't keep Tensors as member variables. Generally you should be able to use the _set_hyper()/state.get_hyper() facility instead.

This class in stateful and thread-compatible.
#### Args:
- `name`: A non-empty string. The `name` to use for accumulators created for the optimizer.
#### Raises:
- `ValueError`: If name is malformed.
- `RuntimeError`: If _create_slots has been overridden instead of _create_vars.
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L679-L696)


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