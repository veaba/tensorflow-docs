
Starts a trace to record computation graphs and profiling information.
### Aliases:
- `tf.compat.v2.summary.trace_on`

```
 tf.summary.trace_on(
    graph=True,
    profiler=False
)
```

Must be invoked in eager mode.

When enabled, TensorFlow runtime will collection information that can later be exported and consumed by TensorBoard. The trace is activated across the entire TensorFlow runtime and affects all threads of execution.
[tf.summary.trace_export](https://www.tensorflow.org/api_docs/python/tf/summary/trace_export)To stop the trace and export the collected information, use . To stop the trace without exporting, use tf.summary.trace_off.

#### Args:
- `graph`: If True, enables collection of executed `graph`s. It includes ones from tf.function invocation and ones from the legacy `graph` mode. The default is True.
- `profiler`: If True, enables the advanced `profiler`. Enabling `profiler` implicitly enables the `graph` collection. The `profiler` may incur a high memory overhead. The default is False.
