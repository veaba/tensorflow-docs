[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/hard_sigmoid) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L262-L277)  
---|---  
  
Hard sigmoid activation function.

### Aliases:

  * [`tf.compat.v1.keras.activations.hard_sigmoid`](/api_docs/python/tf/keras/activations/hard_sigmoid)
  * [`tf.compat.v2.keras.activations.hard_sigmoid`](/api_docs/python/tf/keras/activations/hard_sigmoid)

    
    
    tf.keras.activations.hard_sigmoid(x)
    

Faster to compute than sigmoid activation.

#### Arguments:

  * **`x`** : Input tensor.

#### Returns:

Hard sigmoid activation: \- `0` if `x < -2.5` \- `1` if `x > 2.5` \- `0.2 * x
+ 0.5` if `-2.5 <= x <= 2.5`.

