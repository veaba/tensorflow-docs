## Class BaselineEstimator
An estimator that can establish a simple baseline.
Inherits From: `Estimator`
### Aliases:
- Class `tf.compat.v2.estimator.BaselineEstimator`
The estimator uses a user-specified head.
This estimator ignores feature values and will learn to predict the average value of each label. E.g. for single-label classification problems, this will predict the probability distribution of the classes as seen in the labels. For multi-label classification problems, it will predict the ratio of examples that contain each class.
#### Example:

```
 # Build baseline multi-label classifier.
estimator = BaselineEstimator(
    head=tf.contrib.estimator.multi_label_head(n_classes=3))

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
estimator.train(input_fn=input_fn_train)

# Evaluates cross entropy between the test and train labels.
loss = estimator.evaluate(input_fn=input_fn_eval)["loss"]

# For each class, predicts the ratio of training examples that contain the
# class.
predictions = estimator.predict(new_samples)
```
Input of `train` and `evaluate` should have following features, otherwise there will be a `KeyError`:
- if `weight_column` is specified in the `head` constructor (and not None) for the `head` passed to BaselineEstimator's constructor, a feature with `key=weight_column` whose value is a `Tensor`.
## __init__
View source

```
 __init__(
    head,
    model_dir=None,
    optimizer='Ftrl',
    config=None
)
```
Initializes a BaselineEstimator instance.
#### Args:
- `head`: A `_Head` instance constructed with a method such as `tf.contrib.estimator.multi_label_head`.
- `model_dir`: Directory to save model parameters, graph and etc. This can also be used to load checkpoints from the directory into a estimator to continue training a previously saved model.
- `optimizer`: String, `tf.Optimizer` object, or callable that creates the `optimizer` to use for training. If not specified, will use `FtrlOptimizer` with a default learning rate of 0.3.
- `config`: `RunConfig` object to `config`ure the runtime settings.
## Properties
### config
### export_savedmodel
### model_dir
### model_fn
Returns the `model_fn` which is bound to `self.params`.
#### Returns:
