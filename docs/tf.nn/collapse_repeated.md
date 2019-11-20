[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/collapse_repeated) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ctc_ops.py#L813-L873)  
  
  
Merge repeated labels into single labels.

### Aliases:

  * [`tf.compat.v1.nn.collapse_repeated`](/api_docs/python/tf/nn/collapse_repeated)
  * [`tf.compat.v2.nn.collapse_repeated`](/api_docs/python/tf/nn/collapse_repeated)

    
    
    tf.nn.collapse_repeated(
        labels,
        seq_length,
        name=None
    )
    

#### Args:

  * **`labels`** : Tensor of shape [batch, max value in seq_length]
  * **`seq_length`** : Tensor of shape [batch], sequence length of each batch element.
  * **`name`** : A name for this `Op`. Defaults to "collapse_repeated_labels".

#### Returns:

A tuple `(collapsed_labels, new_seq_length)` where

  * **`collapsed_labels`** : Tensor of shape [batch, max_seq_length] with repeated labels collapsed and padded to max_seq_length, eg: `[[A, A, B, B, A], [A, B, C, D, E]] => [[A, B, A, 0, 0], [A, B, C, D, E]]`

  * **`new_seq_length`** : int tensor of shape [batch] with new sequence lengths.

