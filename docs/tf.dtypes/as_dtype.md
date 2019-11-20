[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/dtypes/as_dtype) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/dtypes.py#L690-L721)  
  
  
Converts the given `type_value` to a `DType`.

### Aliases:

  * [`tf.as_dtype`](/api_docs/python/tf/dtypes/as_dtype)
  * [`tf.compat.v1.as_dtype`](/api_docs/python/tf/dtypes/as_dtype)
  * [`tf.compat.v1.dtypes.as_dtype`](/api_docs/python/tf/dtypes/as_dtype)
  * [`tf.compat.v2.as_dtype`](/api_docs/python/tf/dtypes/as_dtype)
  * [`tf.compat.v2.dtypes.as_dtype`](/api_docs/python/tf/dtypes/as_dtype)

    
    
    tf.dtypes.as_dtype(type_value)
    

#### Args:

  * **`type_value`** : A value that can be converted to a [`tf.DType`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object. This may currently be a [`tf.DType`](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) object, a [`DataType` enum](https://tensorflow.google.cn/code/tensorflow/core/framework/types.proto), a string type name, or a `numpy.dtype`.

#### Returns:

A `DType` corresponding to `type_value`.

#### Raises:

  * **`TypeError`** : If `type_value` cannot be converted to a `DType`.

