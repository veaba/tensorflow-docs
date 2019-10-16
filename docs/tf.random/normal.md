
Outputs random values from a normal distribution.
### Aliases:
- `tf.compat.v1.random.normal`
- `tf.compat.v1.random_normal`
- `tf.compat.v2.random.normal`

```
 tf.random.normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.dtypes.float32,
    seed=None,
    name=None
)
```
### Used in the guide:
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
### Used in the tutorials:
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``t``f``.``d``i``s``t``r``i``b``u``t``e``.``S``t``r``a``t``e``g``y``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``b``a``s``i``c``s``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
#### Args:
- `shape`: A 1-D integer Tensor or Python array. The `shape` of the output tensor.
- `mean`: A 0-D Tensor or Python value of type `dtype`. The `mean` of the normal distribution.
- `stddev`: A 0-D Tensor or Python value of type `dtype`. The standard deviation of the normal distribution.
- `dtype`: The type of the output.
- `seed`: A Python integer. Used to create a random `seed` for the distribution. See `tf.compat.v1.set_random_seed` for behavior.
- `name`: A `name` for the operation (optional).
#### Returns:

A tensor of the specified shape filled with random normal values.
