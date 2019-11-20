[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2054-L2072)  
---  
  
Creates a
[`tf.compat.v1.data.Iterator`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator)
for enumerating the elements of a dataset.

    
    
    tf.compat.v1.data.make_one_shot_iterator(dataset)
    

**Note:** The returned iterator will be initialized automatically. A "one-
shot" iterator does not support re-initialization.

#### Args:

  * **`dataset`** : A [`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

#### Returns:

A
[`tf.compat.v1.data.Iterator`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/Iterator)
over the elements of this dataset.

