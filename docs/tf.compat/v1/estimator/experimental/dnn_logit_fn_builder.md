Function builder for a dnn logit_fn.



```
 tf.compat.v1.estimator.experimental.dnn_logit_fn_builder(
    units,
    hidden_units,
    feature_columns,
    activation_fn,
    dropout,
    input_layer_partitioner,
    batch_norm
)
 
```



#### Args:

- **`units`** : An int indicating the dimension of the logit layer.  In the
MultiHead case, this should be the sum of all component Heads' logit
dimensions.

- **`hidden_units`** : Iterable of integer number of hidden units per layer.

- **`feature_columns`** : Iterable of  `feature_column._FeatureColumn`  model inputs.

- **`activation_fn`** : Activation function applied to each layer.

- **`dropout`** : When not  `None` , the probability we will drop out a given
coordinate.

- **`input_layer_partitioner`** : Partitioner for input layer.

- **`batch_norm`** : Whether to use batch normalization after each hidden layer.



#### Returns:
A logit_fn (see below).



#### Raises:

- **`ValueError`** : If units is not an int.

