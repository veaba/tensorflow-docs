Converts each string in the input Tensor to its hash mod by a number of buckets.
### Aliases:
- `tf.compat.v2.strings.to_hash_bucket`

```
 tf.strings.to_hash_bucket(
    input,
    num_buckets,
    name=None
)
```
The hash function is deterministic on the content of the string within the process.
