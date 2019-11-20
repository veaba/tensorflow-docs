[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/random_ops.py#L499-L536)  
---  
  
Draws `shape` samples from each of the given Poisson distribution(s).

### Aliases:

  * [`tf.compat.v1.random.poisson`](/api_docs/python/tf/compat/v1/random_poisson)

    
    
    tf.compat.v1.random_poisson(
        lam,
        shape,
        dtype=tf.dtypes.float32,
        seed=None,
        name=None
    )
    

`lam` is the rate parameter describing the distribution(s).

#### Example:

    
    
    samples = tf.random.poisson([0.5, 1.5], [10])
    # samples has shape [10, 2], where each slice [:, 0] and [:, 1] represents
    # the samples drawn from each distribution
    
    samples = tf.random.poisson([12.2, 3.3], [7, 5])
    # samples has shape [7, 5, 2], where each slice [:, :, 0] and [:, :, 1]
    # represents the 7x5 samples drawn from each of the two distributions
    

#### Args:

  * **`lam`** : A Tensor or Python value or N-D array of type `dtype`. `lam` provides the rate parameter(s) describing the poisson distribution(s) to sample.
  * **`shape`** : A 1-D integer Tensor or Python array. The shape of the output samples to be drawn per "rate"-parameterized distribution.
  * **`dtype`** : The type of the output: `float16`, `float32`, `float64`, `int32` or `int64`.
  * **`seed`** : A Python integer. Used to create a random seed for the distributions. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
  * **`name`** : Optional name for the operation.

#### Returns:

  * **`samples`** : a `Tensor` of shape `tf.concat([shape, tf.shape(lam)], axis=0)` with values of type `dtype`.

