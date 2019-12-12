

## Class  `RMSprop` 
实现rmsprop算法的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

**别名** : [ `tf.compat.v1.keras.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop), [ `tf.compat.v2.keras.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop), [ `tf.compat.v2.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop), [ `tf.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop)

### 在指南中使用：
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)
- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
- [Keras custom callbacks](https://tensorflow.google.cn/guide/keras/custom_callback)


### 在教程中使用：
- [Transfer learning with a pretrained ConvNet](https://tensorflow.google.cn/tutorials/images/transfer_learning)
- [Time series forecasting](https://tensorflow.google.cn/tutorials/structured_data/time_series)
- [Basic regression: Predict fuel efficiency](https://tensorflow.google.cn/tutorials/keras/regression)
- [Load NumPy data](https://tensorflow.google.cn/tutorials/load_data/numpy)
rmsprop的详细描述。

- maintain a moving (discounted) average of the square of gradients
- divide gradient by the root of this average
