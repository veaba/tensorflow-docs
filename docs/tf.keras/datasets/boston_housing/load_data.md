[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/datasets/boston_housing/load_data)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/datasets/boston_housing.py#L27-L62)  
---|---  
  
Loads the Boston Housing dataset.

### Aliases:

  * [`tf.compat.v1.keras.datasets.boston_housing.load_data`](/api_docs/python/tf/keras/datasets/boston_housing/load_data)
  * [`tf.compat.v2.keras.datasets.boston_housing.load_data`](/api_docs/python/tf/keras/datasets/boston_housing/load_data)

    
    
    tf.keras.datasets.boston_housing.load_data(
        path='boston_housing.npz',
        test_split=0.2,
        seed=113
    )
    

#### Arguments:

  * **`path`** : path where to cache the dataset locally (relative to ~/.keras/datasets).
  * **`test_split`** : fraction of the data to reserve as test set.
  * **`seed`** : Random seed for shuffling the data before computing the test split.

#### Returns:

Tuple of Numpy arrays: `(x_train, y_train), (x_test, y_test)`.

