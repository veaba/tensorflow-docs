Concatenates a list of `SparseTensor` along the specified dimension. (deprecated arguments)
### Aliases:
- `tf.compat.v1.sparse.concat`

```
 tf.compat.v1.sparse_concat(
    axis,
    sp_inputs,
    name=None,
    expand_nonconcat_dim=False,
    concat_dim=None,
    expand_nonconcat_dims=None
)
```
Concatenation is with respect to the dense versions of each sparse input. It is assumed that each inputs is a `SparseTensor` whose elements are ordered along increasing dimension number.
If expand_nonconcat_dim is False, all inputs' shapes must match, except for the concat dimension. If expand_nonconcat_dim is True, then inputs' shapes are allowed to vary among all inputs.
The `indices`, `values`, and `shapes` lists must have the same length.
If expand_nonconcat_dim is False, then the output shape is identical to the inputs', except along the concat dimension, where it is the sum of the inputs' sizes along that dimension.
If expand_nonconcat_dim is True, then the output shape along the non-concat dimensions will be expand to be the largest among all inputs, and it is the sum of the inputs sizes along the concat dimension.
The output elements will be resorted to preserve the sort order along increasing dimension number.
