创建包含整数序列的一维张量。

**别名** : [ `tf.compat.v1.keras.backend.arange` ](/api_docs/python/tf/keras/backend/arange), [ `tf.compat.v2.keras.backend.arange` ](/api_docs/python/tf/keras/backend/arange)

```
 tf.keras.backend.arange(
    start,
    stop=None,
    step=1,
    dtype='int32'
)
 
```

The function arguments use the same convention asTheano's arange: if only one argument is provided,it is in fact the "stop" argument and "start" is 0.

The default type of the returned tensor is  `'int32'`  tomatch TensorFlow's default.

#### 参数：
- **`start`** : Start value.
- **`stop`** : Stop value.
- **`step`** : Difference between two successive values.
- **`dtype`** : Integer dtype to use.


#### 返回：
整数张量。

#### 示例：


```
   >>> tf.keras.backend.arange(start=0, stop=10, step=1.5)
  <tf.Tensor: id=96, shape=(7,), dtype=float32,
      numpy=array([0. , 1.5, 3. , 4.5, 6. , 7.5, 9. ], dtype=float32)>

 
```

