
Wrapper for Graph.add_to_collections() using the default graph.

```
 tf.compat.v1.add_to_collections(
    names,
    value
)
```
[tf.Graph.add_to_collections](https://www.tensorflow.org/api_docs/python/tf/Graph#add_to_collections)See  for more details.

#### Args:
- `names`: The key for the collections. The `GraphKeys` class contains many standard `names` for collections.
- `value`: The `value` to add to the collections.
#### Eager Compatibility

Collections are only supported in eager when variables are created inside an EagerVariableStore (e.g. as part of a layer or template).
