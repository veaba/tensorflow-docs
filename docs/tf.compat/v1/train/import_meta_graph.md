
Recreates a Graph saved in a MetaGraphDef proto.

```
 tf.compat.v1.train.import_meta_graph(
    meta_graph_or_file,
    clear_devices=False,
    import_scope=None,
    **kwargs
)
```

This function takes a MetaGraphDef protocol buffer as input. If the argument is a file containing a MetaGraphDef protocol buffer , it constructs a protocol buffer from the file content. The function then adds all the nodes from the graph_def field to the current graph, recreates all the collections, and returns a saver constructed from the saver_def field.

In combination with export_meta_graph(), this function can be used to
- Serialize a graph along with other Python objects such as `QueueRunner`, `Variable` into a `MetaGraphDef`.
- Restart training from a saved graph and checkpoints.
- Run inference from a saved graph and checkpoints.

```
 ...
# Create a saver.
saver = tf.compat.v1.train.Saver(...variables...)
# Remember the training_op we want to run by adding it to a collection.
tf.compat.v1.add_to_collection('train_op', train_op)
sess = tf.compat.v1.Session()
for step in xrange(1000000):
    sess.run(train_op)
    if step % 1000 == 0:
        # Saves checkpoint, which by default also exports a meta_graph
        # named 'my-model-global_step.meta'.
        saver.save(sess, 'my-model', global_step=step)
```

Later we can continue training from this saved meta_graph without building the model from scratch.

```
 with tf.Session() as sess:
  new_saver =
  tf.train.import_meta_graph('my-save-dir/my-model-10000.meta')
  new_saver.restore(sess, 'my-save-dir/my-model-10000')
  # tf.get_collection() returns a list. In this example we only want
  # the first one.
  train_op = tf.get_collection('train_op')[0]
  for step in xrange(1000000):
    sess.run(train_op)
```

NOTE: Restarting training from saved meta_graph only works if the device assignments have not changed.
#### Example:

Variables, placeholders, and independent operations can also be stored, as shown in the following example.

```
 # Saving contents and operations.
v1 = tf.placeholder(tf.float32, name="v1")
v2 = tf.placeholder(tf.float32, name="v2")
v3 = tf.math.multiply(v1, v2)
vx = tf.Variable(10.0, name="vx")
v4 = tf.add(v3, vx, name="v4")
saver = tf.train.Saver([vx])
sess = tf.Session()
sess.run(tf.global_variables_initializer())
sess.run(vx.assign(tf.add(vx, vx)))
result = sess.run(v4, feed_dict={v1:12.0, v2:3.3})
print(result)
saver.save(sess, "./model_ex1")
```

Later this model can be restored and contents loaded.

```
 # Restoring variables and running operations.
saver = tf.train.import_meta_graph("./model_ex1.meta")
sess = tf.Session()
saver.restore(sess, "./model_ex1")
result = sess.run("v4:0", feed_dict={"v1:0": 12.0, "v2:0": 3.3})
print(result)
```
#### Args:
- `meta_graph_or_file`: `MetaGraphDef` protocol buffer or filename (including the path) containing a `MetaGraphDef`.
- `clear_devices`: Whether or not to clear the device field for an `Operation` or `Tensor` during import.
- `import_scope`: Optional `string`. Name scope to add. Only used when initializing from protocol buffer.
#### Returns:

A saver constructed from saver_def in MetaGraphDef or None.

A None value is returned if no variables exist in the MetaGraphDef (i.e., there are no variables to restore).
#### Raises:
- `RuntimeError`: If called with eager execution enabled.
#### Eager Compatibility

Exporting/importing meta graphs is not supported. No graph exists when eager execution is enabled.
