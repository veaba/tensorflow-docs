Repeat `body` while the `cond`ition `cond` is true.

```
 tf.compat.v1.while_loop(
    cond,
    body,
    loop_vars,
    shape_invariants=None,
    parallel_iterations=10,
    back_prop=True,
    swap_memory=False,
    name=None,
    maximum_iterations=None,
    return_same_structure=False
)
```
`cond` is a callable returning a boolean scalar tensor. `body` is a callable returning a (possibly nested) tuple, namedtuple or list of tensors of the same arity (length and structure) and types as `loop_vars`. `loop_vars` is a (possibly nested) tuple, namedtuple or list of tensors that is passed to both `cond` and `body`. `cond` and `body` both take as many arguments as there are `loop_vars`.
In addition to regular Tensors or IndexedSlices, the body may accept and return TensorArray objects. The flows of the TensorArray objects will be appropriately forwarded between loops and during gradient calculations.
