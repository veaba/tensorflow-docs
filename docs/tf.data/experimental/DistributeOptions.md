[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/DistributeOptions)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/distribute_options.py#L25-L63)  
  
  
## Class `DistributeOptions`

Represents options for distributed data processing.

### Aliases:

  * Class [`tf.compat.v1.data.experimental.DistributeOptions`](/api_docs/python/tf/data/experimental/DistributeOptions)
  * Class [`tf.compat.v2.data.experimental.DistributeOptions`](/api_docs/python/tf/data/experimental/DistributeOptions)

You can set the distribution options of a dataset through the
`experimental_distribute` property of
[`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options);
the property is an instance of
[`tf.data.experimental.DistributeOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions).

    
    
    options = tf.data.Options()
    options.experimental_distribute.auto_shard = False
    dataset = dataset.with_options(options)
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

    
    
    __init__()
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `auto_shard`

Whether the dataset should be automatically sharded when processedin a
distributed fashion. This is applicable when using Keras with multi-worker/TPU
distribution strategy, and by using
strategy.experimental_distribute_dataset(). In other cases, this option does
nothing. If None, defaults to True.

### `num_devices`

The number of devices attached to this input pipeline. This will be
automatically set by MultiDeviceIterator.

## Methods

### `__eq__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)

    
    
    __eq__(other)
    

Return self==value.

### `__ne__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)

    
    
    __ne__(other)
    

Return self!=value.

