Assert the condition  `x == y`  holds element-wise.



### Aliases:

- [ `tf.compat.v1.debugging.assert_equal` ](/api_docs/python/tf/compat/v1/assert_equal)



```
 tf.compat.v1.assert_equal(
    x,
    y,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

Example of adding a dependency to an operation:



```
 with tf.control_dependencies([tf.compat.v1.assert_equal(x, y)]):
  output = tf.reduce_sum(x)
 
```

This condition holds if for every pair of (possibly broadcast) elements
 `x[i]` ,  `y[i]` , we have  `x[i] == y[i]` .
If both  `x`  and  `y`  are empty, this is trivially satisfied.



#### Args:

- **`x`** :  Numeric  `Tensor` .

- **`y`** :  Numeric  `Tensor` , same dtype as and broadcastable to  `x` .

- **`data`** :  The tensors to print out if the condition is False.  Defaults to
error message and first few entries of  `x` ,  `y` .

- **`summarize`** : Print this many entries of each tensor.

- **`message`** : A string to prefix to the default message.

- **`name`** : A name for this operation (optional).  Defaults to "assert_equal".



#### Returns:
Op that raises  `InvalidArgumentError`  if  `x == y`  is False.



#### Raises:

- **`InvalidArgumentError`** : if the check can be performed immediately and
 `x == y`  is False. The check can be performed immediately during eager
execution or if  `x`  and  `y`  are statically known.



#### Eager Compatibility
returns None

