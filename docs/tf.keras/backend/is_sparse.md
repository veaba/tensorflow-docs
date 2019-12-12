返回张量是否为稀疏张量。

**别名** : [ `tf.compat.v1.keras.backend.is_sparse` ](/api_docs/python/tf/keras/backend/is_sparse), [ `tf.compat.v2.keras.backend.is_sparse` ](/api_docs/python/tf/keras/backend/is_sparse)

```
 tf.keras.backend.is_sparse(tensor)
 
```

#### 参数：
- **`tensor`** : A tensor instance.


#### 返回：
布尔值。

#### 示例：


```
     >>> from keras import backend as K
    >>> a = K.placeholder((2, 2), sparse=False)
    >>> print(K.is_sparse(a))
    False
    >>> b = K.placeholder((2, 2), sparse=True)
    >>> print(K.is_sparse(b))
    True
 
```

