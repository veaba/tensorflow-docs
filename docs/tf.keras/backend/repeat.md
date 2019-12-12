重复二维张量。

**别名** : [ `tf.compat.v1.keras.backend.repeat` ](/api_docs/python/tf/keras/backend/repeat), [ `tf.compat.v2.keras.backend.repeat` ](/api_docs/python/tf/keras/backend/repeat)

```
 tf.keras.backend.repeat(
    x,
    n
)
 
```

if  `x`  has shape (samples, dim) and  `n`  is  `2` ,the output will have shape  `(samples, 2, dim)` .

#### 参数：
- **`x`** : Tensor or variable.
- **`n`** : Python integer, number of times to repeat.


#### 返回：
张量

#### 示例：


```
   >>> b = tf.constant([[1, 2], [3, 4]])
  >>> b
  <tf.Tensor: id=78, shape=(2, 2), dtype=int32, numpy=
  array([[1, 2],
         [3, 4]], dtype=int32)>
  >>> tf.keras.backend.repeat(b, n=2)
  <tf.Tensor: id=82, shape=(2, 2, 2), dtype=int32, numpy=
  array([[[1, 2],
          [1, 2]],
         [[3, 4],
          [3, 4]]], dtype=int32)>
 
```

