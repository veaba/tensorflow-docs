

## Class  `StrategyExtended` 
Additional APIs for algorithms that need to be distribution-aware.


**Note:**  For most usage of [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy), there should be no need tocall these methods, since TensorFlow libraries (such as optimizers) alreadycall these methods when needed on your behalf.
Lower-level concepts:

- Wrapped values: In order to represent values parallel across devices(either replicas or the devices associated with a particular value), wewrap them in a "PerReplica" or "Mirrored" object that contains a mapfrom replica id to values. "PerReplica" is used when the value may bedifferent across replicas, and "Mirrored" when the value are the same.
- Unwrapping and merging: Consider calling a function  `fn`  on multiplereplicas, like  `experimental_run_v2(fn, args=[w])`  with anargument  `w`  that is a wrapped value. This means  `w`  will have a map takingreplica id  `0`  to  `w0` , replica id  `11`  to  `w1` , etc. `experimental_run_v2()`  unwraps  `w`  before calling  `fn` , soit calls  `fn(w0)`  on  `d0` ,  `fn(w1)`  on  `d1` , etc.  It then merges the returnvalues from  `fn()` , which can possibly result in wrapped values. Forexample, let's say  `fn()`  returns a tuple with three components:  `(x, a,v0)`  from replica 0,  `(x, b, v1)`  on replica 1, etc. If the first componentis the same object  `x`  from every replica, then the first component of themerged result will also be  `x` . If the second component is different ( `a` , `b` , ...)  from each replica, then the merged value will have a wrapped mapfrom replica device to the different values. If the third component is themembers of a mirrored variable ( `v`  maps  `d0`  to  `v0` ,  `d1`  to [ `v1` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1), etc.),then the merged result will be that mirrored variable ( `v` ).
- Worker devices vs. parameter devices: Most replica computations willhappen on worker devices. Since we don't yet support modelparallelism, there will be one worker device per replica. When usingparameter servers or central storage, the set of devices holdingvariables may be different, otherwise the parameter devices mightmatch the worker devices.
*Replica context vs. Cross-replica context*

*replica context* is when we are in some function that is being called oncefor each replica.  Otherwise we are in cross-replica context, which isuseful for calling [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) methods which operate across thereplicas (like  `reduce_to()` ). By default you start in a replica context(the "default single replica context") and then some methods can switch youback and forth. There is a third mode you can be in called *update context*used when updating variables.

- [ `tf.distribute.Strategy.scope` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#scope): enters cross-replica context whenno other strategy is in scope.
- [ `tf.distribute.Strategy.experimental_run_v2` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_run_v2): calls a function inreplica context.
- [ `tf.distribute.ReplicaContext.merge_call` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext#merge_call): transitions from replicacontext to cross-replica context.
- [ `tf.distribute.StrategyExtended.update` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#update): calls a function in an updatecontext from a cross-replica context.
In a replica context, you may freely read the values of variables, butyou may only update their value if they specify a way to aggregate theupdate using the  `aggregation`  parameter in the variable's constructor.In a cross-replica context, you may read or write variables (writes mayneed to be broadcast to all copies of the variable if it is mirrored).

*Sync on read variables*

In some cases, such as a metric, we want to accumulate a bunch of updates oneach replica independently and only aggregate when reading. This can be a bigperformance win when the value is read only rarely (maybe the value is onlyread at the end of an epoch or when checkpointing).  These are variablescreated by passing  `synchronization=ON_READ`  to the variable's constructor(and some value for  `aggregation` ).

The strategy may choose to put the variable on multiple devices, like mirroredvariables, but unlike mirrored variables we don't synchronize the updates tothem to make sure they have the same value. Instead, the synchronization isperformed when reading in cross-replica context.  In a replica context, readsand writes are performed on the local copy (we allow reads so you can writecode like  `v = 0.9*v + 0.1*update` ).  We don't allow operations like `v.assign_add`  in a cross-replica context for sync on read variables; rightnow we don't have a use case for such updates and depending on the aggregationmode such updates may not be sensible.

*Locality*

Depending on how a value is produced, it will have a type that will determinehow it may be used.

"Per-replica" values exist on the worker devices, with a different value foreach replica. They are produced by iterating through a "distributed  `Dataset` "returned by [ `tf.distribute.Strategy.experimental_distribute_dataset` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_distribute_dataset) and[ `tf.distribute.Strategy.experimental_distribute_datasets_from_function` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_distribute_datasets_from_function).  Theyare also the typical result returned by[ `tf.distribute.Strategy.experimental_run_v2` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_run_v2). You typically can't use aper-replica value directly in a cross-replica context, without first resolvinghow to aggregate the values across replicas, for instance by using[ `tf.distribute.Strategy.reduce` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#reduce).

"Mirrored" values are like per-replica values, except we know that the valueon all replicas are the same. We can safely read a mirrored value in across-replica context by using the value on any replica. You can converta per-replica value into a mirrored value by using[ `tf.distribute.ReplicaContext.all_reduce` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext#all_reduce).

Values can also have the same locality as a variable, which is a mirroredvalue but residing on the same devices as the variable (as opposed to thecompute devices). Such values may be passed to a call to[ `tf.distribute.StrategyExtended.update` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#update) to update the value of a variable.You may use [ `tf.distribute.StrategyExtended.colocate_vars_with` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#colocate_vars_with) to give avariable the same locality as another variable. This is useful, for example,for "slot" variables used by an optimizer for keeping track of statisticsused to update a primary/model variable. You may convert a per-replicavalue to a variable's locality by using[ `tf.distribute.StrategyExtended.reduce_to` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#reduce_to) or[ `tf.distribute.StrategyExtended.batch_reduce_to` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#batch_reduce_to).

In addition to slot variables which should be colocated with their primaryvariables, optimizers also define non-slot variables. These can be things like"number of step updates performed" or "beta1^t" and "beta2^t".  Each strategyhas some policy for which devices those variables should be copied too, calledthe "non-slot devices" (some subset of the parameter devices). We require thatall non-slot variables are allocated on the same device, or mirrored acrossthe same set of devices. You can use[ `tf.distribute.StrategyExtended.non_slot_devices` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#non_slot_devices) to pick a consistent set ofdevices to pass to both [ `tf.distribute.StrategyExtended.colocate_vars_with` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#colocate_vars_with)and [ `tf.distribute.StrategyExtended.update_non_slot` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#update_non_slot).

*How to update a variable*

更新变量的标准模式是：

1. In your function passed to [ `tf.distribute.Strategy.experimental_run_v2` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy#experimental_run_v2),compute a list of (update, variable) pairs. For example, the update mightbe a the gradient of the loss with respect to the variable.
2. Switch to cross-replica mode by calling `tf.distribute.get_replica_context().merge_call()`  with the updates andvariables as arguments.
3. Call[ `tf.distribute.StrategyExtended.reduce_to(VariableAggregation.SUM, t, v)` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#reduce_to)(for one variable) or [ `tf.distribute.StrategyExtended.batch_reduce_to` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#batch_reduce_to)(for a list of variables) to sum the updates.and broadcast the result to the variable's devices.
4. Call [ `tf.distribute.StrategyExtended.update(v)` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended#update) for each variable to updateits value.
Steps 2 through 4 are done automatically by class[ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer) if you call its[ `tf.keras.optimizers.Optimizer.apply_gradients` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer#apply_gradients) method in a replica context.They are also done automatically if you call an  `assign*`  method on a (nonsync-on-read) variable that was constructed with an aggregation method (whichis used to determine the reduction used in step 3).

*Distribute-aware layers*

Layers are generally called in a replica context, except when defining afunctional model. [ `tf.distribute.in_cross_replica_context` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/in_cross_replica_context) will let youdetermine which case you are in. If in a replica context,the [ `tf.distribute.get_replica_context` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context) function will return a[ `tf.distribute.ReplicaContext` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReplicaContext) object. The  `ReplicaContext`  object has an `all_reduce`  method for aggregating across all replicas. Alternatively, youcan update variables following steps 2-4 above.


**Note:**  For new [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) implementations, please put all logicin a subclass of [ `tf.distribute.StrategyExtended` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended). The only code needed forthe [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) subclass is for instantiating your subclass of[ `tf.distribute.StrategyExtended` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/StrategyExtended) in the  `__init__`  method.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1286-L1291)

```
 __init__(container_strategy)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `experimental_require_static_shapes` 
Returns  `True`  if static shape is required;  `False`  otherwise.

###  `parameter_devices` 
返回用于放置变量的所有设备的元组。

###  `worker_devices` 
返回用于计算副本执行的所有设备的元组。

## 方法


###  `batch_reduce_to` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1465-L1481)

```
 batch_reduce_to(
    reduce_op,
    value_destination_pairs
)
 
```

Combine multiple  `reduce_to`  calls into one for faster execution.

#### 参数：
- **`reduce_op`** : Reduction type, an instance of [ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) enum.
- **`value_destination_pairs`** : A sequence of (value, destinations)pairs. See  `reduce_to()`  for a description.


#### 返回：
A list of mirrored values, one per pair in  `value_destination_pairs` .

###  `colocate_vars_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1370-L1414)

```
 colocate_vars_with(colocate_with_variable)
 
```

控制将在其上创建哪些设备变量的作用域。

No operations should be added to the graph inside this scope, itshould only be used when creating variables (some implementationswork by changing variable creation, others work by using atf.compat.v1.colocate_with() scope).

This may only be used inside  `self.scope()` .

#### 示例用法：


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

#### 参数：
- **`colocate_with_variable`** : A variable created in this strategy's  `scope()` .Variables created while in the returned context manager will be on thesame set of devices as  `colocate_with_variable` .


#### 返回：
上下文管理器。

###  `non_slot_devices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1613-L1626)

```
 non_slot_devices(var_list)
 
```

Device(s) for non-slot variables.

Create variables on these devices in a `with colocate_vars_with(non_slot_devices(...)):`  block.Update those using  `update_non_slot()` .

#### 参数：
- **`var_list`** : The list of variables being optimized, needed with thedefault [ `tf.distribute.Strategy` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).


#### 返回：
A sequence of devices for non-slot variables.

###  `reduce_to` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1438-L1460)

```
 reduce_to(
    reduce_op,
    value,
    destinations
)
 
```

在复制品之间合并（例如通过总和或平均值）。

#### 参数：
- **`reduce_op`** : Reduction type, an instance of [ `tf.distribute.ReduceOp` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/ReduceOp) enum.
- **`value`** : A per-replica value with one value per replica.
- **`destinations`** : A mirrored variable, a per-replica tensor, or a devicestring. The return value will be copied to all destination devices (orall the devices where the  `destinations`  value resides). To perform anall-reduction, pass  `value`  to  `destinations` .


#### 返回：
A tensor or value mirrored to  `destinations` .

###  `update` 
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

Run  `fn`  to update  `var`  using inputs mirrored to the same devices.

If  `var`  is mirrored across multiple devices, then this implementslogic like:

```
 results = {}
for device, v in var:
  with tf.device(device):
    # args and kwargs will be unwrapped if they are mirrored.
    results[device] = fn(v, *args, **kwargs)
return merged(results)
 
```

Otherwise this returns  `fn(var, *args, **kwargs)`  colocated with  `var` .

Neither  `args`  nor  `kwargs`  may contain per-replica values.If they contain mirrored values, they will be unwrapped beforecalling  `fn` .

#### 参数：
- **`var`** : Variable, possibly mirrored to multiple devices, to operate on.
- **`fn`** : Function to call. Should take the variable as the first argument.
- **`args`** : Tuple or list. Additional positional arguments to pass to  `fn()` .
- **`kwargs`** : Dict with keyword arguments to pass to  `fn()` .
- **`group`** : Boolean. Defaults to True. If False, the return value will beunwrapped.


#### 返回：
By default, the merged return value of  `fn`  across all replicas.  Themerged result has dependencies to make sure that if it is evaluated atall, the side effects (updates) will happen on every replica. If instead"group=False" is specified, this function will return a nest of listswhere each list has an element per replica, and the caller is responsiblefor ensuring all elements are executed.

###  `update_non_slot` 
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

Runs  `fn(*args, **kwargs)`  on  `colocate_with`  devices.

#### 参数：
- **`colocate_with`** : The return value of  `non_slot_devices()` .
- **`fn`** : Function to execute.
- **`args`** : Tuple or list. Positional arguments to pass to  `fn()` .
- **`kwargs`** : Dict with keyword arguments to pass to  `fn()` .
- **`group`** : Boolean. Defaults to True. If False, the return value will beunwrapped.


#### 返回：
Return value of  `fn` , possibly merged across devices.

###  `value_container` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1562-L1576)

```
 value_container(value)
 
```

Returns the container that this per-replica  `value`  belongs to.

#### 参数：
- **`value`** : A value returned by  `experimental_run_v2()`  or a variablecreated in  `scope()` .


#### 返回：
A container that  `value`  belongs to.If value does not belong to any container (including the case ofcontainer having been destroyed), returns the value itself. `value in experimental_local_results(value_container(value))`  willalways be true.

###  `variable_created_in_scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L1346-L1368)

```
 variable_created_in_scope(v)
 
```

Tests whether  `v`  was created while this strategy scope was active.

在战略范围内创建的变量由其“拥有”：

```
 with strategy.scope(): 
 v = tf.Variable(1.) 
 strategy.variable_created_in_scope(v) 
 True 

```

在策略之外创建的变量不属于它：

```
 v = tf.Variable(1.) 
 strategy.variable_created_in_scope(v) 
 False 

```

#### 参数：
- **`v`** : A [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) instance.


#### 返回：
True if  `v`  was created inside the scope, False if not.

