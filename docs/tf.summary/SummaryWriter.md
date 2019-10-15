## Class SummaryWriter

Interface representing a stateful summary writer object.
### Aliases:
- Class `tf.compat.v2.summary.SummaryWriter`
## Methods
### as_default
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L186-L190)


```
 as_default()
```

Returns a context manager that enables summary writing.
### close
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L200-L202)


```
 close()
```

Flushes and closes the summary writer.
### flush
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L196-L198)


```
 flush()
```

Flushes any buffered data.
### init
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L192-L194)


```
 init()
```

Initializes the summary writer.
### set_as_default
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L181-L184)


```
 set_as_default()
```

Enables this summary writer for the current thread.
