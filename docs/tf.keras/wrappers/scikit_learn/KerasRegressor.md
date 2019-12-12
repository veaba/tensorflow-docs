

## Class  `KerasRegressor` 
Implementation of the scikit-learn regressor API for Keras.

**别名** : [ `tf.compat.v1.keras.wrappers.scikit_learn.KerasRegressor` ](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasRegressor), [ `tf.compat.v2.keras.wrappers.scikit_learn.KerasRegressor` ](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasRegressor)

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L74-L77)

```
 __init__(
    build_fn=None,
    **sk_params
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

## 方法


###  `check_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L79-L106)

```
 check_params(params)
 
```

Checks for user typos in  `params` .

#### 参数：
- **`params`** : dictionary; the parameters to be checked


#### 加薪：
- **`ValueError`** : if any member of  `params`  is not a valid argument.


###  `filter_sk_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L170-L187)

```
 filter_sk_params(
    fn,
    override=None
)
 
```

Filters  `sk_params`  and returns those in  `fn` 's arguments.

#### 参数：
- **`fn`** : arbitrary function
- **`override`** : dictionary, values to override  `sk_params` 


#### 返回：
- **`res`** : dictionary containing variablesin both  `sk_params`  and  `fn` 's arguments.


###  `fit` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L134-L168)

```
 fit(
    x,
    y,
    **kwargs
)
 
```

Constructs a new model with  `build_fn`  &amp; fit the model to  `(x, y)` .

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Training samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`y`** : array-like, shape  `(n_samples,)`  or  `(n_samples, n_outputs)` True labels for  `x` .
- **`**kwargs`** : dictionary argumentsLegal arguments are the arguments of [ `Sequential.fit` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#fit)


#### 返回：
- **`history`** : objectdetails about the training history at each epoch.


###  `get_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L108-L119)

```
 get_params(**params)
 
```

获取此估计器的参数。

#### 参数：
- **`**params`** : ignored (exists for API compatibility).


#### 返回：
映射到其值的参数名字典。

###  `predict` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L318-L333)

```
 predict(
    x,
    **kwargs
)
 
```

返回给定测试数据的预测。

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Test samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`**kwargs`** : dictionary argumentsLegal arguments are the arguments of [ `Sequential.predict` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#predict).


#### 返回：
- **`preds`** : array-like, shape  `(n_samples,)` Predictions.


###  `score` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L335-L355)

```
 score(
    x,
    y,
    **kwargs
)
 
```

返回给定测试数据和标签的平均损失。

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Test samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`y`** : array-like, shape  `(n_samples,)` True labels for  `x` .
- **`**kwargs`** : dictionary argumentsLegal arguments are the arguments of [ `Sequential.evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#evaluate).


#### 返回：
- **`score`** : floatMean accuracy of predictions on  `x`  wrt.  `y` .


###  `set_params` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L121-L132)

```
 set_params(**params)
 
```

设置此估计器的参数。

#### 参数：
- **`**params`** : Dictionary of parameter names mapped to their values.


#### 返回：
自己

