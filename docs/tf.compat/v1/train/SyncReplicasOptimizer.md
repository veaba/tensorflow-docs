

## Class  `SyncReplicasOptimizer` 
Class to synchronize, aggregate gradients and pass them to the optimizer.

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)

This class is deprecated. For synchrononous training, please use [DistributionStrategies](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/distribute).

In a typical asynchronous training environment, it's common to have somestale gradients. For example, with a N-replica asynchronous training,gradients will be applied to the variables N times independently. Dependingon each replica's training speed, some gradients might be calculated fromcopies of the variable from several steps back (N-1 steps on average). Thisoptimizer avoids stale gradients by collecting gradients from all replicas,averaging them, then applying them to the variables in one shot, afterwhich replicas can fetch the new variables and continue.

将创建以下累加器/队列：

- N  `gradient accumulators` , one per variable to train. Gradients are pushedto them and the chief worker will wait until enough gradients are collectedand then average them before applying to variables. The accumulator willdrop all stale gradients (more details in the accumulator op).
- 1  `token`  queue where the optimizer pushes the new global_step value afterall variables are updated.
The following local variable is created:

-  `sync_rep_local_step` , one per replica. Compared against the global_step ineach accumulator to check for staleness of the gradients.
The optimizer adds nodes to the graph to collect gradients and pause thetrainers until variables are updated.For the Parameter Server job:

1. An accumulator is created for each variable, and each replica pushes thegradients into the accumulators instead of directly applying them to thevariables.
2. Each accumulator averages once enough gradients (replicas_to_aggregate)have been accumulated.
3. Apply the averaged gradients to the variables.
4. Only after all variables have been updated, increment the global step.
5. Only after step 4, pushes  `global_step`  in the  `token_queue` , once foreach worker replica. The workers can now fetch the global step, use it toupdate its local_step variable and start the next batch. Please note thatsome workers can consume multiple minibatches, while some may not consumeeven one. This is because each worker fetches minibatches as long asa token exists. If one worker is stuck for some reason and does notconsume a token, another worker can use it.


#### 对于副本：
1. Start a step: fetch variables and compute gradients.
2. Once the gradients have been computed, push them into gradientaccumulators. Each accumulator will check the staleness and drop the stale.
3. After pushing all the gradients, dequeue an updated value of global_stepfrom the token queue and record that step to its local_step variable. Notethat this is effectively a barrier.
4. Start the next batch.


### 用法


```
 # Create any optimizer to update the variables, say a simple SGD:
opt = GradientDescentOptimizer(learning_rate=0.1)

# Wrap the optimizer with sync_replicas_optimizer with 50 replicas: at each
# step the optimizer collects 50 gradients before applying to variables.
# Note that if you want to have 2 backup replicas, you can change
# total_num_replicas=52 and make sure this number matches how many physical
# replicas you started in your job.
opt = tf.compat.v1.train.SyncReplicasOptimizer(opt, replicas_to_aggregate=50,
                               total_num_replicas=50)

# Some models have startup_delays to help stabilize the model but when using
# sync_replicas training, set it to 0.

# Now you can call `minimize()` or `compute_gradients()` and
# `apply_gradients()` normally
training_op = opt.minimize(total_loss, global_step=self.global_step)


# You can create the hook which handles initialization and queues.
sync_replicas_hook = opt.make_session_run_hook(is_chief)
 
```

In the training program, every worker will run the train_op as if notsynchronized.

```
 with training.MonitoredTrainingSession(
    master=workers[worker_id].target, is_chief=is_chief,
    hooks=[sync_replicas_hook]) as mon_sess:
  while not mon_sess.should_stop():
    mon_sess.run(training_op)
 
```

To use SyncReplicasOptimizer with an  `Estimator` , you need to sendsync_replicas_hook while calling the fit.

```
 my_estimator = DNNClassifier(..., optimizer=opt)
my_estimator.fit(..., hooks=[sync_replicas_hook])
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L147-L206)

```
 __init__(
    opt,
    replicas_to_aggregate,
    total_num_replicas=None,
    variable_averages=None,
    variables_to_average=None,
    use_locking=False,
    name='sync_replicas'
)
 
```

Construct a sync_replicas optimizer. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:The  `SyncReplicaOptimizer`  class is deprecated. For synchrononous training, please use [Distribution Strategies](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/distribute).


#### 参数：
- **`opt`** : The actual optimizer that will be used to compute and apply thegradients. Must be one of the Optimizer classes.
- **`replicas_to_aggregate`** : number of replicas to aggregate for each variableupdate.
- **`total_num_replicas`** : Total number of tasks/workers/replicas, could bedifferent from replicas_to_aggregate.If total_num_replicas > replicas_to_aggregate: it is backup_replicas +replicas_to_aggregate.If total_num_replicas < replicas_to_aggregate: Replicas computemultiple batches per update to variables.
- **`variable_averages`** : Optional  `ExponentialMovingAverage`  object, used tomaintain moving averages for the variables passed in `variables_to_average` .
- **`variables_to_average`** : a list of variables that need to be averaged. Onlyneeded if variable_averages is passed in.
- **`use_locking`** : If True use locks for update operation.
- **`name`** : string. Optional name of the returned operation.


## 方法


###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L226-L359)

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
 
```

对变量应用渐变。

This contains most of the synchronization implementation and also wraps theapply_gradients() from the real optimizer.

#### 参数：
- **`grads_and_vars`** : List of (gradient, variable) pairs as returned bycompute_gradients().
- **`global_step`** : Optional Variable to increment by one after thevariables have been updated.
- **`name`** : Optional name for the returned operation.  Default to thename passed to the Optimizer constructor.


#### 返回：
- **`train_op`** : The op to dequeue a token so the replicas can exit this batchand start the next one. This is executed by each replica.


#### 加薪：
- **`ValueError`** : If the grads_and_vars is empty.
- **`ValueError`** : If global step is not provided, the staleness cannot bechecked.


###  `compute_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L208-L224)

```
 compute_gradients(
    *args,
    **kwargs
)
 
```

Compute gradients of "loss" for the variables in "var_list".

This simply wraps the compute_gradients() from the real optimizer. Thegradients will be aggregated in the apply_gradients() so that user canmodify the gradients like clipping with per replica global norm if needed.The global norm with aggregated gradients can be bad as one replica's hugegradients can hurt the gradients from other replicas.

#### 参数：
- **`*args`** : Arguments for compute_gradients().
- **`**kwargs`** : Keyword arguments for compute_gradients().


#### 返回：
A list of (gradient, variable) pairs.

###  `get_chief_queue_runner` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L361-L379)

```
 get_chief_queue_runner()
 
```

返回首席执行官要执行的QueueRunner。

This includes the operations to synchronize replicas: aggregate gradients,apply to variables, increment global step, insert tokens to token queue.

Note that this can only be called after calling apply_gradients() whichactually generates this queuerunner.

#### 返回：
A  `QueueRunner`  for chief to execute.

#### 加薪：
- **`ValueError`** : If this is called before apply_gradients().


###  `get_init_tokens_op` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L420-L459)

```
 get_init_tokens_op(num_tokens=-1)
 
```

Returns the op to fill the sync_token_queue with the tokens.

This is supposed to be executed in the beginning of the chief/sync threadso that even if the total_num_replicas is less than replicas_to_aggregate,the model can still proceed as the replicas can compute multiple steps pervariable update. Make sure: `num_tokens >= replicas_to_aggregate - total_num_replicas` .

#### 参数：
- **`num_tokens`** : Number of tokens to add to the queue.


#### 返回：
主/同步复制副本填充令牌队列的操作。

#### 加薪：
- **`ValueError`** : If this is called before apply_gradients().
- **`ValueError`** : If num_tokens are smaller than replicas_to_aggregate -total_num_replicas.


###  `get_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L352-L353)

```
 get_name()
 
```

###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L381-L393)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L406-L418)

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

###  `make_session_run_hook` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L461-L463)

```
 make_session_run_hook(
    is_chief,
    num_tokens=-1
)
 
```

创建一个钩子来处理syncreplicasharked操作，如初始化。

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/sync_replicas_optimizer.py#L395-L404)

```
 variables()
 
```

获取默认图中优化器变量的列表。

This wraps  `variables()`  from the actual optimizer. It does not includethe  `SyncReplicasOptimizer` 's local step.

#### 返回：
变量列表。

## Class 成员
-  `GATE_GRAPH = 2`  
-  `GATE_NONE = 0`  
-  `GATE_OP = 1`  
