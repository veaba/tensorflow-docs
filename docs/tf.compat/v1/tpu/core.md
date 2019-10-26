Returns the device name for a core in a replicated TPU computation.

```
 tf.compat.v1.tpu.core(num)
```
#### Args:
- num: the virtual core number within each replica to which operators should be assigned.
#### Returns:
[tf.device()](https://tensorflow.google.cn/api_docs/python/tf/device)A device name, suitable for passing to .

