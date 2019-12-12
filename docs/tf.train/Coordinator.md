

## Class  `Coordinator` 
线程的协调器。

**别名** : [ `tf.compat.v1.train.Coordinator` ](/api_docs/python/tf/train/Coordinator), [ `tf.compat.v2.train.Coordinator` ](/api_docs/python/tf/train/Coordinator)

This class implements a simple mechanism to coordinate the termination of aset of threads.

#### 用法：


```
 # Create a coordinator.
coord = Coordinator()
# Start a number of threads, passing the coordinator to each of them.
...start thread 1...(coord, ...)
...start thread N...(coord, ...)
# Wait for all the threads to terminate.
coord.join(threads)
 
```

Any of the threads can call  `coord.request_stop()`  to ask for all the threadsto stop.  To cooperate with the requests, each thread must check for `coord.should_stop()`  on a regular basis.   `coord.should_stop()`  returns `True`  as soon as  `coord.request_stop()`  has been called.

使用协调器运行的典型线程将执行以下操作：

```
 while not coord.should_stop():
  ...do some work...
 
```

#### 异常处理：
A thread can report an exception to the coordinator as part of the `request_stop()`  call.  The exception will be re-raised from the `coord.join()`  call.

#### 线程代码：


```
 try:
  while not coord.should_stop():
    ...do some work...
除E例外：
  coord.request_stop(e)
 
```

#### 主代码：


```
 try:
  ...
  coord = Coordinator()
  # Start a number of threads, passing the coordinator to each of them.
  ...start thread 1...(coord, ...)
  ...start thread N...(coord, ...)
  # Wait for all the threads to terminate.
  coord.join(threads)
除E例外：
  ...exception that was passed to coord.request_stop()
 
```

To simplify the thread implementation, the Coordinator provides acontext handler  `stop_on_exception()`  that automatically requests a stop ifan exception is raised.  Using the context handler the thread code abovecan be written as:

```
 with coord.stop_on_exception():
  while not coord.should_stop():
    ...do some work...
 
```

#### 停止宽限期：
After a thread has called  `coord.request_stop()`  the other threads have afixed time to stop, this is called the 'stop grace period' and defaults to 2minutes.  If any of the threads is still alive after the grace period expires `coord.join()`  raises a RuntimeError reporting the laggards.

```
 try:
  ...
  coord = Coordinator()
  # Start a number of threads, passing the coordinator to each of them.
  ...start thread 1...(coord, ...)
  ...start thread N...(coord, ...)
  # Wait for all the threads to terminate, give them 10s grace period
  coord.join(threads, stop_grace_period_secs=10)
除了运行时错误：
  ...one of the threads took more than 10s to stop after request_stop()
  ...was called.
例外情况除外：
  ...exception that was passed to coord.request_stop()
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L130-L159)

```
 __init__(clean_stop_exception_types=None)
 
```

创建一个新的协调器。

#### 参数：
- **`clean_stop_exception_types`** : Optional tuple of Exception types that shouldcause a clean stop of the coordinator. If an exception of one of thesetypes is reported to  `request_stop(ex)`  the coordinator will behave asif  `request_stop(None)`  was called.  Defaults to `(tf.errors.OutOfRangeError,)`  which is used by input queues to signalthe end of input. When feeding training data from a Python iterator itis common to add  `StopIteration`  to this list.


## 属性


###  `joined` 


## 方法


###  `clear_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L246-L255)

```
 clear_stop()
 
```

清除停止标志。

After this is called, calls to  `should_stop()`  will return  `False` .

###  `join` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L322-L397)

```
 join(
    threads=None,
    stop_grace_period_secs=120,
    ignore_live_threads=False
)
 
```

等待线程终止。

This call blocks until a set of threads have terminated.  The set of threadis the union of the threads passed in the  `threads`  argument and the listof threads that registered with the coordinator by calling[ `Coordinator.register_thread()` ](https://tensorflow.google.cn/api_docs/python/tf/train/Coordinator#register_thread).

After the threads stop, if an  `exc_info`  was passed to  `request_stop` , thatexception is re-raised.

Grace period handling: When  `request_stop()`  is called, threads are given'stop_grace_period_secs' seconds to terminate.  If any of them is stillalive after that period expires, a  `RuntimeError`  is raised.  Note that ifan  `exc_info`  was passed to  `request_stop()`  then it is raised instead ofthat  `RuntimeError` .

#### 参数：
- **`threads`** : List of  `threading.Threads` . The started threads to join inaddition to the registered threads.
- **`stop_grace_period_secs`** : Number of seconds given to threads to stop after `request_stop()`  has been called.
- **`ignore_live_threads`** : If  `False` , raises an error if any of the threads arestill alive after  `stop_grace_period_secs` .


#### 加薪：
- **`RuntimeError`** : If any thread is still alive after  `request_stop()` is called and the grace period expires.


###  `raise_requested_exception` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L403-L407)

```
 raise_requested_exception()
 
```

If an exception has been passed to  `request_stop` , this raises it.

###  `register_thread` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L313-L320)

```
 register_thread(thread)
 
```

注册要加入的线程。

#### 参数：
- **`thread`** : A Python thread to join.


###  `request_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L187-L244)

```
 request_stop(ex=None)
 
```

请求线程停止。

After this is called, calls to  `should_stop()`  will return  `True` .


**Note:**  If an exception is being passed in, in must be in the context ofhandling the exception (i.e.  `try: ... except Exception as ex: ...` ) and nota newly created one.


#### 参数：
- **`ex`** : Optional  `Exception` , or Python  `exc_info`  tuple as returned by `sys.exc_info()` .  If this is the first call to  `request_stop()`  thecorresponding exception is recorded and re-raised from  `join()` .


###  `should_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L257-L263)

```
 should_stop()
 
```

检查是否请求停止。

#### 返回：
如果请求停止，则为true。

###  `stop_on_exception` 


```
 stop_on_exception(
    *args,
    **kwds
)
 
```

在引发异常时请求停止的上下文管理器。

Code that uses a coordinator must catch exceptions and passthem to the  `request_stop()`  method to stop the other threadsmanaged by the coordinator.

This context handler simplifies the exception handling.Use it as follows:

```
 with coord.stop_on_exception():
  # Any exception raised in the body of the with
  # clause is reported to the coordinator before terminating
  # the execution of the body.
  ...body...
 
```

这完全等同于稍长的代码：

```
 try:
  ...body...
除外：
  coord.request_stop(sys.exc_info())
 
```

#### 收益率：
没有什么。

###  `wait_for_stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L301-L311)

```
 wait_for_stop(timeout=None)
 
```

等协调员被叫停。

#### 参数：
- **`timeout`** : Float.  Sleep for up to that many seconds waiting forshould_stop() to become True.


#### 返回：
True if the Coordinator is told stop, False if the timeout expired.

