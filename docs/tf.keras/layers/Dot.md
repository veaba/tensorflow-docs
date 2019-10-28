## Class Dot
Layer that computes a dot product between samples in two tensors.
### Aliases:
- Class `tf.compat.v1.keras.layers.Dot`
- Class `tf.compat.v2.keras.layers.Dot`
E.g. `i`f `a`ppl`i`ed to `a` l`i`st of two tensors `a` `a`nd `b` of sh`a`pe `batch_size, n)`, the output w`i`ll `b`e `a` tensor of sh`a`pe `batch_size, 1)` where e`a`ch entry `i` w`i`ll `b`e the dot product `b`etween `a`[`i`] `a`nd `b`[`i`].
#### Arguments:
- `axes`: Integer or tuple of integers, axis or `axes` along which to take the dot product.
- `normalize`: Whether to L2-`normalize` samples along the dot product axis before taking the dot product. If set to True, then the output of the dot product is the cosine proximity between the two samples.
## __init__
View source

```
 __init__(
    axes,
    normalize=False,
    **kwargs
)
```
Functional interface to the `Dot` layer.
### Aliases:
- `tf.compat.v1.keras.layers.dot`
- `tf.compat.v2.keras.layers.dot`

```
 tf.keras.layers.dot(
    inputs,
    axes,
    normalize=False,
    **kwargs
)
```
#### Arguments:
- `inputs`: A list of input tensors (at least 2).
- `axes`: Integer or tuple of integers, axis or `axes` along which to take the dot product.
- `normalize`: Whether to L2-`normalize` samples along the dot product axis before taking the dot product. If set to True, then the output of the dot product is the cosine proximity between the two samples.
#### Returns:
A tensor, the dot product of the samples from the inputs.
