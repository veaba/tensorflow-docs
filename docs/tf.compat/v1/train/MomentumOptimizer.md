## Class MomentumOptimizer

Optimizer that implements the Momentum algorithm.
[Optimizer](https://www.tensorflow.org/api_docs/python/tf/compat/v1/train/Optimizer)Inherits From: 


Computes (if use_nesterov = False):

```
 accumulation = momentum * accumulation + gradient
variable -= learning_rate * accumulation
```
[tf.gather](https://www.tensorflow.org/api_docs/python/tf/gather)Note that in the dense version of this algorithm, accumulation is updated and applied regardless of a gradient's value, whereas the sparse version (when the gradient is an IndexedSlices, typically because of  or an embedding) only updates variable slices and corresponding accumulation terms when that part of the variable was used in the forward pass.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/momentum.py#L46-L78)


```
 __init__(
    learning_rate,
    momentum,
    use_locking=False,
    name='Momentum',
    use_nesterov=False
)
```

Construct a new Momentum optimizer.
#### Args:
- `learning_rate`: A `Tensor` or a floating point value. The learning rate.
- `momentum`: A `Tensor` or a floating point value. The `momentum`.
- `use_locking`: If `True` use locks for update operations.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "Momentum".
- `use_nesterov`: If `True` use Nesterov Momentum. See Sutskever et al., 2013. This implementation always computes gradients at the value of the variable(s) passed to the optimizer. Using Nesterov Momentum makes the variable(s) track the values called theta_t + mu*v_t in the paper. This implementation is an approximation of the original formula, valid for high values of `momentum`. It will compute the "adjusted gradient" in NAG by assuming that the new gradient will be estimated by the current average gradient plus the product of `momentum` and the change in the average gradient.
#### Eager Compatibility

When eager execution is enabled, learning_rate and momentum can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
## Methods
### apply_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L531-L638)


```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
```

Apply gradients to variables.

This is the second part of minimize(). It returns an Operation that applies gradients.
#### Args:
- `grads_and_vars`: List of (gradient, variable) pairs as returned by `compute_gradients`().
- `global_step`: Optional `Variable` to increment by one after the variables have been updated.
- `name`: Optional `name` for the returned operation. Default to the `name` passed to the `Optimizer` constructor.
#### Returns:

An Operation that applies the specified gradients. If global_step was not None, that operation also increments global_step.
#### Raises:
- `TypeError`: If `grads_and_vars` is malformed.
- `ValueError`: If none of the variables have gradients.
- `RuntimeError`: If you should use `_distributed_apply`() instead.
### compute_gradients
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L415-L519)


```
 compute_gradients(
    loss,
    var_list=None,
    gate_gradients=GATE_OP,
    aggregation_method=None,
    colocate_gradients_with_ops=False,
    grad_loss=None
)
```

Compute gradients of loss for the variables in var_list.

This is the first part of minimize(). It returns a list of (gradient, variable) pairs where "gradient" is the gradient for "variable". Note that "gradient" can be a Tensor, an IndexedSlices, or None if there is no gradient for the given variable.
#### Args:
- `loss`: A Tensor containing the value to minimize or a callable taking no arguments which returns the value to minimize. When eager execution is enabled it must be a callable.
- `var_list`: Optional list or tuple of `tf.Variable` to update to minimize `loss`. Defaults to the list of variables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES`.
- `gate_gradients`: How to gate the computation of gradients. Can be `GATE_NONE`, `GATE_OP`, or `GATE_GRAPH`.
- `aggregation_method`: Specifies the method used to combine gradient terms. Valid values are defined in the class `AggregationMethod`.
- `colocate_gradients_with_ops`: If True, try colocating gradients with the corresponding op.
- `grad_loss`: Optional. A `Tensor` holding the gradient computed for `loss`.
#### Returns:

A list of (gradient, variable) pairs. Variable is always present, but gradient can be None.
#### Raises:
- `TypeError`: If `var_list` contains anything else than `Variable` objects.
- `ValueError`: If some arguments are invalid.
- `RuntimeError`: If called with eager execution enabled and `loss` is not callable.
#### Eager Compatibility

When eager execution is enabled, gate_gradients, aggregation_method, and colocate_gradients_with_ops are ignored.
### get_name
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L352-L353)


```
 get_name()
```
### get_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L735-L771)


```
 get_slot(
    var,
    name
)
```

Return a slot named name created for var by the Optimizer.

Some Optimizer subclasses use additional variables. For example Momentum and Adagrad use variables to accumulate updates. This method gives access to these Variable objects if for some reason you need them.

Use get_slot_names() to get the list of slot names created by the Optimizer.
#### Args:
- `var`: A `var`iable passed to `minimize`() or `apply_gradients`().
- `name`: A string.
#### Returns:

The Variable for the slot if it was created, None otherwise.
### get_slot_names
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L773-L781)


```
 get_slot_names()
```

Return a list of the names of slots created by the Optimizer.

See get_slot().
#### Returns:

A list of strings.
### minimize
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L355-L413)


```
 minimize(
    loss,
    global_step=None,
    var_list=None,
    gate_gradients=GATE_OP,
    aggregation_method=None,
    colocate_gradients_with_ops=False,
    name=None,
    grad_loss=None
)
```

Add operations to minimize loss by updating var_list.

This method simply combines calls compute_gradients() and apply_gradients(). If you want to process the gradient before applying them call compute_gradients() and apply_gradients() explicitly instead of using this function.
#### Args:
- `loss`: A `Tensor` containing the value to minimize.
- `global_step`: Optional `Variable` to increment by one after the variables have been updated.
- `var_list`: Optional list or tuple of `Variable` objects to update to minimize `loss`. Defaults to the list of variables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES`.
- `gate_gradients`: How to gate the computation of gradients. Can be `GATE_NONE`, `GATE_OP`, or `GATE_GRAPH`.
- `aggregation_method`: Specifies the method used to combine gradient terms. Valid values are defined in the class `AggregationMethod`.
- `colocate_gradients_with_ops`: If True, try colocating gradients with the corresponding op.
- `name`: Optional `name` for the returned operation.
- `grad_loss`: Optional. A `Tensor` holding the gradient computed for `loss`.
#### Returns:

An Operation that updates the variables in var_list. If global_step was not None, that operation also increments global_step.
#### Raises:
- `ValueError`: If some of the variables are not `Variable` objects.
#### Eager Compatibility

When eager execution is enabled, loss should be a Python function that takes no arguments and computes the value to be minimized. Minimization (and gradient computation) is done with respect to the elements of var_list if not None, else with respect to any trainable variables created during the execution of the loss function. gate_gradients, aggregation_method, colocate_gradients_with_ops and grad_loss are ignored when eager execution is enabled.
### variables
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L783-L809)


```
 variables()
```

A list of variables which encode the current state of Optimizer.

Includes slot variables and additional global variables created by the optimizer in the current default graph.
#### Returns:

A list of variables.
## Class Members
- `GATE_GRAPH = 2`
- `GATE_NONE = 0`
- `GATE_OP = 1`
