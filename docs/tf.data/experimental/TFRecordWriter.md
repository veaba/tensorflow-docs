

## Class  `TFRecordWriter` 
Writes data to a TFRecord file.



### Aliases:

- Class [ `tf.compat.v1.data.experimental.TFRecordWriter` ](/api_docs/python/tf/data/experimental/TFRecordWriter)

- Class [ `tf.compat.v2.data.experimental.TFRecordWriter` ](/api_docs/python/tf/data/experimental/TFRecordWriter)



### Used in the tutorials:

- [TFRecord and tf.Example](https://tensorflow.google.cn/tutorials/load_data/tfrecord)

To write a  `dataset`  to a single TFRecord file:



```
 dataset = ... # dataset to be written
writer = tf.data.experimental.TFRecordWriter(PATH)
writer.write(dataset)
 
```

To shard a  `dataset`  across multiple TFRecord files:



```
 dataset = ... # dataset to be written

def reduce_func(key, dataset):
  filename = tf.strings.join([PATH_PREFIX, tf.strings.as_string(key)])
  writer = tf.data.experimental.TFRecordWriter(filename)
  writer.write(dataset.map(lambda _, x: x))
  return tf.data.Dataset.from_tensors(filename)

dataset = dataset.enumerate()
dataset = dataset.apply(tf.data.experimental.group_by_window(
  lambda i, _: i % NUM_SHARDS, reduce_func, tf.int64.max
))
 
```



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/writers.py#L59-L66)



```
 __init__(
    filename,
    compression_type=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.



## Methods


###  `write` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/writers.py#L68-L87)



```
 write(dataset)
 
```

Returns a [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) to write a dataset to a file.



#### Args:

- **`dataset`** : a [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) whose elements are to be written to a file



#### Returns:
A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that, when run, writes contents of  `dataset`  to a file.

