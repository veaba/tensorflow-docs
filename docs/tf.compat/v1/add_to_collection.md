[Graph.add_to_collection()](https://tensorflow.google.cn/api_docs/python/tf/Graph#add_to_collection)Wrapper for  using the default graph.


```
 tf.compat.v1.add_to_collection(
    name,
    value
)
```
[tf.Graph.add_to_collection](https://tensorflow.google.cn/api_docs/python/tf/Graph#add_to_collection)See  for more details.

#### Args:
- name: The key for the collection. For example, the GraphKeys class contains many standard names for collections.
- value: The value to add to the collection.
#### Eager Compatibility
Collections are only supported in eager when variables are created inside an EagerVariableStore (e.g. as part of a layer or template).
