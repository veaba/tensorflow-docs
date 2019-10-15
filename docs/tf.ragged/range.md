
Returns a RaggedTensor containing the specified sequences of numbers.
### Aliases:
- `tf.compat.v1.ragged.range`
- `tf.compat.v2.ragged.range`

```
 tf.ragged.range(
    starts,
    limits=None,
    deltas=1,
    dtype=None,
    name=None,
    row_splits_dtype=tf.dtypes.int64
)
```

Each row of the returned RaggedTensor contains a single sequence:

```
 ragged.range(starts, limits, deltas)[i] ==
    tf.range(starts[i], limits[i], deltas[i])
```
[tf.range](https://www.tensorflow.org/api_docs/python/tf/range)If start[i] < limits[i] and deltas[i] > 0, then output[i] will be an empty list. Similarly, if start[i] > limits[i] and deltas[i] < 0, then output[i] will be an empty list. This behavior is consistent with the Python range function, but differs from the  op, which returns an error for these cases.

#### Examples:

```
 ragged.range([3, 5, 2]).eval().tolist()
[[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
ragged.range([0, 5, 8], [3, 3, 12]).eval().tolist()
[[0, 1, 2], [], [8, 9, 10, 11]]
ragged.range([0, 5, 8], [3, 3, 12], 2).eval().tolist()
[[0, 2], [], [8, 10]]
```

The input tensors starts, limits, and deltas may be scalars or vectors. The vector inputs must all have the same size. Scalar inputs are broadcast to match the size of the vector inputs.
#### Args:
- `starts`: Vector or scalar `Tensor`. Specifies the first entry for each range if `limits` is not `None`; otherwise, specifies the range `limits`, and the first entries default to `0`.
- `limits`: Vector or scalar `Tensor`. Specifies the exclusive upper `limits` for each range.
- `deltas`: Vector or scalar `Tensor`. Specifies the increment for each range. Defaults to `1`.
- `dtype`: The type of the elements of the resulting tensor. If not specified, then a value is chosen based on the other args.
- `name`: A `name` for the operation.
- `row_splits_dtype`: `dtype` for the returned `RaggedTensor`'s `row_splits` tensor. One of `tf.int32` or `tf.int64`.
#### Returns:

A RaggedTensor of type dtype with ragged_rank=1.
