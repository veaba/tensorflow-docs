Creates a summary file writer for the given log directory.



### Aliases:

- [ `tf.compat.v2.summary.create_file_writer` ](/api_docs/python/tf/summary/create_file_writer)



```
 tf.summary.create_file_writer(
    logdir,
    max_queue=None,
    flush_millis=None,
    filename_suffix=None,
    name=None
)
 
```



### Used in the guide:

- [Eager execution](https://tensorflow.google.cn/guide/eager)



### Used in the tutorials:

- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)



#### Args:

- **`logdir`** : a string specifying the directory in which to write an event file.

- **`max_queue`** : the largest number of summaries to keep in a queue; will
flush once the queue gets bigger than this. Defaults to 10.

- **`flush_millis`** : the largest interval between flushes. Defaults to 120,000.

- **`filename_suffix`** : optional suffix for the event file name. Defaults to  `.v2` .

- **`name`** : a name for the op that creates the writer.



#### Returns:
A SummaryWriter object.

