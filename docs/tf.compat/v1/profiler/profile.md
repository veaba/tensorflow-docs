剖面模型。

```
 tf.compat.v1.profiler.profile(    graph=None,    run_meta=None,    op_log=None,    cmd='scope',    options=_DEFAULT_PROFILE_OPTIONS) 
```

Tutorials and examples can be found in:  https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/README.md

#### 参数：
- **`graph`** : tf.Graph. If None and eager execution is not enabled, usedefault graph.
- **`run_meta`** : optional tensorflow.RunMetadata proto. It is necessary toto support run time information profiling, such as time and memory.
- **`op_log`** : tensorflow.tfprof.OpLogProto proto. User can assign "types" tograph nodes with op_log. "types" allow user to flexibly group andaccount profiles using options['accounted_type_regexes'].
- **`cmd`** : string. Either 'op', 'scope', 'graph' or 'code'.'op' view organizes profile using operation type. (e.g. MatMul)'scope' view organizes profile using graph node name scope.'graph' view organizes profile using graph node inputs/outputs.'code' view organizes profile using Python call stack.
- **`options`** : A dict of options. See core/profiler/g3doc/options.md.


#### 返回：
If cmd is 'scope' or 'graph', returns GraphNodeProto proto.If cmd is 'op' or 'code', returns MultiGraphNodeProto proto.Side effect: stdout/file/timeline.json depending on options['output']

