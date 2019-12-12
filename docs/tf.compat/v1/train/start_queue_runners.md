Starts all queue runners collected in the graph. (deprecated)

```
 tf.compat.v1.train.start_queue_runners(    sess=None,    coord=None,    daemon=True,    start=True,    collection=tf.GraphKeys.QUEUE_RUNNERS) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:To construct input pipelines, use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) module.
This is a companion method to  `add_queue_runner()` .  It just startsthreads for all queue runners collected in the graph.  It returnsthe list of all threads.

#### Args:
- **`sess`** :  `Session`  used to run the queue ops.  Defaults to thedefault session.
- **`coord`** : Optional  `Coordinator`  for coordinating the started threads.
- **`daemon`** : Whether the threads should be marked as  `daemons` , meaningthey don't block program exit.
- **`start`** : Set to  `False`  to only create the threads, not start them.
- **`collection`** : A  `GraphKey`  specifying the graph collection toget the queue runners from.  Defaults to  `GraphKeys.QUEUE_RUNNERS` .


#### Raises:
- **`ValueError`** : if  `sess`  is None and there isn't any default session.
- **`TypeError`** : if  `sess`  is not a [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) object.


#### Returns:
A list of threads.

#### Raises:
- **`RuntimeError`** : If called with eager execution enabled.
- **`ValueError`** : If called without a default [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) registered.


#### Eager Compatibility
Not compatible with eager execution. To ingest data under eager execution,use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) API instead.

