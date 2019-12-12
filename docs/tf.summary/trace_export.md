Stops and exports the active trace as a Summary and/or profile file.

```
 tf.summary.trace_export(
    name,
    step=None,
    profiler_outdir=None
)
 
```

Stops the trace and exports all metadata collected during the trace to thedefault SummaryWriter, if one has been set.

#### Args:
- **`name`** : A name for the summary to be written.
- **`step`** : Explicit  `int64` -castable monotonic step value for this summary. Ifomitted, this defaults to [ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step), which mustnot be None.
- **`profiler_outdir`** : Output directory for profiler. It is required when profileris enabled when trace was started. Otherwise, it is ignored.


#### Raises:
- **`ValueError`** : if a default writer exists, but no step was provided and[ `tf.summary.experimental.get_step()` ](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental/get_step) is None.
