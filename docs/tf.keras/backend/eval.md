计算变量的值。

**别名** : [ `tf.compat.v1.keras.backend.eval` ](/api_docs/python/tf/keras/backend/eval), [ `tf.compat.v2.keras.backend.eval` ](/api_docs/python/tf/keras/backend/eval)

```
 tf.keras.backend.eval(x)
 
```

#### 参数：
- **`x`** : A variable.


#### 返回：
一个核阵列。

#### 示例：


```
     >>> from keras import backend as K
    >>> kvar = K.variable(np.array([[1, 2], [3, 4]]), dtype='float32')
    >>> K.eval(kvar)
    array([[ 1.,  2.],
           [ 3.,  4.]], dtype=float32)
 
```

