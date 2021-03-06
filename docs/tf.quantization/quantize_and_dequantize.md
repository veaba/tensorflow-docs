量子化然后去量子化张量。

**别名** : [ `tf.compat.v1.quantization.quantize_and_dequantize` ](/api_docs/python/tf/quantization/quantize_and_dequantize), [ `tf.compat.v2.quantization.quantize_and_dequantize` ](/api_docs/python/tf/quantization/quantize_and_dequantize)

```
 tf.quantization.quantize_and_dequantize(
    input,
    input_min,
    input_max,
    signed_input=True,
    num_bits=8,
    range_given=False,
    round_mode='HALF_TO_EVEN',
    name=None,
    narrow_range=False
)
 
```

#### 参数：
- **`input`** : A  `Tensor`  to quantize and dequantize.
- **`input_min`** : If range_given=True, the minimum input value that needs to berepresented in the quantized representation.
- **`input_max`** : If range_given=True, the maximum input value that needs to berepresented in the quantized representation.
- **`signed_input`** : True if the quantization is signed or unsigned.
- **`num_bits`** : The bitwidth of the quantization.
- **`range_given`** : If true use  `input_min`  and  `input_max`  for the range of theinput, otherwise determine min and max from the input  `Tensor` .
- **`round_mode`** : Rounding mode when rounding from float values to quantized ones.
- **`name`** : Optional name for the operation.
- **`narrow_range`** : If true, then the absolute value of the quantized minimumvalue is the same as the quantized maximum value, instead of 1 greater.i.e. for 8 bit quantization, the minimum value is -127 instead of -128.


#### 返回：
A  `Tensor` . Each element is the result of quantizing and dequantizing thecorresponding element of  `input` .

