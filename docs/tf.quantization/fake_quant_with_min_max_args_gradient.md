[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient)  
---  
  
Defined in generated file: `python/ops/gen_array_ops.py`

Compute gradients for a FakeQuantWithMinMaxArgs operation.

### Aliases:

  * [`tf.compat.v1.fake_quant_with_min_max_args_gradient`](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient)
  * [`tf.compat.v1.quantization.fake_quant_with_min_max_args_gradient`](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient)
  * [`tf.compat.v2.quantization.fake_quant_with_min_max_args_gradient`](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient)

    
    
    tf.quantization.fake_quant_with_min_max_args_gradient(
        gradients,
        inputs,
        min=-6,
        max=6,
        num_bits=8,
        narrow_range=False,
        name=None
    )
    

#### Args:

  * **`gradients`** : A `Tensor` of type `float32`. Backpropagated gradients above the FakeQuantWithMinMaxArgs operation.
  * **`inputs`** : A `Tensor` of type `float32`. Values passed as inputs to the FakeQuantWithMinMaxArgs operation.
  * **`min`** : An optional `float`. Defaults to `-6`.
  * **`max`** : An optional `float`. Defaults to `6`.
  * **`num_bits`** : An optional `int`. Defaults to `8`.
  * **`narrow_range`** : An optional `bool`. Defaults to `False`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `float32`.

