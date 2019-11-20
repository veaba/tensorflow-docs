[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/as_str_any) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/util/compat.py#L109-L125)  
  
  
Converts input to `str` type.

### Aliases:

  * [`tf.compat.v1.compat.as_str_any`](/api_docs/python/tf/compat/as_str_any)
  * [`tf.compat.v2.compat.as_str_any`](/api_docs/python/tf/compat/as_str_any)

    
    
    tf.compat.as_str_any(value)
    

Uses `str(value)`, except for `bytes` typed inputs, which are converted using
`as_str`.

#### Args:

  * **`value`** : A object that can be converted to `str`.

#### Returns:

A `str` object.

