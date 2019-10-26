Adds all input tensors element-wise.
### Aliases:
- tf.add_n
- tf.compat.v1.add_n
- tf.compat.v1.math.add_n
- tf.compat.v2.add_n
- tf.compat.v2.math.add_n

```
 tf.math.add_n(
    inputs,
    name=None
)
```
### Used in the guide:
- Migrate your TensorFlow 1 code to TensorFlow 2
- Use a GPU
### Used in the tutorials:
- Neural style transfer
Converts IndexedSlices objects into dense tensors prior to adding.
[tf.math.add_n](https://tensorflow.google.cn/api_docs/python/tf/math/add_n) performs the same operation as tf.math.accumulate_n, but it waits for all of its inputs to be ready before beginning to sum. This buffering can result in higher memory consumption when inputs are ready at different times, since the minimum temporary storage required is proportional to the input size rather than the output size.

[broadcast](https://docs.scipy.org/doc/numpy-1.13.0/user/basics.broadcasting.html)This op does not  its inputs. If you need ing, use tf.math.add (or the + operator) instead.

#### For example:

```
 a = tf.constant([[3, 5], [4, 8]])
b = tf.constant([[1, 6], [2, 9]])
tf.math.add_n([a, b, a])  # [[7, 16], [10, 25]]
```
#### Args:
- inputs: A list of tf.Tensor or tf.IndexedSlices objects, each with same shape and type.
- name: A name for the operation (optional).
#### Returns:
A Tensor of same shape and type as the elements of inputs.
#### Raises:
- ValueError: If inputs don't all have same shape and dtype or the shape cannot be inferred.
