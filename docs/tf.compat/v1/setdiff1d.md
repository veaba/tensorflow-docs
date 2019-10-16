
Computes the difference between two lists of numbers or strings.

```
 tf.compat.v1.setdiff1d(
    x,
    y,
    index_dtype=tf.dtypes.int32,
    name=None
)
```

Given a list x and a list y, this operation returns a list out that represents all values that are in x but not in y. The returned list out is sorted in the same order that the numbers appear in x (duplicates are preserved). This operation also returns a list idx that represents the position of each out element in x. In other words:

out[i] = x[idx[i]] for i in [0, 1, ..., len(out) - 1]

For example, given this input:

```
 x = [1, 2, 3, 4, 5, 6]
y = [1, 3, 5]
```

This operation would return:

```
 out ==> [2, 4, 6]
idx ==> [1, 3, 5]
```
#### Args:
- `x`: A `Tensor`. 1-D. Values to keep.
- `y`: A `Tensor`. Must have the same t`y`pe as `x`. 1-D. Values to remove.
- `out_idx`: An optional `tf.DType` from: `tf.int32, tf.int64`. Defaults to `tf.int32`.
- `name`: A `name` for the operation (optional).
#### Returns:

A tuple of Tensor objects (out, idx).
- `out`: A `Tensor`. Has the same type as `x`.
- `idx`: A `Tensor` of type `out`_`idx`.
