[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L374-L377)  
---  
  
String lengths of `input`.

    
    
    tf.compat.v1.strings.length(
        input,
        name=None,
        unit='BYTE'
    )
    

Computes the length of each string given in the input tensor.

#### Args:

  * **`input`** : A `Tensor` of type `string`. The string for which to compute the length.
  * **`unit`** : An optional `string` from: `"BYTE", "UTF8_CHAR"`. Defaults to `"BYTE"`. The unit that is counted to compute string length. One of: `"BYTE"` (for the number of bytes in each string) or `"UTF8_CHAR"` (for the number of UTF-8 encoded Unicode code points in each string). Results are undefined if `unit=UTF8_CHAR` and the `input` strings do not contain structurally valid UTF-8.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `int32`.

