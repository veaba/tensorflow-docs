计算CTC（连接主义时间分类）损失。

```
 tf.compat.v1.nn.ctc_loss(
    labels,
    inputs=None,
    sequence_length=None,
    preprocess_collapse_repeated=False,
    ctc_merge_repeated=True,
    ignore_longer_outputs_than_inputs=False,
    time_major=True,
    logits=None
)
 
```

此操作实现了文章中所述的CTC损失：

[A. Graves, S. Fernandez, F. Gomez, J. Schmidhuber.Connectionist Temporal Classification: Labeling Unsegmented Sequence Datawith Recurrent Neural Networks. ICML 2006, Pittsburgh, USA,pp. 369-376.](http://www.cs.toronto.edu/%7Egraves/icml_2006.pdf)

#### 输入要求：


```
 sequence_length(b) <= time for all b

max(labels.indices(labels.indices[:, 1] == b, 2))
  <= sequence_length(b) for all b.
 
```

#### 注：
This class performs the softmax operation for you, so inputs shouldbe e.g. linear projections of outputs by an LSTM.

The  `inputs`  Tensor's innermost dimension size,  `num_classes` , represents `num_labels + 1`  classes, where num_labels is the number of true labels, andthe largest value  `(num_classes - 1)`  is reserved for the blank label.

For example, for a vocabulary containing 3 labels  `[a, b, c]` , `num_classes = 4`  and the labels indexing is  `{a: 0, b: 1, c: 2, blank: 3}` .

Regarding the arguments  `preprocess_collapse_repeated`  and `ctc_merge_repeated` :

If  `preprocess_collapse_repeated`  is True, then a preprocessing step runsbefore loss calculation, wherein repeated labels passed to the lossare merged into single labels.  This is useful if the training labels comefrom, e.g., forced alignments and therefore have unnecessary repetitions.

If  `ctc_merge_repeated`  is set False, then deep within the CTC calculation,repeated non-blank labels will not be merged and are interpretedas individual labels.  This is a simplified (non-standard) version of CTC.

下面是（大致）预期一阶行为的表：

-  `preprocess_collapse_repeated=False` ,  `ctc_merge_repeated=True` 

Classical CTC behavior: Outputs true repeated classes with blanks inbetween, and can also output repeated classes with no blanks inbetween that need to be collapsed by the decoder.


-  `preprocess_collapse_repeated=True` ,  `ctc_merge_repeated=False` 

Never learns to output repeated classes, as they are collapsedin the input labels before training.


-  `preprocess_collapse_repeated=False` ,  `ctc_merge_repeated=False` 

Outputs repeated classes with blanks in between, but generally does notrequire the decoder to collapse/merge repeated classes.


-  `preprocess_collapse_repeated=True` ,  `ctc_merge_repeated=True` 

Untested.  Very likely will not learn to output repeated classes.


The  `ignore_longer_outputs_than_inputs`  option allows to specify the behaviorof the CTCLoss when dealing with sequences that have longer outputs thaninputs. If true, the CTCLoss will simply return zero gradient for thoseitems, otherwise an InvalidArgument error is returned, stopping training.

#### 参数：
- **`labels`** : An  `int32`   `SparseTensor` . `labels.indices[i, :] == [b, t]`  means  `labels.values[i]`  stores the idfor (batch b, time t).  `labels.values[i]`  must take on values in  `[0,num_labels)` . See  `core/ops/ctc_ops.cc`  for more details.
- **`inputs`** : 3-D  `float`   `Tensor` .If time_major == False, this will be a  `Tensor`  shaped:  `[batch_size,max_time, num_classes]` .If time_major == True (default), this will be a  `Tensor`  shaped: `[max_time, batch_size, num_classes]` . The logits.
- **`sequence_length`** : 1-D  `int32`  vector, size  `[batch_size]` . The sequencelengths.
- **`preprocess_collapse_repeated`** : Boolean.  Default: False. If True, repeatedlabels are collapsed prior to the CTC calculation.
- **`ctc_merge_repeated`** : Boolean.  Default: True.
- **`ignore_longer_outputs_than_inputs`** : Boolean. Default: False. If True,sequences with longer outputs than inputs will be ignored.
- **`time_major`** : The shape format of the  `inputs`  Tensors. If True, these `Tensors`  must be shaped  `[max_time, batch_size, num_classes]` . If False,these  `Tensors`  must be shaped  `[batch_size, max_time, num_classes]` .Using  `time_major = True`  (default) is a bit more efficient because itavoids transposes at the beginning of the ctc_loss calculation.  However,most TensorFlow data is batch-major, so by this function also acceptsinputs in batch-major form.
- **`logits`** : Alias for inputs.


#### 返回：
A 1-D  `float`   `Tensor` , size  `[batch]` , containing the negative log  probabilities.

#### 加薪：
- **`TypeError`** : if labels is not a  `SparseTensor` .
