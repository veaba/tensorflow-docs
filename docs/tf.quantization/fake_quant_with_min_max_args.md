Defined in generated file: `python/ops/gen_array_ops.py`
Fake-quantize the 'inputs' tensor, type float to 'outputs' tensor of same type.
### Aliases:
- `tf.compat.v1.fake_quant_with_min_max_args`
- `tf.compat.v1.quantization.fake_quant_with_min_max_args`
- `tf.compat.v2.quantization.fake_quant_with_min_max_args`

```
 tf.quantization.fake_quant_with_min_max_args(
    inputs,
    min=-6,
    max=6,
    num_bits=8,
    narrow_range=False,
    name=None
)
```
Attributes `[min; max]` define the clamping range for the `inputs` data. `inputs` values are quantized into the quantization range ([0; 2^`num_bits` - 1] when `narrow_range` is false and [1; 2^`num_bits` - 1] when it is true) and then de-quantized and output as floats in `[min; max]` interval. `num_bits` is the bitwidth of the quantization; between 2 and 16, inclusive.
