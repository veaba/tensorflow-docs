实例化占位符张量并返回它。

**别名** : [ `tf.compat.v1.keras.backend.placeholder` ](/api_docs/python/tf/keras/backend/placeholder), [ `tf.compat.v2.keras.backend.placeholder` ](/api_docs/python/tf/keras/backend/placeholder)

```
 tf.keras.backend.placeholder(
    shape=None,
    ndim=None,
    dtype=None,
    sparse=False,
    name=None,
    ragged=False
)
 
```

#### 参数：
- **`shape`** : Shape of the placeholder(integer tuple, may include  `None`  entries).
- **`ndim`** : Number of axes of the tensor.At least one of { `shape` ,  `ndim` } must be specified.If both are specified,  `shape`  is used.
- **`dtype`** : Placeholder type.
- **`sparse`** : Boolean, whether the placeholder should have a sparse type.
- **`name`** : Optional name string for the placeholder.
- **`ragged`** : Boolean, whether the placeholder should have a ragged type.In this case, values of 'None' in the 'shape' argument representragged dimensions. For more information about RaggedTensors, see this[guide](https://tensorflow.google.cn/guide/ragged_tensors).


#### 加薪：
- **`ValueError`** : If called with eager execution
- **`ValueError`** : If called with sparse = True and ragged = True.


#### 返回：
Tensor实例（包括Keras元数据）。

#### 示例：


```
     >>> from keras import backend as K
    >>> input_ph = K.placeholder(shape=(2, 4, 5))
    >>> input_ph
    <tf.Tensor 'Placeholder_4:0' shape=(2, 4, 5) dtype=float32>
 
```

