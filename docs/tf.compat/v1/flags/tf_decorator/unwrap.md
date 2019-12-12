Unwraps an object into a list of TFDecorators and a final target.

```
 tf.compat.v1.flags.tf_decorator.unwrap(maybe_tf_decorator)
 
```

#### Args:
- **`maybe_tf_decorator`** : Any callable object.


#### Returns:
A tuple whose first element is an list of TFDecorator-derived objects thatwere applied to the final callable target, and whose second element is thefinal undecorated callable target. If the  `maybe_tf_decorator`  parameter isnot decorated by any TFDecorators, the first tuple element will be an emptylist. The  `TFDecorator`  list is ordered from outermost to innermostdecorators.

