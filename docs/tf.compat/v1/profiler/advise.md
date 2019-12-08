Auto profile and advise.



```
 tf.compat.v1.profiler.advise(
    graph=None,
    run_meta=None,
    options=_DEFAULT_ADVISE_OPTIONS
)
 
```

Builds profiles and automatically check anomalies of various
  aspects. For more details:
  https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/README.md



#### Args:

- **`graph`** : tf.Graph. If None and eager execution is not enabled, use
default graph.

- **`run_meta`** : optional tensorflow.RunMetadata proto. It is necessary to
to support run time information profiling, such as time and memory.

- **`options`** : see ALL_ADVICE example above. Default checks everything.



#### Returns:
Returns AdviceProto proto

