从稀疏和稠密张量列表生成哈希稀疏交叉。

**别名** : [ `tf.compat.v1.sparse.cross_hashed` ](/api_docs/python/tf/sparse/cross_hashed), [ `tf.compat.v2.sparse.cross_hashed` ](/api_docs/python/tf/sparse/cross_hashed)

```
 tf.sparse.cross_hashed(
    inputs,
    num_buckets=0,
    hash_key=None,
    name=None
)
 
```

For example, if the inputs are

```
 * inputs[0]: SparseTensor with shape = [2, 2]
  [0, 0]: "a"
  [1, 0]: "b"
  [1, 1]: "c"
* inputs[1]: SparseTensor with shape = [2, 1]
  [0, 0]: "d"
  [1, 0]: "e"
* inputs[2]: Tensor [["f"], ["g"]]
 
```

那么输出将是：

```
 shape = [2, 2]
[0, 0]: FingerprintCat64(
            Fingerprint64("f"), FingerprintCat64(
                Fingerprint64("d"), Fingerprint64("a")))
[1, 0]: FingerprintCat64(
            Fingerprint64("g"), FingerprintCat64(
                Fingerprint64("e"), Fingerprint64("b")))
[1, 1]: FingerprintCat64(
            Fingerprint64("g"), FingerprintCat64(
                Fingerprint64("e"), Fingerprint64("c")))
 
```

#### 参数：
- **`inputs`** : An iterable of  `Tensor`  or  `SparseTensor` .
- **`num_buckets`** : An  `int`  that is  `>= 0` .output = hashed_value%num_buckets if num_buckets > 0 else hashed_value.
- **`hash_key`** : Integer hash_key that will be used by the  `FingerprintCat64` function. If not given, will use a default key.
- **`name`** : Optional name for the op.


#### 返回：
A  `SparseTensor`  of type  `int64` .

