
Joins a string Tensor across the given dimensions.
### Aliases:
- `tf.compat.v1.strings.reduce_join`

```
 tf.compat.v1.reduce_join(
    inputs,
    axis=None,
    keep_dims=None,
    separator='',
    name=None,
    reduction_indices=None,
    keepdims=None
)
```

Computes the string join across dimensions in the given string Tensor of shape [\\(d_0, d_1, ..., d_{n-1}\\)]. Returns a new Tensor created by joining the input strings with the given separator (default: empty string). Negative indices are counted backwards from the end, with -1 being equivalent to n - 1. If indices are not specified, joins across all dimensions beginning from n - 1 through 0.
#### For example:

```
 # tensor `a` is [["a", "b"], ["c", "d"]]
tf.strings.reduce_join(a, 0) ==> ["ac", "bd"]
tf.strings.reduce_join(a, 1) ==> ["ab", "cd"]
tf.strings.reduce_join(a, -2) = tf.strings.reduce_join(a, 0) ==> ["ac", "bd"]
tf.strings.reduce_join(a, -1) = tf.strings.reduce_join(a, 1) ==> ["ab", "cd"]
tf.strings.reduce_join(a, 0, keep_dims=True) ==> [["ac", "bd"]]
tf.strings.reduce_join(a, 1, keep_dims=True) ==> [["ab"], ["cd"]]
tf.strings.reduce_join(a, 0, separator=".") ==> ["a.c", "b.d"]
tf.strings.reduce_join(a, [0, 1]) ==> "acbd"
tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
tf.strings.reduce_join(a, []) ==> [["a", "b"], ["c", "d"]]
tf.strings.reduce_join(a) = tf.strings.reduce_join(a, [1, 0]) ==> "abcd"
```
#### Args:
- `inputs`: A `Tensor` of type `string`. The input to be joined. All reduced indices must have non-zero size.
#### Returns:

A Tensor of type string.
