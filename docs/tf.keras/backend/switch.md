Switches between two operations depending on a scalar value.



### Aliases:

- [ `tf.compat.v1.keras.backend.switch` ](/api_docs/python/tf/keras/backend/switch)

- [ `tf.compat.v2.keras.backend.switch` ](/api_docs/python/tf/keras/backend/switch)



```
 tf.keras.backend.switch(
    condition,
    then_expression,
    else_expression
)
 
```

Note that both  `then_expression`  and  `else_expression` 
should be symbolic tensors of the <em>same shape</em>.



#### Arguments:

- **`condition`** : tensor ( `int`  or  `bool` ).

- **`then_expression`** : either a tensor, or a callable that returns a tensor.

- **`else_expression`** : either a tensor, or a callable that returns a tensor.



#### Returns:
The selected tensor.



#### Raises:

- **`ValueError`** : If rank of  `condition`  is greater than rank of expressions.

