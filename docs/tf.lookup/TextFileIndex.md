[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/lookup/TextFileIndex) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/lookup_ops.py#L477-L493)  
  
  
## Class `TextFileIndex`

The key and value content to get from each line.

### Aliases:

  * Class [`tf.compat.v1.lookup.TextFileIndex`](/api_docs/python/tf/lookup/TextFileIndex)
  * Class [`tf.compat.v2.lookup.TextFileIndex`](/api_docs/python/tf/lookup/TextFileIndex)

This class defines the key and value used for tf.lookup.TextFileInitializer.

The key and value content to get from each line is specified either by the
following, or a value `>=0`. *
[`TextFileIndex.LINE_NUMBER`](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#LINE_NUMBER)
means use the line number starting from zero, expects data type int64. *
[`TextFileIndex.WHOLE_LINE`](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#WHOLE_LINE)
means use the whole line content, expects data type string.

A value `>=0` means use the index (starting at zero) of the split line based
on `delimiter`.

## Class Members

  * `LINE_NUMBER = -1`
  * `WHOLE_LINE = -2`

