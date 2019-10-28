Quantize the 'input' tensor of type float to 'output' tensor of type 'T'.
### Aliases:
- `tf.compat.v1.quantization.quantize`
- `tf.compat.v1.quantize`
- `tf.compat.v2.quantization.quantize`

```
 tf.quantization.quantize(
    input,
    min_range,
    max_range,
    T,
    mode='MIN_COMBINED',
    round_mode='HALF_AWAY_FROM_ZERO',
    name=None
)
```
[min_range, max_range] are scalar floats that specify the range for the 'input' data. The 'mode' attribute controls exactly which calculations are used to convert the float values to their quantized equivalents. The 'round_mode' attribute controls which rounding tie-breaking algorithm is used when rounding float values to their quantized equivalents.
In 'MIN_COMBINED' mode, each value of the tensor will undergo the following:

```
 out[i] = (in[i] - min_range) * range(T) / (max_range - min_range)
if T == qint8: out[i] -= (range(T) + 1) / 2.0
```
