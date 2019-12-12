Function builder for a linear logit_fn.

```
 tf.compat.v1.estimator.experimental.linear_logit_fn_builder(    units,    feature_columns,    sparse_combiner='sum') 
```

#### 参数：
- **`units`** : An int indicating the dimension of the logit layer.
- **`feature_columns`** : An iterable containing all the feature columns used bythe model.
- **`sparse_combiner`** : A string specifying how to reduce if a categorical columnis multivalent.  One of "mean", "sqrtn", and "sum".


#### 返回：
A logit_fn (see below).

