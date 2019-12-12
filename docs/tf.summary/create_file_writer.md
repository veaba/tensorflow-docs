为给定的日志目录创建摘要文件编写器。

```
 tf.summary.create_file_writer(    logdir,    max_queue=None,    flush_millis=None,    filename_suffix=None,    name=None) 
```

### 在指南中使用：
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)


#### 参数：
- **`logdir`** : a string specifying the directory in which to write an event file.
- **`max_queue`** : the largest number of summaries to keep in a queue; willflush once the queue gets bigger than this. Defaults to 10.
- **`flush_millis`** : the largest interval between flushes. Defaults to 120,000.
- **`filename_suffix`** : optional suffix for the event file name. Defaults to  `.v2` .
- **`name`** : a name for the op that creates the writer.


#### 返回：
SummaryWriter对象。

