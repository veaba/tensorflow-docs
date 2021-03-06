

## Class  `Dropout` 
对输入应用辍学。

Inherits From: [ `Layer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)

**别名** : [ `tf.compat.v1.keras.layers.Dropout` ](/api_docs/python/tf/keras/layers/Dropout), [ `tf.compat.v2.keras.layers.Dropout` ](/api_docs/python/tf/keras/layers/Dropout)

### 在指南中使用：
- [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### 在教程中使用：
- [Overfit and underfit](https://tensorflow.google.cn/tutorials/keras/overfit_and_underfit)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Create an Estimator from a Keras model](https://tensorflow.google.cn/tutorials/estimator/keras_model_to_estimator)
Dropout consists in randomly settinga fraction  `rate`  of input units to 0 at each update during training time,which helps prevent overfitting.

#### 参数：
- **`rate`** : Float between 0 and 1. Fraction of the input units to drop.
- **`noise_shape`** : 1D integer tensor representing the shape of thebinary dropout mask that will be multiplied with the input.For instance, if your inputs have shape `(batch_size, timesteps, features)`  andyou want the dropout mask to be the same for all timesteps,you can use  `noise_shape=(batch_size, 1, features)` .
- **`seed`** : A Python integer to use as random seed.


#### 调用参数：
- **`inputs`** : Input tensor (of any rank).
- **`training`** : Python boolean indicating whether the layer should behave intraining mode (adding dropout) or in inference mode (doing nothing).


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L133-L138)

```
 __init__(
    rate,
    noise_shape=None,
    seed=None,
    **kwargs
)
 
```

