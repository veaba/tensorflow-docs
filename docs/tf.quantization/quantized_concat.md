[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/quantization/quantized_concat)  
---  
  
Defined in generated file: `python/ops/gen_array_ops.py`

Concatenates quantized tensors along one dimension.

### Aliases:

  * [`tf.compat.v1.quantization.quantized_concat`](/api_docs/python/tf/quantization/quantized_concat)
  * [`tf.compat.v1.quantized_concat`](/api_docs/python/tf/quantization/quantized_concat)
  * [`tf.compat.v2.quantization.quantized_concat`](/api_docs/python/tf/quantization/quantized_concat)

    
    
    tf.quantization.quantized_concat(
        concat_dim,
        values,
        input_mins,
        input_maxes,
        name=None
    )
    

#### Args:

  * **`concat_dim`** : A `Tensor` of type `int32`. 0-D. The dimension along which to concatenate. Must be in the range [0, rank(values)).
  * **`values`** : A list of at least 2 `Tensor` objects with the same type. The `N` Tensors to concatenate. Their ranks and types must match, and their sizes must match in all dimensions except `concat_dim`.
  * **`input_mins`** : A list with the same length as `values` of `Tensor` objects with type `float32`. The minimum scalar values for each of the input tensors.
  * **`input_maxes`** : A list with the same length as `values` of `Tensor` objects with type `float32`. The maximum scalar values for each of the input tensors.
  * **`name`** : A name for the operation (optional).

#### Returns:

A tuple of `Tensor` objects (output, output_min, output_max).

  * **`output`** : A `Tensor`. Has the same type as `values`.
  * **`output_min`** : A `Tensor` of type `float32`.
  * **`output_max`** : A `Tensor` of type `float32`.

