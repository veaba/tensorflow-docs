Computes the mean of elements across dimensions of a tensor.
### Aliases:
- `tf.compat.v2.math.reduce_mean`
- `tf.compat.v2.reduce_mean`
- `tf.reduce_mean`

```
 tf.math.reduce_mean(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n`` ``a``n``d`` ``A``u``t``o``G``r``a``p``h``
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``N``e``u``r``a``l`` ``s``t``y``l``e`` ``t``r``a``n``s``f``e``r``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g``:`` ``b``a``s``i``c``s``
- ``C``u``s``t``o``m`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``t``f``.``d``i``s``t``r``i``b``u``t``e``.``S``t``r``a``t``e``g``y``
- ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``V``a``r``i``a``t``i``o``n``a``l`` ``A``u``t``o``e``n``c``o``d``e``r``
Reduces `input_tensor` along the dimensions given in `axis`. Unless `keepdims` is true, the rank of the tensor is reduced by 1 for each entry in `axis`. If `keepdims` is true, the reduced dimensions are retained with length 1.
If `axis` is None, all dimensions are reduced, and a tensor with a single element is returned.
#### For example:

```
 x = tf.constant([[1., 1.], [2., 2.]])
tf.reduce_mean(x)  # 1.5
tf.reduce_mean(x, 0)  # [1.5, 1.5]
tf.reduce_mean(x, 1)  # [1.,  2.]
```
#### Args:
- `input_tensor`: The tensor to reduce. Should have numeric type.
- `axis`: The dimensions to reduce. If `None` (the default), reduces all dimensions. Must be in the range [-rank(input_tensor), rank(input_tensor)).
- `keepdims`: If true, retains reduced dimensions with length 1.
- `name`: A `name` for the operation (optional).
#### Returns:
The reduced tensor.
#### Numpy Compatibility
Equivalent to np.mean
Please note that `np.mean` has a `dtype` parameter that could be used to specify the output type. By default this is `dtype`=float64. On the other hand, `tf.reduce_mean` has an aggressive type inference from `input_tensor`, for example:

```
 x = tf.constant([1, 0, 1, 0])
tf.reduce_mean(x)  # 0
y = tf.constant([1., 0., 1., 0.])
tf.reduce_mean(y)  # 0.5
```
