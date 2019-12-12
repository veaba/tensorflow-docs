Wrapper for [ `Graph.add_to_collection()` ](/api_docs/python/tf/Graph#add_to_collection) using the default graph.

```
 tf.compat.v1.add_to_collection(
    name,
    value
)
 
```

See [ `tf.Graph.add_to_collection` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#add_to_collection)for more details.

#### 参数：
- **`name`** : The key for the collection. For example, the  `GraphKeys`  classcontains many standard names for collections.
- **`value`** : The value to add to the collection.


#### 迫切的兼容性
Collections are only supported in eager when variables are created insidean EagerVariableStore (e.g. as part of a layer or template).

