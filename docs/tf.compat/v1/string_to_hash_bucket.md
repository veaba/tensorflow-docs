Converts each string in the input Tensor to its hash mod by a number of buckets.

```
 tf.compat.v1.string_to_hash_bucket(
    string_tensor=None,
    num_buckets=None,
    name=None,
    input=None
)
 
```

The hash function is deterministic on the content of the string within theprocess.

Note that the hash function may change from time to time.This functionality will be deprecated and it's recommended to use `tf.string_to_hash_bucket_fast()`  or  `tf.string_to_hash_bucket_strong()` .

#### Args:
- **`string_tensor`** : A  `Tensor`  of type  `string` .
- **`num_buckets`** : An  `int`  that is  `>= 1` . The number of buckets.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor`  of type  `int64` .

