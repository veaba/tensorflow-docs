
Searches input tensor for values on the innermost dimension.


### Aliases:
- [ `tf.compat.v1.searchsorted` ](/api_docs/python/tf/searchsorted)
- [ `tf.compat.v2.searchsorted` ](/api_docs/python/tf/searchsorted)


```
tf.searchsorted(
    sorted_sequence,
    values,
    side='left',
    out_type=tf.dtypes.int32,
    name=None
)

```


A 2-D example:


```
  sorted_sequence = [[0, 3, 9, 9, 10],
                     [1, 2, 3, 4, 5]]
  values = [[2, 4, 9],
            [0, 2, 6]]

  result = searchsorted(sorted_sequence, values, side="left")

  result == [[1, 2, 2],
             [0, 1, 5]]

  result = searchsorted(sorted_sequence, values, side="right")

  result == [[1, 2, 4],
             [0, 2, 5]]

```



#### Args:
- **`sorted_sequence`** : N-D  `Tensor`  containing a sorted sequence.
- **`values`** : N-D  `Tensor`  containing the search values.
- **`side`** : 'left' or 'right'; 'left' corresponds to lower_bound and 'right' toupper_bound.
- **`out_type`** : The output type ( `int32`  or  `int64` ).  Default is [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32).
- **`name`** : Optional name for the operation.


#### Returns:

An N-D  `Tensor`  the size of values containing the result of applying eitherlower_bound or upper_bound (depending on side) to each value.  The resultis not a global index to the entire  `Tensor` , but the index in the lastdimension.


#### Raises:
- **`ValueError`** : If the last dimension of  `sorted_sequence >= 2^31-1`  elements.        If the total size of values exceeds  `2^31 - 1`  elements.        If the first  `N-1`  dimensions of the two tensors don't match.
