Initialize the TPU devices.
### Aliases:
- `tf.compat.v1.tpu.experimental.initialize_tpu_system`
- `tf.compat.v2.tpu.experimental.initialize_tpu_system`

```
 tf.tpu.experimental.initialize_tpu_system(cluster_resolver=None)
```
#### Args:
- `cluster_resolver`: A tf.distribute.`cluster_resolver`.TPUClusterResolver, which provides information about the TPU cluster.
#### Returns:
The tf.tpu.Topology object for the topology of the TPU cluster.
#### Raises:
- `RuntimeError`: If no TPU devices found for eager execution.
