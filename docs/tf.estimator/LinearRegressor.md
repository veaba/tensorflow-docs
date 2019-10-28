## Class LinearRegressor
An estimator for TensorFlow Linear regression problems.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.LinearRegressor`
### Used in the guide:
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
### Used in the tutorials:
- ``G``r``a``d``i``e``n``t`` ``B``o``o``s``t``e``d`` ``T``r``e``e``s``:`` ``M``o``d``e``l`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
Train a linear regression model to predict label value given observation of feature values.
#### Example:

```
 categorical_column_a = categorical_column_with_hash_bucket(...)
categorical_column_b = categorical_column_with_hash_bucket(...)

categorical_feature_a_x_categorical_feature_b = crossed_column(...)

# Estimator using the default optimizer.
estimator = LinearRegressor(
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b])

# Or estimator using the FTRL optimizer with regularization.
estimator = LinearRegressor(
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b],
    optimizer=tf.keras.optimizers.Ftrl(
      learning_rate=0.1,
      l1_regularization_strength=0.001
    ))

# Or estimator using an optimizer with a learning rate decay.
estimator = LinearRegressor(
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b],
    optimizer=lambda: tf.keras.optimizers.Ftrl(
        learning_rate=tf.exponential_decay(
            learning_rate=0.1,
            global_step=tf.get_global_step(),
            decay_steps=10000,
            decay_rate=0.96))

# Or estimator with warm-starting from a previous checkpoint.
estimator = LinearRegressor(
    feature_columns=[categorical_column_a,
                     categorical_feature_a_x_categorical_feature_b],
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
Input of `train` and `evaluate` should have following features, otherwise there will be a KeyError:
- if `weight_column` is not `None`, a feature with `key=weight_column` whose value is a `Tensor`.
- for each `column` in `feature_columns`:
if `column` is a `SparseColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
if `column` is a `WeightedSparseColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
if `column` is a `RealValuedColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
- if `column` is a `SparseColumn`, a feature with `key=column.name` whose `value` is a `SparseTensor`.
- if `column` is a `WeightedSparseColumn`, two features: the first with `key` the id `column` name, the second with `key` the weight `column` name. Both features' `value` must be a `SparseTensor`.
- if `column` is a `RealValuedColumn`, a feature with `key=column.name` whose `value` is a `Tensor`.
Loss is calculated by using mean squared error.
#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that `input_fn` and all hooks are executed inside a graph context, so they have to be written to be compatible with graph mode. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    feature_columns,
    model_dir=None,
    label_dimension=1,
    weight_column=None,
    optimizer='Ftrl',
    config=None,
    warm_start_from=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE,
    sparse_combiner='sum'
)
```
Initializes a `LinearRegressor` instance.
#### Args:
- `feature_columns`: An iterable containing all the feature columns used by the model. All items in the set should be instances of classes derived from `FeatureColumn`.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `label_dimension`: Number of regression targets per example. This is the size of the last dimension of the labels and logits `Tensor` objects (typically, these have shape `[batch_size, label_dimension]`).
- `weight_column`: A string or a `_NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It is used to down weight or boost examples during training. It will be multiplied by the loss of the example. If it is a string, it is used as a key to fetch weight tensor from the `features`. If it is a `_NumericColumn`, raw tensor is fetched by key `weight_column`.key, then `weight_column`.normalizer_fn is applied on it to get weight tensor.
- `optimizer`: An instance of `tf.Optimizer` or `tf.estimator.experimental.LinearSDCA` used to train the model. Can also be a string (one of 'Adagrad', 'Adam', 'Ftrl', 'RMSProp', 'SGD'), or callable. Defaults to FTRL `optimizer`.
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `warm_start_from`: A string filepath to a checkpoint to warm-start from, or a `WarmStartSettings` object to fully configure warm-starting. If the string filepath is provided instead of a `WarmStartSettings`, then all weights and biases are warm-started, and it is assumed that vocabularies and Tensor names are unchanged.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Describes how to reduce training loss over batch. Defaults to `SUM`.
- `sparse_combiner`: A string specifying how to reduce if a categorical column is multivalent. One of "mean", "sqrtn", and "sum" -- these are effectively different ways to do example-level normalization, which can be useful for bag-of-words features. for more details, see `tf.feature_column.linear_model`.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
