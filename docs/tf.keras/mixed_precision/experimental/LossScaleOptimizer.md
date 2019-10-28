## Class LossScaleOptimizer
An optimizer that applies loss scaling.
Inherits From: `Optimizer`
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
[LossScale.update()](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale#update)


```
 opt = tf.keras.optimizers.SGD(0.1)
opt = tf.keras.mixed_precision.experimental.LossScaleOptimizer(opt, "dynamic")
# 'minimize' applies loss scaling to the loss and updates the loss sale.
opt.minimize(loss_fn)
```
If a `tf.GradientTape` is used to compute gradients instead of `LossScaleOptimizer.minimize` or `LossScaleOptimizer.get_gradients`, the loss and gradients must be scaled manually. This can be done by calling `LossScaleOptimizer.get_scaled_loss` before passing the loss to `tf.GradientTape`, and `LossScaleOptimizer.get_unscaled_gradients` after computing the gradients with `tf.GradientTape`. For example:

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
View source

```
 __init__(
    optimizer,
    loss_scale
)
```
Initializes this loss scale optimizer.
#### Args:
- `optimizer`: The Optimizer instance to wrap.
## Properties
### iterations
Variable. The number of training steps this Optimizer has run.
### learning_rate
### loss_scale
The `LossScale` instance associated with this optimizer.
### lr
### weights
Returns variables of this Optimizer based on the order created.
## Methods
### add_slot
View source

```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
```
Add a new slot `var`iable for `var`.
### add_weight
View source

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
View source

```
 apply_gradients(
    grads_and_vars,
    name=None
)
```
Apply gradients to variables.
