

## Class  `TextFileIndex` 
要从每行获取的键和值内容。

**别名** : [ `tf.compat.v1.lookup.TextFileIndex` ](/api_docs/python/tf/lookup/TextFileIndex), [ `tf.compat.v2.lookup.TextFileIndex` ](/api_docs/python/tf/lookup/TextFileIndex)

此类定义用于tf.lookup.textfileinitializer的键和值。

The key and value content to get from each line is specified eitherby the following, or a value  `>=0` .

- [ `TextFileIndex.LINE_NUMBER` ](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#LINE_NUMBER) means use the line number starting from zero,expects data type int64.
- [ `TextFileIndex.WHOLE_LINE` ](https://tensorflow.google.cn/api_docs/python/tf/lookup/TextFileIndex#WHOLE_LINE) means use the whole line content, expects datatype string.
A value  `>=0`  means use the index (starting at zero) of the split line based    on  `delimiter` .

## Class 成员
-  `LINE_NUMBER = -1`  
-  `WHOLE_LINE = -2`  
