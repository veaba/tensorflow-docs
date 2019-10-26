## Class FtrlOptimizer
Optimizer that implements the FTRL algorithm.
[Optimizer](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)Inherits From: 

[paper](https://www.eecs.tufts.edu/~dsculley/papers/ad-click-prediction.pdf)See this . This version has support for both online L2 (the L2 penalty given in the  above) and shrinkage-type L2 (which is the addition of an L2 penalty to the loss function).

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/ftrl.py#L39-L123)


```
 __init__(
    learning_rate,
    learning_rate_power=-0.5,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    use_locking=False,
    name='Ftrl',
    accum_name=None,
    linear_name=None,
    l2_shrinkage_regularization_strength=0.0
)
```
Construct a new FTRL optimizer.
#### Args:
- learning_rate: A float value or a constant float Tensor.
- learning_rate_power: A float value, must be less or equal to zero. Controls how the learning rate decreases during training. Use zero for a fixed learning rate. See section 3.1 in the paper.
- initial_accumulator_value: The starting value for accumulators. Only zero or positive values are allowed.
- l1_regularization_strength: A float value, must be greater than or equal to zero.
- l2_regularization_strength: A float value, must be greater than or equal to zero.
- use_locking: If True use locks for update operations.
- name: Optional name prefix for the operations created when applying gradients. Defaults to "Ftrl".
- accum_name: The suffix for the variable that keeps the gradient squared accumulator. If not present, defaults to name.
- linear_name: The suffix for the variable that keeps the linear gradient accumulator. If not present, defaults to name + "_1".
- l2_shrinkage_regularization_strength: A float value, must be greater than or equal to zero. This differs from L2 above in that the L2 above is a stabilization penalty, whereas this L2 shrinkage is a magnitude penalty. The FTRL formulation can be written as: w_{t+1} = argminw(\hat{g}{1:t}w + L1||w||_1 + L2||w||_2^2), where \hat{g} = g + (2L2_shrinkagew), and g is the gradient of the loss function w.r.t. the weights w. Specifically, in the absence of L1 regularization, it is equivalent to the following update rule: w_{t+1} = w_t - lr_t / (1 + 2L2lr_t) * g_t - 2L2_shrinkagelr_t / (1 + 2L2lr_t) * w_t where lr_t is the learning rate at t. When input is sparse shrinkage will only happen on the active weights.
#### Raises:
- ValueError: If one of the arguments is invalid.
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
- grads_and_vars: List of (gradient, variable) pairs as returned by compute_gradients().
- global_step: Optional Variable to increment by one after the variables have been updated.
- name: Optional name for the returned operation. Default to the name passed to the Optimizer constructor.
#### Returns:
An Operation that applies the specified gradients. If global_step was not None, that operation also increments global_step.
#### Raises:
- TypeError: If grads_and_vars is malformed.
- ValueError: If none of the variables have gradients.
- RuntimeError: If you should use _distributed_apply() instead.
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
- loss: A Tensor containing the value to minimize or a callable taking no arguments which returns the value to minimize. When eager execution is enabled it must be a callable.
- var_list: Optional list or tuple of tf.Variable to update to minimize loss. Defaults to the list of variables collected in the graph under the key GraphKeys.TRAINABLE_VARIABLES.
- gate_gradients: How to gate the computation of gradients. Can be GATE_NONE, GATE_OP, or GATE_GRAPH.
- aggregation_method: Specifies the method used to combine gradient terms. Valid values are defined in the class AggregationMethod.
- colocate_gradients_with_ops: If True, try colocating gradients with the corresponding op.
- grad_loss: Optional. A Tensor holding the gradient computed for loss.
#### Returns:
A list of (gradient, variable) pairs. Variable is always present, but gradient can be None.
#### Raises:
- TypeError: If var_list contains anything else than Variable objects.
- ValueError: If some arguments are invalid.
- RuntimeError: If called with eager execution enabled and loss is not callable.
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
- var: A variable passed to minimize() or apply_gradients().
- name: A string.
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
- loss: A Tensor containing the value to minimize.
- global_step: Optional Variable to increment by one after the variables have been updated.
- var_list: Optional list or tuple of Variable objects to update to minimize loss. Defaults to the list of variables collected in the graph under the key GraphKeys.TRAINABLE_VARIABLES.
- gate_gradients: How to gate the computation of gradients. Can be GATE_NONE, GATE_OP, or GATE_GRAPH.
- aggregation_method: Specifies the method used to combine gradient terms. Valid values are defined in the class AggregationMethod.
- colocate_gradients_with_ops: If True, try colocating gradients with the corresponding op.
- name: Optional name for the returned operation.
- grad_loss: Optional. A Tensor holding the gradient computed for loss.
#### Returns:
An Operation that updates the variables in var_list. If global_step was not None, that operation also increments global_step.
#### Raises:
- ValueError: If some of the variables are not Variable objects.
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
- GATE_GRAPH = 2
- GATE_NONE = 0
- GATE_OP = 1
