[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/MapVectorizationOptions)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/optimization_options.py#L25-L53)  
---|---  
  
## Class `MapVectorizationOptions`

Represents options for the MapVectorization optimization.

### Aliases:

  * Class [`tf.compat.v1.data.experimental.MapVectorizationOptions`](/api_docs/python/tf/data/experimental/MapVectorizationOptions)
  * Class [`tf.compat.v2.data.experimental.MapVectorizationOptions`](/api_docs/python/tf/data/experimental/MapVectorizationOptions)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L33-L35)

    
    
    __init__()
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `enabled`

Whether to vectorize map transformations. If None, defaults to False.

### `use_choose_fastest`

Whether to use ChooseFastestBranchDataset with this transformation. If True,
the pipeline picks between the vectorized and original segment at runtime
based on their iterations speed. If None, defaults to False.

## Methods

### `__eq__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L37-L43)

    
    
    __eq__(other)
    

Return self==value.

### `__ne__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/util/options.py#L45-L49)

    
    
    __ne__(other)
    

Return self!=value.

