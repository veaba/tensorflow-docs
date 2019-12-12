

## Class  `RegressionHead` 
Creates a  `Head`  for regression using the  `mean_squared_error`  loss.

Inherits From: [ `Head` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Head)

**别名** : [ `tf.compat.v1.estimator.RegressionHead` ](/api_docs/python/tf/estimator/RegressionHead), [ `tf.compat.v2.estimator.RegressionHead` ](/api_docs/python/tf/estimator/RegressionHead)

The loss is the weighted sum over all input dimensions. Namely, if the inputlabels have shape  `[batch_size, label_dimension]` , the loss is the weightedsum over both  `batch_size`  and  `label_dimension` .

The head expects  `logits`  with shape  `[D0, D1, ... DN, label_dimension]` .In many applications, the shape is  `[batch_size, label_dimension]` .

The  `labels`  shape must match  `logits` , namely `[D0, D1, ... DN, label_dimension]` . If  `label_dimension=1` , shape `[D0, D1, ... DN]`  is also supported.

If  `weight_column`  is specified, weights must be of shape `[D0, D1, ... DN]` ,  `[D0, D1, ... DN, 1]`  or `[D0, D1, ... DN, label_dimension]` .

Supports custom  `loss_fn` .  `loss_fn`  takes  `(labels, logits)`  or `(labels, logits, features, loss_reduction)`  as arguments and returnsunreduced loss with shape  `[D0, D1, ... DN, label_dimension]` .

Also supports custom  `inverse_link_fn` , also known as 'mean function'. `inverse_link_fn`  is only used in  `PREDICT`  mode. It takes  `logits`  asargument and returns predicted values. This function is the inverse of thelink function defined inhttps://en.wikipedia.org/wiki/Generalized_linear_model#Link_functionNamely, for poisson regression, set  `inverse_link_fn=tf.exp` .

头部可以与罐头估计器一起使用。例子：

```
 my_head = tf.estimator.RegressionHead()
my_estimator = tf.estimator.DNNEstimator(
    head=my_head,
    hidden_units=...,
    feature_columns=...)
 
```

It can also be used with a custom  `model_fn` . Example:

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

#### 参数：
- **`weight_column`** : A string or a  `NumericColumn`  created by[ `tf.feature_column.numeric_column` ](https://tensorflow.google.cn/api_docs/python/tf/feature_column/numeric_column) defining feature column representingweights. It is used to down weight or boost examples during training. Itwill be multiplied by the loss of the example.
- **`label_dimension`** : Number of regression labels per example. This is the sizeof the last dimension of the labels  `Tensor`  (typically, this has shape `[batch_size, label_dimension]` ).
- **`loss_reduction`** : One of [ `tf.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) except  `NONE` . Decides how toreduce training loss over batch and label dimension. Defaults to `SUM_OVER_BATCH_SIZE` , namely weighted sum of losses divided by `batch size * label_dimension` .
- **`loss_fn`** : Optional loss function. Defaults to  `mean_squared_error` .
- **`inverse_link_fn`** : Optional inverse link function, also known as 'meanfunction'. Defaults to identity.
- **`name`** : name of the head. If provided, summary and metrics keys will besuffixed by  `"/" + name` . Also used as  `name_scope`  when creating ops.


##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)

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

Initialize self.  See help(type(self)) for accurate signature.

## 属性


###  `logits_dimension` 
See  `base_head.Head`  for details.

###  `loss_reduction` 
See  `base_head.Head`  for details.

###  `name` 
See  `base_head.Head`  for details.

## 方法


###  `create_estimator_spec` 
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

Returns  `EstimatorSpec`  that a model_fn can return.

建议通过名称传递所有参数。

#### 参数：
- **`features`** : Input  `dict`  mapping string feature names to  `Tensor`  or `SparseTensor`  objects containing the values for that feature in aminibatch. Often to be used to fetch example-weight tensor.
- **`mode`** : Estimator's  `ModeKeys` .
- **`logits`** : Logits  `Tensor`  to be used by the head.
- **`labels`** : Labels  `Tensor` , or  `dict`  mapping string label names to  `Tensor` objects of the label values.
- **`optimizer`** : An [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer) instance to optimize theloss in TRAIN mode. Namely, sets  `train_op = optimizer.get_updates(loss,trainable_variables)` , which updates variables to minimize  `loss` .
- **`trainable_variables`** : A list or tuple of  `Variable`  objects to update tominimize  `loss` . In Tensorflow 1.x, by default these are the list ofvariables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES` . As Tensorflow 2.x doesn't havecollections and GraphKeys, trainable_variables need to be passedexplicitly here.
- **`train_op_fn`** : Function that takes a scalar loss  `Tensor`  and returns an opto optimize the model with the loss in TRAIN mode. Used if  `optimizer` is  `None` . Exactly one of  `train_op_fn`  and  `optimizer`  must be set inTRAIN mode. By default, it is  `None`  in other modes. If you want tooptimize loss yourself, you can pass  `lambda _: tf.no_op()`  and then use[ `EstimatorSpec.loss` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec#loss) to compute and apply gradients.
- **`update_ops`** : A list or tuple of update ops to be run at training time. Forexample, layers such as BatchNormalization create mean and varianceupdate ops that need to be run at training time. In Tensorflow 1.x,these are thrown into an UPDATE_OPS collection. As Tensorflow 2.xdoesn't have collections, update_ops need to be passed explicitly here.
- **`regularization_losses`** : A list of additional scalar losses to be added tothe training loss, such as regularization losses.


#### 返回：
 `EstimatorSpec` .

###  `loss` 
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

Return predictions based on keys. See  `base_head.Head`  for details.

###  `metrics` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)

```
 metrics(regularization_losses=None)
 
```

Creates metrics. See  `base_head.Head`  for details.

###  `predictions` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/regression_head.py)

```
 predictions(logits)
 
```

Return predictions based on keys.  See  `base_head.Head`  for details.

#### 参数：
- **`logits`** : logits  `Tensor`  with shape  `[D0, D1, ... DN, logits_dimension]` .For many applications, the shape is  `[batch_size, logits_dimension]` .


#### 返回：
预言的名言

###  `update_metrics` 
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

Updates eval metrics. See  `base_head.Head`  for details.

