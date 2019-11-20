[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/copy_to_device)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/prefetching_ops.py#L59-L80)  
---|---  
  
A transformation that copies dataset elements to the given `target_device`.

### Aliases:

  * [`tf.compat.v1.data.experimental.copy_to_device`](/api_docs/python/tf/data/experimental/copy_to_device)
  * [`tf.compat.v2.data.experimental.copy_to_device`](/api_docs/python/tf/data/experimental/copy_to_device)

    
    
    tf.data.experimental.copy_to_device(
        target_device,
        source_device='/cpu:0'
    )
    

#### Args:

  * **`target_device`** : The name of a device to which elements will be copied.
  * **`source_device`** : The original device on which `input_dataset` will be placed.

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

