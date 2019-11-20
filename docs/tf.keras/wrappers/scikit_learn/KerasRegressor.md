[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/wrappers/scikit_learn/KerasRegressor)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L314-L355)  
  
  
## Class `KerasRegressor`

Implementation of the scikit-learn regressor API for Keras.

### Aliases:

  * Class [`tf.compat.v1.keras.wrappers.scikit_learn.KerasRegressor`](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasRegressor)
  * Class [`tf.compat.v2.keras.wrappers.scikit_learn.KerasRegressor`](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasRegressor)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L74-L77)

    
    
    __init__(
        build_fn=None,
        **sk_params
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Methods

### `check_params`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L79-L106)

    
    
    check_params(params)
    

Checks for user typos in `params`.

#### Arguments:

  * **`params`** : dictionary; the parameters to be checked

#### Raises:

  * **`ValueError`** : if any member of `params` is not a valid argument.

### `filter_sk_params`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L170-L187)

    
    
    filter_sk_params(
        fn,
        override=None
    )
    

Filters `sk_params` and returns those in `fn`'s arguments.

#### Arguments:

  * **`fn`** : arbitrary function
  * **`override`** : dictionary, values to override `sk_params`

#### Returns:

  * **`res`** : dictionary containing variables in both `sk_params` and `fn`'s arguments.

### `fit`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L134-L168)

    
    
    fit(
        x,
        y,
        **kwargs
    )
    

Constructs a new model with `build_fn` & fit the model to `(x, y)`.

#### Arguments:

  * **`x`** : array-like, shape `(n_samples, n_features)` Training samples where `n_samples` is the number of samples and `n_features` is the number of features.
  * **`y`** : array-like, shape `(n_samples,)` or `(n_samples, n_outputs)` True labels for `x`.
  * **`**kwargs`** : dictionary arguments Legal arguments are the arguments of [`Sequential.fit`](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#fit)

#### Returns:

  * **`history`** : object details about the training history at each epoch.

### `get_params`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L108-L119)

    
    
    get_params(**params)
    

Gets parameters for this estimator.

#### Arguments:

  * **`**params`** : ignored (exists for API compatibility).

#### Returns:

Dictionary of parameter names mapped to their values.

### `predict`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L318-L333)

    
    
    predict(
        x,
        **kwargs
    )
    

Returns predictions for the given test data.

#### Arguments:

  * **`x`** : array-like, shape `(n_samples, n_features)` Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
  * **`**kwargs`** : dictionary arguments Legal arguments are the arguments of [`Sequential.predict`](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#predict).

#### Returns:

  * **`preds`** : array-like, shape `(n_samples,)` Predictions.

### `score`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L335-L355)

    
    
    score(
        x,
        y,
        **kwargs
    )
    

Returns the mean loss on the given test data and labels.

#### Arguments:

  * **`x`** : array-like, shape `(n_samples, n_features)` Test samples where `n_samples` is the number of samples and `n_features` is the number of features.
  * **`y`** : array-like, shape `(n_samples,)` True labels for `x`.
  * **`**kwargs`** : dictionary arguments Legal arguments are the arguments of [`Sequential.evaluate`](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#evaluate).

#### Returns:

  * **`score`** : float Mean accuracy of predictions on `x` wrt. `y`.

### `set_params`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L121-L132)

    
    
    set_params(**params)
    

Sets the parameters of this estimator.

#### Arguments:

  * **`**params`** : Dictionary of parameter names mapped to their values.

#### Returns:

self

