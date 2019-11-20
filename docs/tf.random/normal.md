[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/normal) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/random_ops.py#L42-L78)  
---|---  
  
Outputs random values from a normal distribution.

### Aliases:

  * [`tf.compat.v1.random.normal`](/api_docs/python/tf/random/normal)
  * [`tf.compat.v1.random_normal`](/api_docs/python/tf/random/normal)
  * [`tf.compat.v2.random.normal`](/api_docs/python/tf/random/normal)

    
    
    tf.random.normal(
        shape,
        mean=0.0,
        stddev=1.0,
        dtype=tf.dtypes.float32,
        seed=None,
        name=None
    )
    

### Used in the guide:

  * [Eager execution](https://tensorflow.google.cn/guide/eager)

### Used in the tutorials:

  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
  * [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)

#### Args:

  * **`shape`** : A 1-D integer Tensor or Python array. The shape of the output tensor.
  * **`mean`** : A 0-D Tensor or Python value of type `dtype`. The mean of the normal distribution.
  * **`stddev`** : A 0-D Tensor or Python value of type `dtype`. The standard deviation of the normal distribution.
  * **`dtype`** : The type of the output.
  * **`seed`** : A Python integer. Used to create a random seed for the distribution. See [`tf.compat.v1.set_random_seed`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
  * **`name`** : A name for the operation (optional).

#### Returns:

A tensor of the specified shape filled with random normal values.

