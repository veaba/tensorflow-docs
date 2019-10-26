Returns and create (if necessary) the global step tensor.

```
 tf.compat.v1.train.get_or_create_global_step(graph=None)
```
### Used in the guide:
- Migrate your TensorFlow 1 code to TensorFlow 2
### Used in the tutorials:
- Multi-worker training with Estimator
#### Args:
- graph: The graph in which to create the global step tensor. If missing, use default graph.
#### Returns:
The global step tensor.
