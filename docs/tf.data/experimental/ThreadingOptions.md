## Class ThreadingOptions

Represents options for dataset threading.
### Aliases:
- Class `tf.compat.v1.data.experimental.ThreadingOptions`
- Class `tf.compat.v2.data.experimental.ThreadingOptions`
[tf.data.Options](https://www.tensorflow.org/api_docs/python/tf/data/Options)You can set the threading options of a dataset through the experimental_threading property of ; the property is an instance of tf.data.experimental.ThreadingOptions.


```
 options = tf.data.Options()
options.experimental_threading.private_threadpool_size = 10
dataset = dataset.with_options(options)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)


```
 __init__()
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### max_intra_op_parallelism

If set, it overrides the maximum degree of intra-op parallelism.
### private_threadpool_size

If set, the dataset will use a private threadpool of the given size.
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)


```
 __eq__(other)
```

Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)


```
 __ne__(other)
```

Return self!=value.
