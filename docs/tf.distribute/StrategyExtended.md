## Class StrategyExtended

Additional APIs for algorithms that need to be distribution-aware.
### Aliases:
- Class `tf.compat.v2.distribute.StrategyExtended`

Lower-level concepts:
- ``W``r``a``p``p``e``d`` ``v``a``l``u``e``s``:`` ``I``n`` ``o``r``d``e``r`` ``t``o`` ``r``e``p``r``e``s``e``n``t`` ``v``a``l``u``e``s`` ``p``a``r``a``l``l``e``l`` ``a``c``r``o``s``s`` ``d``e``v``i``c``e``s`` ``(``e``i``t``h``e``r`` ``r``e``p``l``i``c``a``s`` ``o``r`` ``t``h``e`` ``d``e``v``i``c``e``s`` ``a``s``s``o``c``i``a``t``e``d`` ``w``i``t``h`` ``a`` ``p``a``r``t``i``c``u``l``a``r`` ``v``a``l``u``e``)``,`` ``w``e`` ``w``r``a``p`` ``t``h``e``m`` ``i``n`` ``a`` ``"``P``e``r``R``e``p``l``i``c``a``"`` ``o``r`` ``"``M``i``r``r``o``r``e``d``"`` ``o``b``j``e``c``t`` ``t``h``a``t`` ``c``o``n``t``a``i``n``s`` ``a`` ``m``a``p`` ``f``r``o``m`` ``r``e``p``l``i``c``a`` ``i``d`` ``t``o`` ``v``a``l``u``e``s``.`` ``"``P``e``r``R``e``p``l``i``c``a``"`` ``i``s`` ``u``s``e``d`` ``w``h``e``n`` ``t``h``e`` ``v``a``l``u``e`` ``m``a``y`` ``b``e`` ``d``i``f``f``e``r``e``n``t`` ``a``c``r``o``s``s`` ``r``e``p``l``i``c``a``s``,`` ``a``n``d`` ``"``M``i``r``r``o``r``e``d``"`` ``w``h``e``n`` ``t``h``e`` ``v``a``l``u``e`` ``a``r``e`` ``t``h``e`` ``s``a``m``e``.``
- Un`w`r`a`pping `a`nd merging: Consider c`a`lling `a` function `fn` on multiple replic`a`s, like `experimental_run_v2`(`fn`, `a`rgs=[`w`]) `w`ith `a`n `a`rgument `w` th`a`t is `a` `w`r`a`pped `v``a`lue. This me`a`ns `w` `w`ill h`a``v`e `a` m`a`p t`a`king replic`a` id `0` to `w``0`, replic`a` id `11` to `w`1, etc. `experimental_run_v2`() un`w`r`a`ps `w` `b`efore c`a`lling `fn`, so it c`a`lls `fn`(`w``0`) on `d0`, `fn`(`w`1) on `d1`, etc. It then merges the return `v``a`lues from `fn`(), `w`hich c`a`n possi`b`ly result in `w`r`a`pped `v``a`lues. For e`x``a`mple, let's s`a`y `fn`() returns `a` tuple `w`ith three components: (`x, a, v0`) from replic`a` `0`, (`x, b, v1`) on replic`a` 1, etc. If the first component is the s`a`me o`b`ject `x` from e`v`ery replic`a`, then the first component of the merged result `w`ill `a`lso `b`e `x`. If the second component is different (`a`, `b`, ...) from e`a`ch replic`a`, then the merged `v``a`lue `w`ill h`a``v`e `a` `w`r`a`pped m`a`p from replic`a` de`v`ice to the different `v``a`lues. If the third component is the mem`b`ers of `a` mirrored `v``a`ri`a``b`le (`v` m`a`ps `d0` to `v``0`, `d1` to `v`1, etc.), then the merged result `w`ill `b`e th`a`t mirrored `v``a`ri`a``b`le (`v`).
- Worker de`v`ices `v`s. p`a`r`a`meter de`v`ices: Most replic`a` comput`a`tions `w`ill h`a`ppen on `w`orker de`v`ices. Since `w`e don't yet support model p`a`r`a`llelism, there `w`ill `b`e one `w`orker de`v`ice per replic`a`. When using p`a`r`a`meter ser`v`ers or centr`a`l stor`a`ge, the set of de`v`ices holding `v``a`ri`a``b`les m`a`y `b`e different, other`w`ise the p`a`r`a`meter de`v`ices might m`a`tch the `w`orker de`v`ices.

Replica context vs. Cross-replica context
[tf.distribute.Strategy](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy)replica context is when we are in some function that is being called once for each replica. Otherwise we are in cross-replica context, which is useful for calling  methods which operate across the replicas (like reduce_to()). By default you start in a replica context (the "default single replica context") and then some methods can switch you back and forth. There is a third mode you can be in called update context used when updating variables.

- `tf.distribute.Strategy.scope`: enters cross-replica context when no other strategy is in scope.
- `tf.distribute.Strategy.experimental_run_v2`: calls a function in replica context.
- `tf.distribute.ReplicaContext.merge_call`: transitions from replica context to cross-replica context.
- `tf.distribute.StrategyExtended.update`: calls a function in an update context from a cross-replica context.

In a replica context, you may freely read the values of variables, but you may only update their value if they specify a way to aggregate the update using the aggregation parameter in the variable's constructor. In a cross-replica context, you may read or write variables (writes may need to be broadcast to all copies of the variable if it is mirrored).

Sync on read variables

In some cases, such as a metric, we want to accumulate a bunch of updates on each replica independently and only aggregate when reading. This can be a big performance win when the value is read only rarely (maybe the value is only read at the end of an epoch or when checkpointing). These are variables created by passing synchronization=ON_READ to the variable's constructor (and some value for aggregation).

The strategy may choose to put the variable on multiple devices, like mirrored variables, but unlike mirrored variables we don't synchronize the updates to them to make sure they have the same value. Instead, the synchronization is performed when reading in cross-replica context. In a replica context, reads and writes are performed on the local copy (we allow reads so you can write code like v = 0.9*v + 0.1*update). We don't allow operations like v.assign_add in a cross-replica context for sync on read variables; right now we don't have a use case for such updates and depending on the aggregation mode such updates may not be sensible.

Locality

Depending on how a value is produced, it will have a type that will determine how it may be used.
[tf.distribute.Strategy.experimental_distribute_dataset](https://www.tensorflow.org/api_docs/python/tf/distribute/Strategy#experimental_distribute_dataset)"Per-replica" values exist on the worker devices, with a different value for each replica. They are produced by iterating through a "distributed Dataset" returned by  and s_from_function. They are also the typical result returned by tf.distribute.Strategy.experimental_run_v2. You typically can't use a per-replica value directly in a cross-replica context, without first resolving how to aggregate the values across replicas, for instance by using tf.distribute.Strategy.reduce.

[tf.distribute.ReplicaContext.all_reduce](https://www.tensorflow.org/api_docs/python/tf/distribute/ReplicaContext#all_reduce)"Mirrored" values are like per-replica values, except we know that the value on all replicas are the same. We can safely read a mirrored value in a cross-replica context by using the value on any replica. You can convert a per-replica value into a mirrored value by using .

[tf.distribute.StrategyExtended.update](https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended#update)Values can also have the same locality as a variable, which is a mirrored value but residing on the same devices as the variable (as opposed to the compute devices). Such values may be passed to a call to  to update the value of a variable. You may use tf.distribute.StrategyExtended.colocate_vars_with to give a variable the same locality as another variable. This is useful, for example, for "slot" variables used by an optimizer for keeping track of statistics used to update a primary/model variable. You may convert a per-replica value to a variable's locality by using tf.distribute.StrategyExtended.reduce_to or tf.distribute.StrategyExtended.batch_reduce_to.

[tf.distribute.StrategyExtended.non_slot_devices](https://www.tensorflow.org/api_docs/python/tf/distribute/StrategyExtended#non_slot_devices)In addition to slot variables which should be colocated with their primary variables, optimizers also define non-slot variables. These can be things like "number of step updates performed" or "beta1^t" and "beta2^t". Each strategy has some policy for which devices those variables should be copied too, called the "non-slot devices" (some subset of the parameter devices). We require that all non-slot variables are allocated on the same device, or mirrored across the same set of devices. You can use  to pick a consistent set of devices to pass to both tf.distribute.StrategyExtended.colocate_vars_with and tf.distribute.StrategyExtended.update_non_slot.


How to update a variable

The standard pattern for updating variables is to:
[tf.keras.optimizers.Optimizer](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Optimizer)Steps 2 through 4 are done automatically by class  if you call its .apply_gradients method in a replica context. They are also done automatically if you call an assign* method on a (non sync-on-read) variable that was constructed with an aggregation method (which is used to determine the reduction used in step 3).


Distribute-aware layers
[tf.distribute.in_cross_replica_context](https://www.tensorflow.org/api_docs/python/tf/distribute/in_cross_replica_context)Layers are generally called in a replica context, except when defining a functional model.  will let you determine which case you are in. If in a replica context, the tf.distribute.get_replica_context function will return a tf.distribute.ReplicaContext object. The ReplicaContext object has an all_reduce method for aggregating across all replicas. Alternatively, you can update variables following steps 2-4 above.

## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1286-L1291)


```
 __init__(container_strategy)
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### experimental_require_static_shapes

Returns True if static shape is required; False otherwise.
### parameter_devices

Returns the tuple of all devices used to place variables.
### worker_devices

Returns the tuple of all devices used to for compute replica execution.
## Methods
### batch_reduce_to
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1465-L1481)


```
 batch_reduce_to(
    reduce_op,
    value_destination_pairs
)
```

Combine multiple reduce_to calls into one for faster execution.
#### Args:
- `reduce_op`: Reduction type, an instance of `tf.distribute.ReduceOp` enum.
- `value_destination_pairs`: A sequence of (value, destinations) pairs. See `reduce_to`() for a description.
#### Returns:

A list of mirrored values, one per pair in value_destination_pairs.
### colocate_vars_with
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1370-L1414)


```
 colocate_vars_with(colocate_with_variable)
```

Scope that controls which devices variables will be created on.

No operations should be added to the graph inside this scope, it should only be used when creating variables (some implementations work by changing variable creation, others work by using a tf.compat.v1.colocate_with() scope).

This may only be used inside self.scope().
#### Example usage:

```
 with strategy.scope():
  var1 = tf.Variable(...)
  with strategy.extended.colocate_vars_with(var1):
    # var2 and var3 will be created on the same device(s) as var1
    var2 = tf.Variable(...)
    var3 = tf.Variable(...)

  def fn(v1, v2, v3):
    # operates on v1 from var1, v2 from var2, and v3 from var3

  # `fn` runs on every device `var1` is on, `var2` and `var3` will be there
  # too.
  strategy.extended.update(var1, fn, args=(var2, var3))
```
#### Args:
- `colocate_with_variable`: A variable created in this strategy's `scope`(). Variables created while in the returned context manager will be on the same set of devices as `colocate_with_variable`.
#### Returns:

A context manager.
### non_slot_devices
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1613-L1626)


```
 non_slot_devices(var_list)
```

Device(s) for non-slot variables.

Create variables on these devices in a with colocate_vars_with(non_slot_devices(...)): block. Update those using update_non_slot().
#### Args:
- `var_list`: The list of variables being optimized, needed with the default `tf.distribute.Strategy`.
#### Returns:

A sequence of devices for non-slot variables.
### reduce_to
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1438-L1460)


```
 reduce_to(
    reduce_op,
    value,
    destinations
)
```

Combine (via e.g. sum or mean) values across replicas.
#### Args:
- `reduce_op`: Reduction type, an instance of `tf.distribute.ReduceOp` enum.
- `value`: A per-replica `value` with one `value` per replica.
- `destinations`: A mirrored variable, a per-replica tensor, or a device string. The return `value` will be copied to all destination devices (or all the devices where the `destinations` `value` resides). To perform an all-reduction, pass `value` to `destinations`.
#### Returns:

A tensor or value mirrored to destinations.
### update
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1489-L1530)


```
 update(
    var,
    fn,
    args=(),
    kwargs=None,
    group=True
)
```

Run fn to update var using inputs mirrored to the same devices.

If var is mirrored across multiple devices, then this implements logic like:

```
 results = {}
for device, v in var:
  with tf.device(device):
    # args and kwargs will be unwrapped if they are mirrored.
    results[device] = fn(v, *args, **kwargs)
return merged(results)
```

Otherwise this returns fn(var, *args, **kwargs) colocated with var.

Neither args nor kwargs may contain per-replica values. If they contain mirrored values, they will be unwrapped before calling fn.
#### Args:
- `var`: Variable, possibly mirrored to multiple devices, to operate on.
- `fn`: Function to call. Should take the `var`iable as the first argument.
- `args`: Tuple or list. Additional positional arguments to pass to `fn`().
- `kwargs`: Dict with keyword arguments to pass to `fn`().
- `group`: Boolean. Defaults to True. If False, the return value will be unwrapped.
#### Returns:

By default, the merged return value of fn across all replicas. The merged result has dependencies to make sure that if it is evaluated at all, the side effects (updates) will happen on every replica. If instead "group=False" is specified, this function will return a nest of lists where each list has an element per replica, and the caller is responsible for ensuring all elements are executed.
### update_non_slot
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1535-L1554)


```
 update_non_slot(
    colocate_with,
    fn,
    args=(),
    kwargs=None,
    group=True
)
```

Runs fn(*args, **kwargs) on colocate_with devices.
#### Args:
- `colocate_with`: The return value of `non_slot_devices`().
- `fn`: Function to execute.
- `args`: Tuple or list. Positional arguments to pass to `fn`().
- `kwargs`: Dict with keyword arguments to pass to `fn`().
- `group`: Boolean. Defaults to True. If False, the return value will be unwrapped.
#### Returns:

Return value of fn, possibly merged across devices.
### value_container
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1562-L1576)


```
 value_container(value)
```

Returns the container that this per-replica value belongs to.
#### Args:
- `value`: A `value` returned by `experimental_run_v2`() or a variable created in `scope`().
#### Returns:

A container that value belongs to. If value does not belong to any container (including the case of container having been destroyed), returns the value itself. value in experimental_local_results(value_container(value)) will always be true.
### variable_created_in_scope
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1346-L1368)


```
 variable_created_in_scope(v)
```

Tests whether v was created while this strategy scope was active.

Variables created inside the strategy scope are "owned" by it:

```
 with strategy.scope():
v = tf.Variable(1.)
strategy.variable_created_in_scope(v)
True
```

Variables created outside the strategy are not owned by it:

```
 v = tf.Variable(1.)
strategy.variable_created_in_scope(v)
False
```
#### Args:
- `v`: A `tf.Variable` instance.
#### Returns:

True if v was created inside the scope, False if not.
