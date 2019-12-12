Converts the given  `type_value`  to a  `DType` .

**别名** : [ `tf.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype), [ `tf.compat.v1.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype), [ `tf.compat.v1.dtypes.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype), [ `tf.compat.v2.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype), [ `tf.compat.v2.dtypes.as_dtype` ](/api_docs/python/tf/dtypes/as_dtype)

```
 tf.dtypes.as_dtype(type_value)
 
```

#### 参数：
- **`type_value`** : A value that can be converted to a [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object. This maycurrently be a [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object, a [ `DataType` enum](https://tensorflow.google.cn/code/tensorflow/core/framework/types.proto),a string type name, or a  `numpy.dtype` .


#### 返回：
A  `DType`  corresponding to  `type_value` .

#### 加薪：
- **`TypeError`** : If  `type_value`  cannot be converted to a  `DType` .
