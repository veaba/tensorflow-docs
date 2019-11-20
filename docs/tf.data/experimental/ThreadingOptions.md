[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/ThreadingOptions)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/threading_options.py#L26-L50)  
---|---  
  
## Class `ThreadingOptions`

Represents options for dataset threading.

### Aliases:

  * Class [`tf.compat.v1.data.experimental.ThreadingOptions`](/api_docs/python/tf/data/experimental/ThreadingOptions)
  * Class [`tf.compat.v2.data.experimental.ThreadingOptions`](/api_docs/python/tf/data/experimental/ThreadingOptions)

You can set the threading options of a dataset through the
`experimental_threading` property of
[`tf.data.Options`](https://tensorflow.google.cn/api_docs/python/tf/data/Options);
the property is an instance of
[`tf.data.experimental.ThreadingOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/ThreadingOptions).

    
    
    options = tf.data.Options()
    options.experimental_threading.private_threadpool_size = 10
    dataset = dataset.with_options(options)
    

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

    
    
    __init__()
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `max_intra_op_parallelism`

If set, it overrides the maximum degree of intra-op parallelism.

### `private_threadpool_size`

If set, the dataset will use a private threadpool of the given size.

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

