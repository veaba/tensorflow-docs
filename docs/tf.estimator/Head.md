

## Class  `Head` 
模型头部/顶部的接口。

**别名** : [ `tf.compat.v1.estimator.Head` ](/api_docs/python/tf/estimator/Head), [ `tf.compat.v2.estimator.Head` ](/api_docs/python/tf/estimator/Head)

Head sits on top of the model network and handles computing the outputs ofthe network. Given logits (or output of a hidden layer), a Head knows how tocompute predictions, loss, train_op, metrics and export outputs. It is meantto:

1. Simplify writing model_fn and to make model_fn more configurable forEstimator.
2. Simpilfy creating loss and metrics for the train and test loop in Eagerexecution.
3. Support wide range of machine learning models. Since most heads can workwith logits, they can support DNN, RNN, Wide, Wide&amp;Deep,Global objectives, Gradient boosted trees and many other typesof machine learning models.


#### 常用用法：
Here is simplified model_fn to build a DNN regression model.

```
 def)(inputs)
 )(hidden_layer0)
 ))
 ))
  model.add(tf.keras.layers.Dense(
     units=head.logits_dimension, activation=None))
  logits = model(inputs)

  return head.create_estimator_spec(
      features=features,
      labels=labels,
      mode=mode,
      logits=logits,
      optimizer=optimizer)
 
```

## 属性


###  `logits_dimension` 
Size of the last dimension of the logits  `Tensor` .

Often is the number of classes, labels, or real values to be predicted.Typically, logits is of shape  `[batch_size, logits_dimension]` .

#### 返回：
The expected size of the  `logits`  tensor.

###  `loss_reduction` 
One of [ `tf.losses.Reduction` ](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction).

Describes how to reduce training loss over batch, such as mean or sum.

#### 返回：
头部使用的减少损失的类型。

###  `name` 
这个头的名字。

#### 返回：
一根绳子。

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
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)

```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
 
```

Returns a loss  `Tensor`  from provided arguments.

Note that, the args of  `features`  and  `mode`  are most likely not used, butsome Head implementations may require them.

#### 参数：
- **`labels`** : Labels  `Tensor` , or  `dict`  mapping string label names to  `Tensor` objects of the label values.
- **`logits`** : Logits  `Tensor`  to be used for loss construction.
- **`features`** : Input  `dict`  mapping string feature names to  `Tensor`  or `SparseTensor`  objects containing the values for that feature in aminibatch. Often to be used to fetch example-weight tensor.
- **`mode`** : Estimator's  `ModeKeys` . To be used in case loss calculation isdifferent in Train and Eval mode.
- **`regularization_losses`** : A list of additional scalar losses to be added tothe training loss, such as regularization losses.


#### 返回：
A scalar  `Tensor`  representing regularized training loss used in train andeval.

###  `metrics` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)

```
 metrics(regularization_losses=None)
 
```

Returns a  `dict`  of metric objects.

#### 参数：
- **`regularization_losses`** : A list of additional scalar losses to be added tothe training loss, such as regularization losses.


#### 返回：
A  `dict`  of metrics keyed by string name. The value is an instance of `Metric`  class.

###  `predictions` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)

```
 predictions(
    logits,
    keys=None
)
 
```

Returns a  `dict`  of predictions from provided logits.

#### 参数：
- **`logits`** : Logits  `Tensor`  to be used for prediction construction.
- **`keys`** : A list of  `string`  for prediction keys. Defaults to  `None` , meaningif not specified, predictions will be created for all the pre-definedvalid keys in the head.


#### 返回：
A  `dict`  of predicted  `Tensor`  keyed by prediction name.

###  `update_metrics` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)

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

Updates metric objects and returns a  `dict`  of the updated metrics.

#### 参数：
- **`eval_metrics`** : A  `dict`  of metrics to be updated.
- **`features`** : Input  `dict`  mapping string feature names to  `Tensor`  or `SparseTensor`  objects containing the values for that feature in aminibatch. Often to be used to fetch example-weight tensor.
- **`logits`** : logits  `Tensor`  to be used for metrics update.
- **`labels`** : Labels  `Tensor` , or  `dict`  mapping string label names to  `Tensor` objects of the label values.
- **`mode`** : Estimator's  `ModeKeys` .
- **`regularization_losses`** : A list of additional scalar losses to be added tothe training and evaluation loss, such as regularization losses.


#### 返回：
A  `dict`  of updated metrics keyed by name. The value is an instance of `Metric`  class.

