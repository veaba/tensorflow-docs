Adds ops to list the names of uninitialized variables.

```
 tf.compat.v1.report_uninitialized_variables(
    var_list=None,
    name='report_uninitialized_variables'
)
 
```

When run, it returns a 1-D tensor containing the names of uninitializedvariables if there are any, or an empty array if there are none.

#### Args:
- **`var_list`** : List of  `Variable`  objects to check. Defaults to the value of `global_variables() + local_variables()` 
- **`name`** : Optional name of the  `Operation` .


#### Returns:
A 1-D tensor containing names of the uninitialized variables, or an empty1-D tensor if there are no variables or no uninitialized variables.

**NOTE**  The output of this function should be used.  If it is not, a warning will be logged.  To mark the output as used, call its .mark_used() method.

