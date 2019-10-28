Extracts a strided slice of a tensor (generalized python array indexing).
### Aliases:
- `tf.compat.v1.strided_slice`
- `tf.compat.v2.strided_slice`

```
 tf.strided_slice(
    input_,
    begin,
    end,
    strides=None,
    begin_mask=0,
    end_mask=0,
    ellipsis_mask=0,
    new_axis_mask=0,
    shrink_axis_mask=0,
    var=None,
    name=None
)
```
Instead of calling this op directly most users will want to use the NumPy-style slicing syntax (e.g. `tensor[..., 3:4:-1, tf.newaxis, 3]`), which is supported via `tf.Tensor.getitem` and `tf.Variable.getitem`. The interface of this op is a low-level encoding of the slicing syntax.
