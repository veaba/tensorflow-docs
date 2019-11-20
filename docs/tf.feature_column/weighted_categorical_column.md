[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/feature_column/weighted_categorical_column)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/feature_column/feature_column_v2.py#L1915-L1988)  
---|---  
  
Applies weight values to a `CategoricalColumn`.

### Aliases:

  * [`tf.compat.v1.feature_column.weighted_categorical_column`](/api_docs/python/tf/feature_column/weighted_categorical_column)
  * [`tf.compat.v2.feature_column.weighted_categorical_column`](/api_docs/python/tf/feature_column/weighted_categorical_column)

    
    
    tf.feature_column.weighted_categorical_column(
        categorical_column,
        weight_feature_key,
        dtype=tf.dtypes.float32
    )
    

Use this when each of your sparse inputs has both an ID and a value. For
example, if you're representing text documents as a collection of word
frequencies, you can provide 2 parallel sparse input features ('terms' and
'frequencies' below).

#### Example:

Input `tf.Example` objects:

    
    
    [
      features {
        feature {
          key: "terms"
          value {bytes_list {value: "very" value: "model"}}
        }
        feature {
          key: "frequencies"
          value {float_list {value: 0.3 value: 0.1}}
        }
      },
      features {
        feature {
          key: "terms"
          value {bytes_list {value: "when" value: "course" value: "human"}}
        }
        feature {
          key: "frequencies"
          value {float_list {value: 0.4 value: 0.1 value: 0.2}}
        }
      }
    ]
    
    
    
    categorical_column = categorical_column_with_hash_bucket(
        column_name='terms', hash_bucket_size=1000)
    weighted_column = weighted_categorical_column(
        categorical_column=categorical_column, weight_feature_key='frequencies')
    columns = [weighted_column, ...]
    features = tf.io.parse_example(..., features=make_parse_example_spec(columns))
    linear_prediction, _, _ = linear_model(features, columns)
    

This assumes the input dictionary contains a `SparseTensor` for key 'terms',
and a `SparseTensor` for key 'frequencies'. These 2 tensors must have the same
indices and dense shape.

#### Args:

  * **`categorical_column`** : A `CategoricalColumn` created by `categorical_column_with_*` functions.
  * **`weight_feature_key`** : String key for weight values.
  * **`dtype`** : Type of weights, such as [`tf.float32`](https://tensorflow.google.cn/api_docs/python/tf#float32). Only float and integer weights are supported.

#### Returns:

A `CategoricalColumn` composed of two sparse features: one represents id, the
other represents weight (value) of the id feature in that example.

#### Raises:

  * **`ValueError`** : if `dtype` is not convertible to float.

