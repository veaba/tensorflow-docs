## Class LinearEstimator
An estimator for TensorFlow linear models with user-specified head.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.LinearEstimator`
#### Example:

```
 categorical_column_a = categorical_column_with_hash_bucket(...)
categorical_column_b = categorical_column_with_hash_bucket(...)

categorical_feature_a_x_categorical_feature_b = crossed_column(...)

# Estimator using the default optimizer.
estimator = LinearEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b])

# Or estimator using an optimizer with a learning rate decay.
estimator = LinearEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b],
    optimizer=lambda: tf.keras.optimizers.Ftrl(
        learning_rate=tf.exponential_decay(
            learning_rate=0.1,
            global_step=tf.get_global_step(),
            decay_steps=10000,
            decay_rate=0.96))

# Or estimator using the FTRL optimizer with regularization.
estimator = LinearEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3),
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b])
    optimizer=tf.keras.optimizers.Ftrl(
        learning_rate=0.1,
        l1_regularization_strength=0.001
    ))

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
    feature_columns,
    model_dir=None,
    optimizer='Ftrl',
    config=None,
    sparse_combiner='sum'
)
```
Initializes a `LinearEstimator` instance.
#### Args:
- `head`: A `_Head` instance constructed with a method such as `tf.contrib.estimator.multi_label_head`.
- `feature_columns`: An iterable containing all the feature columns used by the model. All items in the set should be instances of classes derived from `FeatureColumn`.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `optimizer`: An instance of `tf.Optimizer` used to train the model. Can also be a string (one of 'Adagrad', 'Adam', 'Ftrl', 'RMSProp', 'SGD'), or callable. Defaults to FTRL `optimizer`.
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `sparse_combiner`: A string specifying how to reduce if a categorical column is multivalent. One of "mean", "sqrtn", and "sum" -- these are effectively different ways to do example-level normalization, which can be useful for bag-of-words features. for more details, see `tf.feature_column.linear_model`.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
