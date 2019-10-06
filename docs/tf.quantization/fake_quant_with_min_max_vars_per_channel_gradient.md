
Defined in generated file: python/ops/gen_array_ops.py

Compute gradients for a FakeQuantWithMinMaxVarsPerChannel operation.
### Aliases:
- `tf.compat.v1.fake_quant_with_min_max_vars_per_channel_gradient`
- `tf.compat.v1.quantization.fake_quant_with_min_max_vars_per_channel_gradient`
- `tf.compat.v2.quantization.fake_quant_with_min_max_vars_per_channel_gradient`

```
 tf.quantization.fake_quant_with_min_max_vars_per_channel_gradient(
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
- `gradients`:` `A` ``Tensor`` `of` `type` ``float32`.` `Backpropagate`d`` ``gradients`` `a`b`ove` `t`h`e` `FakeQuantWit`h`MinMaxVars` `operation`,`` `s`h`ape` `one` `of:` `[`d`]`,`` `[`b``,`` ``d`]`,`` `[`b``,`` ``h``,`` ``w``,`` ``d`].
- `inputs`:` `A` ``Tensor`` `of` `type` ``float32`.` `Values` `passe`d`` `as` ``inputs`` `to` `t`h`e` `FakeQuantWit`h`MinMaxVars` `operation`,`` `s`h`ape` `same` `as` ``gradients`.` `min`,`` `max:` `Quantization` `interval`,`` `floats` `of` `s`h`ape` `[`d`].
- `min`:` `A` ``Tensor`` `of` `type` ``float32`.
- `max`:` `A` ``Tensor`` `of` `type` ``float32`.
- `num_bits`:` `An` `optional` ``int`.` `Defaults` `to` ``8`.` `T`h`e` ``b`it`w`i`d`t`h`` `of` `t`h`e` `quantization;` ``b`et`w`een` `2` `an`d`` `16`,`` `inclusive.
- `narrow_range`:` `An` `optional` ``b`ool.` `Defaults` `to` ``False`.` `W`h`et`h`er` `to` `quantize` ``int`o` `2^`num_bits`` `-` `1` ``d`istinct` `values.
- `name`:` `A` ``name`` `for` `t`h`e` `operation` `(optional).
#### Returns:

A tuple of Tensor objects (backprops_wrt_input, backprop_wrt_min, backprop_wrt_max).
- `backprops_wrt_input`: A `Tensor` of type `float32`.
- `backprop_wrt_min`: A `Tensor` of type `float32`.
- `backprop_wrt_max`: A `Tensor` of type `float32`.
