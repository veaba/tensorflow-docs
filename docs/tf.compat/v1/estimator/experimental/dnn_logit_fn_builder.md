Function builder for a dnn logit_fn.

```
 tf.compat.v1.estimator.experimental.dnn_logit_fn_builder(    units,    hidden_units,    feature_columns,    activation_fn,    dropout,    input_layer_partitioner,    batch_norm) 
```

#### 参数：
- **`units`** : An int indicating the dimension of the logit layer.  In theMultiHead case, this should be the sum of all component Heads' logitdimensions.
- **`hidden_units`** : Iterable of integer number of hidden units per layer.
- **`feature_columns`** : Iterable of  `feature_column._FeatureColumn`  model inputs.
- **`activation_fn`** : Activation function applied to each layer.
- **`dropout`** : When not  `None` , the probability we will drop out a givencoordinate.
- **`input_layer_partitioner`** : Partitioner for input layer.
- **`batch_norm`** : Whether to use batch normalization after each hidden layer.


#### 返回：
A logit_fn (see below).

#### 加薪：
- **`ValueError`** : If units is not an int.
