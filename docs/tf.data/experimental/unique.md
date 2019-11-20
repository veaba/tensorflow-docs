[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/unique) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/unique.py#L26-L48)  
  
  
Creates a `Dataset` from another `Dataset`, discarding duplicates.

### Aliases:

  * [`tf.compat.v1.data.experimental.unique`](/api_docs/python/tf/data/experimental/unique)
  * [`tf.compat.v2.data.experimental.unique`](/api_docs/python/tf/data/experimental/unique)

    
    
    tf.data.experimental.unique()
    

Use this transformation to produce a dataset that contains one instance of
each unique element in the input. For example:

    
    
    dataset = tf.data.Dataset.from_tensor_slices([1, 37, 2, 37, 2, 1])
    
    # Using `unique()` will drop the duplicate elements.
    dataset = dataset.apply(tf.data.experimental.unique())  # ==> { 1, 37, 2 }
    

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

