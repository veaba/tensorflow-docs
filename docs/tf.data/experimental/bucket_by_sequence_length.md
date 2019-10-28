A transformation that buckets elements in a `Dataset` by length.
### Aliases:
- `tf.compat.v1.data.experimental.bucket_by_sequence_length`
- `tf.compat.v2.data.experimental.bucket_by_sequence_length`

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
Elements of the `Dataset` are grouped together by length and then are padded and batched.
This is useful for sequence tasks in which the elements have variable length. Grouping together elements that have similar lengths reduces the total fraction of padding in a batch which increases training step efficiency.
#### Args:
- `element_length_func`: function from element in `Dataset` to `tf.int32`, determines the length of the element, which will determine the bucket it goes into.
- `bucket_boundaries`: `list<int>`, upper length boundaries of the buckets.
- `bucket_batch_sizes`: `list<int>`, batch size per bucket. Length should be len(bucket_boundaries) + 1.
- `padded_shapes`: Nested structure of `tf.TensorShape` to pass to `tf.data.Dataset.padded_batch`. If not provided, will use `dataset.output_shapes`, which will result in variable length dimensions being padded out to the maximum length in each batch.
- `padding_values`: Values to pad with, passed to `tf.data.Dataset.padded_batch`. Defaults to padding with 0.
#### Returns:
A `Dataset` transformation function, which can be passed to `tf.data.Dataset.apply`.
#### Raises:
- `ValueError`: if len(bucket_batch_sizes) != len(bucket_boundaries) + 1.
