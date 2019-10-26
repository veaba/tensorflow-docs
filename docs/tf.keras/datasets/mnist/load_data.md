Loads the MNIST dataset.
### Aliases:
- tf.compat.v1.keras.datasets.mnist.load_data
- tf.compat.v2.keras.datasets.mnist.load_data

```
 tf.keras.datasets.mnist.load_data(path='mnist.npz')
```
### Used in the guide:
- Save and serialize models with Keras
- Eager execution
- Better performance with tf.function and AutoGraph
- Keras custom callbacks
- Writing custom layers and models with Keras
### Used in the tutorials:
- Save and load a model using a distribution strategy
- Convolutional Variational Autoencoder
- Deep Convolutional Generative Adversarial Network
- Save and load models
#### Arguments:
- path: path where to cache the dataset locally (relative to ~/.keras/datasets).
#### Returns:
Tuple of Numpy arrays: (x_train, y_train), (x_test, y_test).
#### License:
[Creative Commons Attribution-Share Alike 3.0 license.](https://creativecommons.org/licenses/by-sa/3.0/)Yann LeCun and Corinna Cortes hold the copyright of MNIST dataset, which is a derivative work from original NIST datasets. MNIST dataset is made available under the terms of the 

