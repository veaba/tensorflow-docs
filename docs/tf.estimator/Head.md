## Class Head
Interface for the head/top of a model.
### Aliases:
- Class `tf.compat.v1.estimator.Head`
- Class `tf.compat.v2.estimator.Head`
Head sits on top of the model network and handles computing the outputs of the network. Given logits (or output of a hidden layer), a Head knows how to compute predictions, loss, train_op, metrics and export outputs. It is meant to:
#### Common usage:
Here is simplified model_fn to build a DNN regression model.
## Properties
### logits_dimension
Size of the last dimension of the logits `Tensor`.
Often is the number of classes, labels, or real values to be predicted. Typically, logits is of shape `[batch_size, logits_dimension]`.
#### Returns:
The expected size of the `logits` tensor.
### loss_reduction
One of `tf.losses.Reduction`.
Describes how to reduce training loss over batch, such as mean or sum.
#### Returns:
The type of loss reduction used in the head.
### name
The name of this head.
#### Returns:
A string.
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
Returns a loss `Tensor` from provided arguments.
Note that, the args of `features` and `mode` are most likely not used, but some Head implementations may require them.
#### Args:
- `labels`: Labels `Tensor`, or `dict` mapping string label names to `Tensor` objects of the label values.
- `logits`: Logits `Tensor` to be used for loss construction.
- `features`: Input `dict` mapping string feature names to `Tensor` or `SparseTensor` objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
- `mode`: Estimator's `ModeKeys`. To be used in case loss calculation is different in Train and Eval `mode`.
- `regularization_losses`: A list of additional scalar losses to be added to the training loss, such as regularization losses.
#### Returns:
A scalar `Tensor` representing regularized training loss used in train and eval.
### metrics
View source

```
 metrics(regularization_losses=None)
```
Returns a `dict` of metric objects.
#### Args:
- `regularization_losses`: A list of additional scalar losses to be added to the training loss, such as regularization losses.
#### Returns:
A `dict` of metrics keyed by string name. The value is an instance of `Metric` class.
### predictions
View source

```
 predictions(
    logits,
    keys=None
)
```
Returns a `dict` of pre`dict`ions from provided logits.
#### Args:
- `logits`: Logits `Tensor` to be used for prediction construction.
- `keys`: A list of `string` for prediction `keys`. Defaults to `None`, meaning if not specified, predictions will be created for all the pre-defined valid `keys` in the head.
#### Returns:
A `dict` of pre`dict`ed `Tensor` keyed by pre`dict`ion name.
### update_metrics
View source

```
 update_metrics(
    eval_metrics,
    features,
    logits,
    labels,
    mode=None,
    regularization_losses=None
)
```
Updates metric objects and returns a `dict` of the updated metrics.
#### Args:
- `eval_metrics`: A `dict` of metrics to be updated.
- `features`: Input `dict` mapping string feature names to `Tensor` or `SparseTensor` objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
- `logits`: `logits` `Tensor` to be used for metrics update.
- `labels`: Labels `Tensor`, or `dict` mapping string label names to `Tensor` objects of the label values.
- `mode`: Estimator's `ModeKeys`.
- `regularization_losses`: A list of additional scalar losses to be added to the training and evaluation loss, such as regularization losses.
#### Returns:
A `dict` of updated metrics keyed by name. The value is an instance of `Metric` class.
