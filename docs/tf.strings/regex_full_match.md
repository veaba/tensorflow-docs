[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/regex_full_match) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L48-L73)  
---|---  
  
Check if the input matches the regex pattern.

### Aliases:

  * [`tf.compat.v1.strings.regex_full_match`](/api_docs/python/tf/strings/regex_full_match)
  * [`tf.compat.v2.strings.regex_full_match`](/api_docs/python/tf/strings/regex_full_match)

    
    
    tf.strings.regex_full_match(
        input,
        pattern,
        name=None
    )
    

The input is a string tensor of any shape. The pattern is a scalar string
tensor which is applied to every element of the input tensor. The boolean
values (True or False) of the output tensor indicate if the input matches the
regex pattern provided.

The pattern follows the re2 syntax (https://github.com/google/re2/wiki/Syntax)

#### Args:

  * **`input`** : A `Tensor` of type `string`. A string tensor of the text to be processed.
  * **`pattern`** : A `Tensor` of type `string`. A scalar string tensor containing the regular expression to match the input.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor` of type `bool`.

