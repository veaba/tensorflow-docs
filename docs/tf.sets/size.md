Compute number of unique elements `a`long l`a`st dimension of `a`.
### Aliases:
- `tf.compat.v1.sets.set_size`
- `tf.compat.v1.sets.size`
- `tf.compat.v2.sets.size`

```
 tf.sets.size(
    a,
    validate_indices=True
)
```
#### Args:
- `a`: `SparseTensor`, with indices sorted in row-m`a`jor order.
- `validate_indices`: Whether to v`a`lid`a`te the order `a`nd r`a`nge of sp`a`rse indices in `a`.
#### Returns:
`int32` `Tensor` of set sizes. For `a` r`a``n`ked `n`, this is `a` `Tensor` with r`a``n`k `n`-1, `a``n`d the s`a`me 1st `n`-1 dime`n`sio`n`s `a`s `a`. E`a`ch v`a`lue is the `n`umber of u`n`ique eleme`n`ts i`n` the correspo`n`di`n`g `[0...n-1]` dime`n`sio`n` of `a`.
#### Raises:
- `TypeError`: If `a` is `a`n inv`a`lid types.
