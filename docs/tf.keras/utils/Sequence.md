

## Class  `Sequence` 
Base object for fitting to a sequence of data, such as a dataset.

**Aliases** : [ `tf.compat.v1.keras.utils.Sequence` ](/api_docs/python/tf/keras/utils/Sequence), [ `tf.compat.v2.keras.utils.Sequence` ](/api_docs/python/tf/keras/utils/Sequence)

Every  `Sequence`  must implement the  `__getitem__`  and the  `__len__`  methods.If you want to modify your dataset between epochs you may implement `on_epoch_end` .The method  `__getitem__`  should return a complete batch.

#### Notes:
 `Sequence`  are a safer way to do multiprocessing. This structure guaranteesthat the network will only train once on each sample per epoch which is not the case with generators.

#### Examples:


```
     from skimage.io import imread
    from skimage.transform import resize
    import numpy as np
    import math

    # Here, `x_set` is list of path to the images
    # and `y_set` are the associated classes.

    class CIFAR10Sequence(Sequence):

        def __init__(self, x_set, y_set, batch_size):
            self.x, self.y = x_set, y_set
            self.batch_size = batch_size

        def __len__(self):
            return math.ceil(len(self.x) / self.batch_size)

        def __getitem__(self, idx):
            batch_x = self.x[idx * self.batch_size:(idx + 1) *
            self.batch_size]
            batch_y = self.y[idx * self.batch_size:(idx + 1) *
            self.batch_size]

            return np.array([
                resize(imread(file_name), (200, 200))
                   for file_name in batch_x]), np.array(batch_y)
 
```

## Methods


###  `__getitem__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L377-L387)

```
 __getitem__(index)
 
```

Gets batch at position  `index` .

#### Arguments:
- **`index`** : position of the batch in the Sequence.


#### Returns:
A batch

###  `__iter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L403-L406)

```
 __iter__()
 
```

Create a generator that iterate over the Sequence.

###  `__len__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L389-L396)

```
 __len__()
 
```

Number of batch in the Sequence.

#### Returns:
The number of batches in the Sequence.

###  `on_epoch_end` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/data_utils.py#L398-L401)

```
 on_epoch_end()
 
```

Method called at the end of every epoch.

