将输入张量中的每个字符串转换为其hash mod（按桶数）。

**别名** : [ `tf.compat.v1.string_to_hash_bucket_strong` ](/api_docs/python/tf/strings/to_hash_bucket_strong), [ `tf.compat.v1.strings.to_hash_bucket_strong` ](/api_docs/python/tf/strings/to_hash_bucket_strong), [ `tf.compat.v2.strings.to_hash_bucket_strong` ](/api_docs/python/tf/strings/to_hash_bucket_strong)

```
 tf.strings.to_hash_bucket_strong(
    input,
    num_buckets,
    key,
    name=None
)
 
```

The hash function is deterministic on the content of the string within theprocess. The hash function is a keyed hash function, where attribute  `key` defines the key of the hash function.  `key`  is an array of 2 elements.

A strong hash is important when inputs may be malicious, e.g. URLs withadditional components. Adversaries could try to make their inputs hash to thesame bucket for a denial-of-service attack or to skew the results. A stronghash can be used to make it difficult to find inputs with a skewed hash valuedistribution over buckets. This requires that the hash function isseeded by a high-entropy (random) "key" unknown to the adversary.

The additional robustness comes at a cost of roughly 4x higher computetime than  `tf.string_to_hash_bucket_fast` .

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` . The strings to assign a hash bucket.
- **`num_buckets`** : An  `int`  that is  `>= 1` . The number of buckets.
- **`key`** : A list of  `ints` .The key used to seed the hash function, passed as a list of two uint64elements.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `int64` .

