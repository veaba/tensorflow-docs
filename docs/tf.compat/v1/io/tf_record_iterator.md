An iterator that read the records from a TFRecords file. (deprecated)

```
 tf.compat.v1.io.tf_record_iterator(
    path,
    options=None
)
 
```


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use eager execution and: [ `tf.data.TFRecordDataset(path)` ](https://tensorflow.google.cn/api_docs/python/tf/data/TFRecordDataset)


#### 参数：
- **`path`** : The path to the TFRecords file.
- **`options`** : (optional) A TFRecordOptions object.


#### 收益率：
串。

#### 加薪：
- **`IOError`** : If  `path`  cannot be opened for reading.
