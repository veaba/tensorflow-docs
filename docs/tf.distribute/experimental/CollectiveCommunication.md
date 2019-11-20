[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/experimental/CollectiveCommunication)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/cross_device_ops.py#L975-L986)  
  
  
## Class `CollectiveCommunication`

Communication choices for CollectiveOps.

### Aliases:

  * Class [`tf.compat.v1.distribute.experimental.CollectiveCommunication`](/api_docs/python/tf/distribute/experimental/CollectiveCommunication)
  * Class [`tf.compat.v2.distribute.experimental.CollectiveCommunication`](/api_docs/python/tf/distribute/experimental/CollectiveCommunication)

  * `AUTO`: Default to runtime's automatic choices.
  * `RING`: TensorFlow's ring algorithms for all-reduce and all-gather.
  * `NCCL`: Use ncclAllReduce for all-reduce, and ring algorithms for all-gather.

## Class Members

  * `AUTO`
  * `NCCL`
  * `RING`

