Returns an Op that initializes a list of variables.

```
 tf.compat.v1.variables_initializer(    var_list,    name='init') 
```

After you launch the graph in a session, you can run the returned Op toinitialize all the variables in  `var_list` . This Op runs all theinitializers of the variables in  `var_list`  in parallel.

Calling  `initialize_variables()`  is equivalent to passing the list ofinitializers to  `Group()` .

If  `var_list`  is empty, however, the function still returns an Op that canbe run. That Op just has no effect.

#### Args:
- **`var_list`** : List of  `Variable`  objects to initialize.
- **`name`** : Optional name for the returned operation.


#### Returns:
An Op that run the initializers of all the specified variables.

