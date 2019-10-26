Defined in generated file: python/ops/gen_math_ops.py
Multiply matrix "a" by matrix "b".

```
 tf.compat.v1.sparse_matmul(
    a,
    b,
    transpose_a=False,
    transpose_b=False,
    a_is_sparse=False,
    b_is_sparse=False,
    name=None
)
```
The inputs must be two-dimensional matrices and the inner dimension of "a" must match the outer dimension of "b". Both "a" and "b" must be Tensors not SparseTensors. This op is optimized for the case where at least one of "a" or "b" is sparse, in the sense that they have a large proportion of zero values. The breakeven for using this versus a dense matrix multiply on one platform was 30% zero values in the sparse matrix.
The gradient computation of this operation will only take advantage of sparsity in the input gradient when that gradient comes from a Relu.
#### Args:
- a: A Tensor. Must be one of the following types: float32, bfloat16.
- b: A Tensor. Must be one of the following types: float32, bfloat16.
- transpose_a: An optional bool. Defaults to False.
- transpose_b: An optional bool. Defaults to False.
- a_is_sparse: An optional bool. Defaults to False.
- b_is_sparse: An optional bool. Defaults to False.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type float32.
