Defined in generated file: `python/ops/gen_math_ops.py`
Compute the pairwise cross product.
### Aliases:
- `tf.compat.v1.cross`
- `tf.compat.v1.linalg.cross`
- `tf.compat.v2.linalg.cross`

```
 tf.linalg.cross(
    a,
    b,
    name=None
)
```
`a` `a`nd `b` must `b`e the s`a`me sh`a`pe; they c`a`n either `b`e simple 3-element vectors, or `a`ny sh`a`pe where the innermost dimension is 3. In the l`a`tter c`a`se, e`a`ch p`a`ir of corresponding 3-element vectors is cross-multiplied independently.
#### Args:
- `a`: A `Tensor`. Must be one of the following types: `float32`, `float64`, `int32`, `uint8`, `int16`, `int8`, `int64`, `bfloat16`, `uint16`, `half`, `uint32`, `uint64`. A tensor cont`a`ining 3-element vectors.
- `b`: A `Tensor`. Must h`a`ve the s`a`me type `a`s `a`. Another tensor, of s`a`me type `a`nd sh`a`pe `a`s `a`.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor`. H`a`s the s`a`me type `a`s `a`.
