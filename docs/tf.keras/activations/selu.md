[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/activations/selu) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/activations.py#L94-L149)  
---|---  
  
Scaled Exponential Linear Unit (SELU).

### Aliases:

  * [`tf.compat.v1.keras.activations.selu`](/api_docs/python/tf/keras/activations/selu)
  * [`tf.compat.v2.keras.activations.selu`](/api_docs/python/tf/keras/activations/selu)

    
    
    tf.keras.activations.selu(x)
    

The Scaled Exponential Linear Unit (SELU) activation function is: `scale * x`
if `x > 0` and `scale * alpha * (exp(x) - 1)` if `x < 0` where `alpha` and
`scale` are pre-defined constants (`alpha = 1.67326324` and `scale =
1.05070098`). The SELU activation function multiplies `scale` > 1 with the
`[elu](https://www.tensorflow.org/versions/r2.0/api_docs/python/tf/keras/activations/elu)`
(Exponential Linear Unit (ELU)) to ensure a slope larger than one for positive
net inputs.

The values of `alpha` and `scale` are chosen so that the mean and variance of
the inputs are preserved between two consecutive layers as long as the weights
are initialized correctly (see [`lecun_normal`
initialization](https://tensorflow.google.cn/api_docs/python/tf/keras/initializers/lecun_normal))
and the number of inputs is "large enough" (see references for more
information).

![](https://cdn-images-1.medium.com/max/1600/1*m0e8lZU_Zrkh4ESfQkY2Pw.png)
(Courtesy: Blog on Towards DataScience at https://towardsdatascience.com/selu-
make-fnns-great-again-snn-8d61526802a9)

#### Example Usage:

    
    
    n_classes = 10 #10_class problem
    model = models.Sequential()
    model.add(Dense(64, kernel_initializer='lecun_normal', activation='selu',
    input_shape=(28, 28, 1))))
    model.add(Dense(32, kernel_initializer='lecun_normal', activation='selu'))
    model.add(Dense(16, kernel_initializer='lecun_normal', activation='selu'))
    model.add(Dense(n_classes, activation='softmax'))
    

#### Arguments:

  * **`x`** : A tensor or variable to compute the activation function for.

#### Returns:

The scaled exponential unit activation: `scale * elu(x, alpha)`.

# Note

    
    
    - To be used together with the initialization "[lecun_normal]
    (https://www.tensorflow.org/api_docs/python/tf/keras/initializers/lecun_normal)".
    - To be used together with the dropout variant "[AlphaDropout]
    (https://www.tensorflow.org/api_docs/python/tf/keras/layers/AlphaDropout)".
    

#### References:

[Self-Normalizing Neural Networks (Klambauer et al,
2017)](https://arxiv.org/abs/1706.02515)

