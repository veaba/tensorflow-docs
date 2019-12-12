Returns the dtype of a Keras tensor or variable, as a string.

**别名** : [ `tf.compat.v1.keras.backend.dtype` ](/api_docs/python/tf/keras/backend/dtype), [ `tf.compat.v2.keras.backend.dtype` ](/api_docs/python/tf/keras/backend/dtype)

```
 tf.keras.backend.dtype(x)
 
```

#### 参数：
- **`x`** : Tensor or variable.


#### 返回：
String, dtype of  `x` .

#### 示例：


```
     >>> from keras import backend as K
    >>> K.dtype(K.placeholder(shape=(2,4,5)))
    'float32'
    >>> K.dtype(K.placeholder(shape=(2,4,5), dtype='float32'))
    'float32'
    >>> K.dtype(K.placeholder(shape=(2,4,5), dtype='float64'))
    'float64'
    # Keras variable
    >>> kvar = K.variable(np.array([[1, 2], [3, 4]]))
    >>> K.dtype(kvar)
    'float32'
    >>> kvar = K.variable(np.array([[1, 2], [3, 4]]), dtype='float32')
    >>> K.dtype(kvar)
    'float32'
 
```

