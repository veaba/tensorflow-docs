Creates a cross-entropy loss using tf.nn.softmax_cross_entropy_with_logits_v2.


<devsite-code><pre class="prettyprint lang-python" translate="no" dir="ltr" is-upgraded=""><code translate="no" dir="ltr">tf.compat.v1.losses.softmax_cross_entropy(
    onehot_labels,
    logits,
    weights=1.0,
    label_smoothing=0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
</code></pre></devsite-code>
 `weights`  acts as a coefficient for the loss. If a scalar is provided,
then the loss is simply scaled by the given value. If  `weights`  is a
tensor of shape  `[batch_size]` , then the loss weights apply to each
corresponding sample.

If  `label_smoothing`  is nonzero, smooth the labels towards 1/num_classes:
    new_onehot_labels = onehot_labels * (1 - label_smoothing)
                        + label_smoothing / num_classes

Note that  `onehot_labels`  and  `logits`  must have the same shape,
e.g.  `[batch_size, num_classes]` . The shape of  `weights`  must be
broadcastable to loss, whose shape is decided by the shape of  `logits` .
In case the shape of  `logits`  is  `[batch_size, num_classes]` , loss is
a  `Tensor`  of shape  `[batch_size]` .



#### Args:

- **`onehot_labels`** : One-hot-encoded labels.

- **`logits`** : Logits outputs of the network.

- **`weights`** : Optional  `Tensor`  that is broadcastable to loss.

- **`label_smoothing`** : If greater than 0 then smooth the labels.

- **`scope`** : the scope for the operations performed in computing the loss.

- **`loss_collection`** : collection to which the loss will be added.

- **`reduction`** : Type of reduction to apply to loss.



#### Returns:
Weighted loss  `Tensor`  of the same type as  `logits` . If  `reduction`  is
 `NONE` , this has shape  `[batch_size]` ; otherwise, it is scalar.



#### Raises:

- **`ValueError`** : If the shape of  `logits`  doesn't match that of  `onehot_labels` 
or if the shape of  `weights`  is invalid or if  `weights`  is None.  Also if
 `onehot_labels`  or  `logits`  is None.



#### Eager Compatibility
The  `loss_collection`  argument is ignored when executing eagerly. Consider
holding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

