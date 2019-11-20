[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/stateless_categorical) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateless_random_ops.py#L230-L266)  
---|---  
  
Draws deterministic pseudorandom samples from a categorical distribution.

### Aliases:

  * [`tf.compat.v1.random.stateless_categorical`](/api_docs/python/tf/random/stateless_categorical)
  * [`tf.compat.v2.random.stateless_categorical`](/api_docs/python/tf/random/stateless_categorical)

    
    
    tf.random.stateless_categorical(
        logits,
        num_samples,
        seed,
        dtype=tf.dtypes.int64,
        name=None
    )
    

This is a stateless version of `tf.categorical`: if run twice with the same
seeds, it will produce the same pseudorandom numbers. The output is consistent
across multiple runs on the same hardware (and between CPU and GPU), but may
change between versions of TensorFlow or on non-CPU/GPU hardware.

#### Example:

    
    
    # samples has shape [1, 5], where each value is either 0 or 1 with equal
    # probability.
    samples = tf.random.stateless_categorical(
        tf.math.log([[0.5, 0.5]]), 5, seed=[7, 17])
    

#### Args:

  * **`logits`** : 2-D Tensor with shape `[batch_size, num_classes]`. Each slice `[i, :]` represents the unnormalized log-probabilities for all classes.
  * **`num_samples`** : 0-D. Number of independent samples to draw for each row slice.
  * **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
  * **`dtype`** : integer type to use for the output. Defaults to int64.
  * **`name`** : Optional name for the operation.

#### Returns:

The drawn samples of shape `[batch_size, num_samples]`.

