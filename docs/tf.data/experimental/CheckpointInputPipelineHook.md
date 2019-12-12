

## Class  `CheckpointInputPipelineHook` 
检查点每隔N步或秒输入管道状态。

Inherits From: [ `SessionRunHook` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/SessionRunHook)

**别名** : [ `tf.compat.v1.data.experimental.CheckpointInputPipelineHook` ](/api_docs/python/tf/data/experimental/CheckpointInputPipelineHook), [ `tf.compat.v2.data.experimental.CheckpointInputPipelineHook` ](/api_docs/python/tf/data/experimental/CheckpointInputPipelineHook)

This hook saves the state of the iterators in the  `Graph`  so that whentraining is resumed the input pipeline continues from where it left off.This could potentially avoid overfitting in certain pipelines where thenumber of training steps per eval are small compared to the datasetsize or if the training pipeline is pre-empted.

Differences from  `CheckpointSaverHook` :

1. Saves only the input pipelines in the "iterators" collection and not theglobal variables or other saveable objects.
2. Does not write the  `GraphDef`  and  `MetaGraphDef`  to the summary.
检查培训管道的示例：

```
 est = tf.estimator.Estimator(model_fn)
如果是真的：
  est.train(
      train_input_fn,
      hooks=[tf.data.experimental.CheckpointInputPipelineHook(est)],
      steps=train_steps_per_eval)
  # 注意：We do not pass the hook here.
  metrics = est.evaluate(eval_input_fn)
  if should_stop_the_training(metrics):
    break
 
```

This hook should be used if the input pipeline state needs to be savedseparate from the model checkpoint. Doing so may be useful for a few reasons:

1. The input pipeline checkpoint may be large, if there are large shuffleor prefetch buffers for instance, and may bloat the checkpoint size.
2. If the input pipeline is shared between training and validation, restoringthe checkpoint during validation may override the validation inputpipeline.
For saving the input pipeline checkpoint alongside the model weights use[ `tf.data.experimental.make_saveable_from_iterator` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/make_saveable_from_iterator) directly to create a `SaveableObject`  and add to the  `SAVEABLE_OBJECTS`  collection. Note, however,that you will need to be careful not to restore the training iterator duringeval. You can do that by not adding the iterator to the SAVEABLE_OBJECTScollector when building the eval graph.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L138-L184)

```
 __init__(estimator)
 
```

Initializes a  `CheckpointInputPipelineHook` .

#### 参数：
- **`estimator`** : Estimator.


#### 加薪：
- **`ValueError`** : One of  `save_steps`  or  `save_secs`  should be set.
- **`ValueError`** : At most one of saver or scaffold should be set.


## 方法


###  `after_create_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L112-L127)

```
 after_create_session(
    session,
    coord
)
 
```

在创建新的tensorflow会话时调用。

This is called to signal the hooks that a new session has been created. Thishas two essential differences with the situation in which  `begin`  is called:

- When this is called, the graph is finalized and ops can no longer be addedto the graph.
- This method will also be called as a result of recovering a wrappedsession, not only at the beginning of the overall session.


#### 参数：
- **`session`** : A TensorFlow Session that has been created.
- **`coord`** : A Coordinator object which keeps track of all threads.


###  `after_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L240-L241)

```
 after_run(
    run_context,
    run_values
)
 
```

每次调用run（）后调用。

The  `run_values`  argument contains results of requested ops/tensors by `before_run()` .

The  `run_context`  argument is the same one send to  `before_run`  call. `run_context.request_stop()`  can be called to stop the iteration.

If  `session.run()`  raises any exceptions then  `after_run()`  is not called.

#### 参数：
- **`run_context`** : A  `SessionRunContext`  object.
- **`run_values`** : A SessionRunValues object.


###  `before_run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L234-L238)

```
 before_run(run_context)
 
```

在每次调用run（）之前调用。

You can return from this call a  `SessionRunArgs`  object indicating ops ortensors to add to the upcoming  `run()`  call.  These ops/tensors will be runtogether with the ops/tensors originally passed to the original run() call.The run args you return can also contain feeds to be added to the run()call.

The  `run_context`  argument is a  `SessionRunContext`  that providesinformation about the upcoming  `run()`  call: the originally requestedop/tensors, the TensorFlow Session.

此时图表已完成，无法添加操作。

#### 参数：
- **`run_context`** : A  `SessionRunContext`  object.


#### 返回：
None or a  `SessionRunArgs`  object.

###  `begin` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L186-L197)

```
 begin()
 
```

在使用会话之前调用一次。

When called, the default graph is the one that will be launched in thesession.  The hook can modify the graph by adding new operations to it.After the  `begin()`  call the graph will be finalized and the other callbackscan not modify the graph anymore. Second call of  `begin()`  on the samegraph, should not change the graph.

###  `end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/iterator_ops.py#L243-L244)

```
 end(session)
 
```

在会话结束时调用。

The  `session`  argument can be used in case the hook wants to run final ops,such as saving a last checkpoint.

If  `session.run()`  raises exception other than OutOfRangeError orStopIteration then  `end()`  is not called.Note the difference between  `end()`  and  `after_run()`  behavior when `session.run()`  raises OutOfRangeError or StopIteration. In that case `end()`  is called but  `after_run()`  is not called.

#### 参数：
- **`session`** : A TensorFlow Session that will be soon closed.
