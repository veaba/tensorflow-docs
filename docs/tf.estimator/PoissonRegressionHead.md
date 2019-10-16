## Class PoissonRegressionHead
[tf.nn.log_poisson_loss](https://www.tensorflow.org/api_docs/python/tf/nn/log_poisson_loss)Creates a Head for poisson regression using .

[RegressionHead](https://www.tensorflow.org/api_docs/python/tf/estimator/RegressionHead)Inherits From: 

### Aliases:
- Class `tf.compat.v1.estimator.PoissonRegressionHead`
- Class `tf.compat.v2.estimator.PoissonRegressionHead`

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
- `weight_column`: A string or a `NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example.
- `label_dimension`:` `Nu`m``b``e`r` ``o`f` `r`e`gr`e``s``s``i``o``n`` ``l``a``b``e``l``s`` `p`e`r` ``e`x`a``m`p`l``e`.` `T`h``i``s`` ``i``s`` ``t``h``e`` ``s``i``z``e`` ``o`f` ``t``h``e`` ``l``a``s``t`` ``d``i``m``e``n``s``i``o``n`` ``o`f` ``t``h``e`` ``l``a``b``e``l``s`` ``Tensor`` `(`t`yp`i``c``a``l``l`y`,`` ``t``h``i``s`` ``h``a``s`` ``s``h``a`p`e`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``label_dimension`]).
- `l``o``s``s``_`r`e``d`u`c``t``i``o``n`:` `O`n``e`` ``o`f` ``t`f.`l``o``s``s``e``s`.R`e``d`u`c``t``i``o``n`` ``e`x`c``e`p`t`` ``NONE`.` `D`e``c``i``d``e``s`` ``h``o`w` ``t``o`` `r`e``d`u`c``e`` ``t`r`a``i``n``i``n`g` ``l``o``s``s`` ``o`v`e`r` ``b``a``t``c``h`` ``a``n``d`` ``l``a``b``e``l`` ``d``i``m``e``n``s``i``o``n`.` `D`e`f`a`u`l``t``s`` ``t``o`` ``SUM_OVER_BATCH_SIZE``,`` ``n``a``m``e``l`y` `w`e``i`g`h``t``e``d`` ``s`u`m`` ``o`f` ``l``o``s``s``e``s`` ``d``i`v`i``d``e``d`` ``b`y` ``b``a``t``c``h`` ``s``i``z``e`` `*` ``label_dimension`.
- `c``o``m`pu`t``e``_`fu`l``l``_``l``o``s``s`:` `W`h``e``t``h``e`r` ``t``o`` ``i``n``c``l`u`d``e`` ``t``h``e`` ``c``o``n``s``t``a``n``t`` ``l``o`g(`z`!)` ``t``e`r`m`` ``i``n`` ``c``o``m`pu`t``i``n`g` ``t``h``e`` `p`o``i``s``s``o``n`` ``l``o``s``s`.` `S`e``e`` ``t`f.`n``n`.`l``o`g`_`p`o``i``s``s``o``n``_``l``o``s``s`` `f`o`r` ``t``h``e`` `fu`l``l`` ``d``o``c`u`m``e``n``t``a``t``i``o``n`.
- `n``a``m``e`:` ``n``a``m``e`` ``o`f` ``t``h``e`` ``h``e``a``d`.` `If` `pr`o`v`i``d``e``d``,`` ``s`u`m``m``a`ry` ``a``n``d`` ``m``e``t`r`i``c``s`` `k`e`y`s`` `w`i``l``l`` ``b``e`` ``s`uff`i`x`e``d`` ``b`y` `"/"` `+` ``n``a``m``e`.` `A`l``s``o`` `u`s``e``d`` ``a``s`` ``n``a``m``e``_``s``c``o`p`e`` `w`h``e``n`` ``c`r`e``a``t``i``n`g` ``o`p`s`.
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
- `logits`:` ``logits`` ``Tensor`` `w`i``t``h`` ``s``h``a`p`e`` `[`D``0``,`` ``D``1``,`` ``.``.``.`` ``D``N``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`` `F`o`r` ``m``a``n`y` ``a`pp`l``i``c``a``t``i``o``n``s``,`` ``t``h``e`` ``s``h``a`p`e`` ``i``s`` `[`b``a``t``c``h``_``s``i``z``e``,`` ``logits``_``d``i``m``e``n``s``i``o``n`]`.`
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
