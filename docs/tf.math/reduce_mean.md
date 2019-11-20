[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/reduce_mean) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1826-L1881)  
---|---  
  
Computes the mean of elements across dimensions of a tensor.

### Aliases:

  * [`tf.compat.v2.math.reduce_mean`](/api_docs/python/tf/math/reduce_mean)
  * [`tf.compat.v2.reduce_mean`](/api_docs/python/tf/math/reduce_mean)
  * [`tf.reduce_mean`](/api_docs/python/tf/math/reduce_mean)

    
    
    tf.math.reduce_mean(
        input_tensor,
        axis=None,
        keepdims=False,
        name=None
    )
    

### Used in the guide:

  * [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
  * [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)
  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)

### Used in the tutorials:

  * [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
  * [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)
  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims`
is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If
`keepdims` is true, the reduced dimensions are retained with length 1.

If `axis` is None, all dimensions are reduced, and a tensor with a single
element is returned.

#### For example:

    
    
    x = tf.constant([[1., 1.], [2., 2.]])
    tf.reduce_mean(x)  # 1.5
    tf.reduce_mean(x, 0)  # [1.5, 1.5]
    tf.reduce_mean(x, 1)  # [1.,  2.]
    

#### Args:

  * **`input_tensor`** : The tensor to reduce. Should have numeric type.
  * **`axis`** : The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range `[-rank(input_tensor), rank(input_tensor))`.
  * **`keepdims`** : If true, retains reduced dimensions with length 1.
  * **`name`** : A name for the operation (optional).

#### Returns:

The reduced tensor.

#### Numpy Compatibility

Equivalent to np.mean

Please note that `np.mean` has a `dtype` parameter that could be used to
specify the output type. By default this is `dtype=float64`. On the other
hand,
[`tf.reduce_mean`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_mean)
has an aggressive type inference from `input_tensor`, for example:

    
    
    x = tf.constant([1, 0, 1, 0])
    tf.reduce_mean(x)  # 0
    y = tf.constant([1., 0., 1., 0.])
    tf.reduce_mean(y)  # 0.5
    

