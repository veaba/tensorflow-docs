[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/tanh) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L201-L221)  
---|---  
  
Hyperbolic Tangent (tanh) activation function.

### Aliases:

  * [`tf.compat.v1.keras.activations.tanh`](/api_docs/python/tf/keras/activations/tanh)
  * [`tf.compat.v2.keras.activations.tanh`](/api_docs/python/tf/keras/activations/tanh)

    
    
    tf.keras.activations.tanh(x)
    

#### For example:

    
    
    # Constant 1-D tensor populated with value list.
    a = tf.constant([-3.0,-1.0, 0.0,1.0,3.0], dtype = tf.float32)
    b = tf.keras.activations.tanh(a) #[-0.9950547,-0.7615942,
    0.,0.7615942,0.9950547]
    

Arguments: x: Input tensor.

#### Returns:

A tensor of same shape and dtype of input `x`. The tanh activation: `tanh(x) =
sinh(x)/cosh(x) = ((exp(x) - exp(-x))/(exp(x) + exp(-x)))`.

