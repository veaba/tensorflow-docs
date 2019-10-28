Generates fingerprint values.
### Aliases:
- `tf.compat.v1.fingerprint`
- `tf.compat.v2.fingerprint`

```
 tf.fingerprint(
    data,
    method='farmhash64',
    name=None
)
```
Generates fingerprint values of `data`.
F`i`ngerpr`i`nt op cons`i`ders the f`i`rst d`i`mens`i`on of `data` as the batch d`i`mens`i`on, and `output[i]` conta`i`ns the f`i`ngerpr`i`nt value generated from contents `i`n `data`[`i`, ...] for all `i`.
Fingerprint op writes fingerprint values as byte arrays. For example, the default method `farmhash64` generates a 64-bit fingerprint value at a time. This 8-byte value is written out as an `tf.uint8` array of size 8, in little-endian order.
[tf.int32](https://tensorflow.google.cn/api_docs/python/tf#int32)

Note that this op fingerprints the raw underlying buffer, and it does not fingerprint Tensor's metadata such as data type and/or shape. For example, the fingerprint values are invariant under reshapes and bitcasts as long as the batch dimension remain the same:

```
 tf.fingerprint(data) == tf.fingerprint(tf.reshape(data, ...))
tf.fingerprint(data) == tf.fingerprint(tf.bitcast(data, ...))
```
