
Returns whether the targets are in the top k predictions.
### Aliases:
- `tf.compat.v1.keras.backend.in_top_k`
- `tf.compat.v2.keras.backend.in_top_k`

```
 tf.keras.backend.in_top_k(
    predictions,
    targets,
    k
)
```
#### Arguments:
- `predictions`: A tensor of shape (`batch_size, classes`) and type `float32`.
- `targets`: A 1D tensor of length `batch_size` and type `int32` or `int64`.
- `k`: An `int`, number of top elements to consider.
#### Returns:

A 1D tensor of length batch_size and type bool. output[i] is True if predictions[i, targets[i]] is within top-k values of predictions[i].
