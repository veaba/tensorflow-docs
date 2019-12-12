Returns the next representable value of  `x1`  in the direction of  `x2` , element-wise.

**别名** : [ `tf.compat.v1.math.nextafter` ](/api_docs/python/tf/math/nextafter), [ `tf.compat.v2.math.nextafter` ](/api_docs/python/tf/math/nextafter)

```
 tf.math.nextafter(
    x1,
    x2,
    name=None
)
 
```

此操作返回与c++std：：nextafter函数相同的结果。

它还可以返回一个次正规数。

#### 参数：
- **`x1`** : A  `Tensor` . Must be one of the following types:  `float64` ,  `float32` .
- **`x2`** : A  `Tensor` . Must have the same type as  `x1` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x1` .

####CPP兼容性
相当于c++std：：nextafter函数。

