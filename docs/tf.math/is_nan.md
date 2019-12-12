返回x的哪些元素是nan。

**别名** : [ `tf.compat.v1.debugging.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v1.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v1.math.is_nan` ](/api_docs/python/tf/math/is_nan), [ `tf.compat.v2.math.is_nan` ](/api_docs/python/tf/math/is_nan)

```
 tf.math.is_nan(    x,    name=None) 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `bool` .

#### numpy兼容性
相当于np.isnan

