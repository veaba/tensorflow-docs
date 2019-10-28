Defined in generated file: `python/ops/gen_array_ops.py`
Dequantize the 'input' tensor into a float Tensor.
### Aliases:
- `tf.compat.v1.dequantize`
- `tf.compat.v1.quantization.dequantize`
- `tf.compat.v2.quantization.dequantize`

```
 tf.quantization.dequantize(
    input,
    min_range,
    max_range,
    mode='MIN_COMBINED',
    name=None
)
```
[min_range, max_range] are scalar floats that specify the range for the 'input' data. The 'mode' attribute controls exactly which calculations are used to convert the float values to their quantized equivalents.
In 'MIN_COMBINED' mode, each value of the tensor will undergo the following:

```
 if T == qint8: in[i] += (range(T) + 1)/ 2.0
out[i] = min_range + (in[i]* (max_range - min_range) / range(T))
```
