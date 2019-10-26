Draws samples from a multinomial distribution. (deprecated)
### Aliases:
- tf.compat.v1.random.multinomial

```
 tf.compat.v1.multinomial(
    logits,
    num_samples,
    seed=None,
    name=None,
    output_dtype=None
)
```
#### Example:

```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.categorical(tf.math.log([[0.5, 0.5]]), 5)
```
#### Args:
- logits: 2-D Tensor with shape [batch_size, num_classes]. Each slice [i, :] represents the unnormalized log-probabilities for all classes.
- num_samples: 0-D. Number of independent samples to draw for each row slice.
- seed: A Python integer. Used to create a random seed for the distribution. See tf.compat.v1.set_random_seed for behavior.
- name: Optional name for the operation.
- output_dtype: integer type to use for the output. Defaults to int64.
#### Returns:
The drawn samples of shape [batch_size, num_samples].
