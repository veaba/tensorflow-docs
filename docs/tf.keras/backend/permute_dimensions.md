在张量中排列轴。

**别名** : [ `tf.compat.v1.keras.backend.permute_dimensions` ](/api_docs/python/tf/keras/backend/permute_dimensions), [ `tf.compat.v2.keras.backend.permute_dimensions` ](/api_docs/python/tf/keras/backend/permute_dimensions)

```
 tf.keras.backend.permute_dimensions(
    x,
    pattern
)
 
```

#### 参数：
- **`x`** : Tensor or variable.
- **`pattern`** : A tuple ofdimension indices, e.g.  `(0, 2, 1)` .


#### 返回：
张量

#### 示例：


```
   >>> a = tf.constant([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])
  >>> a
  <tf.Tensor: id=49, shape=(4, 3), dtype=int32, numpy=
  array([[ 1,  2,  3],
         [ 4,  5,  6],
         [ 7,  8,  9],
         [10, 11, 12]], dtype=int32)>
  >>> tf.keras.backend.permute_dimensions(a, pattern=(1, 0))
  <tf.Tensor: id=52, shape=(3, 4), dtype=int32, numpy=
  array([[ 1,  4,  7, 10],
         [ 2,  5,  8, 11],
         [ 3,  6,  9, 12]], dtype=int32)>
 
```

