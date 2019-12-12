Returns the number of axes in a tensor, as an integer.

**别名** : [ `tf.compat.v1.keras.backend.ndim` ](/api_docs/python/tf/keras/backend/ndim), [ `tf.compat.v2.keras.backend.ndim` ](/api_docs/python/tf/keras/backend/ndim)

```
 tf.keras.backend.ndim(x) 
```

#### 参数：
- **`x`** : Tensor or variable.


#### 返回：
Integer (scalar), number of axes.

#### 示例：


```
     >>> from keras import backend as K
    >>> input = K.placeholder(shape=(2, 4, 5))
    >>> val = np.array([[1, 2], [3, 4]])
    >>> kvar = K.variable(value=val)
    >>> K.ndim(input)
    3
    >>> K.ndim(kvar)
    2
 
```

