[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/softmax) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L43-L72)  
  
  
The softmax activation function transforms the outputs so that all values are
in

### Aliases:

  * [`tf.compat.v1.keras.activations.softmax`](/api_docs/python/tf/keras/activations/softmax)
  * [`tf.compat.v2.keras.activations.softmax`](/api_docs/python/tf/keras/activations/softmax)

    
    
    tf.keras.activations.softmax(
        x,
        axis=-1
    )
    

range (0, 1) and sum to 1. It is often used as the activation for the last
layer of a classification network because the result could be interpreted as a
probability distribution. The softmax of x is calculated by
exp(x)/tf.reduce_sum(exp(x)).

#### Arguments:

  * **`x`** : Input tensor.
  * **`axis`** : Integer, axis along which the softmax normalization is applied.

#### Returns:

Tensor, output of softmax transformation (all values are non-negative and sum
to 1).

#### Raises:

  * **`ValueError`** : In case `dim(x) == 1`.

