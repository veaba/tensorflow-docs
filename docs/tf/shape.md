Returns the shape of a tensor.
### Aliases:
- tf.compat.v2.shape

```
 tf.shape(
    input,
    out_type=tf.dtypes.int32,
    name=None
)
```
### Used in the guide:
- Writing custom layers and models with Keras
### Used in the tutorials:
- Transformer model for language understanding
- Neural style transfer
- DeepDream
- Pix2Pix
This operation returns a 1-D integer tensor representing the shape of input.
#### For example:

```
 t = tf.constant([[[1, 1, 1], [2, 2, 2]], [[3, 3, 3], [4, 4, 4]]])
tf.shape(t)  # [2, 2, 3]
```
#### Args:
- input: A Tensor or SparseTensor.
- out_type: (Optional) The specified output type of the operation (int32 or int64). Defaults to tf.int32.
- name: A name for the operation (optional).
#### Returns:
A Tensor of type out_type.
