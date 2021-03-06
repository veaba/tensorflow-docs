将float类型的“input”张量量化为“t”类型的“output”张量。

**别名** : [ `tf.compat.v1.quantization.quantize` ](/api_docs/python/tf/quantization/quantize), [ `tf.compat.v1.quantize` ](/api_docs/python/tf/quantization/quantize), [ `tf.compat.v2.quantization.quantize` ](/api_docs/python/tf/quantization/quantize)

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

[min_range, max_range] are scalar floats that specify the range forthe 'input' data. The 'mode' attribute controls exactly which calculations areused to convert the float values to their quantized equivalents.  The'round_mode' attribute controls which rounding tie-breaking algorithm is usedwhen rounding float values to their quantized equivalents.

In 'MIN_COMBINED' mode, each value of the tensor will undergo the following:

```
 out[i] = (in[i] - min_range) * range(T) / (max_range - min_range)
if T == qint8: out[i] -= (range(T) + 1) / 2.0
 
```

here  `range(T) = numeric_limits<T>::max() - numeric_limits<T>::min()` 

*MIN_COMBINED Mode Example*

Assume the input is type float and has a possible range of [0.0, 6.0] and theoutput type is quint8 ([0, 255]). The min_range and max_range values should bespecified as 0.0 and 6.0. Quantizing from float to quint8 will multiply eachvalue of the input by 255/6 and cast to quint8.

If the output type was qint8 ([-128, 127]), the operation will additionallysubtract each value by 128 prior to casting, so that the range of values alignswith the range of qint8.

If the mode is 'MIN_FIRST', then this approach is used:

```
 num_discrete_values = 1 << (# of bits in T)
range_adjust = num_discrete_values / (num_discrete_values - 1)
range = (range_max - range_min) * range_adjust
range_scale = num_discrete_values / range
quantized = round(input * range_scale) - round(range_min * range_scale) +
  numeric_limits<T>::min()
quantized = max(quantized, numeric_limits<T>::min())
quantized = min(quantized, numeric_limits<T>::max())
 
```

The biggest difference between this and MIN_COMBINED is that the minimum rangeis rounded first, before it's subtracted from the rounded value. WithMIN_COMBINED, a small bias is introduced where repeated iterations of quantizingand dequantizing will introduce a larger and larger error.

*SCALED mode Example*

 `SCALED`  mode matches the quantization approach used in `QuantizeAndDequantize{V2|V3}` .

If the mode is  `SCALED` , we do not use the full range of the output type,choosing to elide the lowest possible value for symmetry (e.g., output range is-127 to 127, not -128 to 127 for signed 8 bit quantization), so that 0.0 maps to0.

We first find the range of values in our tensor. Therange we use is always centered on 0, so we find m such that

```
   m = max(abs(input_min), abs(input_max))
 
```

Our input tensor range is then  `[-m, m]` .

Next, we choose our fixed-point quantization buckets,  `[min_fixed, max_fixed]` .If T is signed, this is

```
   num_bits = sizeof(T) * 8
  [min_fixed, max_fixed] =
      [-(1 << (num_bits - 1) - 1), (1 << (num_bits - 1)) - 1]
 
```

Otherwise, if T is unsigned, the fixed-point range is

```
   [min_fixed, max_fixed] = [0, (1 << num_bits) - 1]
 
```

From this we compute our scaling factor, s:

```
   s = (max_fixed - min_fixed) / (2 * m)
 
```

现在我们可以量化张量的元素：

```
 result = round(input * s)
 
```

One thing to watch out for is that the operator may choose to adjust therequested minimum and maximum values slightly during the quantization process,so you should always use the output ports as the range for further calculations.For example, if the requested minimum and maximum values are close to equal,they will be separated by a small epsilon value to prevent ill-formed quantizedbuffers from being created. Otherwise, you can end up with buffers where all thequantized values map to the same float value, which causes problems foroperations that have to perform further calculations on them.

#### 参数：
- **`input`** : A  `Tensor`  of type  `float32` .
- **`min_range`** : A  `Tensor`  of type  `float32` .The minimum scalar value possibly produced for the input.
- **`max_range`** : A  `Tensor`  of type  `float32` .The maximum scalar value possibly produced for the input.
- **`T`** : A [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) from:  `tf.qint8, tf.quint8, tf.qint32, tf.qint16, tf.quint16` .
- **`mode`** : An optional  `string`  from:  `"MIN_COMBINED", "MIN_FIRST", "SCALED"` . Defaults to  `"MIN_COMBINED"` .
- **`round_mode`** : An optional  `string`  from:  `"HALF_AWAY_FROM_ZERO", "HALF_TO_EVEN"` . Defaults to  `"HALF_AWAY_FROM_ZERO"` .
- **`name`** : A name for the operation (optional).


#### 返回：
A tuple of  `Tensor`  objects (output, output_min, output_max).

- **`output`** : A  `Tensor`  of type  `T` .
- **`output_min`** : A  `Tensor`  of type  `float32` .
- **`output_max`** : A  `Tensor`  of type  `float32` .
