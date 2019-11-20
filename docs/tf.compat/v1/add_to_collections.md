[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L6174-L6189)  
---  
  
Wrapper for
[`Graph.add_to_collections()`](/api_docs/python/tf/Graph#add_to_collections)
using the default graph.

    
    
    tf.compat.v1.add_to_collections(
        names,
        value
    )
    

See
[`tf.Graph.add_to_collections`](https://tensorflow.google.cn/api_docs/python/tf/Graph#add_to_collections)
for more details.

#### Args:

  * **`names`** : The key for the collections. The `GraphKeys` class contains many standard names for collections.
  * **`value`** : The value to add to the collections.

#### Eager Compatibility

Collections are only supported in eager when variables are created inside an
EagerVariableStore (e.g. as part of a layer or template).

