在tf中同时允许v1和v2行为所需的兼容性实用程序。

**别名** : [ `tf.compat.v1.compat.dimension_at_index` ](/api_docs/python/tf/compat/dimension_at_index), [ `tf.compat.v1.dimension_at_index` ](/api_docs/python/tf/compat/dimension_at_index), [ `tf.compat.v2.compat.dimension_at_index` ](/api_docs/python/tf/compat/dimension_at_index)

```
 tf.compat.dimension_at_index(
    shape,
    index
)
 
```

Until the release of TF 2.0, we need the legacy behavior of  `TensorShape`  tocoexist with the new behavior. This utility is a bridge between the two.

If you want to retrieve the Dimension instance corresponding to a certainindex in a TensorShape instance, use this utility, like this:

```
 # If you had this in your V1 code:
dim = tensor_shape[i]

# Use `dimension_at_index` as direct replacement compatible with both V1 &amp; V2:
dim = dimension_at_index(tensor_shape, i)

# Another possibility would be this, but WARNING: it only works if the
# tensor_shape instance has a defined rank.
dim = tensor_shape.dims[i]  # `dims` may be None if the rank is undefined!

# In native V2 code, we recommend instead being more explicit:
if tensor_shape.rank is None:
  dim = Dimension(None)
else:
  dim = tensor_shape.dims[i]

# Being more explicit will save you from the following trap (present in V1):
# you might do in-place modifications to `dim` and expect them to be reflected
# in `tensor_shape[i]`, but they would not be (as the Dimension object was
# instantiated on the fly.
 
```

#### 参数：
- **`shape`** : A TensorShape instance.
- **`index`** : An integer index.


#### 返回：
一个维度对象。

