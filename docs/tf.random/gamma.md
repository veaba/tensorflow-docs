Draws `shape` samples from each of the given Gamma distribution(s).
### Aliases:
- `tf.compat.v1.random.gamma`
- `tf.compat.v1.random_gamma`
- `tf.compat.v2.random.gamma`

```
 tf.random.gamma(
    shape,
    alpha,
    beta=None,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
`alpha` is the shape parameter describing the distribution(s), and `beta` is the inverse scale parameter(s).
The samples are differentiable w.r.t. alpha and beta. The derivatives are computed using the approach described in the paper
Michael Figurnov, Shakir Mohamed, Andriy Mnih. Implicit Reparameterization Gradients, 2018
#### Example:

```
 samples = tf.random.gamma([10], [0.5, 1.5])
# samples has shape [10, 2], where each slice [:, 0] and [:, 1] represents
# the samples drawn from each distribution

samples = tf.random.gamma([7, 5], [0.5, 1.5])
# samples has shape [7, 5, 2], where each slice [:, :, 0] and [:, :, 1]
# represents the 7x5 samples drawn from each of the two distributions

alpha = tf.constant([[1.],[3.],[5.]])
beta = tf.constant([[3., 4.]])
samples = tf.random.gamma([30], alpha=alpha, beta=beta)
# samples has shape [30, 3, 2], with 30 samples each of 3x2 distributions.

loss = tf.reduce_mean(tf.square(samples))
dloss_dalpha, dloss_dbeta = tf.gradients(loss, [alpha, beta])
# unbiased stochastic derivatives of the loss function
alpha.shape == dloss_dalpha.shape  # True
beta.shape == dloss_dbeta.shape  # True
```
#### Args:
- `shape`: A 1-D integer Tensor or Python array. The `shape` of the output samples to be drawn per alpha/beta-parameterized distribution.
- `alpha`: A Tensor or Python value or N-D array of type `dtype`. `alpha` provides the shape parameter(s) describing the gamma distribution(s) to sample. Must be broadcastable with `beta`.
- `beta`: A Tensor or Python value or N-D array of type `dtype`. Defaults to 1. `beta` provides the inverse scale parameter(s) of the gamma distribution(s) to sample. Must be broadcastable with `alpha`.
- `dtype`: The type of alpha, beta, and the output: `float16`, `float32`, or `float64`.
- `seed`: A Python integer. Used to create a random `seed` for the distributions. See `tf.compat.v1.set_random_seed` for behavior.
- `name`: Optional `name` for the operation.
#### Returns:
