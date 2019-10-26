Counts the number of occurrences of each value in an integer array.
### Aliases:
- tf.compat.v1.math.bincount

```
 tf.compat.v1.bincount(
    arr,
    weights=None,
    minlength=None,
    maxlength=None,
    dtype=tf.dtypes.int32
)
```
If minlength and maxlength are not given, returns a vector with length tf.reduce_max``(arr)`` + 1 if arr is non-empty, and length 0 otherwise. If weights are non-None, then index i of the output stores the sum of the value in weights at each index where the corresponding value in arr is i.
#### Args:
- arr: An int32 tensor of non-negative values.
- weights: If non-None, must be the same shape as arr. For each value in arr, the bin will be incremented by the corresponding weight instead of 1.
- minlength: If given, ensures the output has length at least minlength, padding with zeros at the end if necessary.
- maxlength: If given, skips values in arr that are equal or greater than maxlength, ensuring that the output has length at most maxlength.
- dtype: If weights is None, determines the type of the output bins.
#### Returns:
A vector with the same dtype as weights or the given dtype. The bin values.
