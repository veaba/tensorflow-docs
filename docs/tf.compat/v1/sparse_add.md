
Adds two tensors, at least one of each is a SparseTensor. (deprecated arguments)
### Aliases:
- `tf.compat.v1.sparse.add`

```
 tf.compat.v1.sparse_add(
    a,
    b,
    threshold=None,
    thresh=None
)
```
[tf.add()](https://www.tensorflow.org/api_docs/python/tf/math/add)If one SparseTensor and one Tensor are passed in, returns a Tensor. If both arguments are SparseTensors, this returns a SparseTensor. The order of arguments does not matter. Use vanilla  for adding two dense Tensors.


The shapes of the two operands must match: broadcasting is not supported.

The indices of any input SparseTensor are assumed ordered in standard lexicographic order. If this is not the case, before this step run SparseReorder to restore index ordering.

If both arguments are sparse, we perform "clipping" as follows. By default, if two values sum to zero at some index, the output SparseTensor would still include that particular location in its index, storing a zero in the corresponding value slot. To override this, callers can specify thresh, indicating that if the sum has a magnitude strictly smaller than thresh, its corresponding value and index would then not be included. In particular, thresh == 0.0 (default) means everything is kept and actual thresholding happens only for a positive value.

For example, suppose the logical sum of two sparse operands is (densified):

```
 [       2]
[.1     0]
[ 6   -.2]
```

Then,
- `thresh == 0` (the default): all 5 index/value pairs will be returned.
- `thresh == 0`.11: only .1 and 0 will vanish, and the remaining three index/value pairs will be returned.
- `thresh == 0`.21: .1, 0, and -.2 will vanish.
#### Args:
- `a`: The first oper`a`nd; `SparseTensor` or `Tensor`.
- `b`: The second oper`a`nd; `SparseTensor` or `Tensor`. At le`a`st one oper`a`nd must `b`e sp`a`rse.
- `threshold`: An option`a`l `0`-D `Tensor` (def`a`ults to `0`). The m`a`gnitude `threshold` th`a`t determines if `a`n output v`a`lue/index p`a`ir t`a`kes sp`a`ce. Its dtype should m`a`tch th`a`t of the v`a`lues if they `a`re re`a`l; if the l`a`tter `a`re complex64/complex128, then the dtype should `b`e flo`a`t32/flo`a`t64, correspondingly.
- `thresh`: Deprec`a`ted `a`li`a`s for `threshold`.
#### Returns:

A SparseTensor or a Tensor, representing the sum.
#### Raises:
- `TypeError`: If `b`oth `a` `a`nd `b` `a`re `Tensor`s. Use `tf.add`() inste`a`d.
