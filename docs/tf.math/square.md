[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/square)  
---  
  
Defined in generated file: `python/ops/gen_math_ops.py`

Computes square of x element-wise.

### Aliases:

  * [`tf.compat.v1.math.square`](/api_docs/python/tf/math/square)
  * [`tf.compat.v1.square`](/api_docs/python/tf/math/square)
  * [`tf.compat.v2.math.square`](/api_docs/python/tf/math/square)
  * [`tf.compat.v2.square`](/api_docs/python/tf/math/square)
  * [`tf.square`](/api_docs/python/tf/math/square)

    
    
    tf.math.square(
        x,
        name=None
    )
    

### Used in the guide:

  * [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
  * [Eager execution](https://tensorflow.google.cn/guide/eager)

### Used in the tutorials:

  * [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)

I.e., \\(y = x * x = x^2\\).

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `x`.

If `x` is a `SparseTensor`, returns `SparseTensor(x.indices,
tf.math.square(x.values, ...), x.dense_shape)`

