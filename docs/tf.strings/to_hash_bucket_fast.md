Defined in generated file: `python/ops/gen_string_ops.py`
Converts each string in the input Tensor to its hash mod by a number of buckets.
### Aliases:
- `tf.compat.v1.string_to_hash_bucket_fast`
- `tf.compat.v1.strings.to_hash_bucket_fast`
- `tf.compat.v2.strings.to_hash_bucket_fast`

```
 tf.strings.to_hash_bucket_fast(
    input,
    num_buckets,
    name=None
)
```
### Used in the guide:
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
The hash function is deterministic on the content of the string within the process and will never change. However, it is not suitable for cryptography. This function may be used when CPU time is scarce and inputs are trusted or unimportant. There is a risk of adversaries constructing inputs that all hash to the same bucket. To prevent this problem, use a strong hash function with `tf.string_to_hash_bucket_strong`.
#### Args:
- `input`: A `Tensor` of type `string`. The `string`s to assign a hash bucket.
- `num_buckets`: An `int` that is `>= 1`. The number of buckets.
- `name`: A `name` for the operation (optional).
#### Returns:
A `Tensor` of type `int64`.
