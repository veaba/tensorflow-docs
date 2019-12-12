Element-wise maximum of two tensors.

**别名** : [ `tf.compat.v1.keras.backend.maximum` ](/api_docs/python/tf/keras/backend/maximum), [ `tf.compat.v2.keras.backend.maximum` ](/api_docs/python/tf/keras/backend/maximum)

```
 tf.keras.backend.maximum(    x,    y) 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`y`** : Tensor or variable.


#### 返回：
A tensor with the element wise maximum value(s) of  `x`  and  `y` .

#### 示例：


```
     # maximum of two tensors
    >>> x = tf.Variable([[1, 2], [3, 4]])
    >>> y = tf.Variable([[2, 1], [0, -1]])
    >>> m = tf.keras.backend.maximum(x, y)
    >>> m
    <tf.Tensor: id=42, shape=(2, 2), dtype=int32, numpy=
    array([[2, 2],
           [3, 4]], dtype=int32)>
 
```

