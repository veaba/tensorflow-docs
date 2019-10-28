## Class LogisticRegressionHead
Creates a `Head` for logistic regression.
Inherits From: `RegressionHead`
### Aliases:
- Class `tf.compat.v1.estimator.LogisticRegressionHead`
- Class `tf.compat.v2.estimator.LogisticRegressionHead`
Uses `sigmoid_cross_entropy_with_logits` loss, which is the same as `BinaryClassHead`. The differences compared to `BinaryClassHead` are:
- Does not support `label_vocabulary`. Instead, labels must be float in the range [0, 1].
- ``D``o``e``s`` ``n``o``t`` ``c``a``l``c``u``l``a``t``e`` ``s``o``m``e`` ``m``e``t``r``i``c``s`` ``t``h``a``t`` ``d``o`` ``n``o``t`` ``m``a``k``e`` ``s``e``n``s``e``,`` ``s``u``c``h`` ``a``s`` ``A``U``C``.``
The head expects `logits` with shape `[D0, D1, ... DN, 1]`. In many applications, the shape is `[batch_size, 1]`.
The `labels` shape must match `logits`, namely `[D0, D1, ... DN]` or `[D0, D1, ... DN, 1]`.
If `weight_column` is specified, weights must be of shape `[D0, D1, ... DN]` or `[D0, D1, ... DN, 1]`.
This is implemented as a generalized linear model, see https://en.wikipedia.org/wiki/Generalized_linear_model.
The head can be used with a canned estimator. Example:

```
 my_head = tf.estimator.LogisticRegressionHead()
my_estimator = tf.estimator.DNNEstimator(
    head=my_head,
    hidden_units=...,
    feature_columns=...)
```
It can also be used with a custom `model_fn`. Example:

```
 def _my_model_fn(features, labels, mode):
  my_head = tf.estimator.LogisticRegressionHead()
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
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Decides how to reduce training loss over batch and label dimension. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size * label_dimension.
- `name`: `name` of the head. If provided, summary and metrics keys will be suffixed by `"/" + name`. Also used as `name`_scope when creating ops.
## __init__
View source

```
 __init__(
    weight_column=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
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
Return predictions based on keys. See `base_head.Head` for details.
### metrics
View source

```
 metrics(regularization_losses=None)
```
Creates metrics. See `base_head.Head` for details.
### predictions
View source

```
 predictions(logits)
```
Return predictions based on keys. See `base_head.Head` for details.
#### Args:
- `logits`: `logits` `Tensor` with shape `[D0, D1, ... DN, logits_dimension]`. For many applications, the shape is `[batch_size, logits_dimension]`.
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
