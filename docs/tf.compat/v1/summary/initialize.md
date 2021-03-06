初始化图表执行模式的摘要写入。

```
 tf.compat.v1.summary.initialize(    graph=None,    session=None) 
```

This operation is a no-op when executing eagerly.

This helper method provides a higher-level alternative to using `tf.contrib.summary.summary_writer_initializer_op`  and `tf.contrib.summary.graph` .

Most users will also want to call [ `tf.compat.v1.train.create_global_step` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/create_global_step)which can happen before or after this function is called.

#### 参数：
- **`graph`** : A [ `tf.Graph` ](https://tensorflow.google.cn/api_docs/python/tf/Graph) or [ `tf.compat.v1.GraphDef` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/GraphDef) to output to the writer.This function will not write the default graph by default. Whenwriting to an event log file, the associated step will be zero.
- **`session`** : So this method can call  `tf.Session.run` . This defaultsto [ `tf.compat.v1.get_default_session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_default_session).


#### 加薪：
- **`RuntimeError`** : If  the current thread has no default `tf.contrib.summary.SummaryWriter` .
- **`ValueError`** : If session wasn't passed and no default session.
