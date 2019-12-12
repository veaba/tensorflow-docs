Finds values and indices of the  `k`  largest entries for the last dimension.

**Aliases** : [ `tf.compat.v1.math.top_k` ](/api_docs/python/tf/math/top_k), [ `tf.compat.v1.nn.top_k` ](/api_docs/python/tf/math/top_k), [ `tf.compat.v2.math.top_k` ](/api_docs/python/tf/math/top_k), [ `tf.compat.v2.nn.top_k` ](/api_docs/python/tf/math/top_k), [ `tf.nn.top_k` ](/api_docs/python/tf/math/top_k)

```
 tf.math.top_k(
    input,
    k=1,
    sorted=True,
    name=None
)
 
```

If the input is a vector (rank=1), finds the  `k`  largest entries in the vectorand outputs their values and indices as vectors.  Thus  `values[j]`  is the `j` -th largest entry in  `input` , and its index is  `indices[j]` .

For matrices (resp. higher rank input), computes the top  `k`  entries in eachrow (resp. vector along the last dimension).  Thus,

```
 values.shape = indices.shape = input.shape[:-1] + [k]
 
```

If two elements are equal, the lower-index element appears first.

#### Args:
- **`input`** : 1-D or higher  `Tensor`  with last dimension at least  `k` .
- **`k`** : 0-D  `int32`   `Tensor` .  Number of top elements to look for along the lastdimension (along each row for matrices).
- **`sorted`** : If true the resulting  `k`  elements will be sorted by the values indescending order.
- **`name`** : Optional name for the operation.


#### Returns:
- **`values`** : The  `k`  largest elements along each last dimensional slice.
- **`indices`** : The indices of  `values`  within the last dimension of  `input` .
