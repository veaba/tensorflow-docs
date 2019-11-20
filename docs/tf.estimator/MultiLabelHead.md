[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/estimator/MultiLabelHead) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)  
  
  
## Class `MultiLabelHead`

Creates a `Head` for multi-label classification.

Inherits From:
[`Head`](https://tensorflow.google.cn/api_docs/python/tf/estimator/Head)

### Aliases:

  * Class [`tf.compat.v1.estimator.MultiLabelHead`](/api_docs/python/tf/estimator/MultiLabelHead)
  * Class [`tf.compat.v2.estimator.MultiLabelHead`](/api_docs/python/tf/estimator/MultiLabelHead)

Multi-label classification handles the case where each example may have zero
or more associated labels, from a discrete set. This is distinct from
`MultiClassHead` which has exactly one label per example.

Uses `sigmoid_cross_entropy` loss average over classes and weighted sum over
the batch. Namely, if the input logits have shape `[batch_size, n_classes]`,
the loss is the average over `n_classes` and the weighted sum over
`batch_size`.

The head expects `logits` with shape `[D0, D1, ... DN, n_classes]`. In many
applications, the shape is `[batch_size, n_classes]`.

#### Labels can be:

  * A multi-hot tensor of shape `[D0, D1, ... DN, n_classes]`
  * An integer `SparseTensor` of class indices. The `dense_shape` must be `[D0, D1, ... DN, ?]` and the values within `[0, n_classes)`.
  * If `label_vocabulary` is given, a string `SparseTensor`. The `dense_shape` must be `[D0, D1, ... DN, ?]` and the values within `label_vocabulary` or a multi-hot tensor of shape `[D0, D1, ... DN, n_classes]`.

If `weight_column` is specified, weights must be of shape `[D0, D1, ... DN]`,
or `[D0, D1, ... DN, 1]`.

Also supports custom `loss_fn`. `loss_fn` takes `(labels, logits)` or
`(labels, logits, features)` as arguments and returns unreduced loss with
shape `[D0, D1, ... DN, 1]`. `loss_fn` must support indicator `labels` with
shape `[D0, D1, ... DN, n_classes]`. Namely, the head applies
`label_vocabulary` to the input labels before passing them to `loss_fn`.

The head can be used with a canned estimator. Example:

    
    
    my_head = tf.estimator.MultiLabelHead(n_classes=3)
    my_estimator = tf.estimator.DNNEstimator(
        head=my_head,
        hidden_units=...,
        feature_columns=...)
    

It can also be used with a custom `model_fn`. Example:

    
    
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
    

#### Args:

  * **`n_classes`** : Number of classes, must be greater than 1 (for 1 class, use `BinaryClassHead`).
  * **`weight_column`** : A string or a `NumericColumn` created by [`tf.feature_column.numeric_column`](https://tensorflow.google.cn/api_docs/python/tf/feature_column/numeric_column) defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example. Per-class weighting is not supported.
  * **`thresholds`** : Iterable of floats in the range `(0, 1)`. Accuracy, precision and recall metrics are evaluated for each threshold value. The threshold is applied to the predicted probabilities, i.e. above the threshold is `true`, below is `false`.
  * **`label_vocabulary`** : A list of strings represents possible label values. If it is not given, that means labels are already encoded as integer within [0, n_classes) or multi-hot Tensor. If given, labels must be SparseTensor `string` type and have any value in `label_vocabulary`. Also there will be errors if vocabulary is not provided and labels are string.
  * **`loss_reduction`** : One of [`tf.losses.Reduction`](https://tensorflow.google.cn/api_docs/python/tf/keras/losses/Reduction) except `NONE`. Decides how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`, namely weighted sum of losses divided by batch size.
  * **`loss_fn`** : Optional loss function.
  * **`classes_for_class_based_metrics`** : List of integer class IDs or string class names for which per-class metrics are evaluated. If integers, all must be in the range `[0, n_classes - 1]`. If strings, all must be in `label_vocabulary`.
  * **`name`** : Name of the head. If provided, summary and metrics keys will be suffixed by `"/" + name`. Also used as `name_scope` when creating ops.

## `__init__`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)

    
    
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
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `logits_dimension`

See `base_head.Head` for details.

### `loss_reduction`

See `base_head.Head` for details.

### `name`

See `base_head.Head` for details.

## Methods

### `create_estimator_spec`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/base_head.py)

    
    
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
    

Returns `EstimatorSpec` that a model_fn can return.

It is recommended to pass all args via name.

#### Args:

  * **`features`** : Input `dict` mapping string feature names to `Tensor` or `SparseTensor` objects containing the values for that feature in a minibatch. Often to be used to fetch example-weight tensor.
  * **`mode`** : Estimator's `ModeKeys`.
  * **`logits`** : Logits `Tensor` to be used by the head.
  * **`labels`** : Labels `Tensor`, or `dict` mapping string label names to `Tensor` objects of the label values.
  * **`optimizer`** : An [`tf.keras.optimizers.Optimizer`](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer) instance to optimize the loss in TRAIN mode. Namely, sets `train_op = optimizer.get_updates(loss, trainable_variables)`, which updates variables to minimize `loss`.
  * **`trainable_variables`** : A list or tuple of `Variable` objects to update to minimize `loss`. In Tensorflow 1.x, by default these are the list of variables collected in the graph under the key `GraphKeys.TRAINABLE_VARIABLES`. As Tensorflow 2.x doesn't have collections and GraphKeys, trainable_variables need to be passed explicitly here.
  * **`train_op_fn`** : Function that takes a scalar loss `Tensor` and returns an op to optimize the model with the loss in TRAIN mode. Used if `optimizer` is `None`. Exactly one of `train_op_fn` and `optimizer` must be set in TRAIN mode. By default, it is `None` in other modes. If you want to optimize loss yourself, you can pass `lambda _: tf.no_op()` and then use [`EstimatorSpec.loss`](https://tensorflow.google.cn/api_docs/python/tf/estimator/EstimatorSpec#loss) to compute and apply gradients.
  * **`update_ops`** : A list or tuple of update ops to be run at training time. For example, layers such as BatchNormalization create mean and variance update ops that need to be run at training time. In Tensorflow 1.x, these are thrown into an UPDATE_OPS collection. As Tensorflow 2.x doesn't have collections, update_ops need to be passed explicitly here.
  * **`regularization_losses`** : A list of additional scalar losses to be added to the training loss, such as regularization losses.

#### Returns:

`EstimatorSpec`.

### `loss`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)

    
    
    loss(
        labels,
        logits,
        features=None,
        mode=None,
        regularization_losses=None
    )
    

Returns regularized training loss. See `base_head.Head` for details.

### `metrics`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)

    
    
    metrics(regularization_losses=None)
    

Creates metrics. See `base_head.Head` for details.

### `predictions`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)

    
    
    predictions(
        logits,
        keys=None
    )
    

Return predictions based on keys. See `base_head.Head` for details.

#### Args:

  * **`logits`** : logits `Tensor` with shape `[D0, D1, ... DN, logits_dimension]`. For many applications, the shape is `[batch_size, logits_dimension]`.
  * **`keys`** : a list of prediction keys. Key can be either the class variable of prediction_keys.PredictionKeys or its string value, such as: prediction_keys.PredictionKeys.LOGITS or 'logits'.

#### Returns:

A dict of predictions.

### `update_metrics`

[View
source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/head/multi_label_head.py)

    
    
    update_metrics(
        eval_metrics,
        features,
        logits,
        labels,
        regularization_losses=None
    )
    

Updates eval metrics. See `base_head.Head` for details.

