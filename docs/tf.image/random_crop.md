
Randomly crops a tensor to a given size.
### Aliases:
- `tf.compat.v1.image.random_crop`
- `tf.compat.v1.random_crop`
- `tf.compat.v2.image.random_crop`

```
 tf.image.random_crop(
    value,
    size,
    seed=None,
    name=None
)
```
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``P``i``x``2``P``i``x``

Slices a shape size portion out of value at a uniformly chosen offset. Requires value.shape >= size.

If a dimension should not be cropped, pass the full size of that dimension. For example, RGB images can be cropped with size = [crop_height, crop_width, 3].
#### Args:
- `value`: Input tensor to crop.
- `size`: 1-D tensor with `size` the rank of `value`.
- `seed`: Python integer. Used to create a random `seed`. See `tf.compat.v1.set_random_seed` for behavior.
- `name`: A `name` for this operation (optional).
#### Returns:

A cropped tensor of the same rank as value and shape size.
