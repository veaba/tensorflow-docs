

## Class  `CrossShardOptimizer` 
一个优化程序，它平均跨tpu碎片的梯度。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L37-L70)

```
 __init__(
    opt,
    reduction=losses.Reduction.MEAN,
    name='CrossShardOptimizer',
    group_assignment=None
)
 
```

Construct a new cross-shard optimizer.

#### 参数：
- **`opt`** : An existing  `Optimizer`  to encapsulate.
- **`reduction`** : The reduction to apply to the shard losses.
- **`name`** : Optional name prefix for the operations created when applyinggradients. Defaults to "CrossShardOptimizer".
- **`group_assignment`** : Optional 2d int32 lists with shape[num_groups, num_replicas_per_group] which describles how to applyoptimizer to subgroups.


#### 加薪：
- **`ValueError`** : If reduction is not a valid cross-shard reduction.


## 方法


###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L153-L182)

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
 
```

对变量应用渐变。

Calls tpu_ops.cross_replica_sum() to sum gradient contributions acrossreplicas, and then applies the real optimizer.

#### 参数：
- **`grads_and_vars`** : List of (gradient, variable) pairs as returned bycompute_gradients().
- **`global_step`** : Optional Variable to increment by one after thevariables have been updated.
- **`name`** : Optional name for the returned operation.  Default to thename passed to the Optimizer constructor.


#### 返回：
An  `Operation`  that applies the gradients. If  `global_step`  was not None,that operation also increments  `global_step` .

#### 加薪：
- **`ValueError`** : If the grads_and_vars is malformed.


###  `compute_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L111-L151)

```
 compute_gradients(
    loss,
    var_list=None,
    **kwargs
)
 
```

Compute gradients of "loss" for the variables in "var_list".

This simply wraps the compute_gradients() from the real optimizer. Thegradients will be aggregated in the apply_gradients() so that user canmodify the gradients like clipping with per replica global norm if needed.The global norm with aggregated gradients can be bad as one replica's hugegradients can hurt the gradients from other replicas.

#### 参数：
- **`loss`** : A Tensor containing the value to minimize.
- **`var_list`** : Optional list or tuple of [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) to update to minimize `loss` .  Defaults to the list of variables collected in the graphunder the key  `GraphKey.TRAINABLE_VARIABLES` .
- **`**kwargs`** : Keyword arguments for compute_gradients().


#### 返回：
A list of (gradient, variable) pairs.

#### 加薪：
- **`ValueError`** : If not within a tpu_shard_context or group_assignment isinvalid.


###  `get_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L352-L353)

```
 get_name()
 
```

###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L184-L196)

```
 get_slot(
    *args,
    **kwargs
)
 
```

返回优化器为“var”创建的名为“name”的槽。

This simply wraps the get_slot() from the actual optimizer.

#### 参数：
- **`*args`** : Arguments for get_slot().
- **`**kwargs`** : Keyword arguments for get_slot().


#### 返回：
The  `Variable`  for the slot if it was created,  `None`  otherwise.

###  `get_slot_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L198-L210)

```
 get_slot_names(
    *args,
    **kwargs
)
 
```

Return a list of the names of slots created by the  `Optimizer` .

This simply wraps the get_slot_names() from the actual optimizer.

#### 参数：
- **`*args`** : Arguments for get_slot().
- **`**kwargs`** : Keyword arguments for get_slot().


#### 返回：
字符串列表。

###  `minimize` 
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

Add operations to minimize  `loss`  by updating  `var_list` .

This method simply combines calls  `compute_gradients()`  and `apply_gradients()` . If you want to process the gradient before applyingthem call  `compute_gradients()`  and  `apply_gradients()`  explicitly insteadof using this function.

#### 参数：
- **`loss`** : A  `Tensor`  containing the value to minimize.
- **`global_step`** : Optional  `Variable`  to increment by one after thevariables have been updated.
- **`var_list`** : Optional list or tuple of  `Variable`  objects to update tominimize  `loss` .  Defaults to the list of variables collected inthe graph under the key  `GraphKeys.TRAINABLE_VARIABLES` .
- **`gate_gradients`** : How to gate the computation of gradients.  Can be `GATE_NONE` ,  `GATE_OP` , or   `GATE_GRAPH` .
- **`aggregation_method`** : Specifies the method used to combine gradient terms.Valid values are defined in the class  `AggregationMethod` .
- **`colocate_gradients_with_ops`** : If True, try colocating gradients withthe corresponding op.
- **`name`** : Optional name for the returned operation.
- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .


#### 返回：
An Operation that updates the variables in  `var_list` .  If  `global_step` was not  `None` , that operation also increments  `global_step` .

#### 加薪：
- **`ValueError`** : If some of the variables are not  `Variable`  objects.


#### 迫切的兼容性
When eager execution is enabled,  `loss`  should be a Python function thattakes no arguments and computes the value to be minimized. Minimization (andgradient computation) is done with respect to the elements of  `var_list`  ifnot None, else with respect to any trainable variables created during theexecution of the  `loss`  function.  `gate_gradients` ,  `aggregation_method` , `colocate_gradients_with_ops`  and  `grad_loss`  are ignored when eagerexecution is enabled.

###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_optimizer.py#L212-L214)

```
 variables()
 
```

从底层优化器转发变量。

## Class 成员
-  `GATE_GRAPH = 2`  
-  `GATE_NONE = 0`  
-  `GATE_OP = 1`  
