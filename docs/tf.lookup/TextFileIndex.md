## Class TextFileIndex

The key and value content to get from each line.
### Aliases:
- Class `tf.compat.v1.lookup.TextFileIndex`
- Class `tf.compat.v2.lookup.TextFileIndex`

This class defines the key and value used for tf.lookup.TextFileInitializer.
[TextFileIndex.LINE_NUMBER](https://www.tensorflow.org/api_docs/python/tf/lookup/TextFileIndex#LINE_NUMBER)The key and value content to get from each line is specified either by the following, or a value >=0. *  means use the line number starting from zero, expects data type int64. * TextFileIndex.WHOLE_LINE means use the whole line content, expects data type string.


A value >=0 means use the index (starting at zero) of the split line based on delimiter.
## Class Members
- `LINE_NUMBER = -1`
- `WHOLE_LINE = -2`
