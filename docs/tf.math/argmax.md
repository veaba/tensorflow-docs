Returns the index with the largest value across axes of a tensor.
### Aliases:
- `tf.argmax`
- `tf.compat.v2.argmax`
- `tf.compat.v2.math.argmax`

```
 tf.math.argmax(
    input,
    axis=None,
    output_type=tf.dtypes.int64,
    name=None
)
```
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
- ``R``e``c``u``r``r``e``n``t`` ``N``e``u``r``a``l`` ``N``e``t``w``o``r``k``s`` ``(``R``N``N``)`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``w``a``l``k``t``h``r``o``u``g``h``
- ``I``m``a``g``e`` ``s``e``g``m``e``n``t``a``t``i``o``n``
- ``I``m``a``g``e`` ``c``a``p``t``i``o``n``i``n``g`` ``w``i``t``h`` ``v``i``s``u``a``l`` ``a``t``t``e``n``t``i``o``n``
- ``N``e``u``r``a``l`` ``m``a``c``h``i``n``e`` ``t``r``a``n``s``l``a``t``i``o``n`` ``w``i``t``h`` ``a``t``t``e``n``t``i``o``n``
- ``T``r``a``n``s``f``o``r``m``e``r`` ``m``o``d``e``l`` ``f``o``r`` ``l``a``n``g``u``a``g``e`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
Note that in case of ties the identity of the return value is not guaranteed.
#### For example:

```
 A=tf.constant([2,20,30,3,6]) # Constant 1-D Tensor
tf.math.argmax(A) # output 2 as index 2 (A[2]) is maximum in tensor A
B=tf.constant([[2,20,30,3,6],[3,11,16,1,8],[14,45,23,5,27]])
tf.math.argmax(B,0) # [2, 2, 0, 2, 2]
tf.math.argmax(B,1) # [2, 2, 1]
```
[tf.DType](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType)

#### Returns:
A `Tensor` of type `output_type`.
#### Usage:

```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmax(input = a)
c = tf.keras.backend.eval(b)
# c = 4
# here a[4] = 166.32 which is the largest element of a across axis 0
```
