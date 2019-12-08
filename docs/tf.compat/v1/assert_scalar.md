Asserts that the given  `tensor`  is a scalar (i.e. zero-dimensional).



### Aliases:

- [ `tf.compat.v1.debugging.assert_scalar` ](/api_docs/python/tf/compat/v1/assert_scalar)



```
 tf.compat.v1.assert_scalar(
    tensor,
    name=None,
    message=None
)
 
```

This function raises  `ValueError`  unless it can be certain that the given
 `tensor`  is a scalar.  `ValueError`  is also raised if the shape of  `tensor`  is
unknown.



#### Args:

- **`tensor`** : A  `Tensor` .

- **`name`** :  A name for this operation. Defaults to "assert_scalar"

- **`message`** : A string to prefix to the default message.



#### Returns:
The input tensor (potentially converted to a  `Tensor` ).



#### Raises:

- **`ValueError`** : If the tensor is not scalar (rank 0), or if its shape is
unknown.

