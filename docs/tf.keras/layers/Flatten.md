## Class Flatten
Flattens the input. Does not affect the batch size.
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.Flatten
- Class tf.compat.v2.keras.layers.Flatten
### Used in the guide:
- Migrate your TensorFlow 1 code to TensorFlow 2
- tf.data: Build TensorFlow input pipelines
- Estimators
### Used in the tutorials:
- Image classification
- Basic classification: Classify images of clothing
- Distributed training with Keras
- Multi-worker training with Estimator
- Multi-worker training with Keras
If inputs are shaped (batch,) without a channel dimension, then flattening adds an extra channel dimension and output shapes are (batch, 1).
#### Arguments:
- data_format: A string, one of channels_last (default) or channels_first. The ordering of the dimensions in the inputs. channels_last corresponds to inputs with shape (batch, ..., channels) while channels_first corresponds to inputs with shape (batch, channels, ...). It defaults to the image_data_format value found in your Keras config file at ~/.keras/keras.json. If you never set it, then it will be "channels_last".
#### Example:

```
 model = Sequential()
model.add(Convolution2D(64, 3, 3,
                        border_mode='same',
                        input_shape=(3, 32, 32)))
# now: model.output_shape == (None, 64, 32, 32)

model.add(Flatten())
# now: model.output_shape == (None, 65536)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L569-L572)


```
 __init__(
    data_format=None,
    **kwargs
)
```
