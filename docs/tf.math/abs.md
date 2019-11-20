[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/abs) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L245-L278)  
---|---  
  
Computes the absolute value of a tensor.

### Aliases:

  * [`tf.RaggedTensor. **abs**`](/api_docs/python/tf/RaggedTensor#__abs__)
  * [`tf.Tensor. **abs**`](/api_docs/python/tf/Tensor#__abs__)
  * [`tf.abs`](/api_docs/python/tf/math/abs)
  * [`tf.compat.v1.RaggedTensor. **abs**`](/api_docs/python/tf/RaggedTensor#__abs__)
  * [`tf.compat.v1.Tensor. **abs**`](/api_docs/python/tf/Tensor#__abs__)
  * [`tf.compat.v1.abs`](/api_docs/python/tf/math/abs)
  * [`tf.compat.v1.math.abs`](/api_docs/python/tf/math/abs)
  * [`tf.compat.v2.RaggedTensor. **abs**`](/api_docs/python/tf/RaggedTensor#__abs__)
  * [`tf.compat.v2.Tensor. **abs**`](/api_docs/python/tf/Tensor#__abs__)
  * [`tf.compat.v2.abs`](/api_docs/python/tf/math/abs)
  * [`tf.compat.v2.math.abs`](/api_docs/python/tf/math/abs)

    
    
    tf.math.abs(
        x,
        name=None
    )
    

### Used in the guide:

  * [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)

### Used in the tutorials:

  * [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
  * [Neural style transfer](https://tensorflow.google.cn/tutorials/generative/style_transfer)
  * [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
  * [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)

Given a tensor of integer or floating-point values, this operation returns a
tensor of the same type, where each element contains the absolute value of the
corresponding element in the input.

Given a tensor `x` of complex numbers, this operation returns a tensor of type
`float32` or `float64` that is the absolute value of each element in `x`. All
elements in `x` must be complex numbers of the form \\(a + bj\\). The absolute
value is computed as \\( \sqrt{a^2 + b^2}\\). For example:

    
    
    x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])
    tf.abs(x)  # [5.25594902, 6.60492229]
    

#### Args:

  * **`x`** : A `Tensor` or `SparseTensor` of type `float16`, `float32`, `float64`, `int32`, `int64`, `complex64` or `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` or `SparseTensor` the same size, type, and sparsity as `x` with
absolute values. Note, for `complex64` or `complex128` input, the returned
`Tensor` will be of type `float32` or `float64`, respectively.

If `x` is a `SparseTensor`, returns `SparseTensor(x.indices,
tf.math.abs(x.values, ...), x.dense_shape)`

