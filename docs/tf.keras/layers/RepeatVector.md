## Class RepeatVector

Repeats the input n times.
[Layer](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer)Inherits From: 

### Aliases:
- Class `tf.compat.v1.keras.layers.RepeatVector`
- Class `tf.compat.v2.keras.layers.RepeatVector`
#### Example:

```
 model = Sequential()
model.add(Dense(32, input_dim=32))
# now: model.output_shape == (None, 32)
# note: `None` is the batch dimension

model.add(RepeatVector(3))
# now: model.output_shape == (None, 3, 32)
```
#### Arguments:
- `n`: I`n`teger, repetitio`n` factor.
#### Input shape:

2D tensor of shape (num_samples, features).
#### Output shape:

3D tensor of shape (num_samples, n, features).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/core.py#L639-L642)


```
 __init__(
    n,
    **kwargs
)
```
