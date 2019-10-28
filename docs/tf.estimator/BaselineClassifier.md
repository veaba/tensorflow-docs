## Class BaselineClassifier
A classifier that can establish a simple baseline.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.BaselineClassifier`
This classifier ignores feature values and will learn to predict the average value of each label. For single-label problems, this will predict the probability distribution of the classes as seen in the labels. For multi-label problems, this will predict the fraction of examples that are positive for each class.
#### Example:

```
 # Build BaselineClassifier
classifier = BaselineClassifier(n_classes=3)

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
classifier.train(input_fn=input_fn_train)

# Evaluate cross entropy between the test and train labels.
loss = classifier.evaluate(input_fn=input_fn_eval)["loss"]

# predict outputs the probability distribution of the classes as seen in
# training.
predictions = classifier.predict(new_samples)
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
    n_classes=2,
    weight_column=None,
    label_vocabulary=None,
    optimizer='Ftrl',
    config=None,
    loss_reduction=losses_utils.ReductionV2.SUM_OVER_BATCH_SIZE
)
```
Initializes a BaselineClassifier instance.
#### Args:
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `n_classes`: number of label classes. Default is binary classification. It must be greater than 1. Note: Class labels are integers representing the class index (i.e. values from 0 to `n_classes`-1). For arbitrary label values (e.g. string labels), convert to class indices first.
- `weight_column`: A string or a `_NumericColumn` created by `tf.feature_column.numeric_column` defining feature column representing weights. It will be multiplied by the loss of the example.
- `label_vocabulary`: Optional list of strings with size `[n_classes]` defining the label vocabulary. Only supported for `n_classes` > 2.
- `optimizer`: String, `tf.Optimizer` object, or callable that creates the `optimizer` to use for training. If not specified, will use `FtrlOptimizer` with a default learning rate of 0.3.
- `config`: `RunConfig` object to `config`ure the runtime settings.
- `loss_reduction`: One of `tf.losses.Reduction` except `NONE`. Describes how to reduce training loss over batch. Defaults to `SUM_OVER_BATCH_SIZE`.
#### Returns:
A `BaselineClassifier` estimator.
#### Raises:
- `ValueError`: If `n_classes` < 2.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
