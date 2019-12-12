

## Class  `ProfileOptionBuilder` 
用于分析API的选项生成器。

For tutorial on the options, seehttps://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/g3doc/options.md

```
 # Users can use pre-built options:
opts = (
    tf.profiler.ProfileOptionBuilder.trainable_variables_parameter())

# Or, build your own options:
opts = (tf.compat.v1.profiler.ProfileOptionBuilder()
    .with_max_depth(10)
    .with_min_micros(1000)
    .select(['accelerator_micros'])
    .with_stdout_output()
    .build()

# Or customize the pre-built options:
opts = (tf.compat.v1.profiler.ProfileOptionBuilder(
    tf.profiler.ProfileOptionBuilder.time_and_memory())
    .with_displaying_options(show_name_regexes=['.*rnn.*'])
    .build())

# Finally, profiling with the options:
_ = tf.compat.v1.profiler.profile(tf.compat.v1.get_default_graph(),
                        run_meta=run_meta,
                        cmd='scope',
                        options=opts)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L62-L86)

```
 __init__(options=None)
 
```

构造器。

#### 参数：
- **`options`** : Optional initial option dict to start with.


## 方法


###  `account_displayed_op_only` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L372-L385)

```
 account_displayed_op_only(is_true)
 
```

是否只统计显示的探查器节点的统计信息。

#### 参数：
- **`is_true`** : If true, only account statistics of nodes eventuallydisplayed by the outputs.Otherwise, a node's statistics are accounted by its parentsas long as it's types match 'account_type_regexes', even ifit is hidden from the output, say, by hide_name_regexes.


#### 返回：
自己

###  `build` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L193-L199)

```
 build()
 
```

生成分析选项。

#### 返回：
分析选项的命令。

###  `float_operation` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L114-L141)

```
 @staticmethod
float_operation()
 
```

用于分析浮动操作的选项。

Please see https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/g3doc/profile_model_architecture.mdon the caveats of calculating float operations.

#### 返回：
分析选项的命令。

###  `order_by` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L421-L435)

```
 order_by(attribute)
 
```

根据属性对显示的探查器节点进行排序。

Supported attribute includes micros, bytes, occurrence, params, etc.https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/g3doc/options.md

#### 参数：
- **`attribute`** : An attribute the profiler node has.


#### 返回：
自己

###  `select` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L437-L451)

```
 select(attributes)
 
```

选择要显示的属性。

See https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/g3doc/options.mdfor supported attributes.

#### 参数：
- **`attributes`** : A list of attribute the profiler node has.


#### 返回：
自己

###  `time_and_memory` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L143-L191)

```
 @staticmethod
time_and_memory(
    min_micros=1,
    min_bytes=1,
    min_accelerator_micros=0,
    min_cpu_micros=0,
    min_peak_bytes=0,
    min_residual_bytes=0,
    min_output_bytes=0
)
 
```

显示操作时间和内存消耗。

#### 参数：
- **`min_micros`** : Only show profiler nodes with execution timeno less than this. It sums accelerator and cpu times.
- **`min_bytes`** : Only show profiler nodes requested to allocate no less bytesthan this.
- **`min_accelerator_micros`** : Only show profiler nodes spend no less thanthis time on accelerator (e.g. GPU).
- **`min_cpu_micros`** : Only show profiler nodes spend no less thanthis time on cpu.
- **`min_peak_bytes`** : Only show profiler nodes using no less than this bytesat peak (high watermark). For profiler nodes consist of multiplegraph nodes, it sums the graph nodes' peak_bytes.
- **`min_residual_bytes`** : Only show profiler nodes have no less thanthis bytes not being de-allocated after Compute() ends. Forprofiler nodes consist of multiple graph nodes, it sums thegraph nodes' residual_bytes.
- **`min_output_bytes`** : Only show profiler nodes have no less than this bytesoutput. The output are not necessarily allocated by this profilernodes.


#### 返回：
分析选项的命令。

###  `trainable_variables_parameter` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L88-L112)

```
 @staticmethod
trainable_variables_parameter()
 
```

用于分析可训练变量参数的选项。

通常与“scope”视图一起使用。

#### 返回：
分析选项的命令。

###  `with_accounted_types` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L316-L336)

```
 with_accounted_types(account_type_regexes)
 
```

基于节点类型有选择地计数统计信息。

Here, 'types' means the profiler nodes' properties. Profiler by defaultconsider device name (e.g. /job:xx/.../device:GPU:0) and operation type(e.g. MatMul) as profiler nodes' properties. User can also associatecustomized 'types' to profiler nodes through OpLogProto proto.

For example, user can select profiler nodes placed on gpu:0 with: `account_type_regexes=['.*gpu:0.*']` 

If none of a node's properties match the specified regexes, the node isnot displayed nor accounted.

#### 参数：
- **`account_type_regexes`** : A list of regexes specifying the types.


#### 返回：
自我。

###  `with_empty_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L387-L390)

```
 with_empty_output()
 
```

Do not generate side-effect outputs.

###  `with_file_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L397-L400)

```
 with_file_output(outfile)
 
```

将结果打印到文件中。

###  `with_max_depth` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L201-L214)

```
 with_max_depth(max_depth)
 
```

设置最大显示深度。

The depth depends on profiling view. For 'scope' view, it's thedepth of name scope hierarchy (tree), for 'op' view, it's the numberof operation types (list), etc.

#### 参数：
- **`max_depth`** : Maximum depth of the data structure to display.


#### 返回：
自己

###  `with_min_execution_time` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L245-L264)

```
 with_min_execution_time(
    min_micros=0,
    min_accelerator_micros=0,
    min_cpu_micros=0
)
 
```

Only show profiler nodes consuming no less than 'min_micros'.

#### 参数：
- **`min_micros`** : Only show profiler nodes with execution timeno less than this. It sums accelerator and cpu times.
- **`min_accelerator_micros`** : Only show profiler nodes spend no less thanthis time on accelerator (e.g. GPU).
- **`min_cpu_micros`** : Only show profiler nodes spend no less thanthis time on cpu.


#### 返回：
自己

###  `with_min_float_operations` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L299-L314)

```
 with_min_float_operations(min_float_ops)
 
```

Only show profiler nodes consuming no less than 'min_float_ops'.

Please see https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/g3doc/profile_model_architecture.mdon the caveats of calculating float operations.

#### 参数：
- **`min_float_ops`** : Only show profiler nodes with float operationsno less than this.


#### 返回：
自己

###  `with_min_memory` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L216-L243)

```
 with_min_memory(
    min_bytes=0,
    min_peak_bytes=0,
    min_residual_bytes=0,
    min_output_bytes=0
)
 
```

Only show profiler nodes consuming no less than 'min_bytes'.

#### 参数：
- **`min_bytes`** : Only show profiler nodes requested to allocate no less bytesthan this.
- **`min_peak_bytes`** : Only show profiler nodes using no less than this bytesat peak (high watermark). For profiler nodes consist of multiplegraph nodes, it sums the graph nodes' peak_bytes.
- **`min_residual_bytes`** : Only show profiler nodes have no less thanthis bytes not being de-allocated after Compute() ends. Forprofiler nodes consist of multiple graph nodes, it sums thegraph nodes' residual_bytes.
- **`min_output_bytes`** : Only show profiler nodes have no less than this bytesoutput. The output are not necessarily allocated by this profilernodes.


#### 返回：
自己

###  `with_min_occurrence` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L281-L297)

```
 with_min_occurrence(min_occurrence)
 
```

Only show profiler nodes including no less than 'min_occurrence' graph nodes.

A "node" means a profiler output node, which can be a python line(code view), an operation type (op view), or a graph node(graph/scope view). A python line includes all graph nodes created by thatline, while an operation type includes all graph nodes of that type.

#### 参数：
- **`min_occurrence`** : Only show nodes including no less than this.


#### 返回：
自己

###  `with_min_parameters` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L266-L279)

```
 with_min_parameters(min_params)
 
```

Only show profiler nodes holding no less than 'min_params' parameters.

'Parameters' normally refers the weights of in TensorFlow variables.It reflects the 'capacity' of models.

#### 参数：
- **`min_params`** : Only show profiler nodes holding number parametersno less than this.


#### 返回：
自己

###  `with_node_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L338-L370)

```
 with_node_names(
    start_name_regexes=None,
    show_name_regexes=None,
    hide_name_regexes=None,
    trim_name_regexes=None
)
 
```

用于选择要显示的探查器节点的正则表达式。

After 'with_accounted_types' is evaluated, 'with_node_names' areevaluated as follows:

For a profile data structure, profiler first finds the profiler  nodes matching 'start_name_regexes', and starts displaying profiler  nodes from there. Then, if a node matches 'show_name_regexes' and  doesn't match 'hide_name_regexes', it's displayed. If a node matches  'trim_name_regexes', profiler stops further searching that branch.

#### 参数：
- **`start_name_regexes`** : list of node name regexes to start displaying.
- **`show_name_regexes`** : list of node names regexes to display.
- **`hide_name_regexes`** : list of node_names regexes that should be hidden.
- **`trim_name_regexes`** : list of node name regexes from where to stop.


#### 返回：
自己

###  `with_pprof_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L407-L419)

```
 with_pprof_output(pprof_file)
 
```

生成pprof配置文件gzip文件。

#### 要使用pprof文件：
pprof -png --nodecount=100 --sample_index=1 </pprof_file>

#### 参数：
- **`pprof_file`** : filename for output, usually suffixed with .pb.gz.


#### 返回：
自我。

###  `with_stdout_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L392-L395)

```
 with_stdout_output()
 
```

将结果打印到标准输出。

###  `with_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L453-L465)

```
 with_step(step)
 
```

要用于分析的配置文件步骤。

The 'step' here refers to the step defined by  `Profiler.add_step()`  API.

#### 参数：
- **`step`** : When multiple steps of profiles are available, select which step'sprofile to use. If -1, use average of all available steps.


#### 返回：
自己

###  `with_timeline_output` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/option_builder.py#L402-L405)

```
 with_timeline_output(timeline_file)
 
```

生成时间线json文件。

