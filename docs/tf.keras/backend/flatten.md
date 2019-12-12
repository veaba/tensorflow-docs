使张量变平。

**别名** : [ `tf.compat.v1.keras.backend.flatten` ](/api_docs/python/tf/keras/backend/flatten), [ `tf.compat.v2.keras.backend.flatten` ](/api_docs/python/tf/keras/backend/flatten)

```
 tf.keras.backend.flatten(x) 
```

#### 参数：
- **`x`** : A tensor or variable.


#### 返回：
A tensor, reshaped into 1-D

#### 示例：


```
   >>> b = tf.constant([[1, 2], [3, 4]])
  >>> b
  <tf.Tensor: id=102, shape=(2, 2), dtype=int32, numpy=
  array([[1, 2],
         [3, 4]], dtype=int32)>
  >>> tf.keras.backend.flatten(b)
  <tf.Tensor: id=105, shape=(4,), dtype=int32,
      numpy=array([1, 2, 3, 4], dtype=int32)>
 
```

