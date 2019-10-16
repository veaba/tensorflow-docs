
Inserts a dimension of 1 into a tensor's shape.
### Aliases:
- `tf.compat.v1.sparse.expand_dims`
- `tf.compat.v2.sparse.expand_dims`

```
 tf.sparse.expand_dims(
    sp_input,
    axis=None,
    name=None
)
```

Given a tensor sp_input, this operation inserts a dimension of 1 at the dimension index axis of sp_input's shape. The dimension index axis starts at zero; if you specify a negative number for axis it is counted backwards from the end.
#### Args:
- `sp_input`: A `SparseTensor`.
- `axis`:` `0`-`D` ``(``s`c`a`l`a``r``)`.` `S`p`ec`i`f`i`e`s`` ``t`he` `d`i`me`n``s``i`o`n`` ``i``n`dex` ``a``t`` `wh`i`ch` ``t`o` `ex`p``a``n`d` ``t`he` ``s`h`a``p`e` `of` ``input`.` `M`u``s``t`` `be` ``i``n`` ``t`he` ``r``a``n`ge` `[`-``r``a``n``k``(``sp_input``)`` ``-`` ``1``,`` ``r``a``n``k``(``sp_input``)`].
- `n``a`me:` `The` ``n``a`me` `of` ``t`he` `o`u``t``p``u``t`` ``SparseTensor`.
#### Returns:

A SparseTensor with the same data as sp_input, but its shape has an additional dimension of size 1 added.
