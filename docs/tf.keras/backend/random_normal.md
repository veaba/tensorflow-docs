Returns a tensor with normal distribution of values.
### Aliases:
- `tf.compat.v1.keras.backend.random_normal`
- `tf.compat.v2.keras.backend.random_normal`

```
 tf.keras.backend.random_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=None,
    seed=None
)
```
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
#### Arguments:
- `shape`: A tuple of integers, the `shape` of tensor to create.
- `mean`: A float, `mean` of the normal distribution to draw samples.
- `stddev`: A float, standard deviation of the normal distribution to draw samples.
- `dtype`: String, `dtype` of returned tensor.
- `seed`: Integer, random `seed`.
#### Returns:
A tensor.
