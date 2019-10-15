Defined in generated file: `python/ops/gen_array_ops.py`
Reverses specific dimensions of a tensor.
### Aliases:
- `tf.compat.v1.manip.reverse`
- `tf.compat.v1.reverse`
- `tf.compat.v1.reverse`_v2
- `tf.compat.v2.reverse`

```
 tf.reverse(
    tensor,
    axis,
    name=None
)
```
[tf.reverse](https://tensorflow.google.cn/api_docs/python/tf/reverse)NOTE  has now changed behavior in preparation for 1.0. _v2 is currently an alias that will be deprecated before TF 1.0.

G`i`ven a `tensor`, and a `int32` `tensor` `axis` represent`i`ng the set of d`i`mens`i`ons of `tensor` to reverse. Th`i`s operat`i`on reverses each d`i`mens`i`on `i` for wh`i`ch there ex`i`sts `j` s.t. `axis`[`j`] == `i`.
`tensor` can have up to 8 dimensions. The number of dimensions specified in `axis` may be 0 or more entries. If an index is specified more than once, a InvalidArgument error is raised.
#### For example:

```
 # tensor 't' is [[[[ 0,  1,  2,  3],
#                  [ 4,  5,  6,  7],
#                  [ 8,  9, 10, 11]],
#                 [[12, 13, 14, 15],
#                  [16, 17, 18, 19],
#                  [20, 21, 22, 23]]]]
# tensor 't' shape is [1, 2, 3, 4]

# 'dims' is [3] or 'dims' is [-1]
reverse(t, dims) ==> [[[[ 3,  2,  1,  0],
                        [ 7,  6,  5,  4],
                        [ 11, 10, 9, 8]],
                       [[15, 14, 13, 12],
                        [19, 18, 17, 16],
                        [23, 22, 21, 20]]]]

# 'dims' is '[1]' (or 'dims' is '[-3]')
reverse(t, dims) ==> [[[[12, 13, 14, 15],
                        [16, 17, 18, 19],
                        [20, 21, 22, 23]
                       [[ 0,  1,  2,  3],
                        [ 4,  5,  6,  7],
                        [ 8,  9, 10, 11]]]]

# 'dims' is '[2]' (or 'dims' is '[-2]')
reverse(t, dims) ==> [[[[8, 9, 10, 11],
                        [4, 5, 6, 7],
                        [0, 1, 2, 3]]
                       [[20, 21, 22, 23],
                        [16, 17, 18, 19],
                        [12, 13, 14, 15]]]]
```
#### Args:
- `tensor`: A `Tensor`. Must be one of the following types: `uint8`, `int8`, `uint16`, `int16`, `int32`, `int64`, `bool`, `bfloat16`, `half`, `float32`, `float64`, `complex64`, `complex128`, `string`. Up to 8-D.
#### Returns:
A `Tensor`. Has the same type as `tensor`.
