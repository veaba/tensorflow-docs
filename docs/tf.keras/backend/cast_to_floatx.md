将numpy数组强制转换为默认的keras float类型。

**别名** : [ `tf.compat.v1.keras.backend.cast_to_floatx` ](/api_docs/python/tf/keras/backend/cast_to_floatx), [ `tf.compat.v2.keras.backend.cast_to_floatx` ](/api_docs/python/tf/keras/backend/cast_to_floatx)

```
 tf.keras.backend.cast_to_floatx(x)
 
```

#### 参数：
- **`x`** : Numpy array or TensorFlow tensor.


#### 返回：
The same array (Numpy array if  `x`  was a Numpy array, or TensorFlow tensorif  `x`  was a tensor), cast to its new type.

#### 示例：


```
     >>> from tensorflow.keras import backend as K
    >>> K.floatx()
    'float32'
    >>> arr = numpy.array([1.0, 2.0], dtype='float64')
    >>> arr.dtype
    dtype('float64')
    >>> new_arr = K.cast_to_floatx(arr)
    >>> new_arr
    array([ 1.,  2.], dtype=float32)
    >>> new_arr.dtype
    dtype('float32')
 
```

