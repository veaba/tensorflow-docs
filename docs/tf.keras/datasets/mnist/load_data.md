加载mnist数据集。

**别名** : [ `tf.compat.v1.keras.datasets.mnist.load_data` ](/api_docs/python/tf/keras/datasets/mnist/load_data), [ `tf.compat.v2.keras.datasets.mnist.load_data` ](/api_docs/python/tf/keras/datasets/mnist/load_data)

```
 tf.keras.datasets.mnist.load_data(path='mnist.npz')
 
```

### 在指南中使用：
- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
- [Keras custom callbacks](https://tensorflow.google.cn/guide/keras/custom_callback)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)


### 在教程中使用：
- [Save and load a model using a distribution strategy](https://tensorflow.google.cn/tutorials/distribute/save_and_load)
- [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Save and load models](https://tensorflow.google.cn/tutorials/keras/save_and_load)


#### 参数：
- **`path`** : path where to cache the dataset locally(relative to ~/.keras/datasets).


#### 返回：
Tuple of Numpy arrays:  `(x_train, y_train), (x_test, y_test)` .

#### 许可证：
Yann LeCun and Corinna Cortes hold the copyright of MNIST dataset,which is a derivative work from original NIST datasets.MNIST dataset is made available under the terms of the[Creative Commons Attribution-Share Alike 3.0 license.](https://creativecommons.org/licenses/by-sa/3.0/)

