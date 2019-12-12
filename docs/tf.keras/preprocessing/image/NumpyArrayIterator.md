

## Class  `NumpyArrayIterator` 
从numpy数组生成数据的迭代器。

Inherits From: [ `Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/keras/preprocessing/image/Iterator)

**别名** : [ `tf.compat.v1.keras.preprocessing.image.NumpyArrayIterator` ](/api_docs/python/tf/keras/preprocessing/image/NumpyArrayIterator), [ `tf.compat.v2.keras.preprocessing.image.NumpyArrayIterator` ](/api_docs/python/tf/keras/preprocessing/image/NumpyArrayIterator)

#### 参数：
- **`x`** : Numpy array of input data or tuple.If tuple, the second elements is eitheranother numpy array or a list of numpy arrays,each of which gets passedthrough as an output without any modifications.
- **`y`** : Numpy array of targets data.
- **`image_data_generator`** : Instance of  `ImageDataGenerator` to use for random transformations and normalization.
- **`batch_size`** : Integer, size of a batch.
- **`shuffle`** : Boolean, whether to shuffle the data between epochs.
- **`sample_weight`** : Numpy array of sample weights.
- **`seed`** : Random seed for data shuffling.
- **`data_format`** : String, one of  `channels_first` ,  `channels_last` .
- **`save_to_dir`** : Optional directory where to save the picturesbeing yielded, in a viewable format. This is usefulfor visualizing the random transformations beingapplied, for debugging purposes.
- **`save_prefix`** : String prefix to use for saving sampleimages (if  `save_to_dir`  is set).
- **`save_format`** : Format to use for saving sample images(if  `save_to_dir`  is set).
- **`subset`** : Subset of data ( `"training"`  or  `"validation"` ) ifvalidation_split is set in ImageDataGenerator.
- **`dtype`** : Dtype to use for the generated arrays.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/image.py#L261-L291)

```
 __init__(
    x,
    y,
    image_data_generator,
    batch_size=32,
    shuffle=False,
    sample_weight=None,
    seed=None,
    data_format=None,
    save_to_dir=None,
    save_prefix='',
    save_format='png',
    subset=None,
    dtype=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `__getitem__` 


```
 __getitem__(idx)
 
```

Gets batch at position  `index` .

#### 参数：
- **`index`** : position of the batch in the Sequence.


#### 返回：
一批

###  `__iter__` 


```
 __iter__()
 
```

创建一个遍历序列的生成器。

###  `__len__` 


```
 __len__()
 
```

序列中的批数。

#### 返回：
序列中的批数。

###  `next` 


```
 next()
 
```

对于Python2.x。

# Returns


```
下一批。
 
```

###  `on_epoch_end` 


```
 on_epoch_end()
 
```

方法在每个纪元结束时调用。

###  `reset` 


```
 reset()
 
```

## Class 成员
-  `white_list_formats`  []()
