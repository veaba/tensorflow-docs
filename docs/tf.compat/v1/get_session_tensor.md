Get the tensor of type  `dtype`  by feeding a tensor handle.

```
 tf.compat.v1.get_session_tensor(    handle,    dtype,    name=None) 
```

This is EXPERIMENTAL and subject to change.

Get the value of the tensor from a tensor handle. The tensoris produced in a previous run() and stored in the state of thesession.

#### Args:
- **`handle`** : The string representation of a persistent tensor handle.
- **`dtype`** : The type of the output tensor.
- **`name`** : Optional name prefix for the return tensor.


#### Returns:
A pair of tensors. The first is a placeholder for feeding atensor handle and the second is the tensor in the session statekeyed by the tensor handle.

#### Example:


```
 c = tf.multiply(a, b)
h = tf.compat.v1.get_session_handle(c)
h = sess.run(h)

p, a = tf.compat.v1.get_session_tensor(h.handle, tf.float32)
b = tf.multiply(a, 10)
c = sess.run(b, feed_dict={p: h.handle})
 
```

