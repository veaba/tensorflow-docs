Computes the product of x and y and returns 0 if the y is zero, even if x is NaN or infinite.
### Aliases:
- `tf.compat.v1.math.multiply_no_nan`
- `tf.compat.v2.math.multiply_no_nan`

```
 tf.math.multiply_no_nan(
    x,
    y,
    name=None
)
```
#### Args:
- `x`: A `Tensor`. Must be one of the following types: `float32`, `float64`.
- `y`: A `Tensor` whose dt`y`pe is compatible with `x`.
- `name`: A `name` for the operation (optional).
#### Returns:
The element-wise value of the x times y.
