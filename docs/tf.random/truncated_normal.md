Outputs random values from a truncated normal distribution.
### Aliases:
- tf.compat.v1.random.truncated_normal
- tf.compat.v1.truncated_normal
- tf.compat.v2.random.truncated_normal

```
 tf.random.truncated_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
### Used in the guide:
- Ragged tensors
The generated values follow a normal distribution with specified mean and standard deviation, except that values whose magnitude is more than 2 standard deviations from the mean are dropped and re-picked.
#### Args:
- shape: A 1-D integer Tensor or Python array. The shape of the output tensor.
- mean: A 0-D Tensor or Python value of type dtype. The mean of the truncated normal distribution.
- stddev: A 0-D Tensor or Python value of type dtype. The standard deviation of the normal distribution, before truncation.
- dtype: The type of the output.
- seed: A Python integer. Used to create a random seed for the distribution. See tf.compat.v1.set_random_seed for behavior.
- name: A name for the operation (optional).
#### Returns:
A tensor of the specified shape filled with random truncated normal values.
