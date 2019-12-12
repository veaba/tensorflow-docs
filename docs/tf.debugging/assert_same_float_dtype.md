Validate and return float type based on  `tensors`  and  `dtype` .

**别名** : [ `tf.compat.v1.assert_same_float_dtype` ](/api_docs/python/tf/debugging/assert_same_float_dtype), [ `tf.compat.v1.debugging.assert_same_float_dtype` ](/api_docs/python/tf/debugging/assert_same_float_dtype), [ `tf.compat.v2.debugging.assert_same_float_dtype` ](/api_docs/python/tf/debugging/assert_same_float_dtype)

```
 tf.debugging.assert_same_float_dtype(
    tensors=None,
    dtype=None
)
 
```

For ops such as matrix multiplication, inputs and weights must be of thesame float type. This function validates that all  `tensors`  are the same type,validates that type is  `dtype`  (if supplied), and returns the type. Type mustbe a floating point type. If neither  `tensors`  nor  `dtype`  is supplied,the function will return [ `dtypes.float32` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes#float32).

#### 参数：
- **`tensors`** : Tensors of input values. Can include  `None`  elements, which will beignored.
- **`dtype`** : Expected type.


#### 返回：
已验证类型。

#### 加薪：
- **`ValueError`** : if neither  `tensors`  nor  `dtype`  is supplied, or result is notfloat, or the common type of the inputs is not a floating point type.
