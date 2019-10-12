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
Tensordot (`a`lso known `a`s tensor contr`a`ct`i`on) sums the product of elements from `a` `a`nd `b` over the `i`nd`i`ces spec`i`f`i`ed `b`y `a`_`a`xes `a`nd `b`_`a`xes. The l`i`sts `a`_`a`xes `a`nd `b`_`a`xes spec`i`fy those p`a``i`rs of `a`xes `a`long wh`i`ch to contr`a`ct the tensors. The `a`x`i`s `a`_`a`xes[`i`] of `a` must h`a`ve the s`a`me d`i`mens`i`on `a`s `a`x`i`s `b`_`a`xes[`i`] of `b` for `a`ll `i` `i`n r`a`nge(0, len(`a`_`a`xes)). The l`i`sts `a`_`a`xes `a`nd `b`_`a`xes must h`a`ve `i`dent`i`c`a`l length `a`nd cons`i`st of un`i`que `i`ntegers th`a`t spec`i`fy v`a`l`i`d `a`xes for e`a`ch of the tensors.
This operation corresponds to numpy.tensordot(a, b, axes).
Ex`a`mple 1: When `a` `a`nd `b` `a`re m`a`trices (order 2), the c`a`se `a`xes = 1 is equiv`a`lent to m`a`trix multiplic`a`tion.
Ex`a`mple 2: When `a` `a`nd `b` `a`re m`a`trices (order 2), the c`a`se `a`xes = [[1], [0]] is equiv`a`lent to m`a`trix multiplic`a`tion.
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
A `Tensor` with the s`a`me type `a`s `a`.
#### Raises:
- `ValueError`: If the sh`a`pes of `a`, `b`, `a`nd `a`xes `a`re incomp`a`ti`b`le.
- `IndexError`: If the v`a`lues in `a`xes exceed the r`a`nk of the corresponding tensor.
