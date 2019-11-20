[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/to_hash_bucket) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L459-L481)  
---|---  
  
Converts each string in the input Tensor to its hash mod by a number of
buckets.

### Aliases:

  * [`tf.compat.v2.strings.to_hash_bucket`](/api_docs/python/tf/strings/to_hash_bucket)

    
    
    tf.strings.to_hash_bucket(
        input,
        num_buckets,
        name=None
    )
    

The hash function is deterministic on the content of the string within the
process.

Note that the hash function may change from time to time. This functionality
will be deprecated and it's recommended to use
[`tf.strings.to_hash_bucket_fast()`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_fast)
or
[`tf.strings.to_hash_bucket_strong()`](https://tensorflow.google.cn/api_docs/python/tf/strings/to_hash_bucket_strong).

#### Args:

  * **`input`** : A `Tensor` of type `string`.
  * **`num_buckets`** : An `int` that is `>= 1`. The number of buckets.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `int64`.

