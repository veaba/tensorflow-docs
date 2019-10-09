## Class KerasClassifier

Implementation of the scikit-learn classifier API for Keras.
### Aliases:
- Class `tf.compat.v1.keras.wrappers.scikit_learn.KerasClassifier`
- Class `tf.compat.v2.keras.wrappers.scikit_learn.KerasClassifier`
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L74-L77)


```
 __init__(
    build_fn=None,
    **sk_params
)
```

Initialize self. See help(type(self)) for accurate signature.
## Methods
### check_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L79-L106)


```
 check_params(params)
```

Checks for user typos in params.
#### Arguments:
- `params`: dictionary; the parameters to be checked
#### Raises:
- `ValueError`: if any member of `params` is not a valid argument.
### filter_sk_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L170-L187)


```
 filter_sk_params(
    fn,
    override=None
)
```

Filters sk_params and returns those in fn's arguments.
#### Arguments:
- `fn`: arbitrary function
- `override`: dictionary, values to `override` `sk_params`
#### Returns:
- `res`: dictionary containing variables in both `sk_params` and `fn`'s arguments.
### fit
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L195-L223)


```
 fit(
    x,
    y,
    **kwargs
)
```

Constructs a new model with build_fn & fit the model to (x, y).
#### Arguments:
- `x`: array-like, shape (`n_samples, n_features`) Training samples where `n_samples` is the number of samples and `n_features` is the number of features.
- `y`: arra`y`-like, shape (`n_samples`,) or (`n_samples`, n_outputs) True labels for `x`.
#### Returns:
- `history`: object details about the training `history` at each epoch.
#### Raises:
- `ValueError`: In case of invalid shape for `y` argument.
### get_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L108-L119)


```
 get_params(**params)
```

Gets parameters for this estimator.
#### Arguments:
#### Returns:

Dictionary of parameter names mapped to their values.
### predict
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L225-L242)


```
 predict(
    x,
    **kwargs
)
```

Returns the class predictions for the given test data.
#### Arguments:
- `x`: array-like, shape (`n_samples, n_features`) Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
#### Returns:
- `preds`: array-like, shape (`n_samples,`) Class predictions.
### predict_proba
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L244-L270)


```
 predict_proba(
    x,
    **kwargs
)
```

Returns class probability estimates for the given test data.
#### Arguments:
- `x`: array-like, shape (`n_samples, n_features`) Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
#### Returns:
- `proba`: array-like, shape (`n_samples, n_outputs`) Class `proba`bility estimates. In the case of binary classification, to match the scikit-learn API, will return an array of shape (`n_samples, 2`) (instead of (`n_sample, 1`) as in Keras).
### score
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L272-L310)


```
 score(
    x,
    y,
    **kwargs
)
```

Returns the mean accuracy on the given test data and labels.
#### Arguments:
- `x`: array-like, shape (`n_samples, n_features`) Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
- `y`: arra`y`-like, shape (`n_samples`,) or (`n_samples`, n_outputs) True labels for `x`.
#### Returns:
- `score`: float Mean accurac`y` of predictions on `x` wrt. `y`.
#### Raises:
- `ValueError`: If the underlying model isn't configured to compute accuracy. You should pass metrics=["accuracy"] to the `.compile`() method of the model.
### set_params
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L121-L132)


```
 set_params(**params)
```

Sets the parameters of this estimator.
#### Arguments:
#### Returns:

self