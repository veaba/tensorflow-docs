表示实值或数值特征。

**别名** : [ `tf.compat.v1.feature_column.numeric_column` ](/api_docs/python/tf/feature_column/numeric_column), [ `tf.compat.v2.feature_column.numeric_column` ](/api_docs/python/tf/feature_column/numeric_column)

```
 tf.feature_column.numeric_column(    key,    shape=(1,),    default_value=None,    dtype=tf.dtypes.float32,    normalizer_fn=None) 
```

### 在指南中使用：
- [tf.data: Build TensorFlow input pipelines](https://tensorflow.google.cn/guide/data)
- [Distributed training with TensorFlow](https://tensorflow.google.cn/guide/distributed_training)
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### 在教程中使用：
- [Gradient Boosted Trees: Model understanding](https://tensorflow.google.cn/tutorials/estimator/boosted_trees_model_understanding)
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
- [Boosted trees using Estimators](https://tensorflow.google.cn/tutorials/estimator/boosted_trees)
- [Build a linear model with Estimators](https://tensorflow.google.cn/tutorials/estimator/linear)
- [Premade Estimators](https://tensorflow.google.cn/tutorials/estimator/premade)


#### 示例：


```
 price = numeric_column('price')
columns = [price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)

# or
bucketized_price = bucketized_column(price, boundaries=[...])
columns = [bucketized_price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
 
```

#### 参数：
- **`key`** : A unique string identifying the input feature. It is used as thecolumn name and the dictionary key for feature parsing configs, feature `Tensor`  objects, and feature columns.
- **`shape`** : An iterable of integers specifies the shape of the  `Tensor` . Aninteger can be given which means a single dimension  `Tensor`  with givenwidth. The  `Tensor`  representing the column will have the shape of[batch_size] +  `shape` .
- **`default_value`** : A single value compatible with  `dtype`  or an iterable ofvalues compatible with  `dtype`  which the column takes on during `tf.Example`  parsing if data is missing. A default value of  `None`  willcause [ `tf.io.parse_example` ](https://tensorflow.google.cn/api_docs/python/tf/io/parse_example) to fail if an example does not contain thiscolumn. If a single value is provided, the same value will be applied asthe default value for every item. If an iterable of values is provided,the shape of the  `default_value`  should be equal to the given  `shape` .
- **`dtype`** : defines the type of values. Default value is [ `tf.float32` ](https://tensorflow.google.cn/api_docs/python/tf#float32). Must be anon-quantized, real integer or floating point type.
- **`normalizer_fn`** : If not  `None` , a function that can be used to normalize thevalue of the tensor after  `default_value`  is applied for parsing.Normalizer function takes the input  `Tensor`  as its argument, and returnsthe output  `Tensor` . (e.g. lambda x: (x - 3.0) / 4.2). Please note thateven though the most common use case of this function is normalization, itcan be used for any kind of Tensorflow transformations.


#### 返回：
A  `NumericColumn` .

#### 加薪：
- **`TypeError`** : if any dimension in shape is not an int
- **`ValueError`** : if any dimension in shape is not a positive integer
- **`TypeError`** : if  `default_value`  is an iterable but not compatible with  `shape` 
- **`TypeError`** : if  `default_value`  is not compatible with  `dtype` .
- **`ValueError`** : if  `dtype`  is not convertible to [ `tf.float32` ](https://tensorflow.google.cn/api_docs/python/tf#float32).
