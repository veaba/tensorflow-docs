## Class KerasRegressor
Implementation of the scikit-learn regressor API for Keras.
### Aliases:
- Class `tf.compat.v1.keras.wrappers.scikit_learn.KerasRegressor`
- Class `tf.compat.v2.keras.wrappers.scikit_learn.KerasRegressor`
## __init__
View source

```
 __init__(
    build_fn=None,
    **sk_params
)
```
Initialize self. See help(type(self)) for accurate signature.
## Methods
### check_params
View source

```
 check_params(params)
```
Checks for user typos in `params`.
#### Arguments:
- `params`: dictionary; the parameters to be checked
#### Raises:
- `ValueError`: if any member of `params` is not a valid argument.
### filter_sk_params
View source

```
 filter_sk_params(
    fn,
    override=None
)
```
Filters `sk_params` and returns those in `fn`'s arguments.
#### Arguments:
- `fn`: arbitrary function
- `override`: dictionary, values to `override` `sk_params`
#### Returns:
- `res`: dictionary containing variables in both `sk_params` and `fn`'s arguments.
### fit
View source

```
 fit(
    x,
    y,
    **kwargs
)
```
Constructs a new model with `build_fn` & fit the model to `x, y)`.
#### Arguments:
- `x`: array-like, shape `n_samples, n_features)` Training samples where `n_samples` is the number of samples and `n_features` is the number of features.
- `y`: arra`y`-like, shape `n_samples,)` or `n_samples, n_outputs)` True labels for `x`.
#### Returns:
- `history`: object details about the training `history` at each epoch.
### get_params
View source

```
 get_params(**params)
```
Gets parameters for this estimator.
#### Arguments:
#### Returns:
Dictionary of parameter names mapped to their values.
### predict
View source

```
 predict(
    x,
    **kwargs
)
```
Returns predictions for the given test data.
#### Arguments:
- `x`: array-like, shape `n_samples, n_features)` Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
#### Returns:
- `preds`: array-like, shape `n_samples,)` Predictions.
### score
View source

```
 score(
    x,
    y,
    **kwargs
)
```
Returns the mean loss on the given test data and labels.
#### Arguments:
- `x`: array-like, shape `n_samples, n_features)` Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
- `y`: arra`y`-like, shape `n_samples,)` True labels for `x`.
#### Returns:
- `score`: float Mean accurac`y` of predictions on `x` wrt. `y`.
### set_params
View source

```
 set_params(**params)
```
Sets the parameters of this estimator.
#### Arguments:
#### Returns:
self
