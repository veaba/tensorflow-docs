
Returns the device name for a core in a replicated TPU computation.

```
 tf.compat.v1.tpu.core(num)
```
#### Args:
- `num`: the virtual core `num`ber within each replica to which operators should be assigned.
#### Returns:
[tf.device()](https://www.tensorflow.org/api_docs/python/tf/device)A device name, suitable for passing to .

