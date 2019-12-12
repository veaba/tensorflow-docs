

## Class  `GlobalAveragePooling1D` 
Global average pooling operation for temporal data.

**Aliases** : [ `tf.compat.v1.keras.layers.GlobalAveragePooling1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v1.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v2.keras.layers.GlobalAveragePooling1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.compat.v2.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D), [ `tf.keras.layers.GlobalAvgPool1D` ](/api_docs/python/tf/keras/layers/GlobalAveragePooling1D)

### Used in the guide:
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)


### Used in the tutorials:
- [Text classification with preprocessed text: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification)
- [Word embeddings](https://tensorflow.google.cn/tutorials/text/word_embeddings)


#### Arguments:
- **`data_format`** : A string,one of  `channels_last`  (default) or  `channels_first` .The ordering of the dimensions in the inputs. `channels_last`  corresponds to inputs with shape `(batch, steps, features)`  while  `channels_first` corresponds to inputs with shape `(batch, features, steps)` .


#### Call arguments:
- **`inputs`** : A 3D tensor.
- **`mask`** : Binary tensor of shape  `(batch_size, steps)`  indicating whethera given step should be masked (excluded from the average).


#### Input shape:
- If  `data_format='channels_last'` :3D tensor with shape: `(batch_size, steps, features)` 
- If  `data_format='channels_first'` :3D tensor with shape: `(batch_size, features, steps)` 


#### Output shape:
2D tensor with shape  `(batch_size, features)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/pooling.py#L632-L635)

```
 __init__(
    data_format='channels_last',
    **kwargs
)
 
```

