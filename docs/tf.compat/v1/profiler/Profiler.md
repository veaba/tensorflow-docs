## Class Profiler
TensorFlow multi-step profiler.
https://github.com/tensorflow/tensorflow/tree/master/tensorflow/core/profiler/README.md

```
 Typical use case:
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
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L166-L184)


```
 __init__(
    graph=None,
    op_log=None
)
```
Constructor.
#### Args:
- graph: tf.Graph. If None and eager execution is not enabled, use default graph.
- op_log: optional. tensorflow::tfprof::OpLogProto proto. Used to define extra op types.
## Methods
### add_step
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L189-L205)


```
 add_step(
    step,
    run_meta
)
```
Add statistics of a step.
#### Args:
- step: int, An id used to group one or more different run_meta together. When profiling with the profile_xxx APIs, user can use the step id in the options to profile these run_meta together.
- run_meta: RunMetadata proto that contains statistics of a session run.
### advise
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L279-L291)


```
 advise(options)
```
Automatically detect problems and generate reports.
#### Args:
- options: A dict of options. See ALL_ADVICE example above.
#### Returns:
A Advise proto that conains the reports from all checkers.
### profile_graph
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L262-L277)


```
 profile_graph(options)
```
Profile the statistics of graph nodes, organized by dataflow graph.
#### Args:
- options: A dict of options. See core/profiler/g3doc/options.md.
#### Returns:
a GraphNodeProto that records the results.
### profile_name_scope
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L245-L260)


```
 profile_name_scope(options)
```
Profile the statistics of graph nodes, organized by name scope.
#### Args:
- options: A dict of options. See core/profiler/g3doc/options.md.
#### Returns:
a GraphNodeProto that records the results.
### profile_operations
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L228-L243)


```
 profile_operations(options)
```
Profile the statistics of the Operation types (e.g. MatMul, Conv2D).
#### Args:
- options: A dict of options. See core/profiler/g3doc/options.md.
#### Returns:
a MultiGraphNodeProto that records the results.
### profile_python
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L207-L226)


```
 profile_python(options)
```
Profile the statistics of the Python codes.
By default, it shows the call stack from root. To avoid redundant output, you may use options to filter as below options['show_name_regexes'] = ['.my_code.py.']
#### Args:
- options: A dict of options. See core/profiler/g3doc/options.md.
#### Returns:
a MultiGraphNodeProto that records the results.
### serialize_to_string
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/profiler/model_analyzer.py#L293-L302)


```
 serialize_to_string()
```
Serialize the ProfileProto to a binary string.
Users can write it to file for offline analysis by tfprof commandline or graphical interface.
#### Returns:
ProfileProto binary string.
