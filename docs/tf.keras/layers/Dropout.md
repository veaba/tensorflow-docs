[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/layers/Dropout) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L110-L179)  
---|---  
  
## Class `Dropout`

Applies Dropout to the input.

Inherits From:
[`Layer`](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

### Aliases:

  * Class [`tf.compat.v1.keras.layers.Dropout`](/api_docs/python/tf/keras/layers/Dropout)
  * Class [`tf.compat.v2.keras.layers.Dropout`](/api_docs/python/tf/keras/layers/Dropout)

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
  * [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

### Used in the tutorials:

  * [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
  * [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
  * [Image classification](https://tensorflow.google.cn/tutorials/images/classification)
  * [Basic classification: Classify images of clothing](https://tensorflow.google.cn/tutorials/keras/classification)
  * [Explore overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)

Dropout consists in randomly setting a fraction `rate` of input units to 0 at
each update during training time, which helps prevent overfitting.

#### Arguments:

  * **`rate`** : Float between 0 and 1. Fraction of the input units to drop.
  * **`noise_shape`** : 1D integer tensor representing the shape of the binary dropout mask that will be multiplied with the input. For instance, if your inputs have shape `(batch_size, timesteps, features)` and you want the dropout mask to be the same for all timesteps, you can use `noise_shape=(batch_size, 1, features)`.
  * **`seed`** : A Python integer to use as random seed.

#### Call arguments:

  * **`inputs`** : Input tensor (of any rank).
  * **`training`** : Python boolean indicating whether the layer should behave in training mode (adding dropout) or in inference mode (doing nothing).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L133-L138)

    
    
    __init__(
        rate,
        noise_shape=None,
        seed=None,
        **kwargs
    )
    

