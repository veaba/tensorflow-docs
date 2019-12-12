Wrapper for [ `Graph.get_collection_ref()` ](/api_docs/python/tf/Graph#get_collection_ref) using the default graph.

```
 tf.compat.v1.get_collection_ref(key)
 
```

See [ `tf.Graph.get_collection_ref` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#get_collection_ref)for more details.

#### 参数：
- **`key`** : The key for the collection. For example, the  `GraphKeys`  class containsmany standard names for collections.


#### 返回：
The list of values in the collection with the given  `name` , or an emptylist if no value has been added to that collection.  Note that this returnsthe collection list itself, which can be modified in place to change thecollection.

#### 迫切的兼容性
启用紧急执行时不支持集合。

