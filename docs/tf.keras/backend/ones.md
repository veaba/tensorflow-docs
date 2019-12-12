Instantiates an all-ones variable and returns it.

**别名** : [ `tf.compat.v1.keras.backend.ones` ](/api_docs/python/tf/keras/backend/ones), [ `tf.compat.v2.keras.backend.ones` ](/api_docs/python/tf/keras/backend/ones)

```
 tf.keras.backend.ones(
    shape,
    dtype=None,
    name=None
)
 
```

#### 参数：
- **`shape`** : Tuple of integers, shape of returned Keras variable.
- **`dtype`** : String, data type of returned Keras variable.
- **`name`** : String, name of returned Keras variable.


#### 返回：
A Keras variable, filled with  `1.0` .Note that if  `shape`  was symbolic, we cannot return a variable,and will return a dynamically-shaped tensor instead.

#### 示例：


```
     >>> from keras import backend as K
    >>> kvar = K.ones((3,4))
    >>> K.eval(kvar)
    array([[ 1.,  1.,  1.,  1.],
           [ 1.,  1.,  1.,  1.],
           [ 1.,  1.,  1.,  1.]], dtype=float32)
 
```

