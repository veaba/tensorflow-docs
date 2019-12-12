

## Class  `OrderedEnqueuer` 
从序列生成排队器。

Inherits From: [ `SequenceEnqueuer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/SequenceEnqueuer)

**别名** : [ `tf.compat.v1.keras.utils.OrderedEnqueuer` ](/api_docs/python/tf/keras/utils/OrderedEnqueuer), [ `tf.compat.v2.keras.utils.OrderedEnqueuer` ](/api_docs/python/tf/keras/utils/OrderedEnqueuer)

Used in  `fit_generator` ,  `evaluate_generator` ,  `predict_generator` .

#### 参数：
- **`sequence`** : A  `tf.keras.utils.data_utils.Sequence`  object.
- **`use_multiprocessing`** : use multiprocessing if True, otherwise threading
- **`shuffle`** : whether to shuffle the data at the beginning of each epoch


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L711-L713)

```
 __init__(
    sequence,
    use_multiprocessing=False,
    shuffle=False
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `get` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L767-L785)

```
 get()
 
```

创建生成器以从队列中提取数据。

Skip the data if it is  `None` .

#### 收益率：
The next element in the queue, i.e. a tuple `(inputs, targets)`  or `(inputs, targets, sample_weights)` .

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
