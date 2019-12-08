Defined in generated file:  `python/ops/gen_nn_ops.py` 

Computes Quantized Rectified Linear X:  `min(max(features, 0), max_value)` 



```
 tf.compat.v1.nn.quantized_relu_x(
    features,
    max_value,
    min_features,
    max_features,
    out_type=tf.dtypes.quint8,
    name=None
)
 
```



#### Args:

- **`features`** : A  `Tensor` . Must be one of the following types:  `qint8` ,  `quint8` ,  `qint32` ,  `qint16` ,  `quint16` .

- **`max_value`** : A  `Tensor`  of type  `float32` .

- **`min_features`** : A  `Tensor`  of type  `float32` .
The float value that the lowest quantized value represents.

- **`max_features`** : A  `Tensor`  of type  `float32` .
The float value that the highest quantized value represents.

- **`out_type`** : An optional [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.qint8, tf.quint8, tf.qint32, tf.qint16, tf.quint16` . Defaults to [ `tf.quint8` ](https://tensorflow.google.cn/api_docs/python/tf#quint8).

- **`name`** : A name for the operation (optional).



#### Returns:
A tuple of  `Tensor`  objects (activations, min_activations, max_activations).


- **`activations`** : A  `Tensor`  of type  `out_type` .

- **`min_activations`** : A  `Tensor`  of type  `float32` .

- **`max_activations`** : A  `Tensor`  of type  `float32` .

