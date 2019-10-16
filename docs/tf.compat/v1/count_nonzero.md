
Computes number of nonzero elements across dimensions of a tensor. (deprecated arguments) (deprecated arguments)
### Aliases:
- `tf.compat.v1.math.count_nonzero`

```
 tf.compat.v1.count_nonzero(
    input_tensor=None,
    axis=None,
    keepdims=None,
    dtype=tf.dtypes.int64,
    name=None,
    reduction_indices=None,
    keep_dims=None,
    input=None
)
```

Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.

If axis has no entries, all dimensions are reduced, and a tensor with a single element is returned.

NOTE Floating point comparison to zero is done by exact floating point equality check. Small values are not rounded to zero for purposes of the nonzero check.
#### For example:

```
 x = tf.constant([[0, 1, 0], [1, 1, 0]])
tf.math.count_nonzero(x)  # 3
tf.math.count_nonzero(x, 0)  # [1, 2, 0]
tf.math.count_nonzero(x, 1)  # [1, 2]
tf.math.count_nonzero(x, 1, keepdims=True)  # [[1], [2]]
tf.math.count_nonzero(x, [0, 1])  # 3
```

NOTE Strings are compared against zero-length empty string "". Any string with a size greater than zero is already considered as nonzero.
#### For example:

```
 x = tf.constant(["", "a", "  ", "b", ""])
tf.math.count_nonzero(x) # 3, with "a", "  ", and "b" as nonzero strings.
```
#### Args:
- `input_tensor`: The tensor to reduce. Should be of numeric type, `bool`, or `string`.
#### Returns:

The reduced tensor (number of nonzero values).
