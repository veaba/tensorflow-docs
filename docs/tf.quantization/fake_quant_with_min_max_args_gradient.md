计算fakequantwithminmaxargs操作的渐变。

**别名** : [ `tf.compat.v1.fake_quant_with_min_max_args_gradient` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient), [ `tf.compat.v1.quantization.fake_quant_with_min_max_args_gradient` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient), [ `tf.compat.v2.quantization.fake_quant_with_min_max_args_gradient` ](/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient)

```
 tf.quantization.fake_quant_with_min_max_args_gradient(    gradients,    inputs,    min=-6,    max=6,    num_bits=8,    narrow_range=False,    name=None) 
```

#### 参数：
- **`gradients`** : A  `Tensor`  of type  `float32` .Backpropagated gradients above the FakeQuantWithMinMaxArgs operation.
- **`inputs`** : A  `Tensor`  of type  `float32` .Values passed as inputs to the FakeQuantWithMinMaxArgs operation.
- **`min`** : An optional  `float` . Defaults to  `-6` .
- **`max`** : An optional  `float` . Defaults to  `6` .
- **`num_bits`** : An optional  `int` . Defaults to  `8` .
- **`narrow_range`** : An optional  `bool` . Defaults to  `False` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor`  of type  `float32` .

