

## Class  `KerasClassifier` 
Implementation of the scikit-learn classifier API for Keras.

**别名** : [ `tf.compat.v1.keras.wrappers.scikit_learn.KerasClassifier` ](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasClassifier), [ `tf.compat.v2.keras.wrappers.scikit_learn.KerasClassifier` ](/api_docs/python/tf/keras/wrappers/scikit_learn/KerasClassifier)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L195-L223)

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


#### 加薪：
- **`ValueError`** : In case of invalid shape for  `y`  argument.


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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L225-L242)

```
 predict(
    x,
    **kwargs
)
 
```

返回给定测试数据的类预测。

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Test samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`**kwargs`** : dictionary argumentsLegal arguments are the argumentsof [ `Sequential.predict_classes` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Sequential#predict_classes).


#### 返回：
- **`preds`** : array-like, shape  `(n_samples,)` Class predictions.


###  `predict_proba` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L244-L270)

```
 predict_proba(
    x,
    **kwargs
)
 
```

返回给定测试数据的类概率估计。

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Test samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`**kwargs`** : dictionary argumentsLegal arguments are the argumentsof [ `Sequential.predict_classes` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Sequential#predict_classes).


#### 返回：
- **`proba`** : array-like, shape  `(n_samples, n_outputs)` Class probability estimates.In the case of binary classification,to match the scikit-learn API,will return an array of shape  `(n_samples, 2)` (instead of  `(n_sample, 1)`  as in Keras).


###  `score` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/wrappers/scikit_learn.py#L272-L310)

```
 score(
    x,
    y,
    **kwargs
)
 
```

返回给定测试数据和标签的平均精度。

#### 参数：
- **`x`** : array-like, shape  `(n_samples, n_features)` Test samples where  `n_samples`  is the number of samplesand  `n_features`  is the number of features.
- **`y`** : array-like, shape  `(n_samples,)`  or  `(n_samples, n_outputs)` True labels for  `x` .
- **`**kwargs`** : dictionary argumentsLegal arguments are the arguments of [ `Sequential.evaluate` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model#evaluate).


#### 返回：
- **`score`** : floatMean accuracy of predictions on  `x`  wrt.  `y` .


#### 加薪：
- **`ValueError`** : If the underlying model isn't configured tocompute accuracy. You should pass  `metrics=["accuracy"]`  tothe  `.compile()`  method of the model.


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

