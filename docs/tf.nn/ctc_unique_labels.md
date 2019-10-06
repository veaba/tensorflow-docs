[tf.nn.ctc_loss](https://www.tensorflow.org/api_docs/python/tf/nn/ctc_loss)Get unique labels and indices for batched labels for .

### Aliases:
- `tf.compat.v1.nn.ctc_unique_labels`
- `tf.compat.v2.nn.ctc_unique_labels`

```
 tf.nn.ctc_unique_labels(
    labels,
    name=None
)
```
[tf.nn.ctc_loss](https://www.tensorflow.org/api_docs/python/tf/nn/ctc_loss)For use with  optional argument unique: This op can be used to preprocess labels in input pipeline to for better speed/memory use computing the ctc loss on TPU.

#### Example:

ctc_unique_labels([[3, 4, 4, 3]]) -> unique labels padded with 0: [[3, 4, 0, 0]] indices of original labels in unique: [0, 1, 1, 0]
#### Args:
- `labels`: tensor of shape [batch_size, max_label_length] padded with 0.
- `name`: A `name` for this `Op`. Defaults to "ctc_unique_`labels`".
#### Returns:

tuple of - unique labels, tensor of shape [batch_size, max_label_length] - indices into unique labels, shape [batch_size, max_label_length]
