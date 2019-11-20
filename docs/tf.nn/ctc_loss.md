[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/nn/ctc_loss) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ctc_ops.py#L599-L689)  
  
  
Computes CTC (Connectionist Temporal Classification) loss.

### Aliases:

  * [`tf.compat.v1.nn.ctc_loss_v2`](/api_docs/python/tf/nn/ctc_loss)
  * [`tf.compat.v2.nn.ctc_loss`](/api_docs/python/tf/nn/ctc_loss)

    
    
    tf.nn.ctc_loss(
        labels,
        logits,
        label_length,
        logit_length,
        logits_time_major=True,
        unique=None,
        blank_index=None,
        name=None
    )
    

This op implements the CTC loss as presented in the article:

[A. Graves, S. Fernandez, F. Gomez, J. Schmidhuber. Connectionist Temporal
Classification: Labeling Unsegmented Sequence Data with Recurrent Neural
Networks. ICML 2006, Pittsburgh, USA, pp.
369-376.](http://www.cs.toronto.edu/%7Egraves/icml_2006.pdf)

#### Notes:

  * Same as the "Classic CTC" in TensorFlow 1.x's tf.compat.v1.nn.ctc_loss setting of preprocess_collapse_repeated=False, ctc_merge_repeated=True
  * Labels may be supplied as either a dense, zero-padded tensor with a vector of label sequence lengths OR as a SparseTensor.
  * On TPU and GPU: Only dense padded labels are supported.
  * On CPU: Caller may use SparseTensor or dense padded labels but calling with a SparseTensor will be significantly faster.
  * Default blank label is 0 rather num_classes - 1, unless overridden by blank_index.

#### Args:

  * **`labels`** : tensor of shape [batch_size, max_label_seq_length] or SparseTensor
  * **`logits`** : tensor of shape [frames, batch_size, num_labels], if logits_time_major == False, shape is [batch_size, frames, num_labels].
  * **`label_length`** : tensor of shape [batch_size], None if labels is SparseTensor Length of reference label sequence in labels.
  * **`logit_length`** : tensor of shape [batch_size] Length of input sequence in logits.
  * **`logits_time_major`** : (optional) If True (default), logits is shaped [time, batch, logits]. If False, shape is [batch, time, logits]
  * **`unique`** : (optional) Unique label indices as computed by ctc_unique_labels(labels). If supplied, enable a faster, memory efficient implementation on TPU.
  * **`blank_index`** : (optional) Set the class index to use for the blank label. Negative values will start from num_classes, ie, -1 will reproduce the ctc_loss behavior of using num_classes - 1 for the blank symbol. There is some memory/performance overhead to switching from the default of 0 as an additional shifted copy of the logits may be created.
  * **`name`** : A name for this `Op`. Defaults to "ctc_loss_dense".

#### Returns:

  * **`loss`** : tensor of shape [batch_size], negative log probabilities.

