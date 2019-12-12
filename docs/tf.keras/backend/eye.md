实例化一个标识矩阵并返回它。

**别名** : [ `tf.compat.v1.keras.backend.eye` ](/api_docs/python/tf/keras/backend/eye), [ `tf.compat.v2.keras.backend.eye` ](/api_docs/python/tf/keras/backend/eye)

```
 tf.keras.backend.eye(
    size,
    dtype=None,
    name=None
)
 
```

#### 参数：
- **`size`** : Integer, number of rows/columns.
- **`dtype`** : String, data type of returned Keras variable.
- **`name`** : String, name of returned Keras variable.


#### 返回：
A Keras variable, an identity matrix.

#### 示例：


```
     >>> from keras import backend as K
    >>> kvar = K.eye(3)
    >>> K.eval(kvar)
    array([[ 1.,  0.,  0.],
           [ 0.,  1.,  0.],
           [ 0.,  0.,  1.]], dtype=float32)
 
```

