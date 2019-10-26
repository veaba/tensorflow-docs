Creates a tensor with all elements set to zero.
### Aliases:
- tf.compat.v1.zeros
- tf.compat.v2.zeros

```
 tf.zeros(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)
```
### Used in the guide:
- Writing custom layers and models with Keras
- The Keras functional API in TensorFlow
- Better performance with tf.function and AutoGraph
- Training checkpoints
- Migrate your TensorFlow 1 code to TensorFlow 2
### Used in the tutorials:
- Custom layers
- Better performance with tf.function
- Neural machine translation with attention
- Custom training: basics
- Custom training with tf.distribute.Strategy
This operation returns a tensor of type dtype with shape shape and all elements set to zero.
#### For example:

```
 tf.zeros([3, 4], tf.int32)  # [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
```
#### Args:
- shape: A list of integers, a tuple of integers, or a 1-D Tensor of type int32.
- dtype: The type of an element in the resulting Tensor.
- name: A name for the operation (optional).
#### Returns:
A Tensor with all elements set to zero.
