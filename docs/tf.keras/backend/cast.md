将张量转换为不同的数据类型并返回它。

**别名** : [ `tf.compat.v1.keras.backend.cast` ](/api_docs/python/tf/keras/backend/cast), [ `tf.compat.v2.keras.backend.cast` ](/api_docs/python/tf/keras/backend/cast)

```
 tf.keras.backend.cast(
    x,
    dtype
)
 
```

可以强制转换keras变量，但它仍然返回keras张量。

#### 参数：
- **`x`** : Keras tensor (or variable).
- **`dtype`** : String, either ( `'float16'` ,  `'float32'` , or  `'float64'` ).


#### 返回：
Keras tensor with dtype  `dtype` .

#### 示例：
将float32变量转换为float64张量

```
     >>> import tensorflow as tf
    >>> from tensorflow.keras import backend as K
    >>> input = K.ones(shape=(1,3))
    >>> print(input)
    >>> cast_input = K.cast(input, dtype='float64')
    >>> print(cast_input)

    <tf.Variable 'Variable:0' shape=(1, 3) dtype=float32,
         numpy=array([[1., 1., 1.]], dtype=float32)>
    tf.Tensor([[1. 1. 1.]], shape=(1, 3), dtype=float64)
 
```

