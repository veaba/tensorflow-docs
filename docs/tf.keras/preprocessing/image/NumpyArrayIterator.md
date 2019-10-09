## Class NumpyArrayIterator

Iterator yielding data from a Numpy array.
[Iterator](https://www.tensorflow.org/api_docs/python/tf/keras/preprocessing/image/Iterator)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.preprocessing.image.NumpyArrayIterator`
- Class `tf.compat.v2.keras.preprocessing.image.NumpyArrayIterator`
#### Arguments:
- `x`: Numpy array of input data or tuple. If tuple, the second elements is either another numpy array or a list of numpy arrays, each of which gets passed through as an output without any modifications.
- `y`: Nump`y` arra`y` of targets data.
- `image_data_generator`: Instance of `ImageDataGenerator` to use for random transformations and normalization.
- `batch_size`: Integer, size of a batch.
- `shuffle`: Boolean, whether to `shuffle` the data between epochs.
- `sample_weight`: Nump`y` arra`y` of sample weights.
- `seed`: Random `seed` for data shuffling.
- `data_format`: String, one of `channels_first`, `channels_last`.
- `save_to_dir`: Optional director`y` where to save the pictures being `y`ielded, in a viewable format. This is useful for visualizing the random transformations being applied, for debugging purposes.
- `save_prefix`: String prefi`x` to use for saving sample images (if `save_to_dir` is set).
- `save_format`: Format to use for saving sample images (if `save_to_dir` is set).
- `subset`: Subset of data (`"training"` or `"validation"`) if validation_split is set in `ImageDataGenerator`.
- `dtype`: Dt`y`pe to use for the generated arra`y`s.
## __init__
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

Initialize self. See help(type(self)) for accurate signature.
## Methods
### __getitem__

```
 __getitem__(idx)
```

Gets batch at position index.
#### Arguments:
- `index`: position of the batch in the Sequence.
#### Returns:

A batch
### __iter__

```
 __iter__()
```

Create a generator that iterate over the Sequence.
### __len__

```
 __len__()
```

Number of batch in the Sequence.
#### Returns:

The number of batches in the Sequence.
### next

```
 next()
```

For python 2.x.
# Returns

```
 The next batch.
```
### on_epoch_end

```
 on_epoch_end()
```

Method called at the end of every epoch.
### reset

```
 reset()
```
## Class Members
- `white_list_formats`