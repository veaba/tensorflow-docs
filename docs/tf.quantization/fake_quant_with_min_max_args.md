Fake-quantize the 'inputs' tensor, type float to 'outputs' tensor of same type.

**别名** : [ `tf.compat.v1.fake_quant_with_min_max_args` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args), [ `tf.compat.v1.quantization.fake_quant_with_min_max_args` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args), [ `tf.compat.v2.quantization.fake_quant_with_min_max_args` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args)

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

Attributes  `[min; max]`  define the clamping range for the  `inputs`  data. `inputs`  values are quantized into the quantization range ( `[0; 2^num_bits - 1]` when  `narrow_range`  is false and  `[1; 2^num_bits - 1]`  when it is true) andthen de-quantized and output as floats in  `[min; max]`  interval. `num_bits`  is the bitwidth of the quantization; between 2 and 16, inclusive.

Before quantization,  `min`  and  `max`  values are adjusted with the followinglogic.It is suggested to have  `min <= 0 <= max` . If  `0`  is not in the range of values,the behavior can be unexpected:If  `0 < min < max` :  `min_adj = 0`  and  `max_adj = max - min` .If  `min < max < 0` :  `min_adj = min - max`  and  `max_adj = 0` .If  `min <= 0 <= max` :  `scale = (max - min) / (2^num_bits - 1)` , `min_adj = scale * round(min / scale)`  and  `max_adj = max + min_adj - min` .

量化称为假，因为输出仍在浮点。

#### 参数：
- **`inputs`** : A  `Tensor`  of type  `float32` .
- **`min`** : An optional  `float` . Defaults to  `-6` .
- **`max`** : An optional  `float` . Defaults to  `6` .
- **`num_bits`** : An optional  `int` . Defaults to  `8` .
- **`narrow_range`** : An optional  `bool` . Defaults to  `False` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

