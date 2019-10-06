
Computes CTC (Connectionist Temporal Classification) loss.
### Aliases:
- `tf.compat.v1.nn.ctc_loss_v2`
- `tf.compat.v2.nn.ctc_loss`

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

This op implements the CTC loss as presented in the article:
[A. Graves, S. Fernandez, F. Gomez, J. Schmidhuber. Connectionist Temporal Classification: Labeling Unsegmented Sequence Data with Recurrent Neural Networks. ICML 2006, Pittsburgh, USA, pp. 369-376.](http://www.cs.toronto.edu/~graves/icml_2006.pdf)

#### Notes:
- ``S``a``m``e`` ``a``s`` ``t``h``e`` ``"``C``l``a``s``s``i``c`` ``C``T``C``"`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w`` ``1``.``x``'``s`` ``t``f``.``c``o``m``p``a``t``.``v``1``.``n``n``.``c``t``c``_``l``o``s``s`` ``s``e``t``t``i``n``g`` ``o``f`` ``p``r``e``p``r``o``c``e``s``s``_``c``o``l``l``a``p``s``e``_``r``e``p``e``a``t``e``d``=``F``a``l``s``e``,`` ``c``t``c``_``m``e``r``g``e``_``r``e``p``e``a``t``e``d``=``T``r``u``e``
- ``L``a``b``e``l``s`` ``m``a``y`` ``b``e`` ``s``u``p``p``l``i``e``d`` ``a``s`` ``e``i``t``h``e``r`` ``a`` ``d``e``n``s``e``,`` ``z``e``r``o``-``p``a``d``d``e``d`` ``t``e``n``s``o``r`` ``w``i``t``h`` ``a`` ``v``e``c``t``o``r`` ``o``f`` ``l``a``b``e``l`` ``s``e``q``u``e``n``c``e`` ``l``e``n``g``t``h``s`` ``O``R`` ``a``s`` ``a`` ``S``p``a``r``s``e``T``e``n``s``o``r``.``
- ``O``n`` ``T``P``U`` ``a``n``d`` ``G``P``U``:`` ``O``n``l``y`` ``d``e``n``s``e`` ``p``a``d``d``e``d`` ``l``a``b``e``l``s`` ``a``r``e`` ``s``u``p``p``o``r``t``e``d``.``
- ``O``n`` ``C``P``U``:`` ``C``a``l``l``e``r`` ``m``a``y`` ``u``s``e`` ``S``p``a``r``s``e``T``e``n``s``o``r`` ``o``r`` ``d``e``n``s``e`` ``p``a``d``d``e``d`` ``l``a``b``e``l``s`` ``b``u``t`` ``c``a``l``l``i``n``g`` ``w``i``t``h`` ``a`` ``S``p``a``r``s``e``T``e``n``s``o``r`` ``w``i``l``l`` ``b``e`` ``s``i``g``n``i``f``i``c``a``n``t``l``y`` ``f``a``s``t``e``r``.``
- ``D``e``f``a``u``l``t`` ``b``l``a``n``k`` ``l``a``b``e``l`` ``i``s`` ``0`` ``r``a``t``h``e``r`` ``n``u``m``_``c``l``a``s``s``e``s`` ``-`` ``1``,`` ``u``n``l``e``s``s`` ``o``v``e``r``r``i``d``d``e``n`` ``b``y`` ``b``l``a``n``k``_``i``n``d``e``x``.``
#### Args:
- `labels`: tensor of shape [batch_size, max_label_seq_length] or SparseTensor
- `logits`: tensor of shape [frames, batch_size, num_`labels`], if `logits`_time_major == False, shape is [batch_size, frames, num_`labels`].
- `label_length`: tensor of shape [batch_size], None if `labels` is SparseTensor Length of reference label sequence in `labels`.
- `logit_length`: tensor of shape [batch_size] Length of input sequence in `logits`.
- `logits`_time_major: (optional) If True (default), `logits` is shaped [time, batch, `logits`]. If False, shape is [batch, time, `logits`]
- `unique`: (optional) Unique label indices as computed by ctc_`unique`_`labels`(`labels`). If supplied, enable a faster, memory efficient implementation on TPU.
- `blank_index`: (optional) Set the class index to use for the blank label. Negative values will start from num_classes, ie, -1 will reproduce the ctc_loss behavior of using num_classes - 1 for the blank symbol. There is some memory/performance overhead to switching from the default of 0 as an additional shifted copy of the `logits` may be created.
- `name`: A `name` for this `Op`. Defaults to "ctc_loss_dense".
#### Returns:
- `loss`: tensor of shape [batch_size], negative log probabilities.
