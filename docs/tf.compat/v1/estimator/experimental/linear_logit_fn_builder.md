[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/canned/linear.py)  
---  
  
Function builder for a linear logit_fn.

    
    
    tf.compat.v1.estimator.experimental.linear_logit_fn_builder(
        units,
        feature_columns,
        sparse_combiner='sum'
    )
    

#### Args:

  * **`units`** : An int indicating the dimension of the logit layer.
  * **`feature_columns`** : An iterable containing all the feature columns used by the model.
  * **`sparse_combiner`** : A string specifying how to reduce if a categorical column is multivalent. One of "mean", "sqrtn", and "sum".

#### Returns:

A logit_fn (see below).

