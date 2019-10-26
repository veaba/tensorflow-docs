Inserts a placeholder for a tensor that will be always fed.

```
 tf.compat.v1.placeholder(
    dtype,
    shape=None,
    name=None
)
```
[Tensor.eval()](https://tensorflow.google.cn/api_docs/python/tf/Tensor#eval)Important: This tensor will produce an error if evaluated. Its value must be fed using the feed_dict optional argument to Session.run(), , or Operation.run().

#### For example:

```
 x = tf.compat.v1.placeholder(tf.float32, shape=(1024, 1024))
y = tf.matmul(x, x)

with tf.compat.v1.Session() as sess:
  print(sess.run(y))  # ERROR: will fail because x was not fed.

  rand_array = np.random.rand(1024, 1024)
  print(sess.run(y, feed_dict={x: rand_array}))  # Will succeed.
```
#### Args:
- dtype: The type of elements in the tensor to be fed.
- shape: The shape of the tensor to be fed (optional). If the shape is not specified, you can feed a tensor of any shape.
- name: A name for the operation (optional).
#### Returns:
A Tensor that may be used as a handle for feeding a value, but not evaluated directly.
#### Raises:
- RuntimeError: if eager execution is enabled
#### Eager Compatibility
Placeholders are not compatible with eager execution.
