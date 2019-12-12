

## Class  `Benchmark` 
为TensorFlow基准提供帮助程序的抽象类。

**别名** : [ `tf.compat.v1.test.Benchmark` ](/api_docs/python/tf/test/Benchmark), [ `tf.compat.v2.test.Benchmark` ](/api_docs/python/tf/test/Benchmark)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/benchmark.py#L234-L238)

```
 __init__()
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `evaluate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/benchmark.py#L339-L349)

```
 evaluate(tensors)
 
```

计算张量并返回numpy值。

#### 参数：
- **`tensors`** : A Tensor or a nested list/tuple of Tensors.


#### 返回：
张量numpy值。

###  `is_abstract` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/benchmark.py#L240-L244)

```
 @classmethod
is_abstract(cls)
 
```

###  `report_benchmark` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/benchmark.py#L185-L214)

```
 report_benchmark(
    iters=None,
    cpu_time=None,
    wall_time=None,
    throughput=None,
    extras=None,
    name=None,
    metrics=None
)
 
```

报告基准。

#### 参数：
- **`iters`** : (optional) How many iterations were run
- **`cpu_time`** : (optional) Median or mean cpu time in seconds.
- **`wall_time`** : (optional) Median or mean wall time in seconds.
- **`throughput`** : (optional) Throughput (in MB/s)
- **`extras`** : (optional) Dict mapping string keys to additional benchmark info.Values may be either floats or values that are convertible to strings.
- **`name`** : (optional) Override the BenchmarkEntry name with  `name` .Otherwise it is inferred from the top-level method name.
- **`metrics`** : (optional) A list of dict, where each dict has the keys belowname (required), string, metric namevalue (required), double, metric valuemin_value (optional), double, minimum acceptable metric valuemax_value (optional), double, maximum acceptable metric value


###  `run_op_benchmark` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/platform/benchmark.py#L246-L337)

```
 run_op_benchmark(
    sess,
    op_or_tensor,
    feed_dict=None,
    burn_iters=2,
    min_iters=10,
    store_trace=False,
    store_memory_usage=True,
    name=None,
    extras=None,
    mbs=0
)
 
```

Run an op or tensor in the given session.  Report the results.

#### 参数：
- **`sess`** :  `Session`  object to use for timing.
- **`op_or_tensor`** :  `Operation`  or  `Tensor`  to benchmark.
- **`feed_dict`** : A  `dict`  of values to feed for each op iteration (see the `feed_dict`  parameter of  `Session.run` ).
- **`burn_iters`** : Number of burn-in iterations to run.
- **`min_iters`** : Minimum number of iterations to use for timing.
- **`store_trace`** : Boolean, whether to run an extra untimed iteration andstore the trace of iteration in returned extras.The trace will be stored as a string in Google Chrome trace formatin the extras field "full_trace_chrome_format". Note that tracewill not be stored in test_log_pb2.TestResults proto.
- **`store_memory_usage`** : Boolean, whether to run an extra untimed iteration,calculate memory usage, and store that in extras fields.
- **`name`** : (optional) Override the BenchmarkEntry name with  `name` .Otherwise it is inferred from the top-level method name.
- **`extras`** : (optional) Dict mapping string keys to additional benchmark info.Values may be either floats or values that are convertible to strings.
- **`mbs`** : (optional) The number of megabytes moved by this op, used tocalculate the ops throughput.


#### 返回：
A  `dict`  containing the key-value pairs that were passed to `report_benchmark` . If  `store_trace`  option is used, then `full_chrome_trace_format`  will be included in return dictionary eventhough it is not passed to  `report_benchmark`  with  `extras` .

