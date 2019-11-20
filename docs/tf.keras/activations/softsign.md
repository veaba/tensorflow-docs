[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/softsign) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L165-L175)  
---|---  
  
Softsign activation function.

### Aliases:

  * [`tf.compat.v1.keras.activations.softsign`](/api_docs/python/tf/keras/activations/softsign)
  * [`tf.compat.v2.keras.activations.softsign`](/api_docs/python/tf/keras/activations/softsign)

    
    
    tf.keras.activations.softsign(x)
    

#### Arguments:

  * **`x`** : Input tensor.

#### Returns:

The softplus activation: `x / (abs(x) + 1)`.

