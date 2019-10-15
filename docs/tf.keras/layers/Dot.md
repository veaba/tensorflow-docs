## Class Dot

Layer that computes a dot product between samples in two tensors.
### Aliases:
- Class `tf.compat.v1.keras.layers.Dot`
- Class `tf.compat.v2.keras.layers.Dot`

E.g. if applied to a list of two tensors a and b of shape (batch_size, n), the output will be a tensor of shape (batch_size, 1) where each entry i will be the dot product between a[i] and b[i].
#### Arguments:
- `axes`: Integer or tuple of integers, axis or `axes` along which to take the dot product.
- `normalize`: Whether to L2-`normalize` samples along the dot product axis before taking the dot product. If set to True, then the output of the dot product is the cosine proximity between the two samples.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/layers/merge.py#L465-L480)


```
 __init__(
    axes,
    normalize=False,
    **kwargs
)
```
