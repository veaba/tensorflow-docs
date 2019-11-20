[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/datasets/mnist/load_data) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/datasets/mnist.py#L27-L55)  
---|---  
  
Loads the MNIST dataset.

### Aliases:

  * [`tf.compat.v1.keras.datasets.mnist.load_data`](/api_docs/python/tf/keras/datasets/mnist/load_data)
  * [`tf.compat.v2.keras.datasets.mnist.load_data`](/api_docs/python/tf/keras/datasets/mnist/load_data)

    
    
    tf.keras.datasets.mnist.load_data(path='mnist.npz')
    

### Used in the guide:

  * [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)
  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)
  * [Keras custom callbacks](https://tensorflow.google.cn/guide/keras/custom_callback)
  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)

### Used in the tutorials:

  * [Convolutional Variational Autoencoder](https://tensorflow.google.cn/tutorials/generative/cvae)
  * [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)

#### Arguments:

  * **`path`** : path where to cache the dataset locally (relative to ~/.keras/datasets).

#### Returns:

Tuple of Numpy arrays: `(x_train, y_train), (x_test, y_test)`.

#### License:

Yann LeCun and Corinna Cortes hold the copyright of MNIST dataset, which is a
derivative work from original NIST datasets. MNIST dataset is made available
under the terms of the [Creative Commons Attribution-Share Alike 3.0
license.](https://creativecommons.org/licenses/by-sa/3.0/)

