[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/variables.py#L3134-L3148)  
---  
  
Returns all variables in the MODEL_VARIABLES collection.

    
    
    tf.compat.v1.model_variables(scope=None)
    

#### Args:

  * **`scope`** : (Optional.) A string. If supplied, the resulting list is filtered to include only items whose `name` attribute matches `scope` using `re.match`. Items without a `name` attribute are never returned if a scope is supplied. The choice of `re.match` means that a `scope` without special tokens filters by prefix.

#### Returns:

A list of local Variable objects.

