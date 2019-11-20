[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3151-L3170)  
---  
  
Returns all variables created with `trainable=True`.

    
    
    tf.compat.v1.trainable_variables(scope=None)
    

When passed `trainable=True`, the `Variable()` constructor automatically adds
new variables to the graph collection `GraphKeys.TRAINABLE_VARIABLES`. This
convenience function returns the contents of that collection.

#### Args:

  * **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered to include only items whose `name` attribute matches `scope` using `re.match`. Items without a `name` attribute are never returned if a scope is supplied. The choice of `re.match` means that a `scope` without special tokens filters by prefix.

#### Returns:

A list of Variable objects.

