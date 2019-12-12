Returns the output shapes of a  `Dataset`  or  `Iterator`  elements.

```
 tf.compat.v1.data.get_output_types(dataset_or_iterator) 
```

This utility method replaces the deprecated-in-V2 `tf.compat.v1.Dataset.output_types`  property.

#### 参数：
- **`dataset_or_iterator`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) or  `tf.data.Iterator` .


#### 返回：
A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects objects matching the structure ofdataset / iterator elements and specifying the shape of the individualcomponents.

