Converts the given  `type_value`  to a  `DType` .



### Aliases:

- [ `tf.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)

- [ `tf.compat.v1.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)

- [ `tf.compat.v1.dtypes.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)

- [ `tf.compat.v2.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)

- [ `tf.compat.v2.dtypes.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)



```
 tf.dtypes.as_dtype(type_value)
 
```



#### Args:

- **`type_value`** : A value that can be converted to a [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object. This may
currently be a [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object, a <a href="https://tensorflow.google.cn/code/tensorflow/core/framework/types.proto"> `DataType` 
enum</a>,
a string type name, or a  `numpy.dtype` .



#### Returns:
A  `DType`  corresponding to  `type_value` .



#### Raises:

- **`TypeError`** : If  `type_value`  cannot be converted to a  `DType` .

