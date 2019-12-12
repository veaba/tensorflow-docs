Compute the cumulative product of the tensor  `x`  along  `axis` .

**别名** : [ `tf.compat.v1.cumprod` ](/api_docs/python/tf/math/cumprod), [ `tf.compat.v1.math.cumprod` ](/api_docs/python/tf/math/cumprod), [ `tf.compat.v2.math.cumprod` ](/api_docs/python/tf/math/cumprod)

```
 tf.math.cumprod(
    x,
    axis=0,
    exclusive=False,
    reverse=False,
    name=None
)
 
```

By default, this op performs an inclusive cumprod, which means that thefirst element of the input is identical to the first element of the output:

```
 tf.math.cumprod([a, b, c])  # [a, a * b, a * b * c]
 
```

By setting the  `exclusive`  kwarg to  `True` , an exclusive cumprod isperformedinstead:

```
 tf.math.cumprod([a, b, c], exclusive=True)  # [1, a, a * b]
 
```

By setting the  `reverse`  kwarg to  `True` , the cumprod is performed in theopposite direction:

```
 tf.math.cumprod([a, b, c], reverse=True)  # [a * b * c, b * c, c]
 
```

This is more efficient than using separate [ `tf.reverse` ](https://tensorflow.google.cn/api_docs/python/tf/reverse) ops.The  `reverse`  and  `exclusive`  kwargs can also be combined:

```
 tf.math.cumprod([a, b, c], exclusive=True, reverse=True)  # [b * c, c, 1]
 
```

#### 参数：
- **`x`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` , `int64` ,  `int32` ,  `uint8` ,  `uint16` ,  `int16` ,  `int8` ,  `complex64` , `complex128` ,  `qint8` ,  `quint8` ,  `qint32` ,  `half` .
- **`axis`** : A  `Tensor`  of type  `int32`  (default: 0). Must be in the range `[-rank(x), rank(x))` .
- **`exclusive`** : If  `True` , perform exclusive cumprod.
- **`reverse`** : A  `bool`  (default: False).
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `x` .

