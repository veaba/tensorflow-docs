

## Class  `HDF5Matrix` 
要使用的HDF5数据集的表示形式，而不是numpy数组。

**别名** : [ `tf.compat.v1.keras.utils.HDF5Matrix` ](/api_docs/python/tf/keras/utils/HDF5Matrix), [ `tf.compat.v2.keras.utils.HDF5Matrix` ](/api_docs/python/tf/keras/utils/HDF5Matrix)

#### 示例：


```
     x_data = HDF5Matrix('input/file.hdf5', 'data')
    model.predict(x_data)
 
```

Providing  `start`  and  `end`  allows use of a slice of the dataset.

Optionally, a normalizer function (or lambda) can be given. This willbe called on every slice of data retrieved.

#### 参数：
- **`datapath`** : string, path to a HDF5 file
- **`dataset`** : string, name of the HDF5 dataset in the file specifiedin datapath
- **`start`** : int, start of desired slice of the specified dataset
- **`end`** : int, end of desired slice of the specified dataset
- **`normalizer`** : function to be called on data when retrieved


#### 返回：
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

## 属性


###  `dtype` 
获取数据集的数据类型。

#### 返回：
numpy数据类型字符串。

###  `ndim` 
获取数据集的维度（列组）数。

#### 返回：
表示数据集维数（秩）的整数。

###  `shape` 
Gets a numpy-style shape tuple giving the dataset dimensions.

#### 返回：
A numpy-style shape tuple.

###  `size` 
获取数据集的总大小（元素数）。

#### 返回：
表示数据集中元素数的整数。

## 方法


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

## Class 成员
-  `refs`  []()
