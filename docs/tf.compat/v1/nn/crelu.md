[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/nn_ops.py#L2748-L2771)  
---  
  
Computes Concatenated ReLU.

    
    
    tf.compat.v1.nn.crelu(
        features,
        name=None,
        axis=-1
    )
    

Concatenates a ReLU which selects only the positive part of the activation
with a ReLU which selects only the _negative_ part of the activation. Note
that as a result this non-linearity doubles the depth of the activations.
Source: [Understanding and Improving Convolutional Neural Networks via
Concatenated Rectified Linear Units. W. Shang, et
al.](https://arxiv.org/abs/1603.05201)

#### Args:

  * **`features`** : A `Tensor` with type `float`, `double`, `int32`, `int64`, `uint8`, `int16`, or `int8`.
  * **`name`** : A name for the operation (optional).
  * **`axis`** : The axis that the output values are concatenated along. Default is -1.

#### Returns:

A `Tensor` with the same type as `features`.

