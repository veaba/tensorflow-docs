

## Class  `MultiHead` 
Creates a  `Head`  for multi-objective learning.

Inherits From: [ `Head` ](https://tensorflow.google.cn/api_docs/python/tf/estimator/Head)

**Aliases** : [ `tf.compat.v1.estimator.MultiHead` ](/api_docs/python/tf/estimator/MultiHead), [ `tf.compat.v2.estimator.MultiHead` ](/api_docs/python/tf/estimator/MultiHead)

This class merges the output of multiple  `Head`  objects. Specifically:

- For training, sums losses of each head, calls  `train_op_fn`  with thisfinal loss.
- For eval, merges metrics by adding  `head.name`  suffix to the keys in evalmetrics, such as  `precision/head1.name` ,  `precision/head2.name` .
- For prediction, merges predictions and updates keys in prediction dict to a2-tuple,  `(head.name, prediction_key)` . Merges  `export_outputs`  such thatby default the first head is served.


#### Usage:


```
 # In `input_fn`, specify labels as a dict keyed by head name:
def input_fn():
  features = ...
  labels1 = ...
  labels2 = ...
  return features, {'head1.name': labels1, 'head2.name': labels2}

# In `model_fn`, specify logits as a dict keyed by head name:
def model_fn(features, labels, mode):
  # Create simple heads and specify head name.
  head1 = tf.estimator.MultiClassHead(n_classes=3, name='head1')
  head2 = tf.estimator.BinaryClassHead(name='head2')
  # Create MultiHead from two simple heads.
  head = tf.estimator.MultiHead([head1, head2])
  # Create logits for each head, and combine them into a dict.
  logits1, logits2 = logit_fn()
  logits = {'head1.name': logits1, 'head2.name': logits2}
  # Return the merged EstimatorSpec
  return head.create_estimator_spec(..., logits=logits, ...)

# Create an estimator with this model_fn.
estimator = tf.estimator.Estimator(model_fn=model_fn)
estimator.train(input_fn=input_fn)
 
```

Also supports  `logits`  as a  `Tensor`  of shape `[D0, D1, ... DN, logits_dimension]` . It will split the  `Tensor`  along thelast dimension and distribute it appropriately among the heads. E.g.:

# Input logits.


# logits = np.array([[-1., 1., 2., -2., 2.], [-1.5, 1., -3., 2., -2.]],


```
                 dtype=np.float32)
 
```

# Suppose head1.logits_dimension = 2 and head2.logits_dimension = 3. After


# splitting, the result is:


# logits_dict = {'head1_name': [[-1., 1.], [-1.5, 1.]],


```
              'head2_name':  [[2., -2., 2.], [-3., 2., -2.]]}
 
```

Usage:

```
 def model_fn(features, labels, mode):
  # Create simple heads and specify head name.
  head1 = tf.estimator.MultiClassHead(n_classes=3, name='head1')
  head2 = tf.estimator.BinaryClassHead(name='head2')
  # Create multi-head from two simple heads.
  head = tf.estimator.MultiHead([head1, head2])
  # Create logits for the multihead. The result of logits is a `Tensor`.
  logits = logit_fn(logits_dimension=head.logits_dimension)
  # Return the merged EstimatorSpec
  return head.create_estimator_spec(..., logits=logits, ...)
 
```

#### Args:
- **`heads`** : List or tuple of  `Head`  instances. All heads must have  `name` specified. The first head in the list is the default used at serving time.
- **`head_weights`** : Optional list of weights, same length as  `heads` . Used whenmerging losses to calculate the weighted sum of losses from each head. If `None` , all losses are weighted equally.


##  `__init__` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

```
 __init__(
    heads,
    head_weights=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## Properties


###  `logits_dimension` 
See  `base_head.Head`  for details.

###  `loss_reduction` 
See  `base_head.Head`  for details.

###  `name` 
See  `base_head.Head`  for details.

## Methods


###  `create_estimator_spec` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

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

Returns a  `model_fn.EstimatorSpec` .

#### Args:
- **`features`** : Input  `dict`  of  `Tensor`  or  `SparseTensor`  objects.
- **`mode`** : Estimator's  `ModeKeys` .
- **`logits`** : Input  `dict`  keyed by head name, or logits  `Tensor`  with shape `[D0, D1, ... DN, logits_dimension]` . For many applications, the `Tensor`  shape is  `[batch_size, logits_dimension]` . If logits is a `Tensor` , it  will split the  `Tensor`  along the last dimension anddistribute it appropriately among the heads. Check  `MultiHead`  forexamples.
- **`labels`** : Input  `dict`  keyed by head name. For each head, the label valuecan be integer or string  `Tensor`  with shape matching its corresponding `logits` . `labels`  is a required argument when  `mode`  equals  `TRAIN`  or `EVAL` .
- **`optimizer`** : An [ `tf.keras.optimizers.Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer) instance to optimize theloss in TRAIN mode. Namely, sets  `train_op = optimizer.get_updates(loss,trainable_variables)` , which updates variables to minimize  `loss` .
- **`trainable_variables`** : A list or tuple of  `Variable`  objects to update tominimize  `loss` . In Tensorflow 1.x, by default these are the list ofvariables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES` . As Tensorflow 2.x doesn't havecollections and GraphKeys, trainable_variables need to be passedexplicitly here.
- **`train_op_fn`** : Function that takes a scalar loss  `Tensor`  and returns `train_op` . Used if  `optimizer`  is  `None` .
- **`update_ops`** : A list or tuple of update ops to be run at training time. Forexample, layers such as BatchNormalization create mean and varianceupdate ops that need to be run at training time. In Tensorflow 1.x,these are thrown into an UPDATE_OPS collection. As Tensorflow 2.xdoesn't have collections, update_ops need to be passed explicitly here.
- **`regularization_losses`** : A list of additional scalar losses to be added tothe training loss, such as regularization losses. These losses areusually expressed as a batch average, so for best results, in each head,users need to use the default  `loss_reduction=SUM_OVER_BATCH_SIZE`  toavoid scaling errors.  Compared to the regularization losses for eachhead, this loss is to regularize the merged loss of all heads in multihead, and will be added to the overall training loss of multi head.


#### Returns:
A  `model_fn.EstimatorSpec`  instance.

#### Raises:
- **`ValueError`** : If both  `train_op_fn`  and  `optimizer`  are  `None`  in TRAINmode, or if both are set.If  `mode`  is not in Estimator's  `ModeKeys` .


###  `loss` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

```
 loss(
    labels,
    logits,
    features=None,
    mode=None,
    regularization_losses=None
)
 
```

Returns regularized training loss. See  `base_head.Head`  for details.

###  `metrics` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

```
 metrics(regularization_losses=None)
 
```

Creates metrics. See  `base_head.Head`  for details.

###  `predictions` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

```
 predictions(
    logits,
    keys=None
)
 
```

Create predictions. See  `base_head.Head`  for details.

###  `update_metrics` 
[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_head.py)

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

