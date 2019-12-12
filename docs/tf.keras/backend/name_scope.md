A context manager for use when defining a Python op.

```
 tf.keras.backend.name_scope(name) 
```

This context manager pushes a name scope, which will make the name of alloperations added within it have a prefix.

For example, to define a new Python op called  `my_op` :

```
 def)
    # Define some computation that uses `a`.
    return foo_op(..., name=scope)
 
```

When executed, the Tensor  `a`  will have the name  `MyOp/a` .

#### Args:
- **`name`** : The prefix to use on all names created within the name scope.


#### Returns:
Name scope context manager.

