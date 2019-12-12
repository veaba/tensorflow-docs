Computes an unsafe divide which returns 0 if the y is zero.

**别名** : [ `tf.compat.v1.div_no_nan` ](/api_docs/python/tf/math/divide_no_nan), [ `tf.compat.v1.math.divide_no_nan` ](/api_docs/python/tf/math/divide_no_nan), [ `tf.compat.v2.math.divide_no_nan` ](/api_docs/python/tf/math/divide_no_nan)

```
 tf.math.divide_no_nan(
    x,
    y,
    name=None
)
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` .
- **`y`** : A  `Tensor`  whose dtype is compatible with  `x` .
- **`name`** : A name for the operation (optional).


#### 返回：
The element-wise value of the x divided by y.

