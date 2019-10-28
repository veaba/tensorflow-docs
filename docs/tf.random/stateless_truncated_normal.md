Outputs deterministic pseudorandom values, truncated normally distributed.
### Aliases:
- `tf.compat.v1.random.stateless_truncated_normal`
- `tf.compat.v2.random.stateless_truncated_normal`

```
 tf.random.stateless_truncated_normal(
    shape,
    seed,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    name=None
)
```
This is a stateless version of `tf.random.truncated_normal`: if run twice with the same seeds, it will produce the same pseudorandom numbers. The output is consistent across multiple runs on the same hardware (and between CPU and GPU), but may change between versions of TensorFlow or on non-CPU/GPU hardware.
The generated values follow a normal distribution with specified mean and standard deviation, except that values whose magnitude is more than 2 standard deviations from the mean are dropped and re-picked.
#### Args:
- `shape`: A 1-D integer Tensor or Python array. The `shape` of the output tensor.
- `seed`: A shape [2] integer Tensor of `seed`s to the random number generator.
- `mean`: A 0-D Tensor or Python value of type `dtype`. The `mean` of the truncated normal distribution.
- `stddev`: A 0-D Tensor or Python value of type `dtype`. The standard deviation of the normal distribution, before truncation.
- `dtype`: The type of the output.
- `name`: A `name` for the operation (optional).
#### Returns:
A tensor of the specified shape filled with random truncated normal values.
