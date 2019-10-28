## Class BaselineRegressor
A regressor that can establish a simple baseline.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.BaselineRegressor`
This regressor ignores feature values and will learn to predict the average value of each label.
#### Example:

```
 # Build BaselineRegressor
regressor = BaselineRegressor()

# Input builders
def input_fn_train:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass

def input_fn_eval:
  # Returns tf.data.Dataset of (x, y) tuple where y represents label's class
  # index.
  pass

# Fit model.
regressor.train(input_fn=input_fn_train)

# Evaluate squared-loss between the test and train targets.
loss = regressor.evaluate(input_fn=input_fn_eval)["loss"]

# predict outputs the mean value seen during training.
predictions = regressor.predict(new_samples)
```
Input of `train` and `evaluate` should have following features, otherwise there will be a `KeyError`:
- if `weight_column` is not `None`, a feature with `key=weight_column` whose value is a `Tensor`.
#### Eager Compatibility
Estimators can be used while eager execution is enabled. Note that `input_fn` and all hooks are executed inside a graph context, so they have to be written to be compatible with graph mode. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    model_dir=None,
    label_dimension=1,
    weight_column=None,
    optimizer='Ftrl',
    config=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE
)
```
Initializes a BaselineRegressor instance.
#### Args:
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `label_dimension`: Number of regression targets per example. This is the size of the last dimension of the labels and logits `Tensor` objects (typically, these have shape `[batch_size, label_dimension]`).
- `weight_column`: A string or a `_NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It will be multiplied by the loss of the example.
- `optimizer`: String, `tf.Optimizer` object, or callable that creates the `optimizer` to use for training. If not specified, will use `FtrlOptimizer` with a default learning rate of 0.3.
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Describes how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`.
#### Returns:
A `BaselineRegressor` estimator.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
