[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/bucket_by_sequence_length)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/grouping.py#L127-L244)  
---|---  
  
A transformation that buckets elements in a `Dataset` by length.

### Aliases:

  * [`tf.compat.v1.data.experimental.bucket_by_sequence_length`](/api_docs/python/tf/data/experimental/bucket_by_sequence_length)
  * [`tf.compat.v2.data.experimental.bucket_by_sequence_length`](/api_docs/python/tf/data/experimental/bucket_by_sequence_length)

    
    
    tf.data.experimental.bucket_by_sequence_length(
        element_length_func,
        bucket_boundaries,
        bucket_batch_sizes,
        padded_shapes=None,
        padding_values=None,
        pad_to_bucket_boundary=False,
        no_padding=False,
        drop_remainder=False
    )
    

Elements of the `Dataset` are grouped together by length and then are padded
and batched.

This is useful for sequence tasks in which the elements have variable length.
Grouping together elements that have similar lengths reduces the total
fraction of padding in a batch which increases training step efficiency.

#### Args:

  * **`element_length_func`** : function from element in `Dataset` to [`tf.int32`](https://tensorflow.google.cn/api_docs/python/tf#int32), determines the length of the element, which will determine the bucket it goes into.
  * **`bucket_boundaries`** : `list<int>`, upper length boundaries of the buckets.
  * **`bucket_batch_sizes`** : `list<int>`, batch size per bucket. Length should be `len(bucket_boundaries) + 1`.
  * **`padded_shapes`** : Nested structure of [`tf.TensorShape`](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) to pass to [`tf.data.Dataset.padded_batch`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#padded_batch). If not provided, will use `dataset.output_shapes`, which will result in variable length dimensions being padded out to the maximum length in each batch.
  * **`padding_values`** : Values to pad with, passed to [`tf.data.Dataset.padded_batch`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#padded_batch). Defaults to padding with 0.
  * **`pad_to_bucket_boundary`** : bool, if `False`, will pad dimensions with unknown size to maximum length in batch. If `True`, will pad dimensions with unknown size to bucket boundary minus 1 (i.e., the maximum length in each bucket), and caller must ensure that the source `Dataset` does not contain any elements with length longer than `max(bucket_boundaries)`.
  * **`no_padding`** : `bool`, indicates whether to pad the batch features (features need to be either of type [`tf.SparseTensor`](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) or of same shape).
  * **`drop_remainder`** : (Optional.) A [`tf.bool`](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [`tf.Tensor`](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing whether the last batch should be dropped in the case it has fewer than `batch_size` elements; the default behavior is not to drop the smaller batch.

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

#### Raises:

  * **`ValueError`** : if `len(bucket_batch_sizes) != len(bucket_boundaries) + 1`.

