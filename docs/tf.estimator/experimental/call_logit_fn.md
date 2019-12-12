Calls logit_fn (experimental).

**别名** : [ `tf.compat.v1.estimator.experimental.call_logit_fn` ](/api_docs/python/tf/estimator/experimental/call_logit_fn), [ `tf.compat.v2.estimator.experimental.call_logit_fn` ](/api_docs/python/tf/estimator/experimental/call_logit_fn)

```
 tf.estimator.experimental.call_logit_fn(
    logit_fn,
    features,
    mode,
    params,
    config
)
 
```

THIS FUNCTION IS EXPERIMENTAL. Keras layers/models are the recommended APIsfor logit and model composition.

A utility function that calls the provided logit_fn with the relevant subsetof provided arguments. Similar to tf.estimator._call_model_fn().

#### 参数：
- **`logit_fn`** : A logit_fn as defined above.
- **`features`** : The features dict.
- **`mode`** : TRAIN / EVAL / PREDICT ModeKeys.
- **`params`** : The hyperparameter dict.
- **`config`** : The configuration object.


#### 返回：
A logit Tensor, the output of logit_fn.

#### 加薪：
- **`ValueError`** : if logit_fn does not return a Tensor or a dictionary mappingstrings to Tensors.
