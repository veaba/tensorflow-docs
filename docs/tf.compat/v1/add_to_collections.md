Wrapper for [ `Graph.add_to_collections()` ](/api_docs/python/tf/Graph#add_to_collections) using the default graph.

```
 tf.compat.v1.add_to_collections(
    names,
    value
)
 
```

See [ `tf.Graph.add_to_collections` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#add_to_collections)for more details.

#### Args:
- **`names`** : The key for the collections. The  `GraphKeys`  class contains manystandard names for collections.
- **`value`** : The value to add to the collections.


#### Eager Compatibility
Collections are only supported in eager when variables are created insidean EagerVariableStore (e.g. as part of a layer or template).

