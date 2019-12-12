将类向量（整数）转换为二进制类矩阵。

**别名** : [ `tf.compat.v1.keras.utils.to_categorical` ](/api_docs/python/tf/keras/utils/to_categorical), [ `tf.compat.v2.keras.utils.to_categorical` ](/api_docs/python/tf/keras/utils/to_categorical)

```
 tf.keras.utils.to_categorical(
    y,
    num_classes=None,
    dtype='float32'
)
 
```

### 在指南中使用：
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
E.g. for use with categorical_crossentropy.

#### 参数：
- **`y`** : class vector to be converted into a matrix(integers from 0 to num_classes).
- **`num_classes`** : total number of classes.
- **`dtype`** : The data type expected by the input. Default:  `'float32'` .


#### 返回：
A binary matrix representation of the input. The classes axis is placedlast.

