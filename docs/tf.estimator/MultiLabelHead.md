## Class MultiLabelHead

Creates a Head for multi-label classification.
[Head](https://www.tensorflow.org/api_docs/python/tf/estimator/Head)Inherits From: 

### Aliases:
- Class `tf.compat.v1.estimator.MultiLabelHead`
- Class `tf.compat.v2.estimator.MultiLabelHead`

Multi-label classification handles the case where each example may have zero or more associated labels, from a discrete set. This is distinct from MultiClassHead which has exactly one label per example.

Uses sigmoid_cross_entropy loss average over classes and weighted sum over the batch. Namely, if the input logits have shape [batch_size, n_classes], the loss is the average over n_classes and the weighted sum over batch_size.

The head expects logits with shape [D0, D1, ... DN, n_classes]. In many applications, the shape is [batch_size, n_classes].
#### Labels can be:
- A` `mu`l`ti-hot` `t`e``n``s`or` `of` ``s`h`a`p`e`` `[`D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``n``_``c``l``a``s``s``e``s`]

If weight_column is specified, weights must be of shape [D0, D1, ... DN], or [D0, D1, ... DN, 1].

Also supports custom loss_fn. loss_fn takes (labels, logits) or (labels, logits, features) as arguments and returns unreduced loss with shape [D0, D1, ... DN, 1]. loss_fn must support indicator labels with shape [D0, D1, ... DN, n_classes]. Namely, the head applies label_vocabulary to the input labels before passing them to loss_fn.

The head can be used with a canned estimator. Example:

```
 my_head = tf.estimator.MultiLabelHead(n_classes=3)
my_estimator = tf.estimator.DNNEstimator(
    head=my_head,
    hidden_units=...,
    feature_columns=...)
```

It can also be used with a custom model_fn. Example:

```
 def _my_model_fn(features, labels, mode):
  my_head = tf.estimator.MultiLabelHead(n_classes=3)
  logits = tf.keras.Model(...)(features)

  return my_head.create_estimator_spec(
      features=features,
      mode=mode,
      labels=labels,
      optimizer=tf.keras.optimizers.Adagrad(lr=0.1),
      logits=logits)

my_estimator = tf.estimator.Estimator(model_fn=_my_model_fn)
```
#### Args:
- `n_classes`: Number of classes, must be greater than 1 (for 1 class, use `BinaryClassHead`).
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example. Per-class weighting is not supported.
- `thresholds`: Iterable of floats in the range (`0, 1`). Accuracy, precision and recall metrics are evaluated for each threshold value. The threshold is applied to the predicted probabilities, i.e. above the threshold is `true`, below is `false`.
- `label_vocabulary`: A list of `string`s represents possible label values. If it is not given, that means labels are already encoded as integer within [0, `n_classes`) or multi-hot Tensor. If given, labels must be SparseTensor `string` type and have any value in `label_vocabulary`. Also there will be errors if vocabulary is not provided and labels are `string`.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Decides how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size.
- `loss_fn`: Optional loss function.
- `classes_for_class_based_metrics`:` `Li`s`t` `of` `i`n`t`e`g`e`r` ``c``l``a``s``s`` `ID`s`` `or` ``string`` ``c``l``a``s``s`` ``n``a`m`e``s`` `for` `whi`c`h` `p`e`r-`c``l``a``s``s`` `m`e`tri`c``s`` ``a`r`e`` ``e`v`a``l`u`a`t`e`d.` `If` `i`n`t`e`g`e`r`s``,`` ``a``l``l`` `mu`s`t` `b`e`` `i`n`` `th`e`` `r`a``n`g`e`` `[`0``,`` ``n_classes`` `-` ``1`].` `If` ``string``s``,`` ``a``l``l`` `mu`s`t` `b`e`` `i`n`` ``label_vocabulary`.
- `n``a`m`e`:` `N`a`m`e`` `of` `th`e`` `h`e``a`d.` `If` `provid`e`d`,`` ``s`umm`a`ry` ``a``n`d` `m`e`tri`c``s`` `k`e`y`s`` `wi`l``l`` `b`e`` ``s`uffix`e`d` `by` `"/"` `+` ``n``a`m`e`.` `A`l``s`o` `u`s``e`d` ``a``s`` ``n``a`m`e``_``s``c`op`e`` `wh`e``n`` ``c`r`e``a`ti`n`g` `op`s`.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)


```
 __init__(
    n_classes,
    weight_column=None,
    thresholds=None,
    label_vocabulary=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    loss_fn=None,
    classes_for_class_based_metrics=None,
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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)


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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)


```
 metrics(regularization_losses=None)
```

Creates metrics. See base_head.Head for details.
### predictions
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)


```
 predictions(
    logits,
    keys=None
)
```

Return predictions based on keys. See base_head.Head for details.
#### Args:
- `logits`:` ``logits`` ``Tensor`` `w`i``t``h`` ``s``h``a`p`e`` `[`D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`` `F`o`r` ``m``a``n`y` ``a`pp`l``i``c``a``t``i``o``n``s``,`` ``t``h``e`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`
- `keys`:` ``a`` ``l``i``s``t`` ``o`f` `pr`e``d``i``c``t``i``o``n`` ``keys``.`` `K`e`y` ``c``a``n`` ``b``e`` ``e``i``t``h``e`r` ``t``h``e`` ``c``l``a``s``s`` `v`a`r`i``a``b``l``e`` ``o`f` `pr`e``d``i``c``t``i``o``n``_``keys``.`Pr`e``d``i``c``t``i``o``n`K`e`y`s`` ``o`r` ``i``t``s`` ``s``t`r`i``n``g`` `v`a``l`u`e``,`` ``s`u`c``h`` ``a``s`:` `pr`e``d``i``c``t``i``o``n``_``keys``.`Pr`e``d``i``c``t``i``o``n`K`e`y`s``.`LOGITS` ``o`r` `'`logits`'`.`
#### Returns:

A dict of predictions.
### update_metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)


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
