表示离散化的密集输入。

**别名** : [ `tf.compat.v1.feature_column.bucketized_column` ](/api_docs/python/tf/feature_column/bucketized_column), [ `tf.compat.v2.feature_column.bucketized_column` ](/api_docs/python/tf/feature_column/bucketized_column)

```
 tf.feature_column.bucketized_column(
    source_column,
    boundaries
)
 
```

### 在教程中使用：
- [Classify structured data with feature columns](https://tensorflow.google.cn/tutorials/structured_data/feature_columns)
Buckets include the left boundary, and exclude the right boundary. Namely, `boundaries=[0., 1., 2.]`  generates buckets  `(-inf, 0.)` ,  `[0., 1.)` , `[1., 2.)` , and  `[2., +inf)` .

For example, if the inputs are

```
 boundaries = [0, 10, 100]
input tensor = [[-5, 10000]
                [150,   10]
                [5,    100]]
 
```

然后输出将是

```
 output = [[0, 3]
          [3, 2]
          [1, 3]]
 
```

#### 示例：


```
 price = numeric_column('price')
bucketized_price = bucketized_column(price, boundaries=[...])
columns = [bucketized_price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)

# or
columns = [bucketized_price, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
dense_tensor = input_layer(features, columns)
 
```

 `bucketized_column`  can also be crossed with another categorical column using `crossed_column` :

```
 price = numeric_column('price')
# bucketized_column converts numerical feature to a categorical one.
bucketized_price = bucketized_column(price, boundaries=[...])
# 'keywords' is a string feature.
price_x_keywords = crossed_column([bucketized_price, 'keywords'], 50K)
columns = [price_x_keywords, ...]
features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
linear_prediction = linear_model(features, columns)
 
```

#### 参数：
- **`source_column`** : A one-dimensional dense column which is generated with `numeric_column` .
- **`boundaries`** : A sorted list or tuple of floats specifying the boundaries.


#### 返回：
A  `BucketizedColumn` .

#### 加薪：
- **`ValueError`** : If  `source_column`  is not a numeric column, or if it is notone-dimensional.
- **`ValueError`** : If  `boundaries`  is not a sorted list or tuple.
