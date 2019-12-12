Converts a class vector (integers) to binary class matrix.

**Aliases** : [ `tf.compat.v1.keras.utils.to_categorical` ](/api_docs/python/tf/keras/utils/to_categorical), [ `tf.compat.v2.keras.utils.to_categorical` ](/api_docs/python/tf/keras/utils/to_categorical)

```
 tf.keras.utils.to_categorical(
    y,
    num_classes=None,
    dtype='float32'
)
 
```

### Used in the guide:
- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)
E.g. for use with categorical_crossentropy.

#### Arguments:
- **`y`** : class vector to be converted into a matrix(integers from 0 to num_classes).
- **`num_classes`** : total number of classes.
- **`dtype`** : The data type expected by the input. Default:  `'float32'` .


#### Returns:
A binary matrix representation of the input. The classes axis is placedlast.

