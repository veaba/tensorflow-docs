## Class BinaryClassHead
Creates a `Head` for single label binary classification.
Inherits From: `Head`
### Aliases:
- Class `tf.compat.v1.estimator.BinaryClassHead`
- Class `tf.compat.v2.estimator.BinaryClassHead`
Uses `sigmoid_cross_entropy_with_logits` loss.
The head expects `logits` with shape `[D0, D1, ... DN, 1]`. In many applications, the shape is `[batch_size, 1]`.
`labels` must be a dense `Tensor` with shape matching `logits`, namely `[D0, D1, ... DN, 1]`. If `label_vocabulary` given, `labels` must be a string `Tensor` with values from the vocabulary. If `label_vocabulary` is not given, `labels` must be float `Tensor` with values in the interval `[0, 1]`.
If `weight_column` is specified, weights must be of shape `[D0, D1, ... DN]`, or `[D0, D1, ... DN, 1]`.
The loss is the weighted sum over the input dimensions. Namely, if the input labels have shape `[batch_size, 1]`, the loss is the weighted sum over `batch_size`.
Also supports custom `loss_fn`. `loss_fn` takes `labels, logits)` or `labels, logits, features, loss_reduction)` as arguments and returns loss with shape `[D0, D1, ... DN, 1]`. `loss_fn` must support float `labels` with shape `[D0, D1, ... DN, 1]`. Namely, the head applies `label_vocabulary` to the input `labels` before passing them to `loss_fn`.
#### Args:
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.
- `thresholds`: Iterable of floats in the range `0, 1)`. For binary classification metrics such as precision and recall, an eval metric is generated for each threshold value. This threshold is applied to the logistic values to determine the binary classification (i.e., above the threshold is `true`, below is `false`.
- `label_vocabulary`: A list or tuple of strings representing possible label values. If it is not given, that means labels are already encoded within [0, 1]. If given, labels must be string type and have any value in `label_vocabulary`. Note that errors will be raised if `label_vocabulary` is not provided but labels are strings.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Decides how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size * label_dimension.
- `loss_fn`: Optional loss function.
- `name`: Name of the head. If provided, summary and metrics keys will be suffixed by `"/" + name`. Also used as `name`_scope when creating ops.
## __init__
View source

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
See `base_head.Head` for details.
### loss_reduction
See `base_head.Head` for details.
### name
See `base_head.Head` for details.
## Methods
### create_estimator_spec
View source

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
Returns `EstimatorSpec` that a model_fn can return.
It is recommended to pass all args via name.
#### Args:
- `features`: Input `dict` mapping string feature names to `Tensor` or `SparseTensor` objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
- `mode`: Estimator's `ModeKeys`.
- `logits`: Logits `Tensor` to be used by the head.
- `labels`: Labels `Tensor`, or `dict` mapping string label names to `Tensor` objects of the label values.
#### Returns:
`EstimatorSpec`.
### loss
View source

```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
```
Returns regularized training loss. See `base_head.Head` for details.
### metrics
View source

```
 metrics(regularization_losses=None)
```
Creates metrics. See `base_head.Head` for details.
### predictions
View source

```
 predictions(
    logits,
    keys=None
)
```
Return predictions based on keys. See `base_head.Head` for details.
#### Args:
- `logits`: `logits` `Tensor` with shape `[D0, D1, ... DN, logits_dimension]`. For many applications, the shape is `[batch_size, logits_dimension]`.
- `keys`: a list or tuple of prediction `keys`. Each key can be either the class variable of prediction_`keys`.PredictionKeys or its string value, such as: prediction_`keys`.PredictionKeys.CLASSES or 'classes'. If not specified, it will return the predictions for all valid `keys`.
#### Returns:
A dict of predictions.
### update_metrics
View source

```
 update_metrics(
    eval_metrics,
    features,
    logits,
    labels,
    regularization_losses=None
)
```
Updates eval metrics. See `base_head.Head` for details.
