
Computes dropout.
### Aliases:
- `tf.compat.v2.nn.dropout`

```
 tf.nn.dropout(
    x,
    rate,
    noise_shape=None,
    seed=None,
    name=None
)
```
### Used in the guide:
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``

With probability rate, drops elements of x. Input that are kept are scaled up by 1 / (1 - rate), otherwise outputs 0. The scaling is so that the expected sum is unchanged.

Note: The behavior of dropout has changed between TensorFlow 1.x and 2.x. When converting 1.x code, please use named arguments to ensure behavior stays consistent.
[broadcastable](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)By default, each element is kept or dropped independently. If noise_shape is specified, it must be  to the shape of x, and only dimensions with noise_shape[i] == shape(x)[i] will make independent decisions. For example, if shape(x) = [k, l, m, n] and noise_shape = [k, 1, 1, n], each batch and channel component will be kept independently and each row and column will be kept or not kept together.

#### Args:
- `x`: A floating point tensor.
- `rate`: A scalar `Tensor` with the same type as `x`. The probability that each element is dropped. For e`x`ample, setting `rate`=0.1 would drop 10% of input elements.
- `noise_shape`: A 1-D `Tensor` of type `int32`, representing the shape for randomly gene`rate`d keep/drop flags.
- `seed`: A Python integer. Used to create random `seed`s. See `tf.compat.v1.set_random_seed` for behavior.
- `name`: A `name` for this operation (optional).
#### Returns:

A Tensor of the same shape of x.
#### Raises:
