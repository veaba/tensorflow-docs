## Class Session
A class for running TensorFlow operations.
A `Session` object encapsulates the environment in which `Operation` objects are executed, and `Tensor` objects are evaluated. For example:

```
 # Build a graph.
a = tf.constant(5.0)
b = tf.constant(6.0)
c = a * b

# Launch the graph in a session.
sess = tf.compat.v1.Session()

# Evaluate the tensor `c`.
print(sess.run(c))
```
A session may own resources, such as `tf.Variable`, `tf.queue.QueueBase`, and `tf.compat.v1.ReaderBase`. It is important to release these resources when they are no longer required. To do this, either invoke the `tf.Session.close` method on the session, or use the session as a context manager. The following two examples are equivalent:

```
 # Using the `close()` method.
sess = tf.compat.v1.Session()
sess.run(...)
sess.close()

# Using the context manager.
with tf.compat.v1.Session() as sess:
  sess.run(...)
```
The `ConfigProto` protocol buffer exposes various configuration options for a session. For example, to create a session that uses soft constraints for device placement, and log the resulting placement decisions, create a session as follows:

```
 # Launch the graph in a session that allows soft device placement and
# logs the placement decisions.
sess = tf.compat.v1.Session(config=tf.compat.v1.ConfigProto(
    allow_soft_placement=True,
    log_device_placement=True))
```
## __init__
View source

```
 __init__(
    target='',
    graph=None,
    config=None
)
```
Creates a new TensorFlow session.
