Computes the one-hot representation of an integer tensor.

**别名** : [ `tf.compat.v1.keras.backend.one_hot` ](/api_docs/python/tf/keras/backend/one_hot), [ `tf.compat.v2.keras.backend.one_hot` ](/api_docs/python/tf/keras/backend/one_hot)

```
 tf.keras.backend.one_hot(
    indices,
    num_classes
)
 
```

#### 参数：
- **`indices`** : nD integer tensor of shape `(batch_size, dim1, dim2, ... dim(n-1))` 
- **`num_classes`** : Integer, number of classes to consider.


#### 返回：
(n + 1)D one hot representation of the inputwith shape  `(batch_size, dim1, dim2, ... dim(n-1), num_classes)` 

#### 返回：
The one-hot tensor.

