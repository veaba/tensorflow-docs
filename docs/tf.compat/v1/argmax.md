Returns the index with the largest value across axes of a tensor. (deprecated arguments)



### Aliases:

- [ `tf.compat.v1.math.argmax` ](/api_docs/python/tf/compat/v1/argmax)



```
 tf.compat.v1.argmax(
    input,
    axis=None,
    name=None,
    dimension=None,
    output_type=tf.dtypes.int64
)
 
```


<aside class="warning">**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(dimension)` . They will be removed in a future version.
Instructions for updating:
Use the  `axis`  argument instead</aside>
Note that in case of ties the identity of the return value is not guaranteed.



#### Usage:


```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmax(input = a)
c = tf.keras.backend.eval(b)
# c = 4
# here a[4] = 166.32 which is the largest element of a across axis 0
 
```



#### Args:

- **`input`** : A  `Tensor` . Must be one of the following types:  `float32` ,  `float64` ,  `int32` ,  `uint8` ,  `int16` ,  `int8` ,  `complex64` ,  `int64` ,  `qint8` ,  `quint8` ,  `qint32` ,  `bfloat16` ,  `uint16` ,  `complex128` ,  `half` ,  `uint32` ,  `uint64` .

- **`axis`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .
int32 or int64, must be in the range  `[-rank(input), rank(input))` .
Describes which axis of the input Tensor to reduce across. For vectors,
use axis = 0.

- **`output_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.int32, tf.int64` . Defaults to [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  of type  `output_type` .

