Turn a nD tensor into a 2D tensor with same 0th dimension.

**别名** : [ `tf.compat.v1.keras.backend.batch_flatten` ](/api_docs/python/tf/keras/backend/batch_flatten), [ `tf.compat.v2.keras.backend.batch_flatten` ](/api_docs/python/tf/keras/backend/batch_flatten)

```
 tf.keras.backend.batch_flatten(x) 
```

In other words, it flattens each data samples of a batch.

#### 参数：
- **`x`** : A tensor or variable.


#### 返回：
张量

#### 示例：
通过折叠最后一个维度将三维张量展平到二维。

```
     >>> from tensorflow.keras import backend as K
    >>> x_batch = K.ones(shape=(2, 3, 4, 5))
    >>> x_batch_flatten = K.batch_flatten(x_batch)
    >>> K.int_shape(x_batch_flatten)
    (2, 60)
 
```

