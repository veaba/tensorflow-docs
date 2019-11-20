[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/elu)  
---  
  
Defined in generated file: `python/ops/gen_nn_ops.py`

Computes exponential linear: `exp(features) - 1` if < 0, `features` otherwise.

### Aliases:

  * [`tf.compat.v1.nn.elu`](/api_docs/python/tf/nn/elu)
  * [`tf.compat.v2.nn.elu`](/api_docs/python/tf/nn/elu)

    
    
    tf.nn.elu(
        features,
        name=None
    )
    

See [Fast and Accurate Deep Network Learning by Exponential Linear Units
(ELUs) ](http://arxiv.org/abs/1511.07289)

#### Args:

  * **`features`** : A `Tensor`. Must be one of the following types: `half`, `bfloat16`, `float32`, `float64`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `features`.

