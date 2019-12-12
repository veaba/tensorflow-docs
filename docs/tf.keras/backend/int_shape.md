将张量或变量的形状作为int或none项的元组返回。

**别名** : [ `tf.compat.v1.keras.backend.int_shape` ](/api_docs/python/tf/keras/backend/int_shape), [ `tf.compat.v2.keras.backend.int_shape` ](/api_docs/python/tf/keras/backend/int_shape)

```
 tf.keras.backend.int_shape(x)
 
```

#### 参数：
- **`x`** : Tensor or variable.


#### 返回：
整数的元组（或无项）。

#### 示例：


```
     >>> from keras import backend as K
    >>> input = K.placeholder(shape=(2, 4, 5))
    >>> K.int_shape(input)
    (2, 4, 5)
    >>> val = np.array([[1, 2], [3, 4]])
    >>> kvar = K.variable(value=val)
    >>> K.int_shape(kvar)
    (2, 2)
 
```

