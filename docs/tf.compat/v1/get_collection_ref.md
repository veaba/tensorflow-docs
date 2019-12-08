Wrapper for [ `Graph.get_collection_ref()` ](/api_docs/python/tf/Graph#get_collection_ref) using the default graph.



```
 tf.compat.v1.get_collection_ref(key)
 
```

See [ `tf.Graph.get_collection_ref` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#get_collection_ref)
for more details.



#### Args:

- **`key`** : The key for the collection. For example, the  `GraphKeys`  class contains
many standard names for collections.



#### Returns:
The list of values in the collection with the given  `name` , or an empty
list if no value has been added to that collection.  Note that this returns
the collection list itself, which can be modified in place to change the
collection.



#### Eager Compatibility
Collections are not supported when eager execution is enabled.

