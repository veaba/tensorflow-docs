将张量重塑为指定形状。

**别名** : [ `tf.compat.v1.keras.backend.reshape` ](/api_docs/python/tf/keras/backend/reshape), [ `tf.compat.v2.keras.backend.reshape` ](/api_docs/python/tf/keras/backend/reshape)

```
 tf.keras.backend.reshape(
    x,
    shape
)
 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`shape`** : Target shape tuple.


#### 返回：
张量

#### 示例：


```
   >>> a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
  >>> a
  <tf.Tensor: id=32, shape=(4, 3), dtype=int32, numpy=
  array([[ 1,  2,  3],
         [ 4,  5,  6],
         [ 7,  8,  9],
         [10, 11, 12]], dtype=int32)>
  >>> tf.keras.backend.reshape(a, shape=(2, 6))
  <tf.Tensor: id=35, shape=(2, 6), dtype=int32, numpy=
  array([[ 1,  2,  3,  4,  5,  6],
         [ 7,  8,  9, 10, 11, 12]], dtype=int32)>
 
```

