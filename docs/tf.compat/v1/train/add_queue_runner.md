Adds a  `QueueRunner`  to a collection in the graph. (deprecated)

```
 tf.compat.v1.train.add_queue_runner(    qr,    collection=tf.GraphKeys.QUEUE_RUNNERS) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:To construct input pipelines, use the [ `tf.data` ](https://tensorflow.google.cn/api_docs/python/tf/data) module.
When building a complex model that uses many queues it is often difficult togather all the queue runners that need to be run.  This convenience functionallows you to add a queue runner to a well known collection in the graph.

The companion method  `start_queue_runners()`  can be used to start threads forall the collected queue runners.

#### 参数：
- **`qr`** : A  `QueueRunner` .
- **`collection`** : A  `GraphKey`  specifying the graph collection to addthe queue runner to.  Defaults to  `GraphKeys.QUEUE_RUNNERS` .
