[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/relu6) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L2780-L2797)  
  
  
Computes Rectified Linear 6: `min(max(features, 0), 6)`.

### Aliases:

  * [`tf.compat.v1.nn.relu6`](/api_docs/python/tf/nn/relu6)
  * [`tf.compat.v2.nn.relu6`](/api_docs/python/tf/nn/relu6)

    
    
    tf.nn.relu6(
        features,
        name=None
    )
    

Source: [Convolutional Deep Belief Networks on CIFAR-10. A.
Krizhevsky](http://www.cs.utoronto.ca/%7Ekriz/conv-cifar10-aug2010.pdf)

#### Args:

  * **`features`** : A `Tensor` with type `float`, `double`, `int32`, `int64`, `uint8`, `int16`, or `int8`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` with the same type as `features`.

