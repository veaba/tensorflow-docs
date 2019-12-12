Wrapper for [ `Graph.get_collection()` ](/api_docs/python/tf/Graph#get_collection) using the default graph.

```
 tf.compat.v1.get_collection(    key,    scope=None) 
```

See [ `tf.Graph.get_collection` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#get_collection)for more details.

#### 参数：
- **`key`** : The key for the collection. For example, the  `GraphKeys`  class containsmany standard names for collections.
- **`scope`** : (Optional.) If supplied, the resulting list is filtered to includeonly items whose  `name`  attribute matches using  `re.match` . Items withouta  `name`  attribute are never returned if a scope is supplied and thechoice or  `re.match`  means that a  `scope`  without special tokens filtersby prefix.


#### 返回：
The list of values in the collection with the given  `name` , oran empty list if no value has been added to that collection. Thelist contains the values in the order under which they werecollected.

#### 迫切的兼容性
启用紧急执行时不支持集合。

