## Class DNNEstimator
An estimator for TensorFlow DNN models with user-specified head.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.DNNEstimator`
#### Example:

```
 sparse_feature_a = sparse_column_with_hash_bucket(...)
sparse_feature_b = sparse_column_with_hash_bucket(...)

sparse_feature_a_emb = embedding_column(sparse_id_column=sparse_feature_a,
                                        ...)
sparse_feature_b_emb = embedding_column(sparse_id_column=sparse_feature_b,
                                        ...)

estimator = DNNEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[sparse_feature_a_emb, sparse_feature_b_emb],
    hidden_units=[1024, 512, 256])

# Or estimator using the ProximalAdagradOptimizer optimizer with
# regularization.
estimator = DNNEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[sparse_feature_a_emb, sparse_feature_b_emb],
    hidden_units=[1024, 512, 256],
    optimizer=tf.train.ProximalAdagradOptimizer(
      learning_rate=0.1,
      l1_regularization_strength=0.001
    ))

# Or estimator using an optimizer with a learning rate decay.
estimator = DNNEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[sparse_feature_a_emb, sparse_feature_b_emb],
    hidden_units=[1024, 512, 256],
    optimizer=lambda: tf.AdamOptimizer(
        learning_rate=tf.exponential_decay(
            learning_rate=0.1,
            global_step=tf.get_global_step(),
            decay_steps=10000,
            decay_rate=0.96))

# Or estimator with warm-starting from a previous checkpoint.
estimator = DNNEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[sparse_feature_a_emb, sparse_feature_b_emb],
    hidden_units=[1024, 512, 256],
    warm_start_from="/path/to/checkpoint/dir")

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
estimator.train(input_fn=input_fn_train)
metrics = estimator.evaluate(input_fn=input_fn_eval)
predictions = estimator.predict(input_fn=input_fn_predict)
```
Input of `train` and `evaluate` should have following features, otherwise there will be a `KeyError`:
- if `weight_column` is not `None`, a feature with `key=weight_column` whose value is a `Tensor`.
- for each `column` in `feature_columns`:
if `column` is a `_CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
if `column` is a `_WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
if `column` is a `_DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
- if `column` is a `_CategoricalColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
- if `column` is a `_WeightedCategoricalColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
- if `column` is a `_DenseColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
Loss and predicted output are determined by the specified head.
#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that `input_fn` and all hooks are executed inside a graph context, so they have to be written to be compatible with graph mode. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    head,
    hidden_units,
    feature_columns,
    model_dir=None,
    optimizer='Adagrad',
    activation_fn=tf.nn.relu,
    dropout=None,
    config=None,
    warm_start_from=None,
    batch_norm=False
)
```
Initializes a `DNNEstimator` instance.
#### Args:
- `head`: A `_Head` instance constructed with a method such as `tf.contrib.estimator.multi_label_head`.
- `hidden_units`: Iterable of number hidden units per layer. All layers are fully connected. Ex. `[64, 32]` means first layer has 64 nodes and second one has 32.
- `feature_columns`: An iterable containing all the feature columns used by the model. All items in the set should be instances of classes derived from `_FeatureColumn`.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `optimizer`: An instance of `tf.Optimizer` used to train the model. Can also be a string (one of 'Adagrad', 'Adam', 'Ftrl', 'RMSProp', 'SGD'), or callable. Defaults to Adagrad `optimizer`.
- `activation_fn`: Activation function applied to each layer. If `None`, will use `tf.nn.relu`.
- `dropout`: When not `None`, the probability we will drop out a given coordinate.
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `warm_start_from`: A string filepath to a checkpoint to warm-start from, or a `WarmStartSettings` object to fully configure warm-starting. If the string filepath is provided instead of a `WarmStartSettings`, then all weights are warm-started, and it is assumed that vocabularies and Tensor names are unchanged.
- `batch_norm`: Whether to use batch normalization after each hidden layer.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
