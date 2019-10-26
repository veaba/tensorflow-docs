Computes the sum of elements across dimensions of a tensor.
### Aliases:
- tf.compat.v2.math.reduce_sum
- tf.compat.v2.reduce_sum
- tf.reduce_sum

```
 tf.math.reduce_sum(
    input_tensor,
    axis=None,
    keepdims=False,
    name=None
)
```
### Used in the guide:
- Train and evaluate with Keras
- tf.data: Build TensorFlow input pipelines
- Writing custom layers and models with Keras
- Distributed training with TensorFlow
- Eager execution
### Used in the tutorials:
- Automatic differentiation and gradient tape
- Better performance with tf.function
- Convolutional Variational Autoencoder
- Neural style transfer
- Customization basics: tensors and operations
Reduces input_tensor along the dimensions given in axis. Unless keepdims is true, the rank of the tensor is reduced by 1 for each entry in axis. If keepdims is true, the reduced dimensions are retained with length 1.
If axis is None, all dimensions are reduced, and a tensor with a single element is returned.
#### For example:

```
 x = tf.constant([[1, 1, 1], [1, 1, 1]])
tf.reduce_sum(x)  # 6
tf.reduce_sum(x, 0)  # [2, 2, 2]
tf.reduce_sum(x, 1)  # [3, 3]
tf.reduce_sum(x, 1, keepdims=True)  # [[3], [3]]
tf.reduce_sum(x, [0, 1])  # 6
```
#### Args:
- input_tensor: The tensor to reduce. Should have numeric type.
- axis: The dimensions to reduce. If None (the default), reduces all dimensions. Must be in the range [-rank`(input_tensor)`, rank`(input_tensor)`).
- keepdims: If true, retains reduced dimensions with length 1.
- name: A name for the operation (optional).
#### Returns:
The reduced tensor, of the same dtype as the input_tensor.
#### Numpy Compatibility
Equivalent to np.sum apart the fact that numpy upcast uint8 and int32 to int64 while tensorflow returns the same dtype as the input.
