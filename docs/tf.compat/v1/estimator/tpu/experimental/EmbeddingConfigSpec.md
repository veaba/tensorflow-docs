[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/_tpu_estimator_embedding.py)  
---  
  
## Class `EmbeddingConfigSpec`

Class to keep track of the specification for TPU embeddings.

Pass this class to `tf.estimator.tpu.TPUEstimator` via the
`embedding_config_spec` parameter. At minimum you need to specify
`feature_columns` and `optimization_parameters`. The feature columns passed
should be created with some combination of
`tf.tpu.experimental.embedding_column` and
`tf.tpu.experimental.shared_embedding_columns`.

TPU embeddings do not support arbitrary Tensorflow optimizers and the main
optimizer you use for your model will be ignored for the embedding table
variables. Instead TPU embeddigns support a fixed set of predefined optimizers
that you can select from and set the parameters of. These include adagrad,
adam and stochastic gradient descent. Each supported optimizer has a
`Parameters` class in the
[`tf.tpu.experimental`](https://tensorflow.google.cn/api_docs/python/tf/tpu/experimental)
namespace.

    
    
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
    
    <h2 id="__new__"><code>__new__</code></h2>
    
    <a target="_blank" href="https://github.com/tensorflow/estimator/tree/master/tensorflow_estimator/python/estimator/tpu/_tpu_estimator_embedding.py">View source</a>
    
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
    

Creates an `EmbeddingConfigSpec` instance.

#### Args:

  * **`feature_columns`** : All embedding `FeatureColumn`s used by model.
  * **`optimization_parameters`** : An instance of `AdagradParameters`, `AdamParameters` or `StochasticGradientDescentParameters`. This optimizer will be applied to all embedding variables specified by `feature_columns`.
  * **`clipping_limit`** : (Optional) Clipping limit (absolute value).
  * **`pipeline_execution_with_tensor_core`** : setting this to `True` makes training faster, but trained model will be different if step N and step N+1 involve the same set of embedding IDs. Please see `tpu_embedding_configuration.proto` for details.
  * **`experimental_gradient_multiplier_fn`** : (Optional) A Fn taking global step as input returning the current multiplier for all embedding gradients.
  * **`feature_to_config_dict`** : A dictionary mapping features names to instances of the class `FeatureConfig`. Either features_columns or the pair of `feature_to_config_dict` and `table_to_config_dict` must be specified.
  * **`table_to_config_dict`** : A dictionary mapping features names to instances of the class `TableConfig`. Either features_columns or the pair of `feature_to_config_dict` and `table_to_config_dict` must be specified.
  * **`partition_strategy`** : A string, determining how tensors are sharded to the tpu hosts. See [`tf.nn.safe_embedding_lookup_sparse`](https://tensorflow.google.cn/api_docs/python/tf/nn/safe_embedding_lookup_sparse) for more details. Allowed value are `"div"` and `"mod"'. If`"mod"` is used, evaluation and exporting the model to CPU will not work as expected.

#### Returns:

An `EmbeddingConfigSpec` instance.

#### Raises:

  * **`ValueError`** : If the feature_columns are not specified.
  * **`TypeError`** : If the feature columns are not of ths correct type (one of _SUPPORTED_FEATURE_COLUMNS, _TPU_EMBEDDING_COLUMN_CLASSES OR _EMBEDDING_COLUMN_CLASSES).
  * **`ValueError`** : If `optimization_parameters` is not one of the required types.

## Properties

### `feature_columns`

### `optimization_parameters`

### `clipping_limit`

### `pipeline_execution_with_tensor_core`

### `experimental_gradient_multiplier_fn`

### `feature_to_config_dict`

### `table_to_config_dict`

### `partition_strategy`

