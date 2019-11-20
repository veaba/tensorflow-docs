[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/experimental/create_rng_state)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L140-L151)  
---|---  
  
Creates a RNG state.

### Aliases:

  * [`tf.compat.v1.random.experimental.create_rng_state`](/api_docs/python/tf/random/experimental/create_rng_state)
  * [`tf.compat.v2.random.experimental.create_rng_state`](/api_docs/python/tf/random/experimental/create_rng_state)

    
    
    tf.random.experimental.create_rng_state(
        seed,
        algorithm
    )
    

#### Args:

  * **`seed`** : an integer or 1-D tensor.
  * **`algorithm`** : an integer representing the RNG algorithm.

#### Returns:

a 1-D tensor whose size depends on the algorithm.

