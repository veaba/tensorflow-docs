[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2151-L2168)  
---  
  
Returns the output shapes of a `Dataset` or `Iterator` elements.

    
    
    tf.compat.v1.data.get_output_shapes(dataset_or_iterator)
    

This utility method replaces the deprecated-in-V2
`tf.compat.v1.Dataset.output_shapes` property.

#### Args:

  * **`dataset_or_iterator`** : A [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) or `tf.data.Iterator`.

#### Returns:

A nested structure of
[`tf.TensorShape`](https://tensorflow.google.cn/api_docs/python/tf/TensorShape)
objects matching the structure of the dataset / iterator elements and
specifying the shape of the individual components.

