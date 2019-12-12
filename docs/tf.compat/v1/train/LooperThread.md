

## Class  `LooperThread` 
A thread that runs code repeatedly, optionally on a timer.

This thread class is intended to be used with a  `Coordinator` .  It repeatedlyruns code specified either as  `target`  and  `args`  or by the  `run_loop()` method.

Before each run the thread checks if the coordinator has requested stop.  Inthat case the looper thread terminates immediately.

If the code being run raises an exception, that exception is reported to thecoordinator and the thread terminates.  The coordinator will then request allthe other threads it coordinates to stop.

You typically pass looper threads to the supervisor  `Join()`  method.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L429-L457)

```
 __init__(
    coord,
    timer_interval_secs,
    target=None,
    args=None,
    kwargs=None
)
 
```

创建looperthread。

#### 参数：
- **`coord`** : A Coordinator.
- **`timer_interval_secs`** : Time boundaries at which to call Run(), or Noneif it should be called back to back.
- **`target`** : Optional callable object that will be executed in the thread.
- **`args`** : Optional arguments to pass to  `target`  when calling it.
- **`kwargs`** : Optional keyword arguments to pass to  `target`  when calling it.


#### 加薪：
- **`ValueError`** : If one of the arguments is invalid.


## 属性


###  `daemon` 
一个布尔值，指示此线程是否为守护进程线程。

This must be set before start() is called, otherwise RuntimeError israised. Its initial value is inherited from the creating thread; themain thread is not a daemon thread and therefore all threads created inthe main thread default to daemon = False.

The entire Python program exits when no alive non-daemon threads areleft.

###  `ident` 
此线程的线程标识符，如果尚未启动，则为无。

This is a nonzero integer. See the get_ident() function. Threadidentifiers may be recycled when a thread exits and another thread iscreated. The identifier is available even after the thread has exited.

###  `name` 
仅用于标识目的的字符串。

It has no semantics. Multiple threads may be given the same name. Theinitial name is set by the constructor.

## 方法


###  `getName` 


```
 getName()
 
```

###  `isAlive` 


```
 isAlive()
 
```

返回线程是否处于活动状态。

This method returns True just before the run() method starts until justafter the run() method terminates. The module function enumerate()returns a list of all alive threads.

###  `isDaemon` 


```
 isDaemon()
 
```

###  `is_alive` 


```
 is_alive()
 
```

返回线程是否处于活动状态。

This method returns True just before the run() method starts until justafter the run() method terminates. The module function enumerate()returns a list of all alive threads.

###  `join` 


```
 join(timeout=None)
 
```

等到线程终止。

This blocks the calling thread until the thread whose join() method iscalled terminates -- either normally or through an unhandled exceptionor until the optional timeout occurs.

When the timeout argument is present and not None, it should be afloating point number specifying a timeout for the operation in seconds(or fractions thereof). As join() always returns None, you must callisAlive() after join() to decide whether a timeout happened -- if thethread is still alive, the join() call timed out.

When the timeout argument is not present or None, the operation willblock until the thread terminates.

一个线程可以被join（）多次。

join() raises a RuntimeError if an attempt is made to join the currentthread as that would cause a deadlock. It is also an error to join() athread before it has been started and attempts to do so raises the sameexception.

###  `loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L459-L481)

```
 @staticmethod
loop(
    coord,
    timer_interval_secs,
    target,
    args=None,
    kwargs=None
)
 
```

启动周期性调用函数的looperthread。

If  `timer_interval_secs`  is None the thread calls  `target(args)` repeatedly.  Otherwise  `target(args)`  is called every  `timer_interval_secs` seconds.  The thread terminates when a stop of the coordinator isrequested.

#### 参数：
- **`coord`** : A Coordinator.
- **`timer_interval_secs`** : Number. Time boundaries at which to call  `target` .
- **`target`** : A callable object.
- **`args`** : Optional arguments to pass to  `target`  when calling it.
- **`kwargs`** : Optional keyword arguments to pass to  `target`  when calling it.


#### 返回：
开始的线程。

###  `run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L483-L496)

```
 run()
 
```

表示线程活动的方法。

You may override this method in a subclass. The standard run() methodinvokes the callable object passed to the object's constructor as thetarget argument, if any, with sequential and keyword arguments takenfrom the args and kwargs arguments, respectively.

###  `run_loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L506-L509)

```
 run_loop()
 
```

Called at 'timer_interval_secs' boundaries.

###  `setDaemon` 


```
 setDaemon(daemonic)
 
```

###  `setName` 


```
 setName(name)
 
```

###  `start` 


```
 start()
 
```

启动线程的活动。

It must be called at most once per thread object. It arranges for theobject's run() method to be invoked in a separate thread of control.

This method will raise a RuntimeError if called more than once on thesame thread object.

###  `start_loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L498-L500)

```
 start_loop()
 
```

线程启动时调用。

###  `stop_loop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/coordinator.py#L502-L504)

```
 stop_loop()
 
```

当线程停止时调用。

