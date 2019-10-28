## Class Estimator
Estimator class to train and evaluate TensorFlow models.
The `Estimator` object wraps a model which is specified by a `model_fn`, which, given inputs and a number of other parameters, returns the ops necessary to perform training, evaluation, or predictions.
All outputs (checkpoints, event files, etc.) are written to `model_dir`, or a subdirectory thereof. If `model_dir` is not set, a temporary directory is used.
[tf.estimator.RunConfig](https://tensorflow.google.cn/api_docs/python/tf/estimator/RunConfig)

The `params` argument contains hyperparameters. It is passed to the `model_fn`, if the `model_fn` has a parameter named "`params`", and to the input functions in the same manner. `Estimator` only passes `params` along, it does not inspect it. The structure of `params` is therefore entirely up to the developer.
None of `Estimator`'s methods can be overridden in subclasses (its constructor enforces this). Subclasses should use `model_fn` to configure the base class, and may add methods implementing specialized functionality.
#### Eager Compatibility
Calling methods of `Estimator` will work while eager execution is enabled. However, the `model_fn` and `input_fn` is not executed eagerly, `Estimator` will switch to graph mode before calling all user-provided functions (incl. hooks), so their code has to be compatible with graph mode execution. Note that `input_fn` code using `tf.data` generally works in both graph and eager modes.
## __init__
View source

```
 __init__(
    model_fn,
    model_dir=None,
    config=None,
    params=None,
    warm_start_from=None
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
