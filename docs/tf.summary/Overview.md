Operations for writing summary data, for use in analysis and visualization.
### Aliases:
- Module `tf.compat.v2.summary`
The `tf.summary` module provides APIs for writing summary data. This data can be visualized in TensorBoard, the visualization toolkit that comes with TensorFlow. See the TensorBoard website for more detailed tutorials about how to use these APIs, or some quick examples below.
Example usage with eager execution, the default in TF 2.0:

```
 writer = tf.summary.create_file_writer("/tmp/mylogs")
with writer.as_default():
  for step in range(100):
    # other model code would go here
    tf.summary.scalar("my_metric", 0.5, step=step)
    writer.flush()
```
Example usage with `tf.function` graph execution:

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
`experimental` module: Public API for tf.summary.`experimental` namespace.
## Classes
`class SummaryWriter`: Interface representing a stateful summary writer object.
## Functions
