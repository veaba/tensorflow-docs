实例化变量并返回它。

**别名** : [ `tf.compat.v1.keras.backend.variable` ](/api_docs/python/tf/keras/backend/variable), [ `tf.compat.v2.keras.backend.variable` ](/api_docs/python/tf/keras/backend/variable)

```
 tf.keras.backend.variable(
    value,
    dtype=None,
    name=None,
    constraint=None
)
 
```

#### 参数：
- **`value`** : Numpy array, initial value of the tensor.
- **`dtype`** : Tensor type.
- **`name`** : Optional name string for the tensor.
- **`constraint`** : Optional projection function to beapplied to the variable after an optimizer update.


#### 返回：
变量实例（包括keras元数据）。

#### 示例：


```
     >>> import numpy as np
    >>> from keras import backend as K
    >>> val = np.array([[1, 2], [3, 4]])
    >>> kvar = K.variable(value=val, dtype='float64', name='example_var')
    >>> K.dtype(kvar)
    'float64'
    >>> print(kvar)
    example_var
    >>> kvar.eval()
    array([[ 1.,  2.],
           [ 3.,  4.]])
 
```

