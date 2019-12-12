

## Class  `Iterator` 
图像数据迭代器的基类。

Inherits From: [ `Sequence` ](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)

**别名** : [ `tf.compat.v1.keras.preprocessing.image.Iterator` ](/api_docs/python/tf/keras/preprocessing/image/Iterator), [ `tf.compat.v2.keras.preprocessing.image.Iterator` ](/api_docs/python/tf/keras/preprocessing/image/Iterator)

Every  `Iterator`  must implement the  `_get_batches_of_transformed_samples` method.

# Arguments


```
 n: Integer, total number of samples in the dataset to loop over.
batch_size: Integer, size of a batch.
shuffle: Boolean, whether to shuffle the data between epochs.
种子：随机种子数据洗牌。
 
```

##  `__init__` 


```
 __init__(
    n,
    batch_size,
    shuffle,
    seed
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
