[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/queue_runner_impl.py#L394-L411)  
---  
  
Adds a `QueueRunner` to a collection in the graph. (deprecated)

### Aliases:

  * [`tf.compat.v1.train.queue_runner.add_queue_runner`](/api_docs/python/tf/compat/v1/train/add_queue_runner)

    
    
    tf.compat.v1.train.add_queue_runner(
        qr,
        collection=tf.GraphKeys.QUEUE_RUNNERS
    )
    

**Warning:** THIS FUNCTION IS DEPRECATED. It will be removed in a future
version. Instructions for updating: To construct input pipelines, use the
[`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data) module.

When building a complex model that uses many queues it is often difficult to
gather all the queue runners that need to be run. This convenience function
allows you to add a queue runner to a well known collection in the graph.

The companion method `start_queue_runners()` can be used to start threads for
all the collected queue runners.

#### Args:

  * **`qr`** : A `QueueRunner`.
  * **`collection`** : A `GraphKey` specifying the graph collection to add the queue runner to. Defaults to `GraphKeys.QUEUE_RUNNERS`.

