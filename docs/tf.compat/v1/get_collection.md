[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6216-L6242)  
---  
  
Wrapper for
[`Graph.get_collection()`](/api_docs/python/tf/Graph#get_collection) using the
default graph.

    
    
    tf.compat.v1.get_collection(
        key,
        scope=None
    )
    

See
[`tf.Graph.get_collection`](https://tensorflow.google.cn/api_docs/python/tf/Graph#get_collection)
for more details.

#### Args:

  * **`key`** : The key for the collection. For example, the `GraphKeys` class contains many standard names for collections.
  * **`scope`** : (Optional.) If supplied, the resulting list is filtered to include only items whose `name` attribute matches using `re.match`. Items without a `name` attribute are never returned if a scope is supplied and the choice or `re.match` means that a `scope` without special tokens filters by prefix.

#### Returns:

The list of values in the collection with the given `name`, or an empty list
if no value has been added to that collection. The list contains the values in
the order under which they were collected.

#### Eager Compatibility

Collections are not supported when eager execution is enabled.

