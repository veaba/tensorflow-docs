A transformation that buckets elements in a  `Dataset`  by length.

**别名** : [ `tf.compat.v1.data.experimental.bucket_by_sequence_length` ](/api_docs/python/tf/data/experimental/bucket_by_sequence_length), [ `tf.compat.v2.data.experimental.bucket_by_sequence_length` ](/api_docs/python/tf/data/experimental/bucket_by_sequence_length)

```
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
 
```

Elements of the  `Dataset`  are grouped together by length and then are paddedand batched.

This is useful for sequence tasks in which the elements have variable length.Grouping together elements that have similar lengths reduces the totalfraction of padding in a batch which increases training step efficiency.

#### 参数：
- **`element_length_func`** : function from element in  `Dataset`  to [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32),determines the length of the element, which will determine the bucket itgoes into.
- **`bucket_boundaries`** :  `list<int>` , upper length boundaries of the buckets.
- **`bucket_batch_sizes`** :  `list<int>` , batch size per bucket. Length should be `len(bucket_boundaries) + 1` .
- **`padded_shapes`** : Nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) to pass to[ `tf.data.Dataset.padded_batch` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#padded_batch). If not provided, will use `dataset.output_shapes` , which will result in variable length dimensionsbeing padded out to the maximum length in each batch.
- **`padding_values`** : Values to pad with, passed to[ `tf.data.Dataset.padded_batch` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#padded_batch). Defaults to padding with 0.
- **`pad_to_bucket_boundary`** : bool, if  `False` , will pad dimensions with unknownsize to maximum length in batch. If  `True` , will pad dimensions withunknown size to bucket boundary minus 1 (i.e., the maximum length in eachbucket), and caller must ensure that the source  `Dataset`  does not containany elements with length longer than  `max(bucket_boundaries)` .
- **`no_padding`** :  `bool` , indicates whether to pad the batch features (featuresneed to be either of type [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) or of same shape).
- **`drop_remainder`** : (Optional.) A [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representingwhether the last batch should be dropped in the case it has fewer than `batch_size`  elements; the default behavior is not to drop the smallerbatch.


#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

#### 加薪：
- **`ValueError`** : if  `len(bucket_batch_sizes) != len(bucket_boundaries) + 1` .
