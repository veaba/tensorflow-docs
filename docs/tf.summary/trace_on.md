启动跟踪以记录计算图和分析信息。

```
 tf.summary.trace_on(
    graph=True,
    profiler=False
)
 
```

必须在紧急模式下调用。

When enabled, TensorFlow runtime will collection information that can later beexported and consumed by TensorBoard. The trace is activated across the entireTensorFlow runtime and affects all threads of execution.

To stop the trace and export the collected information, use[ `tf.summary.trace_export` ](https://tensorflow.google.cn/api_docs/python/tf/summary/trace_export). To stop the trace without exporting, use[ `tf.summary.trace_off` ](https://tensorflow.google.cn/api_docs/python/tf/summary/trace_off).

#### 参数：
- **`graph`** : If True, enables collection of executed graphs. It includes ones fromtf.function invocation and ones from the legacy graph mode. The defaultis True.
- **`profiler`** : If True, enables the advanced profiler. Enabling profilerimplicitly enables the graph collection. The profiler may incur a highmemory overhead. The default is False.
