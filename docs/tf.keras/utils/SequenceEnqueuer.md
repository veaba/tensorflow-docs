

## Class  `SequenceEnqueuer` 
将输入排队的基类。

**别名** : [ `tf.compat.v1.keras.utils.SequenceEnqueuer` ](/api_docs/python/tf/keras/utils/SequenceEnqueuer), [ `tf.compat.v2.keras.utils.SequenceEnqueuer` ](/api_docs/python/tf/keras/utils/SequenceEnqueuer)

The task of an Enqueuer is to use parallelism to speed up preprocessing.This is done with processes or threads.

#### 示例：


```
     enqueuer = SequenceEnqueuer(...)
    enqueuer.start()
    datas = enqueuer.get()
    for data in datas:
        # Use the inputs; training, evaluating, predicting.
        # ... stop sometime.
    enqueuer.close()
 
```

The  `enqueuer.get()`  should be an infinite stream of datas.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L596-L624)

```
 __init__(
    sequence,
    use_multiprocessing=False
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `get` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L687-L696)

```
 get()
 
```

创建生成器以从队列中提取数据。

Skip the data if it is  `None` .

# Returns


```
 Generator yielding tuples `(inputs, targets)`
    or `(inputs, targets, sample_weights)`.
 
```

###  `is_running` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L626-L627)

```
 is_running()
 
```

###  `start` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L629-L647)

```
 start(
    workers=1,
    max_queue_size=10
)
 
```

启动处理程序的工作线程。

#### 参数：
- **`workers`** : Number of workers.
- **`max_queue_size`** : queue size(when full, workers could block on  `put()` )


###  `stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L654-L668)

```
 stop(timeout=None)
 
```

Stops running threads and wait for them to exit, if necessary.

Should be called by the same thread which called  `start()` .

#### 参数：
- **`timeout`** : maximum time to wait on  `thread.join()` 
