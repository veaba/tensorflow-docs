## Class PoissonRegressionHead
[tf.nn.log_poisson_loss](https://tensorflow.google.cn/api_docs/python/tf/nn/log_poisson_loss)Creates a Head for poisson regression using .

[RegressionHead](https://tensorflow.google.cn/api_docs/python/tf/estimator/RegressionHead)Inherits From: 

### Aliases:
- Class tf.compat.v1.estimator.PoissonRegressionHead
- Class tf.compat.v2.estimator.PoissonRegressionHead
The loss is the weighted sum over all input dimensions. Namely, if the input labels have shape [batch_size, label_dimension], the loss is the weighted sum over both batch_size and label_dimension.
The head expects logits with shape [D0, D1, ... DN, label_dimension]. In many applications, the shape is [batch_size, label_dimension].
The labels shape must match logits, namely [D0, D1, ... DN, label_dimension]. If label_dimension=1, shape [D0, D1, ... DN] is also supported.
If weight_column is specified, weights must be of shape [D0, D1, ... DN], [D0, D1, ... DN, 1] or [D0, D1, ... DN, label_dimension].
This is implemented as a generalized linear model, see https://en.wikipedia.org/wiki/Generalized_linear_model.
The head can be used with a canned estimator. Example:

```
 my_head = tf.estimator.PoissonRegressionHead()
my_estimator = tf.estimator.DNNEstimator(
    head=my_head,
    hidden_units=...,
    feature_columns=...)
```
It can also be used with a custom model_fn. Example:

```
 def _my_model_fn(features, labels, mode):
  my_head = tf.estimator.PoissonRegressionHead()
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
- weight_column: A string or a NumericColumn created by tf.feature_column.numeric_column defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.
- label_dimension: Number of regression labels per example. This is the size of the last dimension of the labels Tensor (typically, this has shape [batch_size, label_dimension]).
- loss_reduction: One of tf.losses.Reduction except NONE. Decides how to reduce training loss over batch and label dimension. Defaults to SUM_OVER_BATCH_SIZE, namely weighted sum of losses divided by batch size * label_dimension.
- compute_full_loss: Whether to include the constant log(z!) term in computing the poisson loss. See tf.nn.log_poisson_loss for the full documentation.
- name: name of the head. If provided, summary and metrics keys will be suffixed by "/" + name. Also used as name_scope when creating ops.
## __init__
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)


```
 __init__(
    label_dimension=1,
    weight_column=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    compute_full_loss=True,
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
- features: Input dict mapping string feature names to Tensor or SparseTensor objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
- mode: Estimator's ModeKeys.
- logits: Logits Tensor to be used by the head.
- labels: Labels Tensor, or dict mapping string label names to Tensor objects of the label values.
- optimizer: An tf.keras.optimizers.Optimizer instance to optimize the loss in TRAIN mode. Namely, sets train_op = optimizer.get_updates(loss, trainable_variables), which updates variables to minimize loss.
- trainable_variables: A list or tuple of Variable objects to update to minimize loss. In Tensorflow 1.x, by default these are the list of variables collected in the graph under the key GraphKeys.TRAINABLE_VARIABLES. As Tensorflow 2.x doesn't have collections and GraphKeys, trainable_variables need to be passed explicitly here.
- train_op_fn: Function that takes a scalar loss Tensor and returns an op to optimize the model with the loss in TRAIN mode. Used if optimizer is None. Exactly one of train_op_fn and optimizer must be set in TRAIN mode. By default, it is None in other modes. If you want to optimize loss yourself, you can pass lambda _: tf.no_op() and then use EstimatorSpec.loss to compute and apply gradients.
- update_ops: A list or tuple of update ops to be run at training time. For example, layers such as BatchNormalization create mean and variance update ops that need to be run at training time. In Tensorflow 1.x, these are thrown into an UPDATE_OPS collection. As Tensorflow 2.x doesn't have collections, update_ops need to be passed explicitly here.
- regularization_losses: A list of additional scalar losses to be added to the training loss, such as regularization losses.
#### Returns:
EstimatorSpec.
### loss
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)


```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
```
Return predictions based on keys. See base_head.Head for details.
### metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)


```
 metrics(regularization_losses=None)
```
Creates metrics. See base_head.Head for details.
### predictions
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)


```
 predictions(logits)
```
Return predictions based on keys. See base_head.Head for details.
#### Args:
- logits: logits Tensor with shape [D0, D1, ... DN, logits_dimension]. For many applications, the shape is [batch_size, logits_dimension].
#### Returns:
A dict of predictions.
### update_metrics
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)


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
