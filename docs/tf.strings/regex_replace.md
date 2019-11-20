[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/strings/regex_replace) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/string_ops.py#L78-L111)  
  
  
Replace elements of `input` matching regex `pattern` with `rewrite`.

### Aliases:

  * [`tf.compat.v1.regex_replace`](/api_docs/python/tf/strings/regex_replace)
  * [`tf.compat.v1.strings.regex_replace`](/api_docs/python/tf/strings/regex_replace)
  * [`tf.compat.v2.strings.regex_replace`](/api_docs/python/tf/strings/regex_replace)

    
    
    tf.strings.regex_replace(
        input,
        pattern,
        rewrite,
        replace_global=True,
        name=None
    )
    

#### Args:

  * **`input`** : string `Tensor`, the source strings to process.
  * **`pattern`** : string or scalar string `Tensor`, regular expression to use, see more details at https://github.com/google/re2/wiki/Syntax
  * **`rewrite`** : string or scalar string `Tensor`, value to use in match replacement, supports backslash-escaped digits (\1 to \9) can be to insert text matching corresponding parenthesized group.
  * **`replace_global`** : `bool`, if `True` replace all non-overlapping matches, else replace only the first match.
  * **`name`** : A name for the operation (optional).

#### Returns:

string `Tensor` of the same shape as `input` with specified replacements.

