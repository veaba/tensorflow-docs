[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/experimental/ignore_errors) |
[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/experimental/ops/error_ops.py#L25-L53)  
---|---  
  
Creates a `Dataset` from another `Dataset` and silently ignores any errors.

### Aliases:

  * [`tf.compat.v1.data.experimental.ignore_errors`](/api_docs/python/tf/data/experimental/ignore_errors)
  * [`tf.compat.v2.data.experimental.ignore_errors`](/api_docs/python/tf/data/experimental/ignore_errors)

    
    
    tf.data.experimental.ignore_errors()
    

Use this transformation to produce a dataset that contains the same elements
as the input, but silently drops any elements that caused an error. For
example:

    
    
    dataset = tf.data.Dataset.from_tensor_slices([1., 2., 0., 4.])
    
    # Computing `tf.debugging.check_numerics(1. / 0.)` will raise an
    InvalidArgumentError.
    dataset = dataset.map(lambda x: tf.debugging.check_numerics(1. / x, "error"))
    
    # Using `ignore_errors()` will drop the element that causes an error.
    dataset =
        dataset.apply(tf.data.experimental.ignore_errors())  # ==> {1., 0.5, 0.2}
    

#### Returns:

A `Dataset` transformation function, which can be passed to
[`tf.data.Dataset.apply`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

