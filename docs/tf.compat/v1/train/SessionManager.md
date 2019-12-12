

## Class  `SessionManager` 
从检查点恢复并创建会话的训练助手。

This class is a small wrapper that takes care of session creation andcheckpoint recovery. It also provides functions that to facilitatecoordination among multiple training threads or processes.

- Checkpointing trained variables as the training progresses.
- Initializing variables on startup, restoring them from the most recentcheckpoint after a crash, or wait for checkpoints to become available.


### 用法：


```
 with tf.Graph().as_default():
   ...add operations to the graph...
  # Create a SessionManager that will checkpoint the model in '/tmp/mydir'.
  sm = SessionManager()
  sess = sm.prepare_session(master, init_op, saver, checkpoint_dir)
  # Use the session to train the graph.
  while True:
    sess.run(<my_train_op>)
 
```

 `prepare_session()`  initializes or restores a model. It requires  `init_op` and  `saver`  as an argument.

第二个进程可以通过执行以下操作等待模型就绪：

```
 with tf.Graph().as_default():
   ...add operations to the graph...
  # Create a SessionManager that will wait for the model to become ready.
  sm = SessionManager()
  sess = sm.wait_for_session(master)
  # Use the session to train the graph.
  while True:
    sess.run(<my_train_op>)
 
```

 `wait_for_session()`  waits for a model to be initialized by other processes.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_manager.py#L94-L153)

```
 __init__(
    local_init_op=None,
    ready_op=None,
    ready_for_local_init_op=None,
    graph=None,
    recovery_wait_secs=30,
    local_init_run_options=None
)
 
```

创建SessionManager。

The  `local_init_op`  is an  `Operation`  that is run always after a new sessionwas created. If  `None` , this step is skipped.

The  `ready_op`  is an  `Operation`  used to check if the model is ready.  Themodel is considered ready if that operation returns an empty 1D stringtensor. If the operation returns a non empty 1D string tensor, the elementsare concatenated and used to indicate to the user why the model is notready.

The  `ready_for_local_init_op`  is an  `Operation`  used to check if the modelis ready to run local_init_op.  The model is considered ready if thatoperation returns an empty 1D string tensor. If the operation returns a nonempty 1D string tensor, the elements are concatenated and used to indicateto the user why the model is not ready.

If  `ready_op`  is  `None` , the model is not checked for readiness.

 `recovery_wait_secs`  is the number of seconds between checks thatthe model is ready.  It is used by processes to wait for a model tobe initialized or restored.  Defaults to 30 seconds.

#### 参数：
- **`local_init_op`** : An  `Operation`  run immediately after session creation.Usually used to initialize tables and local variables.
- **`ready_op`** : An  `Operation`  to check if the model is initialized.
- **`ready_for_local_init_op`** : An  `Operation`  to check if the model is readyto run local_init_op.
- **`graph`** : The  `Graph`  that the model will use.
- **`recovery_wait_secs`** : Seconds between checks for the model to be ready.
- **`local_init_run_options`** : RunOptions to be passed to session.run whenexecuting the local_init_op.


#### 加薪：
- **`ValueError`** : If ready_for_local_init_op is not None but local_init_op isNone


## 方法


###  `prepare_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_manager.py#L224-L314)

```
 prepare_session(
    master,
    init_op=None,
    saver=None,
    checkpoint_dir=None,
    checkpoint_filename_with_path=None,
    wait_for_checkpoint=False,
    max_wait_secs=7200,
    config=None,
    init_feed_dict=None,
    init_fn=None
)
 
```

Creates a  `Session` . Makes sure the model is ready to be used.

Creates a  `Session`  on 'master'. If a  `saver`  object is passed in, and `checkpoint_dir`  points to a directory containing valid checkpointfiles, then it will try to recover the model from checkpoint. Ifno checkpoint files are available, and  `wait_for_checkpoint`  is `True` , then the process would check every  `recovery_wait_secs` ,up to  `max_wait_secs` , for recovery to succeed.

If the model cannot be recovered successfully then it is initialized byrunning the  `init_op`  and calling  `init_fn`  if they are provided.The  `local_init_op`  is also run after init_op and init_fn, regardless ofwhether the model was recovered successfully, but only if `ready_for_local_init_op`  passes.

If the model is recovered from a checkpoint it is assumed that allglobal variables have been initialized, in particular neither  `init_op` nor  `init_fn`  will be executed.

It is an error if the model cannot be recovered and no  `init_op` or  `init_fn`  or  `local_init_op`  are passed.

#### 参数：
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`init_op`** : Optional  `Operation`  used to initialize the model.
- **`saver`** : A  `Saver`  object used to restore a model.
- **`checkpoint_dir`** : Path to the checkpoint files. The latest checkpoint in thedir will be used to restore.
- **`checkpoint_filename_with_path`** : Full file name path to the checkpoint file.
- **`wait_for_checkpoint`** : Whether to wait for checkpoint to become available.
- **`max_wait_secs`** : Maximum time to wait for checkpoints to become available.
- **`config`** : Optional  `ConfigProto`  proto used to configure the session.
- **`init_feed_dict`** : Optional dictionary that maps  `Tensor`  objects to feedvalues.  This feed dictionary is passed to the session  `run()`  call whenrunning the init op.
- **`init_fn`** : Optional callable used to initialize the model. Called after theoptional  `init_op`  is called.  The callable must accept one argument,the session being initialized.


#### 返回：
A  `Session`  object that can be used to drive the model.

#### 加薪：
- **`RuntimeError`** : If the model cannot be initialized or recovered.
- **`ValueError`** : If both checkpoint_dir and checkpoint_filename_with_path areset.


###  `recover_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_manager.py#L316-L378)

```
 recover_session(
    master,
    saver=None,
    checkpoint_dir=None,
    checkpoint_filename_with_path=None,
    wait_for_checkpoint=False,
    max_wait_secs=7200,
    config=None
)
 
```

Creates a  `Session` , recovering if possible.

Creates a new session on 'master'.  If the session is not initializedand can be recovered from a checkpoint, recover it.

#### 参数：
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`saver`** : A  `Saver`  object used to restore a model.
- **`checkpoint_dir`** : Path to the checkpoint files. The latest checkpoint in thedir will be used to restore.
- **`checkpoint_filename_with_path`** : Full file name path to the checkpoint file.
- **`wait_for_checkpoint`** : Whether to wait for checkpoint to become available.
- **`max_wait_secs`** : Maximum time to wait for checkpoints to become available.
- **`config`** : Optional  `ConfigProto`  proto used to configure the session.


#### 返回：
A pair (sess, initialized) where 'initialized' is  `True`  ifthe session could be recovered and initialized,  `False`  otherwise.

#### 加薪：
- **`ValueError`** : If both checkpoint_dir and checkpoint_filename_with_path areset.


###  `wait_for_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_manager.py#L380-L437)

```
 wait_for_session(
    master,
    config=None,
    max_wait_secs=float('Inf')
)
 
```

Creates a new  `Session`  and waits for model to be ready.

Creates a new  `Session`  on 'master'.  Waits for the model to beinitialized or recovered from a checkpoint.  It's expected thatanother thread or process will make the model ready, and that thisis intended to be used by threads/processes that participate in adistributed training configuration where a different thread/processis responsible for initializing or recovering the model being trained.

NB: The amount of time this method waits for the session is boundedby max_wait_secs. By default, this function will wait indefinitely.

#### 参数：
- **`master`** :  `String`  representation of the TensorFlow master to use.
- **`config`** : Optional ConfigProto proto used to configure the session.
- **`max_wait_secs`** : Maximum time to wait for the session to become available.


#### 返回：
A  `Session` . May be None if the operation exceeds the timeoutspecified by config.operation_timeout_in_ms.

#### 加薪：
- **`tf.DeadlineExceededError`** : if the session is not available aftermax_wait_secs.
