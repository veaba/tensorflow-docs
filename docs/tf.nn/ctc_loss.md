计算CTC（连接主义时间分类）损失。

**别名** : [ `tf.compat.v1.nn.ctc_loss_v2` ](/api_docs/python/tf/nn/ctc_loss), [ `tf.compat.v2.nn.ctc_loss` ](/api_docs/python/tf/nn/ctc_loss)

```
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
 
```

此操作实现了文章中所述的CTC损失：

[A. Graves, S. Fernandez, F. Gomez, J. Schmidhuber.Connectionist Temporal Classification: Labeling Unsegmented Sequence Datawith Recurrent Neural Networks. ICML 2006, Pittsburgh, USA,pp. 369-376.](http://www.cs.toronto.edu/%7Egraves/icml_2006.pdf)

#### 注：
- Same as the "Classic CTC" in TensorFlow 1.x's tf.compat.v1.nn.ctc_losssetting of preprocess_collapse_repeated=False, ctc_merge_repeated=True
- Labels may be supplied as either a dense, zero-padded tensor with avector of label sequence lengths OR as a SparseTensor.
- On TPU and GPU: Only dense padded labels are supported.
- On CPU: Caller may use SparseTensor or dense padded labels but calling witha SparseTensor will be significantly faster.
- Default blank label is 0 rather num_classes - 1, unless overridden byblank_index.


#### 参数：
- **`labels`** : tensor of shape [batch_size, max_label_seq_length] or SparseTensor
- **`logits`** : tensor of shape [frames, batch_size, num_labels], iflogits_time_major == False, shape is [batch_size, frames, num_labels].
- **`label_length`** : tensor of shape [batch_size], None if labels is SparseTensorLength of reference label sequence in labels.
- **`logit_length`** : tensor of shape [batch_size] Length of input sequence inlogits.
- **`logits_time_major`** : (optional) If True (default), logits is shaped [time,batch, logits]. If False, shape is [batch, time, logits]
- **`unique`** : (optional) Unique label indices as computed byctc_unique_labels(labels).  If supplied, enable a faster, memory efficientimplementation on TPU.
- **`blank_index`** : (optional) Set the class index to use for the blank label.Negative values will start from num_classes, ie, -1 will reproduce thectc_loss behavior of using num_classes - 1 for the blank symbol. There issome memory/performance overhead to switching from the default of 0 as anadditional shifted copy of the logits may be created.
- **`name`** : A name for this  `Op` . Defaults to "ctc_loss_dense".


#### 返回：
- **`loss`** : tensor of shape [batch_size], negative log probabilities.
