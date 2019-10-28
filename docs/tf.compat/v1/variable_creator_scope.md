Scope which defines a variable creation function to be used by variable().

```
 tf.compat.v1.variable_creator_scope(variable_creator)
```
variable_creator is expected to be a function with the following signature:

```
   def variable_creator(next_creator, **kwargs)
```
The creator is supposed to eventually call the next_creator to create a variable if it does want to create a variable and not call Variable or ResourceVariable directly. This helps make creators composable. A creator may choose to create multiple variables, return already existing variables, or simply register that a variable was created and defer to the next creators in line. Creators can also modify the keyword arguments seen by the next creators.
Custom getters in the variable scope will eventually resolve down to these custom creators when they do create variables.
[tf.VariableSynchronization](https://tensorflow.google.cn/api_docs/python/tf/VariableSynchronization)

This set may grow over time, so it's important the signature of creators is as mentioned above.
#### Args:
- `variable_creator`: the passed creator
#### Yields:
A scope in which the creator is active
