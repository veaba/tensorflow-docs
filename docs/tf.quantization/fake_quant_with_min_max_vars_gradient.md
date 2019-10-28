Defined in generated file: `python/ops/gen_array_ops.py`
Compute gradients for a FakeQuantWithMinMaxVars operation.
### Aliases:
- `tf.compat.v1.fake_quant_with_min_max_vars_gradient`
- `tf.compat.v1.quantization.fake_quant_with_min_max_vars_gradient`
- `tf.compat.v2.quantization.fake_quant_with_min_max_vars_gradient`

```
 tf.quantization.fake_quant_with_min_max_vars_gradient(
    gradients,
    inputs,
    min,
    max,
    num_bits=8,
    narrow_range=False,
    name=None
)
```
#### Args:
- `gradients`: A `Tensor` of type `float32`. Backpropagated `gradients` above the FakeQuantWithMinMaxVars operation.
- `inputs`: A `Tensor` of type `float32`. Values passed as `inputs` to the FakeQuantWithMinMaxVars operation. min, max: Quantization interval, scalar floats.
- `min`: A `Tensor` of type `float32`.
- `max`: A `Tensor` of type `float32`.
- `num_bits`: An optional `int`. Defaults to `8`. The bitwidth of the quantization; between 2 and `8`, inclusive.
- `narrow_range`: An optional `bool`. Defaults to `False`. Whether to quantize into 2^num_bits - 1 distinct values.
- `name`: A `name` for the operation (optional).
#### Returns:
A tuple of `Tensor` objects (backprops_wrt_input, backprop_wrt_min, backprop_wrt_max).
- `backprops_wrt_input`: A `Tensor` of type `float32`.
- `backprop_wrt_min`: A `Tensor` of type `float32`.
- `backprop_wrt_max`: A `Tensor` of type `float32`.
