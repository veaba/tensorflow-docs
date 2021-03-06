在tf中同时允许v1和v2行为所需的兼容性实用程序。

**别名** : [ `tf.compat.v1.compat.dimension_value` ](/api_docs/python/tf/compat/dimension_value), [ `tf.compat.v1.dimension_value` ](/api_docs/python/tf/compat/dimension_value), [ `tf.compat.v2.compat.dimension_value` ](/api_docs/python/tf/compat/dimension_value)

```
 tf.compat.dimension_value(dimension)
 
```

Until the release of TF 2.0, we need the legacy behavior of  `TensorShape`  tocoexist with the new behavior. This utility is a bridge between the two.

When accessing the value of a TensorShape dimension,use this utility, like this:

```
 # If you had this in your V1 code:
value = tensor_shape[i].value

# Use `dimension_value` as direct replacement compatible with both V1 &amp; V2:
value = dimension_value(tensor_shape[i])

# This would be the V2 equivalent:
value = tensor_shape[i]  # Warning: this will return the dim value in V2!
 
```

#### 参数：
- **`dimension`** : Either a  `Dimension`  instance, an integer, or None.


#### 返回：
A plain value, i.e. an integer or None.

