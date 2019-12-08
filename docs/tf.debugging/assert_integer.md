Assert that  `x`  is of integer dtype.



### Aliases:

- [ `tf.compat.v2.debugging.assert_integer` ](/api_docs/python/tf/debugging/assert_integer)



```
 tf.debugging.assert_integer(
    x,
    message=None,
    name=None
)
 
```

If  `x`  has a non-integer type,  `message` , as well as the dtype of  `x`  are
printed, and  `InvalidArgumentError`  is raised.

This can always be checked statically, so this method returns nothing.



#### Args:

- **`x`** : A  `Tensor` .

- **`message`** : A string to prefix to the default message.

- **`name`** : A name for this operation (optional). Defaults to "assert_integer".



#### Raises:

- **`TypeError`** :  If  `x.dtype`  is not a non-quantized integer type.

