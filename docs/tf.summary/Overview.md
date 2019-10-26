Operations for writing summary data, for use in analysis and visualization.
### Aliases:
- Module tf.compat.v2.summary
[tf.summary](https://tensorflow.google.cn/api_docs/python/tf/summary)The  module provides APIs for writing summary data. This data can be visualized in TensorBoard, the visualization toolkit that comes with TensorFlow. See the TensorBoard website for more detailed tutorials about how to use these APIs, or some quick examples below.

Example usage with eager execution, the default in TF 2.0:

```
 writer = tf.summary.create_file_writer("/tmp/mylogs")
with writer.as_default():
  for step in range(100):
    # other model code would go here
    tf.summary.scalar("my_metric", 0.5, step=step)
    writer.flush()
```
[tf.function](https://tensorflow.google.cn/api_docs/python/tf/function)Example usage with  graph execution:


```
 writer = tf.summary.create_file_writer("/tmp/mylogs")

@tf.function
def my_func(step):
  # other model code would go here
  with writer.as_default():
    tf.summary.scalar("my_metric", 0.5, step=step)

for step in range(100):
  my_func(step)
  writer.flush()
```
Example usage with legacy TF 1.x graph execution:

```
 with tf.compat.v1.Graph().as_default():
  step = tf.Variable(0, dtype=tf.int64)
  step_update = step.assign_add(1)
  writer = tf.summary.create_file_writer("/tmp/mylogs")
  with writer.as_default():
    tf.summary.scalar("my_metric", 0.5, step=step)
  all_summary_ops = tf.compat.v1.summary.all_v2_summary_ops()
  writer_flush = writer.flush()

  sess = tf.compat.v1.Session()
  sess.run([writer.init(), step.initializer])
  for i in range(100):
    sess.run(all_summary_ops)
    sess.run(step_update)
    sess.run(writer_flush)
```
## Modules
[experimental](https://tensorflow.google.cn/api_docs/python/tf/summary/experimental) module: Public API for tf.summary. namespace.

## Classes
[class SummaryWriter](https://tensorflow.google.cn/api_docs/python/tf/summary/SummaryWriter): Interface representing a stateful summary writer object.

## Functions
[audio(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/audio): Write an audio summary.

[create_file_writer(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/create_file_writer): Creates a summary file writer for the given log directory.

[create_noop_writer(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/create_noop_writer): Returns a summary writer that does nothing.

[flush(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/flush): Forces summary writer to send any buffered data to storage.

[histogram(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/histogram): Write a histogram summary.

[image(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/image): Write an image summary.

[record_if(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/record_if): Sets summary recording on or off per the provided boolean value.

[scalar(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/scalar): Write a scalar summary.

[text(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/text): Write a text summary.

[trace_export(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/trace_export): Stops and exports the active trace as a Summary and/or profile file.

[trace_off(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/trace_off): Stops the current trace and discards any collected information.

[trace_on(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/trace_on): Starts a trace to record computation graphs and profiling information.

[write(...)](https://tensorflow.google.cn/api_docs/python/tf/summary/write): Writes a generic summary to the default SummaryWriter if one exists.

