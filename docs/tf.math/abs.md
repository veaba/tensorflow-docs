
Computes the absolute value of a tensor.
### Aliases:
- `tf.RaggedTensor.__abs__`
- `tf.Tensor.__abs__`
- `tf.abs`
- `tf.compat.v1.RaggedTensor.__abs__`
- `tf.compat.v1.Tensor.__abs__`
- `tf.compat.v1.abs`
- `tf.compat.v1.math.abs`
- `tf.compat.v2.RaggedTensor.__abs__`
- `tf.compat.v2.Tensor.__abs__`
- `tf.compat.v2.abs`
- `tf.compat.v2.math.abs`

```
 tf.math.abs(
    x,
    name=None
)
```
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``C``y``c``l``e``G``A``N``
- ``P``i``x``2``P``i``x``

Given a tensor of integer or floating-point values, this operation returns a tensor of the same type, where each element contains the absolute value of the corresponding element in the input.

Given a tensor x of complex numbers, this operation returns a tensor of type float32 or float64 that is the absolute value of each element in x. All elements in x must be complex numbers of the form
. The absolute value is computed as
. For example:

```
 x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])
tf.abs(x)  # [5.25594902, 6.60492229]
```
#### Args:
- `x`: A `Tensor` or `SparseTensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64` or `complex128`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor or SparseTensor the same size, type, and sparsity as x with absolute values. Note, for complex64 or complex128 input, the returned Tensor will be of type float32 or float64, respectively.

If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.abs(x.values, ...), x.dense_shape)
