[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/datasets/cifar100/load_data)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/datasets/cifar100.py#L31-L69)  
---|---  
  
Loads CIFAR100 dataset.

### Aliases:

  * [`tf.compat.v1.keras.datasets.cifar100.load_data`](/api_docs/python/tf/keras/datasets/cifar100/load_data)
  * [`tf.compat.v2.keras.datasets.cifar100.load_data`](/api_docs/python/tf/keras/datasets/cifar100/load_data)

    
    
    tf.keras.datasets.cifar100.load_data(label_mode='fine')
    

#### Arguments:

  * **`label_mode`** : one of "fine", "coarse".

#### Returns:

Tuple of Numpy arrays: `(x_train, y_train), (x_test, y_test)`.

#### Raises:

  * **`ValueError`** : in case of invalid `label_mode`.

