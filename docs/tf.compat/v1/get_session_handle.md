Return the handle of  `data` .

```
 tf.compat.v1.get_session_handle(    data,    name=None) 
```

This is EXPERIMENTAL and subject to change.

Keep  `data`  "in-place" in the runtime and create a handle that can beused to retrieve  `data`  in a subsequent run().

Combined with  `get_session_tensor` , we can keep a tensor produced inone run call in place, and use it as the input in a future run call.

#### Args:
- **`data`** : A tensor to be stored in the session.
- **`name`** : Optional name prefix for the return tensor.


#### Returns:
A scalar string tensor representing a unique handle for  `data` .

#### Raises:
- **`TypeError`** : if  `data`  is not a Tensor.


#### Example:


```
 c = tf.multiply(a, b)
h = tf.compat.v1.get_session_handle(c)
h = sess.run(h)

p, a = tf.compat.v1.get_session_tensor(h.handle, tf.float32)
b = tf.multiply(a, 10)
c = sess.run(b, feed_dict={p: h.handle})
 
```

