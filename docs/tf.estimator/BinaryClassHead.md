## Class BinaryClassHead

Creates a Head for single label binary classification.
[Head](https://www.tensorflow.org/api_docs/python/tf/estimator/Head)Inherits From: 

### Aliases:
- Class `tf.compat.v1.estimator.BinaryClassHead`
- Class `tf.compat.v2.estimator.BinaryClassHead`

Uses sigmoid_cross_entropy_with_logits loss.

The head expects logits with shape [D0, D1, ... DN, 1]. In many applications, the shape is [batch_size, 1].

labels must be a dense Tensor with shape matching logits, namely [D0, D1, ... DN, 1]. If label_vocabulary given, labels must be a string Tensor with values from the vocabulary. If label_vocabulary is not given, labels must be float Tensor with values in the interval [0, 1].

If weight_column is specified, weights must be of shape [D0, D1, ... DN], or [D0, D1, ... DN, 1].

The loss is the weighted sum over the input dimensions. Namely, if the input labels have shape [batch_size, 1], the loss is the weighted sum over batch_size.

Also supports custom loss_fn. loss_fn takes (labels, logits) or (labels, logits, features, loss_reduction) as arguments and returns loss with shape [D0, D1, ... DN, 1]. loss_fn must support float labels with shape [D0, D1, ... DN, 1]. Namely, the head applies label_vocabulary to the input labels before passing them to loss_fn.
#### Args:
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.
- `thresholds`: Iterable of floats in the range (`0, 1`). For binary classification metrics such as precision and recall, an eval metric is generated for each threshold value. This threshold is applied to the logistic values to determine the binary classification (i.e., above the threshold is `true`, below is `false`.
- `label_vocabulary`: A list or tuple of strings representing possible label values. If it is not given, that means labels are already encoded within [`0, 1`]. If given, labels must be string type and have any value in `label_vocabulary`. Note that errors will be raised if `label_vocabulary` is not provided but labels are strings.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Decides how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size * label_dimension.
- `loss_fn`: Optional loss function.
- `name`: Name of the head. If provided, summary and metrics keys will be suffixed by "/" + `name`. Also used as `name`_scope when creating ops.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/binary_class_head.py)


```
 __init__(
    weight_column=None,
    thresholds=None,
    label_vocabulary=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    loss_fn=None,
    name=None
)
```

Initialize self. See help(type(self)) for accurate signature.
## Properties
### logits_dimension

See base_head.Head for details.
### loss_reduction

See base_head.Head for details.
### name

See base_head.Head for details.
## Methods
### create_estimator_spec
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)


```
 create_estimator_spec(
    features,
    mode,
    logits,
    labels=None,
    optimizer=None,
    trainable_variables=None,
    train_op_fn=None,
    update_ops=None,
    regularization_losses=None
)
```

Returns EstimatorSpec that a model_fn can return.

It is recommended to pass all args via name.
#### Args:
- `features`: Input `dict` mapping string feature names to `Tensor` or `SparseTensor` objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
- `mode`: Estimator's `ModeKeys`.
- `logits`: Logits `Tensor` to be used by the head.
- `labels`: Labels `Tensor`, or `dict` mapping string label names to `Tensor` objects of the label values.
- `optimizer`: An `tf.keras.optimizers.Optimizer` instance to optimize the `loss` in TRAIN `mode`. Namely, sets train_op = `optimizer`.get_updates(`loss`, trainable_variables), which updates variables to minimize `loss`.
- `trainable_variables`: A list or tuple of `Variable` objects to update to minimize `loss`. In `Tensor`flow 1.x, by default these are the list of variables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES`. As `Tensor`flow 2.x doesn't have collections and GraphKeys, `trainable_variables` need to be passed explicitly here.
- `train_op_fn`: Function that takes a scalar `loss` `Tensor` and returns an op to optimize the `mode`l with the `loss` in TRAIN `mode`. Used if `optimizer` is `None`. Exactly one of `train_op_fn` and `optimizer` must be set in TRAIN `mode`. By default, it is `None` in other `mode`s. If you want to optimize `loss` yourself, you can pass `lambda _: tf.no_op`() and then use `EstimatorSpec.loss` to compute and apply gradients.
- `update_ops`: A list or tuple of update ops to be run at training time. For example, layers such as BatchNormalization create mean and variance update ops that need to be run at training time. In `Tensor`flow 1.x, these are thrown into an UPDATE_OPS collection. As `Tensor`flow 2.x doesn't have collections, `update_ops` need to be passed explicitly here.
- `regularization_losses`: A list of additional scalar `loss`es to be added to the training `loss`, such as regularization `loss`es.
#### Returns:

EstimatorSpec.
### loss
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/binary_class_head.py)


```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
```

Returns regularized training loss. See base_head.Head for details.
### metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/binary_class_head.py)


```
 metrics(regularization_losses=None)
```

Creates metrics. See base_head.Head for details.
### predictions
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/binary_class_head.py)


```
 predictions(
    logits,
    keys=None
)
```

Return predictions based on keys. See base_head.Head for details.
#### Args:
- `logits`:` ``logits`` ``Tensor`` `w`i``t``h`` ``s``h``a`p`e`` `[`D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`` `F`o`r` ``m``a``n`y` ``a`pp`l``i``c``a``t``i``o``n``s``,`` ``t``h``e`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`
- `keys`:` ``a`` ``l``i``s``t`` ``o`r` ``t`up`l``e`` ``o`f` `pr`e``d``i``c``t``i``o``n`` ``keys``.`` `E`a``c``h`` `k`e`y` ``c``a``n`` ``b``e`` ``e``i``t``h``e`r` ``t``h``e`` ``c``l``a``s``s`` `v`a`r`i``a``b``l``e`` ``o`f` `pr`e``d``i``c``t``i``o``n``_``keys``.`Pr`e``d``i``c``t``i``o``n`K`e`y`s`` ``o`r` ``i``t``s`` ``s``t`r`i``n``g`` `v`a``l`u`e``,`` ``s`u`c``h`` ``a``s`:` `pr`e``d``i``c``t``i``o``n``_``keys``.`Pr`e``d``i``c``t``i``o``n`K`e`y`s``.`CLASSES` ``o`r` `'`c``l``a``s``s``e``s`'`.`` `If` ``n``o``t`` ``s`p`e``c``i`f`i``e``d``,`` ``i``t`` `w`i``l``l`` `r`e``t`ur`n`` ``t``h``e`` `pr`e``d``i``c``t``i``o``n``s`` `f`o`r` ``a``l``l`` `v`a``l``i``d`` ``keys``.`
#### Returns:

A dict of predictions.
### update_metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/binary_class_head.py)


```
 update_metrics(
    eval_metrics,
    features,
    logits,
    labels,
    regularization_losses=None
)
```

Updates eval metrics. See base_head.Head for details.
