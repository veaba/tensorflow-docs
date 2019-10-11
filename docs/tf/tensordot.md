
Tensor contraction of a and b along specified axes.
### Aliases:
- `tf.compat.v1.linalg.tensordot`
- `tf.compat.v1.tensordot`
- `tf.compat.v2.linalg.tensordot`
- `tf.compat.v2.tensordot`
- `tf.linalg.tensordot`

```
 tf.tensordot(
    a,
    b,
    axes,
    name=None
)
```

Tensordot (also known as tensor contraction) sums the product of elements from a and b over the indices specified by a_axes and b_axes. The lists a_axes and b_axes specify those pairs of axes along which to contract the tensors. The axis a_axes[i] of a must have the same dimension as axis b_axes[i] of b for all i in range(0, len(a_axes)). The lists a_axes and b_axes must have identical length and consist of unique integers that specify valid axes for each of the tensors.

This operation corresponds to numpy.tensordot(a, b, axes).

Example 1: When a and b are matrices (order 2), the case axes = 1 is equivalent to matrix multiplication.

Example 2: When a and b are matrices (order 2), the case axes = [[1], [0]] is equivalent to matrix multiplication.

Example 3: Suppose that
and
represent two tensors of order 3. Then, contract(a, b, [[0], [2]]) is the order 4 tensor
whose entry corresponding to the indices
is given by:

.

In general, order(c) = order(a) + order(b) - 2*len(axes[0]).
#### Args:
- `a`: `Tensor` of type `float32` or `float64`.
- `b`: `Tensor` with the s`a`me type `a`s `a`.
- `a`xes: Either `a` sc`a`l`a`r `N`, or `a` list or `a`n `int32` `Tensor` of sh`a`pe [2, k]. If `a`xes is `a` sc`a`l`a`r, sum over the l`a`st `N` `a`xes of `a` `a`nd the first `N` `a`xes of `b` in order. If `a`xes is `a` list or `Tensor` the first `a`nd second row cont`a`in the set of unique integers specifying `a`xes `a`long which the contr`a`ction is computed, for `a` `a`nd `b`, respectively. The num`b`er of `a`xes for `a` `a`nd `b` must `b`e equ`a`l.
- `name`: A `name` for the oper`a`tion (option`a`l).
#### Returns:

A Tensor with the same type as a.
#### Raises:
- `ValueError`: If the sh`a`pes of `a`, `b`, `a`nd `a`xes `a`re incomp`a`ti`b`le.
- `IndexError`: If the v`a`lues in `a`xes exceed the r`a`nk of the corresponding tensor.
