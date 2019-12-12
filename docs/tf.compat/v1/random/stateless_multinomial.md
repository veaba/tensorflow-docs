Draws deterministic pseudorandom samples from a multinomial distribution. (deprecated)

```
 tf.compat.v1.random.stateless_multinomial(    logits,    num_samples,    seed,    output_dtype=tf.dtypes.int64,    name=None) 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.random.stateless_categorical` ](https://tensorflow.google.cn/api_docs/python/tf/random/stateless_categorical) instead.
This is a stateless version of [ `tf.random.categorical` ](https://tensorflow.google.cn/api_docs/python/tf/random/categorical): if run twice with thesame seeds, it will produce the same pseudorandom numbers.  The output isconsistent across multiple runs on the same hardware (and between CPUand GPU), but may change between versions of TensorFlow or on non-CPU/GPUhardware.

#### Example:


```
 # samples has shape [1, 5], where each value is either 0 or 1 with equal
# probability.
samples = tf.random.stateless_categorical(
    tf.math.log([[0.5, 0.5]]), 5, seed=[7, 17])
 
```

#### Args:
- **`logits`** : 2-D Tensor with shape  `[batch_size, num_classes]` .  Each slice `[i, :]`  represents the unnormalized log-probabilities for all classes.
- **`num_samples`** : 0-D.  Number of independent samples to draw for each row slice.
- **`seed`** : A shape [2] integer Tensor of seeds to the random number generator.
- **`output_dtype`** : integer type to use for the output. Defaults to int64.
- **`name`** : Optional name for the operation.


#### Returns:
The drawn samples of shape  `[batch_size, num_samples]` .

