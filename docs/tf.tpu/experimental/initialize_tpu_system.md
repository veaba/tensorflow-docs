[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/tpu/experimental/initialize_tpu_system)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/tpu/tpu_strategy_util.py#L39-L118)  
  
  
Initialize the TPU devices.

### Aliases:

  * [`tf.compat.v1.tpu.experimental.initialize_tpu_system`](/api_docs/python/tf/tpu/experimental/initialize_tpu_system)
  * [`tf.compat.v2.tpu.experimental.initialize_tpu_system`](/api_docs/python/tf/tpu/experimental/initialize_tpu_system)

    
    
    tf.tpu.experimental.initialize_tpu_system(cluster_resolver=None)
    

#### Args:

  * **`cluster_resolver`** : A tf.distribute.cluster_resolver.TPUClusterResolver, which provides information about the TPU cluster.

#### Returns:

The tf.tpu.Topology object for the topology of the TPU cluster.

#### Raises:

  * **`RuntimeError`** : If no TPU devices found for eager execution.

