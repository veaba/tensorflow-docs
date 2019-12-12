将输入张量中的每个字符串转换为其hash mod（按桶数）。

```
 tf.strings.to_hash_bucket(    input,    num_buckets,    name=None) 
```

The hash function is deterministic on the content of the string within theprocess.

Note that the hash function may change from time to time.This functionality will be deprecated and it's recommended to use[ `tf.strings.to_hash_bucket_fast()` ](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_fast) or [ `tf.strings.to_hash_bucket_strong()` ](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_strong).

#### 参数：
- **`input`** : A  `Tensor`  of type  `string` .
- **`num_buckets`** : An  `int`  that is  `>= 1` . The number of buckets.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `int64` .

