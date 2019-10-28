## Class RegressionHead
Creates a `Head` for regression using the `mean_squared_error` loss.
Inherits From: `Head`
### Aliases:
- Class `tf.compat.v1.estimator.RegressionHead`
- Class `tf.compat.v2.estimator.RegressionHead`
The loss is the weighted sum over all input dimensions. Namely, if the input labels have shape `[batch_size, label_dimension]`, the loss is the weighted sum over both `batch_size` and `label_dimension`.
The head expects `logits` with shape `[D0, D1, ... DN, label_dimension]`. In many applications, the shape is `[batch_size, label_dimension]`.
The `labels` shape must match `logits`, namely `[D0, D1, ... DN, label_dimension]`. If `label_dimension=1`, shape `[D0, D1, ... DN]` is also supported.
If `weight_column` is specified, weights must be of shape `[D0, D1, ... DN]`, `[D0, D1, ... DN, 1]` or `[D0, D1, ... DN, label_dimension]`.
Supports custom `loss_fn`. `loss_fn` takes `labels, logits)` or `labels, logits, features, loss_reduction)` as arguments and returns unreduced loss with shape `[D0, D1, ... DN, label_dimension]`.
Also supports custom `inverse_link_fn`, also known as 'mean function'. `inverse_link_fn` is only used in `PREDICT` mode. It takes `logits` as argument and returns predicted values. This function is the inverse of the link function defined in https://en.wikipedia.org/wiki/Generalized_linear_model#Link_function Namely, for poisson regression, set `inverse_link_fn`=tf.exp.
The head can be used with a canned estimator. Example:

```
 my_head = tf.estimator.RegressionHead()
my_estimator = tf.estimator.DNNEstimator(
    head=my_head,
    hidden_units=...,
    feature_columns=...)
```
It can also be used with a custom `model_fn`. Example:

```
 def _my_model_fn(features, labels, mode):
  my_head = tf.estimator.RegressionHead()
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
- `label_dimension`: Number of regression labels per example. This is the size of the last dimension of the labels `Tensor` (typically, this has shape `[batch_size, label_dimension]`).
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Decides how to reduce training loss over batch and label dimension. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size * label_dimension.
- `loss_fn`: Optional loss function. Defaults to `mean_squared_error`.
- `inverse_link_fn`: Optional inverse link function, also known as 'mean function'. Defaults to identity.
- `name`: `name` of the head. If provided, summary and metrics keys will be suffixed by `"/" + name`. Also used as `name`_scope when creating ops.
## __init__
View source

```
 __init__(
    label_dimension=1,
    weight_column=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    loss_fn=None,
    inverse_link_fn=None,
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
