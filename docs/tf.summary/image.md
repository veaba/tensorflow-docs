Write an image summary.
### Aliases:
- `tf.compat.v2.summary.image`

```
 tf.summary.image(
    name,
    data,
    step=None,
    max_outputs=3,
    description=None
)
```
#### Arguments:
- `name`: A `name` for this summary. The summary tag used for TensorBoard will be this `name` prefixed by any active `name` scopes.
- `data`: A `Tensor` representing pixel `data` `w`it`h` s`h`ape `[k, h, w, c]`, `w``h`ere `k` is t`h`e number of images, `h` and `w` are t`h`e `h`eig`h`t and `w`idt`h` of t`h`e images, and `c` is t`h`e number of `c``h`annels, `w``h`i`c``h` s`h`ould be 1, 2, 3, or 4 (grays`c`ale, grays`c`ale `w`it`h` alp`h`a, RGB, RGBA). Any of t`h`e dimensions may be stati`c`ally un`k`no`w`n (i.e., `None`). Floating point `data` `w`ill be `c`lipped to t`h`e range [0,1).
#### Returns:
True on success, or false if no summary was emitted because no default summary writer was available.
#### Raises:
