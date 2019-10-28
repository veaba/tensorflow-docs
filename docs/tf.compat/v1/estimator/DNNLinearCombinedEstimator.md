## Class DNNLinearCombinedEstimator
An estimator for TensorFlow Linear and DNN joined models with custom head.
Inherits From: `Estimator`
#### Example:

```
 numeric_feature = numeric_column(...)
categorical_column_a = categorical_column_with_hash_bucket(...)
categorical_column_b = categorical_column_with_hash_bucket(...)

categorical_feature_a_x_categorical_feature_b = crossed_column(...)
categorical_feature_a_emb = embedding_column(
    categorical_column=categorical_feature_a, ...)
categorical_feature_b_emb = embedding_column(
    categorical_column=categorical_feature_b, ...)

estimator = DNNLinearCombinedEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    # wide settings
    linear_feature_columns=[categorical_feature_a_x_categorical_feature_b],
    linear_optimizer=tf.train.FtrlOptimizer(...),
    # deep settings
    dnn_feature_columns=[
        categorical_feature_a_emb, categorical_feature_b_emb,
        numeric_feature],
    dnn_hidden_units=[1000, 500, 100],
    dnn_optimizer=tf.train.ProximalAdagradOptimizer(...))

# To apply L1 and L2 regularization, you can set dnn_optimizer to:
tf.train.ProximalAdagradOptimizer(
    learning_rate=0.1,
    l1_regularization_strength=0.001,
    l2_regularization_strength=0.001)
# To apply learning rate decay, you can set dnn_optimizer to a callable:
lambda: tf.AdamOptimizer(
    learning_rate=tf.exponential_decay(
        learning_rate=0.1,
        global_step=tf.get_global_step(),
        decay_steps=10000,
        decay_rate=0.96)
# It is the same for linear_optimizer.

# Input builders
def input_fn_train:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass
def input_fn_eval:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass
def input_fn_predict:
  # Returns tf.data.Dataset of (x, None) tuple.
  pass
estimator.train(input_fn=input_fn_train, steps=100)
metrics = estimator.evaluate(input_fn=input_fn_eval, steps=10)
predictions = estimator.predict(input_fn=input_fn_predict)
```
Input of `train` and `evaluate` should have following features, otherwise there will be a `KeyError`:
- for each `column` in `dnn_feature_columns` + `linear_feature_columns`:
if `column` is a `_CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
if `column` is a `_WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
if `column` is a `_DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
- if `column` is a `_CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
- if `column` is a `_WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
- if `column` is a `_DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
Loss is calculated by using mean squared error.
#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that `input_fn` and all hooks are executed inside a graph context, so they have to be written to be compatible with graph mode. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    head,
    model_dir=None,
    linear_feature_columns=None,
    linear_optimizer='Ftrl',
    dnn_feature_columns=None,
    dnn_optimizer='Adagrad',
    dnn_hidden_units=None,
    dnn_activation_fn=tf.nn.relu,
    dnn_dropout=None,
    input_layer_partitioner=None,
    config=None,
    linear_sparse_combiner='sum'
)
```
Constructs an `Estimator` instance.
See estimators for more information.
To warm-start an `Estimator`:

```
 estimator = tf.estimator.DNNClassifier(
    feature_columns=[categorical_feature_a_emb, categorical_feature_b_emb],
    hidden_units=[1024, 512, 256],
    warm_start_from="/path/to/checkpoint/dir")
```
For more details on warm-start configuration, see `tf.estimator.WarmStartSettings`.
#### Args:
- `model_fn`: Model function. Follows the signature:
Args:
`features`: This is the first item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same.
`labels`: This is the second item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same (for multi-head `mode`ls). If `mode` is `tf.estimator.ModeKeys.PREDICT`, `labels`=None will be passed. If the `model_fn`'s signature does not accept `mode`, the `model_fn` must still be able to handle `labels`=None.
`mode`: Optional. Specifies if this is `train`ing, evaluation or `predict`ion. See `tf.estimator.ModeKeys`.
`params`: Optional `dict` of hyperparameters. Will receive what is passed to Estimator in `params` parameter. This allows to `config`ure Estimators from hyper parameter tuning.
`config`: Optional `estimator.RunConfig` object. Will receive what is passed to Estimator as its `config` parameter, or a default value. Allows setting up things in your `model_fn` based on `config`uration such as `num_ps_replicas`, or `mode`l_dir.
Returns: `tf.estimator.EstimatorSpec`
- ``A``r``g``s``:``
- `features`: This is the first item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same.
- `labels`: This is the second item returned from the `input_fn` passed to `train`, `evaluate`, and `predict`. This should be a single `tf.Tensor` or `dict` of same (for multi-head `mode`ls). If `mode` is `tf.estimator.ModeKeys.PREDICT`, `labels`=None will be passed. If the `model_fn`'s signature does not accept `mode`, the `model_fn` must still be able to handle `labels`=None.
- `mode`: Optional. Specifies if this is training, evaluation or prediction. See `tf.estimator.ModeKeys`.
- `params`: Optional `dict` of hyperparameters. Will receive what is passed to Estimator in `params` parameter. This allows to configure Estimators from hyper parameter tuning.
- `config`: Optional `estimator.RunConfig` object. Will receive what is passed to Estimator as its `config` parameter, or a default value. Allows setting up things in your `model_fn` based on `config`uration such as `num_ps_replicas`, or `model_dir`.
- Returns: `tf.estimator.EstimatorSpec`
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into an estimator to continue training a previously saved model. If `PathLike` object, the path will be resolved. If `None`, the `model_dir` in `config` will be used if set. If both are set, they must be same. If both are `None`, a temporary directory will be used.
- `config`: `estimator.RunConfig` `config`uration object.
- `params`: `dict` of hyper parameters that will be passed into `model_fn`. Keys are names of parameters, values are basic python types.
- `warm_start_from`: Optional string filepath to a checkpoint or SavedModel to warm-start from, or a `tf.estimator.WarmStartSettings` object to fully configure warm-starting.
`         If None, only TRAINABLE variables are warm-started.

         If the string filepath is provided instead of a
         <a href="../../../../tf/estimator/WarmStartSettings"><code>tf.estimator.WarmStartSettings</code></a>, then all variables are
         warm-started, and it is assumed that vocabularies
         and <a href="../../../../tf/Tensor"><code>tf.Tensor</code></a> names are unchanged.`
#### Raises:
- `ValueError`: parameters of `model_fn` don't match `params`.
- `ValueError`: if this is called via a subclass and if that class overrides a member of `Estimator`.
## Properties
### config
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
