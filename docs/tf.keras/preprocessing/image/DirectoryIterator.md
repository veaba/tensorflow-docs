

## Class  `DirectoryIterator` 
能够从磁盘上的目录读取图像的迭代器。

Inherits From: [ `Iterator` ](https://tensorflow.google.cn/api_docs/python/tf/keras/preprocessing/image/Iterator)

**别名** : [ `tf.compat.v1.keras.preprocessing.image.DirectoryIterator` ](/api_docs/python/tf/keras/preprocessing/image/DirectoryIterator), [ `tf.compat.v2.keras.preprocessing.image.DirectoryIterator` ](/api_docs/python/tf/keras/preprocessing/image/DirectoryIterator)

#### 参数：
- **`directory`** : Path to the directory to read images from.Each subdirectory in this directory will beconsidered to contain images from one class,or alternatively you could specify class subdirectoriesvia the  `classes`  argument.
- **`image_data_generator`** : Instance of  `ImageDataGenerator` to use for random transformations and normalization.
- **`target_size`** : tuple of integers, dimensions to resize input images to.
- **`color_mode`** : One of  `"rgb"` ,  `"rgba"` ,  `"grayscale"` .Color mode to read images.
- **`classes`** : Optional list of strings, names of subdirectoriescontaining images from each class (e.g.  `["dogs", "cats"]` ).It will be computed automatically if not set.
- **`class_mode`** : Mode for yielding the targets: `"binary"` : binary targets (if there are only two classes), `"categorical"` : categorical targets, `"sparse"` : integer targets, `"input"` : targets are images identical to input images (mainly    used to work with autoencoders), `None` : no targets get yielded (only input images are yielded).
- **`batch_size`** : Integer, size of a batch.
- **`shuffle`** : Boolean, whether to shuffle the data between epochs.
- **`seed`** : Random seed for data shuffling.
- **`data_format`** : String, one of  `channels_first` ,  `channels_last` .
- **`save_to_dir`** : Optional directory where to save the picturesbeing yielded, in a viewable format. This is usefulfor visualizing the random transformations beingapplied, for debugging purposes.
- **`save_prefix`** : String prefix to use for saving sampleimages (if  `save_to_dir`  is set).
- **`save_format`** : Format to use for saving sample images(if  `save_to_dir`  is set).
- **`subset`** : Subset of data ( `"training"`  or  `"validation"` ) ifvalidation_split is set in ImageDataGenerator.
- **`interpolation`** : Interpolation method used to resample the image if thetarget size is different from that of the loaded image.Supported methods are "nearest", "bilinear", and "bicubic".If PIL version 1.1.3 or newer is installed, "lanczos" is alsosupported. If PIL version 3.4.0 or newer is installed, "box" and"hamming" are also supported. By default, "nearest" is used.
- **`dtype`** : Dtype to use for generated arrays.


##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/image.py#L187-L227)

```
 __init__(
    directory,
    image_data_generator,
    target_size=(256, 256),
    color_mode='rgb',
    classes=None,
    class_mode='categorical',
    batch_size=32,
    shuffle=True,
    seed=None,
    data_format=None,
    save_to_dir=None,
    save_prefix='',
    save_format='png',
    follow_links=False,
    subset=None,
    interpolation='nearest',
    dtype=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `filepaths` 
图像文件的绝对路径列表

###  `labels` 
每个观察的类标签

###  `sample_weight` 


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

###  `set_processing_attrs` 


```
 set_processing_attrs(
    image_data_generator,
    target_size,
    color_mode,
    data_format,
    save_to_dir,
    save_prefix,
    save_format,
    subset,
    interpolation
)
 
```

设置稍后用于将文件处理为批处理的属性。

# Arguments


```
 image_data_generator: Instance of `ImageDataGenerator`
    to use for random transformations and normalization.
target_size: tuple of integers, dimensions to resize input images to.
color_mode: One of `"rgb"`, `"rgba"`, `"grayscale"`.
    Color mode to read images.
data_format: String, one of `channels_first`, `channels_last`.
save_to_dir: Optional directory where to save the pictures
    being yielded, in a viewable format. This is useful
    for visualizing the random transformations being
    applied, for debugging purposes.
save_prefix: String prefix to use for saving sample
    images (if `save_to_dir` is set).
save_format: Format to use for saving sample images
    (if `save_to_dir` is set).
subset：如果
    validation_split is set in ImageDataGenerator.
插值：用于对图像重新采样的插值方法，如果
    target size is different from that of the loaded image.
    Supported methods are "nearest", "bilinear", and "bicubic".
    If PIL version 1.1.3 or newer is installed, "lanczos" is also
    supported. If PIL version 3.4.0 or newer is installed, "box" and
    "hamming" are also supported. By default, "nearest" is used.
 
```

## Class 成员
-  `allowed_class_modes`  []()
-  `white_list_formats`  []()
