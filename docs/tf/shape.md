Returns the shape of a tensor.
### Aliases:
- `tf.compat.v2.shape`

```
 tf.shape(
    input,
    out_type=tf.dtypes.int32,
    name=None
)
```
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``D``e``e``p``D``r``e``a``m``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``P``i``x``2``P``i``x``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
This operation returns a 1-D integer tensor representing the shape of `input`.
#### For example:

```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.shape(t)  # [2, 2, 3]
```
#### Args:
- `input`: A `Tensor` or `SparseTensor`.
- `out_type`: (Optional) The specified output type of the operation (`int32` or `int64`). Defaults to `tf.int32`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `out_type`.
