[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/quantization)  
---  
  
Public API for tf.quantization namespace.

## Functions

[`dequantize(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/dequantize):
Dequantize the 'input' tensor into a float Tensor.

[`fake_quant_with_min_max_args(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_args):
Fake-quantize the 'inputs' tensor, type float to 'outputs' tensor of same
type.

[`fake_quant_with_min_max_args_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_args_gradient):
Compute gradients for a FakeQuantWithMinMaxArgs operation.

[`fake_quant_with_min_max_vars(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_vars):
Fake-quantize the 'inputs' tensor of type float via global float scalars `min`

[`fake_quant_with_min_max_vars_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_vars_gradient):
Compute gradients for a FakeQuantWithMinMaxVars operation.

[`fake_quant_with_min_max_vars_per_channel(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_vars_per_channel):
Fake-quantize the 'inputs' tensor of type float and one of the shapes: `[d]`,

[`fake_quant_with_min_max_vars_per_channel_gradient(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/fake_quant_with_min_max_vars_per_channel_gradient):
Compute gradients for a FakeQuantWithMinMaxVarsPerChannel operation.

[`quantize(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/quantize):
Quantize the 'input' tensor of type float to 'output' tensor of type 'T'.

[`quantize_and_dequantize(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/quantize_and_dequantize):
Quantizes then dequantizes a tensor.

[`quantized_concat(...)`](https://tensorflow.google.cn/api_docs/python/tf/quantization/quantized_concat):
Concatenates quantized tensors along one dimension.

