Outputs random values from a normal distribution.
### Aliases:
- tf.compat.v1.random.normal
- tf.compat.v1.random_normal
- tf.compat.v2.random.normal

```
 tf.random.normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
### Used in the guide:
- Eager execution
### Used in the tutorials:
- Convolutional Variational Autoencoder
- Deep Convolutional Generative Adversarial Network
- Custom training: basics
- Custom training with tf.distribute.Strategy
#### Args:
- shape: A 1-D integer Tensor or Python array. The shape of the output tensor.
- mean: A 0-D Tensor or Python value of type dtype. The mean of the normal distribution.
- stddev: A 0-D Tensor or Python value of type dtype. The standard deviation of the normal distribution.
- dtype: The type of the output.
- seed: A Python integer. Used to create a random seed for the distribution. See tf.compat.v1.set_random_seed for behavior.
- name: A name for the operation (optional).
#### Returns:
A tensor of the specified shape filled with random normal values.
