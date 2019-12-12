Returns an Op that initializes global variables.

```
 tf.compat.v1.global_variables_initializer() 
```

This is just a shortcut for  `variables_initializer(global_variables())` 

#### Returns:
An Op that initializes global variables in the graph.

