## Class Minimum
Layer that computes the minimum (element-wise) a list of inputs.
### Aliases:
- Class tf.compat.v1.keras.layers.Minimum
- Class tf.compat.v2.keras.layers.Minimum
It takes as input a list of tensors, all of the same shape, and returns a single tensor (also of the same shape).
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L41-L43)


```
 __init__(**kwargs)
```
Functional interface to the Minimum layer.
### Aliases:
- tf.compat.v1.keras.layers.minimum
- tf.compat.v2.keras.layers.minimum

```
 tf.keras.layers.minimum(
    inputs,
    **kwargs
)
```
#### Arguments:
- inputs: A list of input tensors (at least 2).
- **kwargs: Standard layer keyword arguments.
#### Returns:
A tensor, the element-wise minimum of the inputs.
