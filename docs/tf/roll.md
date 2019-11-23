
Rolls the elements of a tensor along an axis.


### Aliases:
- [ `tf.compat.v1.manip.roll` ](/api_docs/python/tf/roll)
- [ `tf.compat.v1.roll` ](/api_docs/python/tf/roll)
- [ `tf.compat.v2.roll` ](/api_docs/python/tf/roll)


```
tf.roll(
    input,
    shift,
    axis,
    name=None
)

```



### Used in the tutorials:
- [DeepDream](https://tensorflow.google.cn/tutorials/generative/deepdream)

The elements are shifted positively (towards larger indices) by the offset of `shift`  along the dimension of  `axis` . Negative  `shift`  values will shiftelements in the opposite direction. Elements that roll passed the last positionwill wrap around to the first and vice versa. Multiple shifts along multipleaxes may be specified.


#### For example:


```
# 't' is [0, 1, 2, 3, 4]
roll(t, shift=2, axis=0) ==> [3, 4, 0, 1, 2]

# shifting along multiple dimensions
# 't' is [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
roll(t, shift=[1, -2], axis=[0, 1]) ==> [[7, 8, 9, 5, 6], [2, 3, 4, 0, 1]]

# shifting along the same axis multiple times
# 't' is [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]
roll(t, shift=[2, -3], axis=[1, 1]) ==> [[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]

```



#### Args:
- **`input`** : A  `Tensor` .
- **`shift`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .Dimension must be 0-D or 1-D.  `shift[i]`  specifies the number of places by whichelements are shifted positively (towards larger indices) along the dimensionspecified by  `axis[i]` . Negative shifts will roll the elements in the oppositedirection.
- **`axis`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .Dimension must be 0-D or 1-D.  `axis[i]`  specifies the dimension that the shift `shift[i]`  should occur. If the same axis is referenced more than once, thetotal shift for that axis will be the sum of all the shifts that belong to thataxis.
- **`name`** : A name for the operation (optional).


#### Returns:

A  `Tensor` . Has the same type as  `input` .
