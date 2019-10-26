Computes the absolute value of a tensor.
### Aliases:
- tf.RaggedTensor.abs
- tf.Tensor.abs
- tf.abs
- tf.compat.v1.RaggedTensor.abs
- tf.compat.v1.Tensor.abs
- tf.compat.v1.abs
- tf.compat.v1.math.abs
- tf.compat.v2.RaggedTensor.abs
- tf.compat.v2.Tensor.abs
- tf.compat.v2.abs
- tf.compat.v2.math.abs

```
 tf.math.abs(
    x,
    name=None
)
```
### Used in the guide:
- Training checkpoints
### Used in the tutorials:
- CycleGAN
- Neural style transfer
- Better performance with tf.function
- Pix2Pix
Given a tensor of integer or floating-point values, this operation returns a tensor of the same type, where each element contains the absolute value of the corresponding element in the input.
Given a tensor x of complex numbers, this operation returns a tensor of type float32 or float64 that is the absolute value of each element in x. All elements in x must be complex numbers of the form
. The absolute value is computed as
. For example:

```
 x = tf.constant([[-2.25 + 4.75j], [-3.25 + 5.75j]])
tf.abs(x)  # [5.25594902, 6.60492229]
```
#### Args:
- x: A Tensor or SparseTensor of type float16, float32, float64, int32, int64, complex64 or complex128.
- name: A name for the operation (optional).
#### Returns:
A Tensor or SparseTensor the same size, type, and sparsity as x with absolute values. Note, for complex64 or complex128 input, the returned Tensor will be of type float32 or float64, respectively.
If x is a SparseTensor, returns SparseTensor(x.indices, tf.math.abs(x.values, ...), x.dense_shape)
