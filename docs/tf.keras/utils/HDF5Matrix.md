

## Class  `HDF5Matrix` 
Representation of HDF5 dataset to be used instead of a Numpy array.

**Aliases** : [ `tf.compat.v1.keras.utils.HDF5Matrix` ](/api_docs/python/tf/keras/utils/HDF5Matrix), [ `tf.compat.v2.keras.utils.HDF5Matrix` ](/api_docs/python/tf/keras/utils/HDF5Matrix)

#### Example:


```
     x_data = HDF5Matrix('input/file.hdf5', 'data')
    model.predict(x_data)
 
```

Providing  `start`  and  `end`  allows use of a slice of the dataset.

Optionally, a normalizer function (or lambda) can be given. This willbe called on every slice of data retrieved.

#### Arguments:
- **`datapath`** : string, path to a HDF5 file
- **`dataset`** : string, name of the HDF5 dataset in the file specifiedin datapath
- **`start`** : int, start of desired slice of the specified dataset
- **`end`** : int, end of desired slice of the specified dataset
- **`normalizer`** : function to be called on data when retrieved


#### Returns:
An array-like HDF5 dataset.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/io_utils.py#L64-L80)

```
 __init__(
    datapath,
    dataset,
    start=0,
    end=None,
    normalizer=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Properties


###  `dtype` 
Gets the datatype of the dataset.

#### Returns:
A numpy dtype string.

###  `ndim` 
Gets the number of dimensions (rank) of the dataset.

#### Returns:
An integer denoting the number of dimensions (rank) of the dataset.

###  `shape` 
Gets a numpy-style shape tuple giving the dataset dimensions.

#### Returns:
A numpy-style shape tuple.

###  `size` 
Gets the total dataset size (number of elements).

#### Returns:
An integer denoting the number of elements in the dataset.

## Methods


###  `__getitem__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/io_utils.py#L85-L115)

```
 __getitem__(key)
 
```

###  `__len__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/utils/io_utils.py#L82-L83)

```
 __len__()
 
```

## Class Members
-  `refs`  []()
