Creates a sequence of numbers.
### Aliases:
- `tf.compat.v1.range`
- `tf.compat.v2.range`

```
 tf.range(limit, delta=1, dtype=None, name='range')
tf.range(start, limit, delta=1, dtype=None, name='range')
```
### Used in the guide:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``D``e``e``p``D``r``e``a``m``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
Creates a sequence of numbers that begins at `start` and extends by increments of `delta` up to but not including `limit`.
The dtype of the resulting tensor is inferred from the inputs unless it is provided explicitly.
Like the Python builtin `range`, `start` defaults to 0, so that `range`(n) = `range`(0, n).
#### For example:

```
 start = 3
limit = 18
delta = 3
tf.range(start, limit, delta)  # [3, 6, 9, 12, 15]

start = 3
limit = 1
delta = -0.5
tf.range(start, limit, delta)  # [3, 2.5, 2, 1.5]

limit = 5
tf.range(limit)  # [0, 1, 2, 3, 4]
```
#### Args:
- `start`: A 0-D `Tensor` (scalar). Acts as first entry in the range if `limit` is not None; otherwise, acts as range `limit` and first entry defaults to 0.
- `limit`: A 0-D `Tensor` (scalar). Upper `limit` of sequence, exclusive. If None, defaults to the value of `start` while the first entry of the range defaults to 0.
- `delta`: A 0-D `Tensor` (scalar). Number that increments `start`. Defaults to 1.
- `dtype`: The type of the elements of the resulting tensor.
- `name`: A `name` for the operation. Defaults to "range".
#### Returns:
An 1-D `Tensor` of type `dtype`.
#### Numpy Compatibility
Equivalent to np.arange
