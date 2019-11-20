[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/elu) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L75-L91)  
---|---  
  
Exponential linear unit.

### Aliases:

  * [`tf.compat.v1.keras.activations.elu`](/api_docs/python/tf/keras/activations/elu)
  * [`tf.compat.v2.keras.activations.elu`](/api_docs/python/tf/keras/activations/elu)

    
    
    tf.keras.activations.elu(
        x,
        alpha=1.0
    )
    

#### Arguments:

  * **`x`** : Input tensor.
  * **`alpha`** : A scalar, slope of negative section.

#### Returns:

The exponential linear activation: `x` if `x > 0` and `alpha * (exp(x)-1)` if
`x < 0`.

#### Reference:

  * [Fast and Accurate Deep Network Learning by Exponential Linear Units (ELUs)](https://arxiv.org/abs/1511.07289)

