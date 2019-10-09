## Class Masking

Masks a sequence by using a mask value to skip timesteps.
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.Masking`
- Class `tf.compat.v2.keras.layers.Masking`
### Used in the guide:
- ``M``a``s``k``i``n``g`` ``a``n``d`` ``p``a``d``d``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``

For each timestep in the input tensor (dimension #1 in the tensor), if all values in the input tensor at that timestep are equal to mask_value, then the timestep will be masked (skipped) in all downstream layers (as long as they support masking).

If any downstream layer does not support masking yet receives such an input mask, an exception will be raised.
#### Example:

Consider a Numpy data array x of shape (samples, timesteps, features), to be fed to an LSTM layer. You want to mask timestep #3 and #5 because you lack data for these timesteps. You can:
- Set x[:, 3, :] = 0. and x[:, 5, :] = 0.
- Insert a `Masking` layer with `mask_value=0.` before the LSTM layer:

```
 model = Sequential()
model.add(Masking(mask_value=0., input_shape=(timesteps, features)))
model.add(LSTM(32))
```
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L83-L87)


```
 __init__(
    mask_value=0.0,
    **kwargs
)
```