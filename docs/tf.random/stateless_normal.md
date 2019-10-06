
Outputs deterministic pseudorandom values from a normal distribution.
### Aliases:
- `tf.compat.v1.random.stateless_normal`
- `tf.compat.v2.random.stateless_normal`

```
 tf.random.stateless_normal(
    shape,
    seed,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    name=None
)
```
[tf.random.normal](https://www.tensorflow.org/api_docs/python/tf/random/normal)This is a stateless version of : if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.

#### Args:
- `shape`: A 1-D integer Tensor or Python array. The `shape` of the output tensor.
- `seed`: A `shape` [2] integer Tensor of `seed`s to the random number generator.
- `mean`: A 0-D Tensor or Python value of type `dtype`. The `mean` of the normal distribution.
- `stddev`: A 0-D Tensor or Python value of type `dtype`. The standard deviation of the normal distribution.
- `dtype`: The type of the output.
- `name`: A `name` for the operation (optional).
#### Returns:

A tensor of the specified shape filled with random normal values.
