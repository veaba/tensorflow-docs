Assert that  `x`  is of integer dtype.

```
 tf.compat.v1.assert_integer(
    x,
    message=None,
    name=None
)
 
```

Example of adding a dependency to an operation:

```
 with tf.control_dependencies([tf.compat.v1.assert_integer(x)]):
  output = tf.reduce_sum(x)
 
```

#### Args:
- **`x`** :  `Tensor`  whose basetype is integer and is not quantized.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_integer".


#### Raises:
- **`TypeError`** :  If  `x.dtype`  is anything other than non-quantized integer.


#### Returns:
A  `no_op`  that does nothing.  Type can be determined statically.

