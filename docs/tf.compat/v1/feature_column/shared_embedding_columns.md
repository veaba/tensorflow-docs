List of dense columns that convert from sparse, categorical input.

```
 tf.compat.v1.feature_column.shared_embedding_columns(
    categorical_columns,
    dimension,
    combiner='mean',
    initializer=None,
    shared_embedding_collection_name=None,
    ckpt_to_load_from=None,
    tensor_name_in_ckpt=None,
    max_norm=None,
    trainable=True
)
 
```

This is similar to  `embedding_column` , except that it produces a list ofembedding columns that share the same embedding weights.

Use this when your inputs are sparse and of the same type (e.g. watched andimpression video IDs that share the same vocabulary), and you want to convertthem to a dense representation (e.g., to feed to a DNN).

Inputs must be a list of categorical columns created by any of the `categorical_column_*`  function. They must all be of the same type and havethe same arguments except  `key` . E.g. they can becategorical_column_with_vocabulary_file with the same vocabulary_file. Some orall columns could also be weighted_categorical_column.

下面是为dnnclassifier模型嵌入两个功能的示例：

```
 watched_video_id = categorical_column_with_vocabulary_file(
    'watched_video_id', video_vocabulary_file, video_vocabulary_size)
impression_video_id = categorical_column_with_vocabulary_file(
    'impression_video_id', video_vocabulary_file, video_vocabulary_size)
columns = shared_embedding_columns(
    [watched_video_id, impression_video_id], dimension=10)

estimator = tf.estimator.DNNClassifier(feature_columns=columns, ...)

label_column = ...
def input_fn():
  features = tf.io.parse_example(
      ..., features=make_parse_example_spec(columns + [label_column]))
  labels = features.pop(label_column.name)
  return features, labels

estimator.train(input_fn=input_fn, steps=100)
 
```

Here is an example using  `shared_embedding_columns`  with model_fn:

```
 def model_fn(features, ...):
  watched_video_id = categorical_column_with_vocabulary_file(
      'watched_video_id', video_vocabulary_file, video_vocabulary_size)
  impression_video_id = categorical_column_with_vocabulary_file(
      'impression_video_id', video_vocabulary_file, video_vocabulary_size)
  columns = shared_embedding_columns(
      [watched_video_id, impression_video_id], dimension=10)
  dense_tensor = input_layer(features, columns)
  # Form DNN layers, calculate loss, and return EstimatorSpec.
  ...
 
```

#### 参数：
- **`categorical_columns`** : List of categorical columns created by a `categorical_column_with_*`  function. These columns produce the sparse IDsthat are inputs to the embedding lookup. All columns must be of the sametype and have the same arguments except  `key` . E.g. they can becategorical_column_with_vocabulary_file with the same vocabulary_file.Some or all columns could also be weighted_categorical_column.
- **`dimension`** : An integer specifying dimension of the embedding, must be > 0.
- **`combiner`** : A string specifying how to reduce if there are multiple entries ina single row. Currently 'mean', 'sqrtn' and 'sum' are supported, with'mean' the default. 'sqrtn' often achieves good accuracy, in particularwith bag-of-words columns. Each of this can be thought as example levelnormalizations on the column. For more information, see `tf.embedding_lookup_sparse` .
- **`initializer`** : A variable initializer function to be used in embeddingvariable initialization. If not specified, defaults to `truncated_normal_initializer`  with mean  `0.0`  andstandard deviation  `1/sqrt(dimension)` .
- **`shared_embedding_collection_name`** : Optional name of the collection whereshared embedding weights are added. If not given, a reasonable name willbe chosen based on the names of  `categorical_columns` . This is also usedin  `variable_scope`  when creating shared embedding weights.
- **`ckpt_to_load_from`** : String representing checkpoint name/pattern from which torestore column weights. Required if  `tensor_name_in_ckpt`  is not  `None` .
- **`tensor_name_in_ckpt`** : Name of the  `Tensor`  in  `ckpt_to_load_from`  from whichto restore the column weights. Required if  `ckpt_to_load_from`  is not `None` .
- **`max_norm`** : If not  `None` , each embedding is clipped if its l2-norm is largerthan this value, before combining.
- **`trainable`** : Whether or not the embedding is trainable. Default is True.


#### 返回：
A list of dense columns that converts from sparse input. The order ofresults follows the ordering of  `categorical_columns` .

#### 加薪：
- **`ValueError`** : if  `dimension`  not > 0.
- **`ValueError`** : if any of the given  `categorical_columns`  is of different typeor has different arguments than the others.
- **`ValueError`** : if exactly one of  `ckpt_to_load_from`  and  `tensor_name_in_ckpt` is specified.
- **`ValueError`** : if  `initializer`  is specified and is not callable.
- **`RuntimeError`** : if eager execution is enabled.
