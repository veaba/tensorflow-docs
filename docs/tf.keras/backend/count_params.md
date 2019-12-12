返回变量或张量中元素的静态数目。

**别名** : [ `tf.compat.v1.keras.backend.count_params` ](/api_docs/python/tf/keras/backend/count_params), [ `tf.compat.v2.keras.backend.count_params` ](/api_docs/python/tf/keras/backend/count_params)

```
 tf.keras.backend.count_params(x) 
```

#### 参数：
- **`x`** : Variable or tensor.


#### 返回：
Integer, the number of scalars in  `x` .

#### 示例：


```
     >>> kvar = K.zeros((2,3))
    >>> K.count_params(kvar)
    6
    >>> K.eval(kvar)
    array([[ 0.,  0.,  0.],
           [ 0.,  0.,  0.]], dtype=float32)
 
```

