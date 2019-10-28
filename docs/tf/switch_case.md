Create a switch/case operation, i.e. an integer-indexed conditional.
### Aliases:
- `tf.compat.v1.switch_case`
- `tf.compat.v2.switch_case`

```
 tf.switch_case(
    branch_index,
    branch_fns,
    default=None,
    name='switch_case'
)
```
See also `tf.case`.
This op can be substantially more efficient than `tf.case` when exactly one branch will be selected. `tf.switch_case` is more like a C++ switch/case statement than `tf.case`, which is more like an if/elif/elif/else chain.
