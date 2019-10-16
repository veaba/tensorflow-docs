
Defined in generated file: python/ops/gen_linalg_ops.py

Computes the LU decomposition of one or more square matrices.
### Aliases:
- `tf.compat.v1.linalg.lu`
- `tf.compat.v2.linalg.lu`

```
 tf.linalg.lu(
    input,
    output_idx_type=tf.dtypes.int32,
    name=None
)
```

The input is a tensor of shape [..., M, M] whose inner-most 2 dimensions form square matrices.

The input has to be invertible.

The output consists of two tensors LU and P containing the LU decomposition of all input submatrices [..., :, :]. LU encodes the lower triangular and upper triangular factors.

For each input submatrix of shape [M, M], L is a lower triangular matrix of shape [M, M] with unit diagonal whose entries correspond to the strictly lower triangular part of LU. U is a upper triangular matrix of shape [M, M] whose entries correspond to the upper triangular part, including the diagonal, of LU.

P represents a permutation matrix encoded as a list of indices each between 0 and M-1, inclusive. If P_mat denotes the permutation matrix corresponding to P, then the L, U and P satisfies P_mat * input = L * U.
#### Args:
- `input`:` `A` ``Tensor``.`` ``M`ust` `be` `one` `of` `the` `following` `types:` ``float64``,`` ``float32``,`` ``half``,`` ``complex64``,`` ``complex128``.`` `A` `tensor` `of` `shape` `[`.``.``.``,`` ``M``,`` ``M`]` `whose` `inner-most` `2` `dimensions` `form` `matrices` `of` `size` `[`M``,`` ``M`]`.`
- `output_idx_type`:` `An` `optional` ``tf.DType`` `from:` ``tf.int32, tf.int64``.`` `Defaults` `to` ``tf.int32``.`
- `name`:` `A` ``name`` `for` `the` `operation` `(optional)`.`
#### Returns:

A tuple of Tensor objects (lu, p).
- `lu`: A `Tensor`. Has the same type as `input`.
- `p`: A `Tensor` of ty`p`e `output_idx_type`.
