将稀疏张量转换为密集张量并返回它。

**别名** : [ `tf.compat.v1.keras.backend.to_dense` ](/api_docs/python/tf/keras/backend/to_dense), [ `tf.compat.v2.keras.backend.to_dense` ](/api_docs/python/tf/keras/backend/to_dense)

```
 tf.keras.backend.to_dense(tensor)
 
```

#### 参数：
- **`tensor`** : A tensor instance (potentially sparse).


#### 返回：
密集的张量。

#### 示例：


```
     >>> from keras import backend as K
    >>> b = K.placeholder((2, 2), sparse=True)
    >>> print(K.is_sparse(b))
    True
    >>> c = K.to_dense(b)
    >>> print(K.is_sparse(c))
    False
 
```

