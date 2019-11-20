[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/selu)  
---  
  
Defined in generated file: `python/ops/gen_nn_ops.py`

Computes scaled exponential linear: `scale * alpha * (exp(features) - 1)`

### Aliases:

  * [`tf.compat.v1.nn.selu`](/api_docs/python/tf/nn/selu)
  * [`tf.compat.v2.nn.selu`](/api_docs/python/tf/nn/selu)

    
    
    tf.nn.selu(
        features,
        name=None
    )
    

if < 0, `scale * features` otherwise.

To be used together with `initializer =
tf.variance_scaling_initializer(factor=1.0, mode='FAN_IN')`. For correct
dropout, use `tf.contrib.nn.alpha_dropout`.

See [Self-Normalizing Neural Networks](https://arxiv.org/abs/1706.02515)

#### Args:

  * **`features`** : A `Tensor`. Must be one of the following types: `half`, `bfloat16`, `float32`, `float64`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `features`.

