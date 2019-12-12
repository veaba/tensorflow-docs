将输入张量中的每个字符串转换为其hash mod（按桶数）。

**别名** : [ `tf.compat.v1.string_to_hash_bucket_fast` ](/api_docs/python/tf/strings/to_hash_bucket_fast), [ `tf.compat.v1.strings.to_hash_bucket_fast` ](/api_docs/python/tf/strings/to_hash_bucket_fast), [ `tf.compat.v2.strings.to_hash_bucket_fast` ](/api_docs/python/tf/strings/to_hash_bucket_fast)

```
 tf.strings.to_hash_bucket_fast(
    input,
    num_buckets,
    name=None
)
 
```

### 在指南中使用：
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)
The hash function is deterministic on the content of the string within theprocess and will never change. However, it is not suitable for cryptography.This function may be used when CPU time is scarce and inputs are trusted orunimportant. There is a risk of adversaries constructing inputs that all hashto the same bucket. To prevent this problem, use a strong hash function with `tf.string_to_hash_bucket_strong` .

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` . The strings to assign a hash bucket.
- **`num_buckets`** : An  `int`  that is  `>= 1` . The number of buckets.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `int64` .

