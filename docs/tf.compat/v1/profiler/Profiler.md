

## Class  `Profiler` 
TensorFlow multi-step profiler.

https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/readme.md

```
典型用例：
  # Currently we are only allowed to create 1 profiler per process.
  profiler = Profiler(sess.graph)

  for i in xrange(total_steps):
    if i % 10000 == 0:
      run_meta = tf.compat.v1.RunMetadata()
      _ = sess.run(...,
                   options=tf.compat.v1.RunOptions(
                       trace_level=tf.RunOptions.FULL_TRACE),
                   run_metadata=run_meta)
      profiler.add_step(i, run_meta)

      # Profile the parameters of your model.
      profiler.profile_name_scope(options=(option_builder.ProfileOptionBuilder
          .trainable_variables_parameter()))

      # Or profile the timing of your model operations.
      opts = option_builder.ProfileOptionBuilder.time_and_memory()
      profiler.profile_operations(options=opts)

      # Or you can generate a timeline:
      opts = (option_builder.ProfileOptionBuilder(
              option_builder.ProfileOptionBuilder.time_and_memory())
              .with_step(i)
              .with_timeline_output(filename).build())
      profiler.profile_graph(options=opts)
    else:
      _ = sess.run(...)
  # Auto detect problems and generate advice.
  profiler.advise()
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L166-L184)

```
 __init__(
    graph=None,
    op_log=None
)
 
```

构造器。

#### 参数：
- **`graph`** : tf.Graph. If None and eager execution is not enabled, usedefault graph.
- **`op_log`** : optional. tensorflow::tfprof::OpLogProto proto. Used to defineextra op types.


## 方法


###  `add_step` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L189-L205)

```
 add_step(
    step,
    run_meta
)
 
```

添加步骤的统计信息。

#### 参数：
- **`step`** : int, An id used to group one or more different  `run_meta`  together.When profiling with the profile_xxx APIs, user can use the  `step` id in the  `options`  to profile these  `run_meta`  together.
- **`run_meta`** : RunMetadata proto that contains statistics of a session run.


###  `advise` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L279-L291)

```
 advise(options)
 
```

自动检测问题并生成报告。

#### 参数：
- **`options`** : A dict of options. See ALL_ADVICE example above.


#### 返回：
一个通知原型，它包含所有检查者的报告。

###  `profile_graph` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L262-L277)

```
 profile_graph(options)
 
```

Profile the statistics of graph nodes, organized by dataflow graph.

#### 参数：
- **`options`** : A dict of options. See core/profiler/g3doc/options.md.


#### 返回：
记录结果的GraphnodeProto。

###  `profile_name_scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L245-L260)

```
 profile_name_scope(options)
 
```

Profile the statistics of graph nodes, organized by name scope.

#### 参数：
- **`options`** : A dict of options. See core/profiler/g3doc/options.md.


#### 返回：
记录结果的GraphnodeProto。

###  `profile_operations` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L228-L243)

```
 profile_operations(options)
 
```

Profile the statistics of the Operation types (e.g. MatMul, Conv2D).

#### 参数：
- **`options`** : A dict of options. See core/profiler/g3doc/options.md.


#### 返回：
记录结果的多重图形模型。

###  `profile_python` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L207-L226)

```
 profile_python(options)
 
```

分析python代码的统计信息。

By default, it shows the call stack from root. To avoid  redundant output, you may use options to filter as below    options['show_name_regexes'] = ['.*my_code.py.*']

#### 参数：
- **`options`** : A dict of options. See core/profiler/g3doc/options.md.


#### 返回：
记录结果的多重图形模型。

###  `serialize_to_string` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L293-L302)

```
 serialize_to_string()
 
```

将profileproto序列化为二进制字符串。

Users can write it to file for offline analysis by tfprof commandline  or graphical interface.

#### 返回：
profileproto二进制字符串。

