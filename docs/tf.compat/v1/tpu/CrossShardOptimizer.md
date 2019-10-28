## Class CrossShardOptimizer
An optimizer that averages gradients across TPU shards.
Inherits From: `Optimizer`
## __init__
View source

```
 __init__(
    opt,
    reduction=losses.Reduction.MEAN,
    name='CrossShardOptimizer',
    group_assignment=None
)
```
Construct a new cross-shard optimizer.
#### Args:
- `opt`: An existing `Optimizer` to encapsulate.
- `reduction`: The `reduction` to apply to the shard losses.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "CrossShardOptimizer".
- `group_assignment`: Optional 2d int32 lists with shape [num_groups, num_replicas_per_group] which describles how to apply optimizer to subgroups.
#### Raises:
- `ValueError`: If reduction is not a valid cross-shard reduction.
## Methods
### apply_gradients
View source

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
```
Apply gradients to variables.
Calls tpu_ops.cross_replica_sum() to sum gradient contributions across replicas, and then applies the real optimizer.
#### Args:
- `grads_and_vars`: List of (gradient, variable) pairs as returned by compute_gradients().
- `global_step`: Optional Variable to increment by one after the variables have been updated.
- `name`: Optional `name` for the returned operation. Default to the `name` passed to the Optimizer constructor.
#### Returns:
An `Operation` that applies the gradients. If `global_step` was not None, that operation also increments `global_step`.
#### Raises:
- `ValueError`: If the grads_and_vars is malformed.
### compute_gradients
View source

```
 compute_gradients(
    loss,
    var_list=None,
    **kwargs
)
```
Compute gradients of "loss" for the variables in "var_list".
This simply wraps the compute_gradients() from the real optimizer. The gradients will be aggregated in the apply_gradients() so that user can modify the gradients like clipping with per replica global norm if needed. The global norm with aggregated gradients can be bad as one replica's huge gradients can hurt the gradients from other replicas.
#### Args:
- `loss`: A Tensor containing the value to minimize.
- `var_list`: Optional list or tuple of `tf.Variable` to update to minimize `loss`. Defaults to the list of variables collected in the graph under the key `GraphKey.TRAINABLE_VARIABLES`.
#### Returns:
A list of (gradient, variable) pairs.
#### Raises:
- `ValueError`: If not within a tpu_shard_context or group_assignment is invalid.
### get_name
View source

```
 get_name()
```
### get_slot
View source

```
 get_slot(
    *args,
    **kwargs
)
```
Return a slot named "name" created for "var" by the Optimizer.
This simply wraps the get_slot() from the actual optimizer.
#### Args:
#### Returns:
The `Variable` for the slot if it was created, `None` otherwise.
### get_slot_names
View source

```
 get_slot_names(
    *args,
    **kwargs
)
```
Return a list of the names of slots created by the `Optimizer`.
This simply wraps the get_slot_names() from the actual optimizer.
#### Args:
#### Returns:
A list of strings.
### minimize
View source

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
Add operations to minimize `loss` by updating `var_list`.
