Converts each string in the input Tensor to its hash mod by a number of buckets.
### Aliases:
- `tf.compat.v1.strings.to_hash_bucket`

```
 tf.compat.v1.string_to_hash_bucket(
    string_tensor=None,
    num_buckets=None,
    name=None,
    input=None
)
```
The hash function is deterministic on the content of the string within the process.
