[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/InputReplicationMode) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribute_lib.py#L330-L339)  
  
  
## Class `InputReplicationMode`

Replication mode for input function.

### Aliases:

  * Class [`tf.compat.v1.distribute.InputReplicationMode`](/api_docs/python/tf/distribute/InputReplicationMode)
  * Class [`tf.compat.v2.distribute.InputReplicationMode`](/api_docs/python/tf/distribute/InputReplicationMode)

  * `PER_WORKER`: The input function will be called on each worker independently, creating as many input pipelines as number of workers. Replicas will dequeue from the local Dataset on their worker. [`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) doesn't manage any state sharing between such separate input pipelines.

## Class Members

  * `PER_WORKER`

