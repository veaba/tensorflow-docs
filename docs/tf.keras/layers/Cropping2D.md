## Class Cropping2D
Cropping layer for 2D input (e.g. picture).
[Layer](https://tensorflow.google.cn/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class tf.compat.v1.keras.layers.Cropping2D
- Class tf.compat.v2.keras.layers.Cropping2D
It crops along spatial dimensions, i.e. height and width.
#### Arguments:
- cropping: Int, or tuple of 2 ints, or tuple of 2 tuples of 2 ints.
If int: the same symmetric cropping is applied to height and width.
If tuple of 2 ints: interpreted as two different symmetric cropping values for height and width: (symmetric_height_crop, symmetric_width_crop).
If tuple of 2 tuples of 2 ints: interpreted as ((top_crop, bottom_crop), (left_crop, right_crop))
- If int: the same symmetric cropping is applied to height and width.
- If tuple of 2 ints: interpreted as two different symmetric cropping values for height and width: (symmetric_height_crop, symmetric_width_crop).
- If tuple of 2 tuples of 2 ints: interpreted as ((top_crop, bottom_crop), (left_crop, right_crop))
- data_format: A string, one of channels_last (default) or channels_first. The ordering of the dimensions in the inputs. channels_last corresponds to inputs with shape (batch, height, width, channels) while channels_first corresponds to inputs with shape (batch, channels, height, width). It defaults to the image_data_format value found in your Keras config file at ~/.keras/keras.json. If you never set it, then it will be "channels_last".
#### Input shape:
4D tensor with shape: - If data_format is "channels_last": (batch, rows, cols, channels) - If data_format is "channels_first": (batch, channels, rows, cols)
#### Output shape:
4D tensor with shape: - If data_format is "channels_last": (batch, cropped_rows, cropped_cols, channels) - If data_format is "channels_first": (batch, channels, cropped_rows, cropped_cols)
#### Examples:

```
 # Crop the input 2D images or feature maps
model = Sequential()
model.add(Cropping2D(cropping=((2, 2), (4, 4)),
                     input_shape=(28, 28, 3)))
# now model.output_shape == (None, 24, 20, 3)
model.add(Conv2D(64, (3, 3), padding='same'))
model.add(Cropping2D(cropping=((2, 2), (2, 2))))
# now model.output_shape == (None, 20, 16. 64)
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/convolutional.py#L2433-L2454)


```
 __init__(
    cropping=((0, 0), (0, 0)),
    data_format=None,
    **kwargs
)
```
