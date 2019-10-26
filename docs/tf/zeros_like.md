Creates a tensor with all elements set to zero.
### Aliases:
- tf.compat.v2.zeros_like

```
 tf.zeros_like(
    input,
    dtype=None,
    name=None
)
```
### Used in the tutorials:
- CycleGAN
- Deep Convolutional Generative Adversarial Network
- DeepDream
- Pix2Pix
Given a single tensor ``(tensor)``, this operation returns a tensor of the same type and shape as tensor with all elements set to zero. Optionally, you can use dtype to specify a new type for the returned tensor.
#### For example:

```
 tensor = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.zeros_like(tensor)  # [[0, 0, 0], [0, 0, 0]] with dtype=int32

If dtype of input `tensor` is `float32`, then the output is also of `float32`
tensor = tf.constant([[1.0, 2.0, 3.0], [4, 5, 6]])
tf.zeros_like(tensor)  # [[0., 0., 0.], [0., 0., 0.]] with dtype=floa32

If you want to specify desired dtype of output `tensor`, then specify it in
the op tensor = tf.constant([[1.0, 2.0, 3.0], [4, 5, 6]])
tf.zeros_like(tensor,dtype=tf.int32)  # [[0, 0, 0], [0, 0, 0]] with
dtype=int32
```
#### Args:
- input: A Tensor.
- dtype: A type for the returned Tensor. Must be float16, float32, float64, int8, uint8, int16, uint16, int32, int64, complex64, complex128, bool or string.
- name: A name for the operation (optional).
#### Returns:
A Tensor with all elements set to zero.
