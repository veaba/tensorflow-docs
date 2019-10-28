Math Operations.
TensorFlow provides a variety of math functions including:
- ``B``a``s``i``c`` ``a``r``i``t``h``m``e``t``i``c`` ``o``p``e``r``a``t``o``r``s`` ``a``n``d`` ``t``r``i``g``o``n``o``m``e``t``r``i``c`` ``f``u``n``c``t``i``o``n``s``.``
- Special math functions (like: `tf.math.igamma` and `tf.math.zeta`)
- Complex number functions (like: `tf.math.imag` and `tf.math.angle`)
- Reductions and scans (like: `tf.math.reduce_mean` and `tf.math.cumsum`)
- Segment functions (like: `tf.math.segment_sum`)
See: `tf.linalg` for matrix and tensor functions.
## About Segmentation
TensorFlow provides several operations that you can use to perform common math computations on tensor segments. Here a segmentation is a partitioning of a tensor along the first dimension, i.e. it defines a mapping from the first dimension onto `segment_ids`. The `segment_ids` tensor should be the size of the first dimension, `d0`, with consecutive IDs in the range `0` to `k`, where `k`<`d0`. In particular, a segmentation of a matrix tensor is a mapping of rows to segments.
#### For example:

```
 c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])
tf.math.segment_sum(c, tf.constant([0, 0, 1]))
#  ==>  [[0 0 0 0]
#        [5 6 7 8]]
```
The standard `segment_`* functions assert that the `segment` indices are sorted. If you have unsorted indices use the equivalent `unsorted_segment_` function. Thses functions take an additional argument `num_segments` so that the output tensor can be efficiently allocated.

```
 c = tf.constant([[1,2,3,4], [-1,-2,-3,-4], [5,6,7,8]])
tf.math.unsorted_segment_sum(c, tf.constant([0, 1, 0]), num_segments=2)
# ==> [[ 6,  8, 10, 12],
#       [-1, -2, -3, -4]]
```
## Functions
