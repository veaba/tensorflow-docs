[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/from_variant) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2432-L2444)  
---|---  
  
Constructs a dataset from the given variant and structure.

### Aliases:

  * [`tf.compat.v1.data.experimental.from_variant`](/api_docs/python/tf/data/experimental/from_variant)
  * [`tf.compat.v2.data.experimental.from_variant`](/api_docs/python/tf/data/experimental/from_variant)

    
    
    tf.data.experimental.from_variant(
        variant,
        structure
    )
    

#### Args:

  * **`variant`** : A scalar [`tf.variant`](https://tensorflow.google.cn/api_docs/python/tf#variant) tensor representing a dataset.
  * **`structure`** : A `tf.data.experimental.Structure` object representing the structure of each element in the dataset.

#### Returns:

A
[`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)
instance.

