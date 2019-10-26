Update ref by subtracting value from it.

```
 tf.compat.v1.assign_sub(
    ref,
    value,
    use_locking=None,
    name=None
)
```
[tf.math.subtract](https://tensorflow.google.cn/api_docs/python/tf/math/subtract)This operation outputs ref after the update is done. This makes it easier to chain operations that need to use the reset value. Unlike , this op does not broadcast. ref and value must have the same shape.

#### Args:
- ref: A mutable Tensor. Must be one of the following types: float32, float64, int64, int32, uint8, uint16, int16, int8, complex64, complex128, qint8, quint8, qint32, half. Should be from a Variable node.
- value: A Tensor. Must have the same shape and dtype as ref. The value to be subtracted to the variable.
- use_locking: An optional bool. Defaults to False. If True, the subtraction will be protected by a lock; otherwise the behavior is undefined, but may exhibit less contention.
- name: A name for the operation (optional).
#### Returns:
Same as "ref". Returned as a convenience for operations that want to use the new value after the variable has been updated.
