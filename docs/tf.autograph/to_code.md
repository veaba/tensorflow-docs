[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/autograph/to_code) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/autograph/impl/api.py#L730-L755)  
  
  
Similar to `to_graph`, but returns Python source code as a string.

### Aliases:

  * [`tf.compat.v2.autograph.to_code`](/api_docs/python/tf/autograph/to_code)

    
    
    tf.autograph.to_code(
        entity,
        recursive=True,
        experimental_optional_features=None
    )
    

### Used in the guide:

  * [Better performance with tf.function and AutoGraph](https://tensorflow.google.cn/guide/function)

### Used in the tutorials:

  * [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)

Also see:
[`tf.autograph.to_graph`](https://tensorflow.google.cn/api_docs/python/tf/autograph/to_graph).

`to_graph` returns the Python source code that can be used to generate a
TensorFlow graph that is functionally identical to the input Python code.

#### Args:

  * **`entity`** : Python callable or class to convert.
  * **`recursive`** : Whether to recursively convert any functions that the converted function may call.
  * **`experimental_optional_features`** : `None`, a tuple of, or a single [`tf.autograph.experimental.Feature`](https://tensorflow.google.cn/api_docs/python/tf/autograph/experimental/Feature) value. Controls the use of optional features in the conversion process.

#### Returns:

The converted code as string.

