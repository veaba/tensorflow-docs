
Clips tensor values to a specified min and max.
### Aliases:
- `tf.compat.v1.clip_by_value`
- `tf.compat.v2.clip_by_value`

```
 tf.clip_by_value(
    t,
    clip_value_min,
    clip_value_max,
    name=None
)
```
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
- ``D``e``e``p``D``r``e``a``m``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``

Given a tensor t, this operation returns a tensor of the same type and shape as t with its values clipped to clip_value_min and clip_value_max. Any values less than clip_value_min are set to clip_value_min. Any values greater than clip_value_max are set to clip_value_max.
#### For example:

```
 A = tf.constant([[1, 20, 13], [3, 21, 13]])
B = tf.clip_by_value(A, clip_value_min=0, clip_value_max=3) # [[1, 3, 3],[3, 3, 3]]
C = tf.clip_by_value(A, clip_value_min=0., clip_value_max=3.) # throws `TypeError`
as input and clip_values are of different dtype
```
#### Args:
- `t`: A `Tensor` or `IndexedSlices`.
- `clip_value_min`: A 0-D (scalar) `Tensor`, or a `Tensor` wi`t`h `t`he same shape as `t`. The minimum value `t`o clip by.
- `clip_value_max`: A 0-D (scalar) `Tensor`, or a `Tensor` wi`t`h `t`he same shape as `t`. The maximum value `t`o clip by.
- `name`: A `name` for `t`he opera`t`ion (op`t`ional).
#### Returns:

A clipped Tensor or IndexedSlices.
#### Raises:
- `ValueError`: If the clip tensors would trigger array broadcasting that would make the returned tensor larger than the input.
- `TypeError`: If dtype of the input `is` `int32` and dtype of the `clip_value_min' or`clip_value_max`is`float32`

Clips tensor values to a specified min and max.
### Aliases:
- `tf.compat.v1.clip_by_value`
- `tf.compat.v2.clip_by_value`

```
 tf.clip_by_value(
    t,
    clip_value_min,
    clip_value_max,
    name=None
)
```
### Used in the tutorials:
- ``A``d``v``e``r``s``a``r``i``a``l`` ``e``x``a``m``p``l``e`` ``u``s``i``n``g`` ``F``G``S``M``
- ``D``e``e``p``D``r``e``a``m``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``

Given a tensor t, this operation returns a tensor of the same type and shape as t with its values clipped to clip_value_min and clip_value_max. Any values less than clip_value_min are set to clip_value_min. Any values greater than clip_value_max are set to clip_value_max.
#### For example:

```
 A = tf.constant([[1, 20, 13], [3, 21, 13]])
B = tf.clip_by_value(A, clip_value_min=0, clip_value_max=3) # [[1, 3, 3],[3, 3, 3]]
C = tf.clip_by_value(A, clip_value_min=0., clip_value_max=3.) # throws `TypeError`
as input and clip_values are of different dtype
```
#### Args:
- `t`: A `Tensor` or `IndexedSlices`.
- `clip_value_min`: A 0-D (scalar) `Tensor`, or a `Tensor` wi`t`h `t`he same shape as `t`. The minimum value `t`o clip by.
- `clip_value_max`: A 0-D (scalar) `Tensor`, or a `Tensor` wi`t`h `t`he same shape as `t`. The maximum value `t`o clip by.
- `name`: A `name` for `t`he opera`t`ion (op`t`ional).
#### Returns:

A clipped Tensor or IndexedSlices.
#### Raises:
- `ValueError`: If the clip tensors would trigger array broadcasting that would make the returned tensor larger than the input.
- `TypeError`: If dtype of the input `is` `int32` and dtype of the `clip_value_min' or`clip_value_max`is`float32`
