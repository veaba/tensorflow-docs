Log provided 'op_log', and add additional model information below.

```
 tf.compat.v1.profiler.write_op_log(
    graph,
    log_dir,
    op_log=None,
    run_meta=None,
    add_trace=True
)
 
```

The API also assigns ops in tf.compat.v1.trainable_variables() an op type  called '_trainable_variables'.  The API also logs 'flops' statistics for ops with op.RegisterStatistics()  defined. flops calculation depends on Tensor shapes defined in 'graph',  which might not be complete. 'run_meta', if provided, completes the shape  information with best effort.

#### 参数：
- **`graph`** : tf.Graph. If None and eager execution is not enabled, usedefault graph.
- **`log_dir`** : directory to write the log file.
- **`op_log`** : (Optional) OpLogProto proto to be written. If not provided, an newone is created.
- **`run_meta`** : (Optional) RunMetadata proto that helps flops computation usingrun time shape information.
- **`add_trace`** : Whether to add python code trace information.Used to support "code" view.
