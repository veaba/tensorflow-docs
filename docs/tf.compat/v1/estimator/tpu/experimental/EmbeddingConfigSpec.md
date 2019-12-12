

## Class  `EmbeddingConfigSpec` 
类以跟踪TPU嵌入的规范。

Pass this class to  `tf.estimator.tpu.TPUEstimator`  via the `embedding_config_spec`  parameter. At minimum you need to specify `feature_columns`  and  `optimization_parameters` . The feature columns passedshould be created with some combination of `tf.tpu.experimental.embedding_column`  and `tf.tpu.experimental.shared_embedding_columns` .

TPU embeddings do not support arbitrary Tensorflow optimizers and themain optimizer you use for your model will be ignored for the embedding tablevariables. Instead TPU embeddigns support a fixed set of predefined optimizersthat you can select from and set the parameters of. These include adagrad,adam and stochastic gradient descent. Each supported optimizer has a `Parameters`  class in the [ `tf.tpu.experimental` ](https://tensorflow.google.cn/api_docs/python/tf/tpu/experimental) namespace.

```
column_a = tf.feature_column.categorical_column_with_identity(...)
column_b = tf.feature_column.categorical_column_with_identity(...)
column_c = tf.feature_column.categorical_column_with_identity(...)
tpu_shared_columns = tf.tpu.experimental.shared_embedding_columns(
    [column_a, column_b], 10)
tpu_non_shared_column = tf.tpu.experimental.embedding_column(
    column_c, 10)
tpu_columns = [tpu_non_shared_column] + tpu_shared_columns
...
def model_fn(features):
  dense_features = tf.keras.layers.DenseFeature(tpu_columns)
  embedded_feature = dense_features(features)
  ...

estimator = tf.estimator.tpu.TPUEstimator(
    model_fn=model_fn,
    ...
    embedding_config_spec=tf.estimator.tpu.experimental.EmbeddingConfigSpec(
        column=tpu_columns,
        optimization_parameters=(
            tf.estimator.tpu.experimental.AdagradParameters(0.1))))
```

[View source](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/_tpu_estimator_embedding.py)

``` python
@staticmethod
__new__(
    cls,
    feature_columns=None,
    optimization_parameters=None,
    clipping_limit=None,
    pipeline_execution_with_tensor_core=False,
    experimental_gradient_multiplier_fn=None,
    feature_to_config_dict=None,
    table_to_config_dict=None,
    partition_strategy='div'
)
```

Creates an  `EmbeddingConfigSpec`  instance.

#### 参数：
- **`feature_columns`** : All embedding  `FeatureColumn` s used by model.
- **`optimization_parameters`** : An instance of  `AdagradParameters` , `AdamParameters`  or  `StochasticGradientDescentParameters` . Thisoptimizer will be applied to all embedding variables specified by `feature_columns` .
- **`clipping_limit`** : (Optional) Clipping limit (absolute value).
- **`pipeline_execution_with_tensor_core`** : setting this to  `True`  makes trainingfaster, but trained model will be different if step N and step N+1involve the same set of embedding IDs. Please see `tpu_embedding_configuration.proto`  for details.
- **`experimental_gradient_multiplier_fn`** : (Optional) A Fn taking global step asinput returning the current multiplier for all embedding gradients.
- **`feature_to_config_dict`** : A dictionary mapping features names to instancesof the class  `FeatureConfig` . Either features_columns or the pair of `feature_to_config_dict`  and  `table_to_config_dict`  must be specified.
- **`table_to_config_dict`** : A dictionary mapping features names to instances ofthe class  `TableConfig` . Either features_columns or the pair of `feature_to_config_dict`  and  `table_to_config_dict`  must be specified.
- **`partition_strategy`** : A string, determining how tensors are sharded to thetpu hosts. See [ `tf.nn.safe_embedding_lookup_sparse` ](https://tensorflow.google.cn/api_docs/python/tf/nn/safe_embedding_lookup_sparse) for more details.Allowed value are  `"div"`  and  `"mod"'. If` "mod"` is used, evaluationand exporting the model to CPU will not work as expected.


#### 返回：
An  `EmbeddingConfigSpec`  instance.

#### 加薪：
- **`ValueError`** : If the feature_columns are not specified.
- **`TypeError`** : If the feature columns are not of ths correct type (one of_SUPPORTED_FEATURE_COLUMNS, _TPU_EMBEDDING_COLUMN_CLASSES OR_EMBEDDING_COLUMN_CLASSES).
- **`ValueError`** : If  `optimization_parameters`  is not one of the required types.


## 属性


###  `feature_columns` 


###  `optimization_parameters` 


###  `clipping_limit` 


###  `pipeline_execution_with_tensor_core` 


###  `experimental_gradient_multiplier_fn` 


###  `feature_to_config_dict` 


###  `table_to_config_dict` 


###  `partition_strategy` 
