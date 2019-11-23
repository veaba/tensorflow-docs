
Updates the shape of a tensor and checks at runtime that the shape holds.


### Aliases:
- [ `tf.compat.v1.ensure_shape` ](/api_docs/python/tf/ensure_shape)
- [ `tf.compat.v2.ensure_shape` ](/api_docs/python/tf/ensure_shape)


```
tf.ensure_shape(
    x,
    shape,
    name=None
)

```



#### For example:


```
x = tf.compat.v1.placeholder(tf.int32)
print(x.shape)
==> TensorShape(None)
y = x * 2
print(y.shape)
==> TensorShape(None)

y = tf.ensure_shape(y, (None, 3, 3))
print(y.shape)
==> TensorShape([Dimension(None), Dimension(3), Dimension(3)])

with tf.compat.v1.Session() as sess:
  # Raises tf.errors.InvalidArgumentError, because the shape (3,) is not
  # compatible with the shape (None, 3, 3)
  sess.run(y, feed_dict={x: [1, 2, 3]})


```


NOTE: This differs from [ `Tensor.set_shape` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#set_shape) in that it sets the static shapeof the resulting tensor and enforces it at runtime, raising an error if thetensor's runtime shape is incompatible with the specified shape.[ `Tensor.set_shape` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor#set_shape) sets the static shape of the tensor without enforcing itat runtime, which may result in inconsistencies between the statically-knownshape of tensors and the runtime value of tensors.


#### Args:
- **`x`** : A  `Tensor` .
- **`shape`** : A  `TensorShape`  representing the shape of this tensor, a `TensorShapeProto` , a list, a tuple, or None.
- **`name`** : A name for this operation (optional). Defaults to "EnsureShape".


#### Returns:

A  `Tensor` . Has the same type and contents as  `x` . At runtime, raises a[ `tf.errors.InvalidArgumentError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError) if  `shape`  is incompatible with the shapeof  `x` .
