[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/reduce_sum) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L1530-L1575)  
---|---  
  
Computes the sum of elements across dimensions of a tensor.

### Aliases:

  * [`tf.compat.v2.math.reduce_sum`](/api_docs/python/tf/math/reduce_sum)
  * [`tf.compat.v2.reduce_sum`](/api_docs/python/tf/math/reduce_sum)
  * [`tf.reduce_sum`](/api_docs/python/tf/math/reduce_sum)

    
    
    tf.math.reduce_sum(
        input_tensor,
        axis=None,
        keepdims=False,
        name=None
    )
    

### Used in the guide:

  * [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
  * [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
  * [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)

### Used in the tutorials:

  * [Automatic differentiation and gradient tape](https://tensorflow.google.cn/tutorials/customization/autodiff)
  * [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)

Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims`
is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If
`keepdims` is true, the reduced dimensions are retained with length 1.

If `axis` is None, all dimensions are reduced, and a tensor with a single
element is returned.

#### For example:

    
    
    x = tf.constant([[1, 1, 1], [1, 1, 1]])
    tf.reduce_sum(x)  # 6
    tf.reduce_sum(x, 0)  # [2, 2, 2]
    tf.reduce_sum(x, 1)  # [3, 3]
    tf.reduce_sum(x, 1, keepdims=True)  # [[3], [3]]
    tf.reduce_sum(x, [0, 1])  # 6
    

#### Args:

  * **`input_tensor`** : The tensor to reduce. Should have numeric type.
  * **`axis`** : The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range `[-rank(input_tensor), rank(input_tensor))`.
  * **`keepdims`** : If true, retains reduced dimensions with length 1.
  * **`name`** : A name for the operation (optional).

#### Returns:

The reduced tensor, of the same dtype as the input_tensor.

#### Numpy Compatibility

Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 to int64
while tensorflow returns the same dtype as the input.

