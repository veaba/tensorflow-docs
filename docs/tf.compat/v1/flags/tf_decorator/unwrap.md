Unwraps an object into a list of TFDecorators and a final target.



### Aliases:

- [ `tf.compat.v1.app.flags.tf_decorator.unwrap` ](/api_docs/python/tf/compat/v1/flags/tf_decorator/unwrap)



```
 tf.compat.v1.flags.tf_decorator.unwrap(maybe_tf_decorator)
 
```



#### Args:

- **`maybe_tf_decorator`** : Any callable object.



#### Returns:
A tuple whose first element is an list of TFDecorator-derived objects that
were applied to the final callable target, and whose second element is the
final undecorated callable target. If the  `maybe_tf_decorator`  parameter is
not decorated by any TFDecorators, the first tuple element will be an empty
list. The  `TFDecorator`  list is ordered from outermost to innermost
decorators.

