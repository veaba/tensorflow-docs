Inserts a dimension of 1 into a tensor's shape. (deprecated arguments)

```
 tf.compat.v1.expand_dims(
    input,
    axis=None,
    name=None,
    dim=None
)
```
Given a tensor `input`, this operation inserts a dimension of 1 at the dimension index `axis` of `input`'s shape. The dimension index `axis` starts at zero; if you specify a negative number for `axis` it is counted backward from the end.
