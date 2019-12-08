

## Class  `GeneratorEnqueuer` 
Builds a queue out of a data generator.

Inherits From: [ `SequenceEnqueuer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/SequenceEnqueuer)



### Aliases:

- Class [ `tf.compat.v1.keras.utils.GeneratorEnqueuer` ](/api_docs/python/tf/keras/utils/GeneratorEnqueuer)

- Class [ `tf.compat.v2.keras.utils.GeneratorEnqueuer` ](/api_docs/python/tf/keras/utils/GeneratorEnqueuer)

The provided generator can be finite in which case the class will throw
a  `StopIteration`  exception.

Used in  `fit_generator` ,  `evaluate_generator` ,  `predict_generator` .



#### Arguments:

- **`generator`** : a generator function which yields data

- **`use_multiprocessing`** : use multiprocessing if True, otherwise threading

- **`wait_time`** : time to sleep in-between calls to  `put()` 

- **`random_seed`** : Initial seed for workers,
will be incremented by one for each worker.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L848-L852)



```
 __init__(
    sequence,
    use_multiprocessing=False,
    random_seed=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.



## Methods


###  `get` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L882-L918)



```
 get()
 
```

Creates a generator to extract data from the queue.

Skip the data if it is  `None` .



#### Yields:
The next element in the queue, i.e. a tuple
 `(inputs, targets)`  or
 `(inputs, targets, sample_weights)` .



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

Starts the handler's workers.



#### Arguments:

- **`workers`** : Number of workers.

- **`max_queue_size`** : queue size
(when full, workers could block on  `put()` )



###  `stop` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L654-L668)



```
 stop(timeout=None)
 
```

Stops running threads and wait for them to exit, if necessary.

Should be called by the same thread which called  `start()` .



#### Arguments:

- **`timeout`** : maximum time to wait on  `thread.join()` 

