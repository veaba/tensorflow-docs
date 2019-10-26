Returns the index with the largest value across axes of a tensor.
### Aliases:
- tf.argmax
- tf.compat.v2.argmax
- tf.compat.v2.math.argmax

```
 tf.math.argmax(
    input,
    axis=None,
    output_type=tf.dtypes.int64,
    name=None
)
```
### Used in the guide:
- Migrate your TensorFlow 1 code to TensorFlow 2
- Recurrent Neural Networks (RNN) with Keras
- Train and evaluate with Keras
### Used in the tutorials:
- Custom training: walkthrough
- Image segmentation
- Image captioning with visual attention
- Neural machine translation with attention
- Transformer model for language understanding
Note that in case of ties the identity of the return value is not guaranteed.
#### For example:

```
 A=tf.constant([2,20,30,3,6]) # Constant 1-D Tensor
tf.math.argmax(A) # output 2 as index 2 (A[2]) is maximum in tensor A
B=tf.constant([[2,20,30,3,6],[3,11,16,1,8],[14,45,23,5,27]])
tf.math.argmax(B,0) # [2, 2, 0, 2, 2]
tf.math.argmax(B,1) # [2, 2, 1]
```
[tf.DType](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType)Args: input: A Tensor. Must be one of the following types: float32, float64, int32, uint8, int16, int8, complex64, int64, qint8, quint8, qint32, bfloat16, uint16, complex128, half, uint32, uint64. axis: A Tensor. Must be one of the following types: int32, int64. int32 or int64, must be in the range -rank(input), rank(input)). Describes which axis of the input Tensor to reduce across. For vectors, use axis = 0. output_type: An optional  from: tf.int32, tf.int64. Defaults to tf.int64. name: A name for the operation (optional).

#### Returns:
A Tensor of type output_type.
#### Usage:

```
 import tensorflow as tf
a = [1, 10, 26.9, 2.8, 166.32, 62.3]
b = tf.math.argmax(input = a)
c = tf.keras.backend.eval(b)
# c = 4
# here a[4] = 166.32 which is the largest element of a across axis 0
```
