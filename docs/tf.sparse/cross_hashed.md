Generates hashed sparse cross from a list of sparse and dense tensors.
- `tf.compat.v1.sparse.cross_hashed`
- `tf.compat.v2.sparse.cross_hashed`
For example, if the inputs are
then the output will be:
- `inputs`: An iterable of `Tensor` or `SparseTensor`.
- `num_buckets`: An `int` that is `>= 0`. output = hashed_value%`num_buckets` if `num_buckets` > 0 else hashed_value.
- `hash_key`: Integer `hash_key` that will be used by the `FingerprintCat64` function. If not given, will use a default key.
- `name`: Optional `name` for the op.
A `SparseTensor` of type `int64`.
