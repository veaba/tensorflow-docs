Map the function fn over the elements elems and return the outputs.
### Aliases:
- `tf.compat.v1.keras.backend.map_fn`
- `tf.compat.v2.keras.backend.map_fn`

```
 tf.keras.backend.map_fn(
    fn,
    elems,
    name=None,
    dtype=None
)
```
#### Arguments:
- `fn`: Callable that will be called upon each element in elems
- `elems`: tensor
- `name`: A string `name` for the map node in the graph
- `dtype`: Output data type.
#### Returns:
Tensor with `dtype` `dtype`.
