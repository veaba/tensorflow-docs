## Class Dropout

Applies Dropout to the input.
[Dropout](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Dropout)Inherits From: , Layer


Dropout consists in randomly setting a fraction rate of input units to 0 at each update during training time, which helps prevent overfitting. The units that are kept are scaled by 1 / (1 - rate), so that their sum is unchanged at training time and inference time.
#### Arguments:
- `rate`: The dropout `rate`, between 0 and 1. E.g. `rate`=0.1 would drop out 10% of input units.
- `noise_shape`: 1D tensor of type `int32` representing the shape of the binary dropout mask that will be multiplied with the input. For instance, if your inputs have shape (`batch_size, timesteps, features`), and you want the dropout mask to be the same for all timesteps, you can use `noise_shape`=[batch_size, 1, features].
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed`. for behavior.
- `name`: The `name` of the layer (string).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/layers/core.py#L214-L223)


```
 __init__(
    rate=0.5,
    noise_shape=None,
    seed=None,
    name=None,
    **kwargs
)
```
## Properties
### graph

DEPRECATED FUNCTION
### scope_name
