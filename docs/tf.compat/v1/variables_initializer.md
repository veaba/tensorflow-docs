Returns an Op that initializes a list of variables.
### Aliases:
- `tf.compat.v1.initializers.variables`

```
 tf.compat.v1.variables_initializer(
    var_list,
    name='init'
)
```
After you launch the graph in a session, you can run the returned Op to initialize all the variables in `var_list`. This Op runs all the initializers of the variables in `var_list` in parallel.
