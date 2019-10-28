Says whether the targets are in the top `K` predictions.
### Aliases:
- `tf.compat.v1.nn.in_top_k`

```
 tf.compat.v1.math.in_top_k(
    predictions,
    targets,
    k,
    name=None
)
```
Th`i`s outputs a `batch_size` bool array, an entry `out[i]` `i`s `true` `i`f the pred`i`ct`i`on for the target class `i`s f`i`n`i`te (not `i`nf, -`i`nf, or nan) and among the top `k` pred`i`ct`i`ons among all pred`i`ct`i`ons for example `i`. Note that the behav`i`or of `InTopK` d`i`ffers from the `TopK` op `i`n `i`ts handl`i`ng of t`i`es; `i`f mult`i`ple classes have the same pred`i`ct`i`on value and straddle the top-`k` boundary, all of those classes are cons`i`dered to be `i`n the top `k`.
More formally, let
be the pred`i`ct`i`ons for all classes for example `i`,
be the target class for example `i`,
be the output for example `i`,
#### Args:
- `predictions`: A `Tensor` of type `float32`. A `batch_size` x `classes` tensor.
- `targets`: A `Tensor`. Must be one of the following types: `int32`, `int64`. A `batch_size` vector of class ids.
- `k`: An `int`. Number of top elements to loo`k` at for computing precision.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `bool`. Computed Precision at `k` as a `bool` `Tensor`.
