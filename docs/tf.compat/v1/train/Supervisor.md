

## Class  `Supervisor` 
用于检查点建模和计算摘要的训练助手。

This class is deprecated. Please use[ `tf.compat.v1.train.MonitoredTrainingSession` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/MonitoredTrainingSession) instead.

The Supervisor is a small wrapper around a  `Coordinator` , a  `Saver` ,and a  `SessionManager`  that takes care of common needs of TensorFlowtraining programs.

#### 用于单个程序


```
 with tf.Graph().as_default():
  ...add operations to the graph...
  # Create a Supervisor that will checkpoint the model in '/tmp/mydir'.
  sv = Supervisor(logdir='/tmp/mydir')
  # Get a TensorFlow session managed by the supervisor.
  with sv.managed_session(FLAGS.master) as sess:
    # Use the session to train the graph.
    while not sv.should_stop():
      sess.run(<my_train_op>)
 
```

Within the  `with sv.managed_session()`  block all variables in the graph havebeen initialized.  In addition, a few services have been started tocheckpoint the model and add summaries to the event log.

If the program crashes and is restarted, the managed session automaticallyreinitialize variables from the most recent checkpoint.

The supervisor is notified of any exception raised by one of the services.After an exception is raised,  `should_stop()`  returns  `True` .  In that casethe training loop should also stop.  This is why the training loop has tocheck for  `sv.should_stop()` .

Exceptions that indicate that the training inputs have been exhausted,[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError), also cause  `sv.should_stop()`  to return  `True` but are not re-raised from the  `with`  block: they indicate a normaltermination.

#### 用于多个副本
To train with replicas you deploy the same program in a  `Cluster` .One of the tasks must be identified as the *chief*: the task that handlesinitialization, checkpoints, summaries, and recovery.  The other tasksdepend on the *chief* for these services.

The only change you have to do to the single program code is to indicateif the program is running as the *chief*.

```
 # Choose a task as the chief. This could be based on server_def.task_index,
# or job_def.name, or job_def.tasks. It's entirely up to the end user.
# But there can be only one *chief*.
is_chief = (server_def.task_index == 0)
server = tf.distribute.Server(server_def)

with tf.Graph().as_default():
  ...add operations to the graph...
  # Create a Supervisor that uses log directory on a shared file system.
  # Indicate if you are the 'chief'
  sv = Supervisor(logdir='/shared_directory/...', is_chief=is_chief)
  # Get a Session in a TensorFlow server on the cluster.
  with sv.managed_session(server.target) as sess:
    # Use the session to train the graph.
    while not sv.should_stop():
      sess.run(<my_train_op>)
 
```

In the *chief* task, the  `Supervisor`  works exactly as in the first exampleabove.  In the other tasks  `sv.managed_session()`  waits for the Model to havebeen initialized before returning a session to the training code.  Thenon-chief tasks depend on the chief task for initializing the model.

If one of the tasks crashes and restarts,  `managed_session()` checks if the Model is initialized.  If yes, it just creates a session andreturns it to the training code that proceeds normally.  If the model needsto be initialized, the chief task takes care of reinitializing it; the othertasks just wait for the model to have been initialized.

注意：This modified program still works fine as a single program.The single program marks itself as the chief.

#### What  `master`  string to use
Whether you are running on your machine or in the cluster you can use thefollowing values for the --master flag:

- Specifying  `''`  requests an in-process session that does not use RPC.


- Specifying  `'local'`  requests a session that uses the RPC-based"Master interface" to run TensorFlow programs. See `tf.train.Server.create_local_server`  fordetails.


- Specifying  `'grpc://hostname:port'`  requests a session that usesthe RPC interface to a specific host, and also allows the in-processmaster to access remote tensorflow workers. Often, it isappropriate to pass  `server.target`  (for some [ `tf.distribute.Server` ](https://tensorflow.google.cn/api_docs/python/tf/distribute/Server)named `server).


#### 高级使用


##### 启动附加服务
 `managed_session()`  launches the Checkpoint and Summary services (threads).If you need more services to run you can simply launch them in the blockcontrolled by  `managed_session()` .

Example: Start a thread to print losses.  We want this thread to runevery 60 seconds, so we launch it with  `sv.loop()` .

```
 ...
sv = Supervisor(logdir='/tmp/mydir')
with sv.managed_session(FLAGS.master) as sess:
  sv.loop(60, print_loss, (sess, ))
  while not sv.should_stop():
    sess.run(my_train_op)
 
```

##### 推出更少的服务
 `managed_session()`  launches the "summary" and "checkpoint" threads which useeither the optionally  `summary_op`  and  `saver`  passed to the constructor, ordefault ones created automatically by the supervisor.  If you want to runyour own summary and checkpointing logic, disable these services by passing `None`  to the  `summary_op`  and  `saver`  parameters.

Example: Create summaries manually every 100 steps in the chief.

```
 # Create a Supervisor with no automatic summaries.
sv = Supervisor(logdir='/tmp/mydir', is_chief=is_chief, summary_op=None)
# As summary_op was None, managed_session() does not start the
# summary thread.
with sv.managed_session(FLAGS.master) as sess:
  for step in xrange(1000000):
    if sv.should_stop():
      break
    if is_chief and step % 100 == 0:
      # Create the summary every 100 chief steps.
      sv.summary_computed(sess, sess.run(my_summary_op))
    else:
      # Train normally
      sess.run(my_train_op)
 
```

##### 自定义模型初始化
 `managed_session()`  only supports initializing the model by running an `init_op`  or restoring from the latest checkpoint.  If you have specialinitialization needs, see how to specify a  `local_init_op`  when creating thesupervisor.  You can also use the  `SessionManager`  directly to create asession and check if it could be initialized automatically.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L207-L357)

```
 __init__(
    graph=None,
    ready_op=USE_DEFAULT,
    ready_for_local_init_op=USE_DEFAULT,
    is_chief=True,
    init_op=USE_DEFAULT,
    init_feed_dict=None,
    local_init_op=USE_DEFAULT,
    logdir=None,
    summary_op=USE_DEFAULT,
    saver=USE_DEFAULT,
    global_step=USE_DEFAULT,
    save_summaries_secs=120,
    save_model_secs=600,
    recovery_wait_secs=30,
    stop_grace_secs=120,
    checkpoint_basename='model.ckpt',
    session_manager=None,
    summary_writer=USE_DEFAULT,
    init_fn=None,
    local_init_run_options=None
)
 
```

Create a  `Supervisor` . (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Please switch to tf.train.MonitoredTrainingSession


#### 参数：
- **`graph`** : A  `Graph` .  The graph that the model will use.  Defaults to thedefault  `Graph` .  The supervisor may add operations to the graph beforecreating a session, but the graph should not be modified by the callerafter passing it to the supervisor.
- **`ready_op`** : 1-D string  `Tensor` .  This tensor is evaluated by supervisors in `prepare_or_wait_for_session()`  to check if the model is ready to use.The model is considered ready if it returns an empty array.  Defaults tothe tensor returned from [ `tf.compat.v1.report_uninitialized_variables()` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/report_uninitialized_variables)If  `None` , the model is not checked for readiness.
- **`ready_for_local_init_op`** : 1-D string  `Tensor` .  This tensor is evaluated bysupervisors in  `prepare_or_wait_for_session()`  to check if the model isready to run the local_init_op. The model is considered ready if itreturns an empty array. Defaults to  `None` . If  `None` , the model is notchecked for readiness before running local_init_op.
- **`is_chief`** : If True, create a chief supervisor in charge of initializing andrestoring the model.  If False, create a supervisor that relies on achief supervisor for inits and restore.
- **`init_op`** :  `Operation` .  Used by chief supervisors to initialize the modelwhen it can not be recovered.  Defaults to an  `Operation`  thatinitializes all global variables.  If  `None` , no initialization is doneautomatically unless you pass a value for  `init_fn` , see below.
- **`init_feed_dict`** : A dictionary that maps  `Tensor`  objects to feed values.This feed dictionary will be used when  `init_op`  is evaluated.
- **`local_init_op`** :  `Operation` . Used by all supervisors to run initializationsthat should run for every new supervisor instance. By default these aretable initializers and initializers for local variables. If  `None` , nofurther per supervisor-instance initialization is done automatically.
- **`logdir`** : A string.  Optional path to a directory where to checkpoint themodel and log events for the visualizer.  Used by chief supervisors. Thedirectory will be created if it does not exist.
- **`summary_op`** : An  `Operation`  that returns a Summary for the event logs. Usedby chief supervisors if a  `logdir`  was specified.  Defaults to theoperation returned from summary.merge_all().  If  `None` , summaries arenot computed automatically.
- **`saver`** : A Saver object.  Used by chief supervisors if a  `logdir`  wasspecified.  Defaults to the saved returned by Saver(). If  `None` , themodel is not saved automatically.
- **`global_step`** : An integer Tensor of size 1 that counts steps.  The valuefrom 'global_step' is used in summaries and checkpoint filenames.Default to the op named 'global_step' in the graph if it exists, is ofrank 1, size 1, and of type tf.int32 or tf.int64.  If  `None`  the globalstep is not recorded in summaries and checkpoint files.  Used by chiefsupervisors if a  `logdir`  was specified.
- **`save_summaries_secs`** : Number of seconds between the computation ofsummaries for the event log.  Defaults to 120 seconds.  Pass 0 todisable summaries.
- **`save_model_secs`** : Number of seconds between the creation of modelcheckpoints.  Defaults to 600 seconds.  Pass 0 to disable checkpoints.
- **`recovery_wait_secs`** : Number of seconds between checks that the model isready.  Used by supervisors when waiting for a chief supervisor toinitialize or restore the model.  Defaults to 30 seconds.
- **`stop_grace_secs`** : Grace period, in seconds, given to running threads tostop when  `stop()`  is called.  Defaults to 120 seconds.
- **`checkpoint_basename`** : The basename for checkpoint saving.
- **`session_manager`** :  `SessionManager` , which manages Session creation andrecovery. If it is  `None` , a default  `SessionManager`  will be createdwith the set of arguments passed in for backwards compatibility.
- **`summary_writer`** :  `SummaryWriter`  to use or  `USE_DEFAULT` .  Can be  `None`  toindicate that no summaries should be written.
- **`init_fn`** : Optional callable used to initialize the model. Called after theoptional  `init_op`  is called.  The callable must accept one argument,the session being initialized.
- **`local_init_run_options`** : RunOptions to be passed as the SessionManagerlocal_init_run_options parameter.


#### 返回：
A  `Supervisor` .

#### 加薪：
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
 `Supervisor` s are not supported when eager execution is enabled.

## 属性


###  `coord` 
归还主管使用的协调员。

The Coordinator can be useful if you want to run multiple threadsduring your training.

#### 返回：
协调对象。

###  `global_step` 
Return the global_step Tensor used by the supervisor.

#### 返回：
An integer Tensor for the global_step.

###  `init_feed_dict` 
Return the feed dictionary used when evaluating the  `init_op` .

#### 返回：
A feed dictionary or  `None` .

###  `init_op` 
返回主管使用的init op。

#### 返回：
An Op or  `None` .

###  `is_chief` 
如果这是主管，则返回true。

#### 返回：
一个布尔。

###  `ready_for_local_init_op` 


###  `ready_op` 
返回主管使用的就绪操作。

#### 返回：
An Op or  `None` .

###  `save_model_secs` 
返回检查点之间的延迟。

#### 返回：
时间戳。

###  `save_path` 
返回主管使用的保存路径。

#### 返回：
一根绳子。

###  `save_summaries_secs` 
返回摘要计算之间的延迟。

#### 返回：
时间戳。

###  `saver` 
返回主管使用的保存程序。

#### 返回：
一个保存程序对象。

###  `session_manager` 
返回主管使用的sessionmanager。

#### 返回：
SessionManager对象。

###  `summary_op` 
返回主管使用的汇总张量。

#### 返回：
A string Tensor for the summary or  `None` .

###  `summary_writer` 
返回主管使用的摘要编写器。

#### 返回：
总结作家

## 方法


###  `Loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L782-L808)

```
 Loop(
    timer_interval_secs,
    target,
    args=None,
    kwargs=None
)
 
```

启动周期性调用函数的looperthread。

If  `timer_interval_secs`  is None the thread calls  `target(*args, **kwargs)` repeatedly.  Otherwise it calls it every  `timer_interval_secs` seconds.  The thread terminates when a stop is requested.

The started thread is added to the list of threads managed by the supervisorso it does not need to be passed to the  `stop()`  method.

#### 参数：
- **`timer_interval_secs`** : Number. Time boundaries at which to call  `target` .
- **`target`** : A callable object.
- **`args`** : Optional arguments to pass to  `target`  when calling it.
- **`kwargs`** : Optional keyword arguments to pass to  `target`  when calling it.


#### 返回：
开始的线程。

###  `PrepareSession` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L690-L745)

```
 PrepareSession(
    master='',
    config=None,
    wait_for_checkpoint=False,
    max_wait_secs=7200,
    start_standard_services=True
)
 
```

确保模型已准备好使用。

Create a session on 'master', recovering or initializing the model asneeded, or wait for a session to be ready.  If running as the chiefand  `start_standard_service`  is set to True, also call the sessionmanager to start the standard services.

#### 参数：
- **`master`** : name of the TensorFlow master to use.  See the[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) constructor for how this is interpreted.
- **`config`** : Optional ConfigProto proto used to configure the session, which ispassed as-is to create the session.
- **`wait_for_checkpoint`** : Whether we should wait for the availability of acheckpoint before creating Session. Defaults to False.
- **`max_wait_secs`** : Maximum time to wait for the session to become available.
- **`start_standard_services`** : Whether to start the standard services and thequeue runners.


#### 返回：
可用于驱动模型的会话对象。

###  `RequestStop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L849-L859)

```
 RequestStop(ex=None)
 
```

请求协调器停止线程。

See [ `Coordinator.request_stop()` ](/api_docs/python/tf/train/Coordinator#request_stop).

#### 参数：
- **`ex`** : Optional  `Exception` , or Python  `exc_info`  tuple as returned by `sys.exc_info()` .  If this is the first call to  `request_stop()`  thecorresponding exception is recorded and re-raised from  `join()` .


###  `ShouldStop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L861-L869)

```
 ShouldStop()
 
```

检查协调员是否被告知停止工作。

See [ `Coordinator.should_stop()` ](/api_docs/python/tf/train/Coordinator#should_stop).

#### 返回：
True if the coordinator was told to stop, False otherwise.

###  `StartQueueRunners` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L747-L780)

```
 StartQueueRunners(
    sess,
    queue_runners=None
)
 
```

Start threads for  `QueueRunners` .

Note that the queue runners collected in the graph key  `QUEUE_RUNNERS` are already started automatically when you create a session with thesupervisor, so unless you have non-collected queue runners to startyou do not need to call this explicitly.

#### 参数：
- **`sess`** : A  `Session` .
- **`queue_runners`** : A list of  `QueueRunners` . If not specified, we'll use thelist of queue runners gathered in the graph under the key `GraphKeys.QUEUE_RUNNERS` .


#### 返回：
The list of threads started for the  `QueueRunners` .

#### 加薪：
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
Queues are not compatible with eager execution. To ingest data when eagerexecution is enabled, use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API.

###  `StartStandardServices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L638-L688)

```
 StartStandardServices(sess)
 
```

启动“sess”的标准服务。

This starts services in the background.  The services started dependon the parameters to the constructor and may include:

- A Summary thread computing summaries every save_summaries_secs.
- A Checkpoint thread saving the model every save_model_secs.
- A StepCounter thread measure step time.


#### 参数：
- **`sess`** : A Session.


#### 返回：
A list of threads that are running the standard services.  You can usethe Supervisor's Coordinator to join these threads with:  sv.coord.Join(<list of="" threads="">)</list>

#### 加薪：
- **`RuntimeError`** : If called with a non-chief Supervisor.
- **`ValueError`** : If not  `logdir`  was passed to the constructor as theservices need a log directory.


###  `Stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L810-L847)

```
 Stop(
    threads=None,
    close_summary_writer=True,
    ignore_live_threads=False
)
 
```

停止服务和协调员。

这不会关闭会话。

#### 参数：
- **`threads`** : Optional list of threads to join with the coordinator.  If `None` , defaults to the threads running the standard services, thethreads started for  `QueueRunners` , and the threads started by the `loop()`  method.  To wait on additional threads, pass the list in thisparameter.
- **`close_summary_writer`** : Whether to close the  `summary_writer` .  Defaults to `True`  if the summary writer was created by the supervisor,  `False` otherwise.
- **`ignore_live_threads`** : If  `True`  ignores threads that remain running after agrace period when joining threads via the coordinator, instead ofraising a RuntimeError.


###  `StopOnException` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L871-L879)

```
 StopOnException()
 
```

在引发异常时停止管理器的上下文处理程序。

See [ `Coordinator.stop_on_exception()` ](/api_docs/python/tf/train/Coordinator#stop_on_exception).

#### 返回：
上下文处理程序。

###  `SummaryComputed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L885-L902)

```
 SummaryComputed(
    sess,
    summary,
    global_step=None
)
 
```

表示已计算摘要。

#### 参数：
- **`sess`** : A  `Session`  object.
- **`summary`** : A Summary proto, or a string holding a serialized summary proto.
- **`global_step`** : Int. global step this summary is associated with. If  `None` ,it will try to fetch the current step.


#### 加薪：
- **`TypeError`** : if 'summary' is not a Summary proto or a string.
- **`RuntimeError`** : if the Supervisor was created without a  `logdir` .


###  `WaitForStop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L881-L883)

```
 WaitForStop()
 
```

阻止等待协调员停止。

###  `loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L782-L808)

```
 loop(
    timer_interval_secs,
    target,
    args=None,
    kwargs=None
)
 
```

启动周期性调用函数的looperthread。

If  `timer_interval_secs`  is None the thread calls  `target(*args, **kwargs)` repeatedly.  Otherwise it calls it every  `timer_interval_secs` seconds.  The thread terminates when a stop is requested.

The started thread is added to the list of threads managed by the supervisorso it does not need to be passed to the  `stop()`  method.

#### 参数：
- **`timer_interval_secs`** : Number. Time boundaries at which to call  `target` .
- **`target`** : A callable object.
- **`args`** : Optional arguments to pass to  `target`  when calling it.
- **`kwargs`** : Optional keyword arguments to pass to  `target`  when calling it.


#### 返回：
开始的线程。

###  `managed_session` 


```
 managed_session(
    *args,
    **kwds
)
 
```

返回托管会话的上下文管理器。

This context manager creates and automatically recovers a session.  Itoptionally starts the standard services that handle checkpoints andsummaries.  It monitors exceptions raised from the  `with`  block or from theservices and stops the supervisor as needed.

上下文管理器通常使用如下：

```
 def train():
  sv = tf.compat.v1.train.Supervisor(...)
  with sv.managed_session(<master>) as sess:
    for step in xrange(..):
      if sv.should_stop():
        break
      sess.run(<my training op>)
      ...do other things needed at each training step...
 
```

An exception raised from the  `with`  block or one of the service threads israised again when the block exits.  This is done after stopping all threadsand closing the session.  For example, an  `AbortedError`  exception, raisedin case of preemption of one of the workers in a distributed model, israised again when the block exits.

If you want to retry the training loop in case of preemption you can do itas follows:

```
 def main(...):
  while True
    try:
      train()
    except tf.errors.Aborted:
      pass
 
```

As a special case, exceptions used for control flow, such as `OutOfRangeError`  which reports that input queues are exhausted, are notraised again from the  `with`  block: they indicate a clean termination ofthe training loop and are considered normal termination.

#### 参数：
- **`master`** : name of the TensorFlow master to use.  See the[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) constructor for how this is interpreted.
- **`config`** : Optional  `ConfigProto`  proto used to configure the session. Passedas-is to create the session.
- **`start_standard_services`** : Whether to start the standard services, such ascheckpoint, summary and step counter.
- **`close_summary_writer`** : Whether to close the summary writer when closing thesession.  Defaults to True.


#### 返回：
A context manager that yields a  `Session`  restored from the latestcheckpoint or initialized from scratch if not checkpoint exists.  Thesession is closed when the  `with`  block exits.

###  `prepare_or_wait_for_session` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L690-L745)

```
 prepare_or_wait_for_session(
    master='',
    config=None,
    wait_for_checkpoint=False,
    max_wait_secs=7200,
    start_standard_services=True
)
 
```

确保模型已准备好使用。

Create a session on 'master', recovering or initializing the model asneeded, or wait for a session to be ready.  If running as the chiefand  `start_standard_service`  is set to True, also call the sessionmanager to start the standard services.

#### 参数：
- **`master`** : name of the TensorFlow master to use.  See the[ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) constructor for how this is interpreted.
- **`config`** : Optional ConfigProto proto used to configure the session, which ispassed as-is to create the session.
- **`wait_for_checkpoint`** : Whether we should wait for the availability of acheckpoint before creating Session. Defaults to False.
- **`max_wait_secs`** : Maximum time to wait for the session to become available.
- **`start_standard_services`** : Whether to start the standard services and thequeue runners.


#### 返回：
可用于驱动模型的会话对象。

###  `request_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L849-L859)

```
 request_stop(ex=None)
 
```

请求协调器停止线程。

See [ `Coordinator.request_stop()` ](/api_docs/python/tf/train/Coordinator#request_stop).

#### 参数：
- **`ex`** : Optional  `Exception` , or Python  `exc_info`  tuple as returned by `sys.exc_info()` .  If this is the first call to  `request_stop()`  thecorresponding exception is recorded and re-raised from  `join()` .


###  `should_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L861-L869)

```
 should_stop()
 
```

检查协调员是否被告知停止工作。

See [ `Coordinator.should_stop()` ](/api_docs/python/tf/train/Coordinator#should_stop).

#### 返回：
True if the coordinator was told to stop, False otherwise.

###  `start_queue_runners` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L747-L780)

```
 start_queue_runners(
    sess,
    queue_runners=None
)
 
```

Start threads for  `QueueRunners` .

Note that the queue runners collected in the graph key  `QUEUE_RUNNERS` are already started automatically when you create a session with thesupervisor, so unless you have non-collected queue runners to startyou do not need to call this explicitly.

#### 参数：
- **`sess`** : A  `Session` .
- **`queue_runners`** : A list of  `QueueRunners` . If not specified, we'll use thelist of queue runners gathered in the graph under the key `GraphKeys.QUEUE_RUNNERS` .


#### 返回：
The list of threads started for the  `QueueRunners` .

#### 加薪：
- **`RuntimeError`** : If called with eager execution enabled.


#### 迫切的兼容性
Queues are not compatible with eager execution. To ingest data when eagerexecution is enabled, use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API.

###  `start_standard_services` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L638-L688)

```
 start_standard_services(sess)
 
```

启动“sess”的标准服务。

This starts services in the background.  The services started dependon the parameters to the constructor and may include:

- A Summary thread computing summaries every save_summaries_secs.
- A Checkpoint thread saving the model every save_model_secs.
- A StepCounter thread measure step time.


#### 参数：
- **`sess`** : A Session.


#### 返回：
A list of threads that are running the standard services.  You can usethe Supervisor's Coordinator to join these threads with:  sv.coord.Join(<list of="" threads="">)</list>

#### 加薪：
- **`RuntimeError`** : If called with a non-chief Supervisor.
- **`ValueError`** : If not  `logdir`  was passed to the constructor as theservices need a log directory.


###  `stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L810-L847)

```
 stop(
    threads=None,
    close_summary_writer=True,
    ignore_live_threads=False
)
 
```

停止服务和协调员。

这不会关闭会话。

#### 参数：
- **`threads`** : Optional list of threads to join with the coordinator.  If `None` , defaults to the threads running the standard services, thethreads started for  `QueueRunners` , and the threads started by the `loop()`  method.  To wait on additional threads, pass the list in thisparameter.
- **`close_summary_writer`** : Whether to close the  `summary_writer` .  Defaults to `True`  if the summary writer was created by the supervisor,  `False` otherwise.
- **`ignore_live_threads`** : If  `True`  ignores threads that remain running after agrace period when joining threads via the coordinator, instead ofraising a RuntimeError.


###  `stop_on_exception` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L871-L879)

```
 stop_on_exception()
 
```

在引发异常时停止管理器的上下文处理程序。

See [ `Coordinator.stop_on_exception()` ](/api_docs/python/tf/train/Coordinator#stop_on_exception).

#### 返回：
上下文处理程序。

###  `summary_computed` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L885-L902)

```
 summary_computed(
    sess,
    summary,
    global_step=None
)
 
```

表示已计算摘要。

#### 参数：
- **`sess`** : A  `Session`  object.
- **`summary`** : A Summary proto, or a string holding a serialized summary proto.
- **`global_step`** : Int. global step this summary is associated with. If  `None` ,it will try to fetch the current step.


#### 加薪：
- **`TypeError`** : if 'summary' is not a Summary proto or a string.
- **`RuntimeError`** : if the Supervisor was created without a  `logdir` .


###  `wait_for_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/supervisor.py#L881-L883)

```
 wait_for_stop()
 
```

阻止等待协调员停止。

## Class 成员
-  `USE_DEFAULT = 0`  
