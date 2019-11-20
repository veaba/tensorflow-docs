[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/preprocessing/image/Iterator)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/preprocessing/image.py#L135-L136)  
---|---  
  
## Class `Iterator`

Base class for image data iterators.

Inherits From:
[`Sequence`](https://tensorflow.google.cn/api_docs/python/tf/keras/utils/Sequence)

### Aliases:

  * Class [`tf.compat.v1.keras.preprocessing.image.Iterator`](/api_docs/python/tf/keras/preprocessing/image/Iterator)
  * Class [`tf.compat.v2.keras.preprocessing.image.Iterator`](/api_docs/python/tf/keras/preprocessing/image/Iterator)

Every `Iterator` must implement the `_get_batches_of_transformed_samples`
method.

# Arguments

    
    
    n: Integer, total number of samples in the dataset to loop over.
    batch_size: Integer, size of a batch.
    shuffle: Boolean, whether to shuffle the data between epochs.
    seed: Random seeding for data shuffling.
    

## `__init__`

    
    
    __init__(
        n,
        batch_size,
        shuffle,
        seed
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `__getitem__`

    
    
    __getitem__(idx)
    

Gets batch at position `index`.

#### Arguments:

  * **`index`** : position of the batch in the Sequence.

#### Returns:

A batch

### `__iter__`

    
    
    __iter__()
    

Create a generator that iterate over the Sequence.

### `__len__`

    
    
    __len__()
    

Number of batch in the Sequence.

#### Returns:

The number of batches in the Sequence.

### `next`

    
    
    next()
    

For python 2.x.

# Returns

    
    
    The next batch.
    

### `on_epoch_end`

    
    
    on_epoch_end()
    

Method called at the end of every epoch.

### `reset`

    
    
    reset()
    

## Class Members

  * `white_list_formats`

