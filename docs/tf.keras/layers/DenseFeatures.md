

## Class  `DenseFeatures` 
A layer that produces a dense  `Tensor`  based on given  `feature_columns` .

Inherits From: [ `DenseFeatures` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/keras/layers/DenseFeatures)

### Used in the tutorials:
- [Load CSV data](https://tensorflow.google.cn/tutorials/load_data/csv)
- [Boosted trees using Estimators](https://tensorflow.google.cn/tutorials/estimator/boosted_trees)
- [Build a linear model with Estimators](https://tensorflow.google.cn/tutorials/estimator/linear)
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
Generally a single example in training data is described with FeatureColumns.At the first layer of the model, this column oriented data should be convertedto a single  `Tensor` .

This layer can be called multiple times with different features.

This is the V2 version of this layer that uses name_scopes to createvariables instead of variable_scopes. But this approach currently lackssupport for partitioned variables. In that case, use the V1 version instead.

#### Example:


```
 price = numeric_column('price')
keywords_embedded = embedding_column(
    categorical_column_with_hash_bucket("keywords", 10K), dimensions=16)
columns = [price, keywords_embedded, ...]
feature_layer = DenseFeatures(columns)

features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = feature_layer(features)
for units in [128, 64, 32]:
  dense_tensor = tf.keras.layers.Dense(units, activation='relu')(dense_tensor)
prediction = tf.keras.layers.Dense(1)(dense_tensor)
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/feature_column/dense_features_v2.py#L58-L85)

```
 __init__(
    feature_columns,
    trainable=True,
    name=None,
    **kwargs
)
 
```

Creates a DenseFeatures object.

#### Args:
- **`feature_columns`** : An iterable containing the FeatureColumns to use asinputs to your model. All items should be instances of classes derivedfrom  `DenseColumn`  such as  `numeric_column` ,  `embedding_column` , `bucketized_column` ,  `indicator_column` . If you have categoricalfeatures, you can wrap them with an  `embedding_column`  or `indicator_column` .
- **`trainable`** :  Boolean, whether the layer's variables will be updated viagradient descent during training.
- **`name`** : Name to give to the DenseFeatures.
- **`**kwargs`** : Keyword arguments to construct a layer.


#### Raises:
- **`ValueError`** : if an item in  `feature_columns`  is not a  `DenseColumn` .
