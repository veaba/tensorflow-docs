Returns the output shapes of a  `Dataset`  or  `Iterator`  elements.

```
 tf.compat.v1.data.get_output_shapes(dataset_or_iterator) 
```

This utility method replaces the deprecated-in-V2 `tf.compat.v1.Dataset.output_shapes`  property.

#### Args:
- **`dataset_or_iterator`** : A [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) or  `tf.data.Iterator` .


#### Returns:
A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objects matching the structure ofthe dataset / iterator elements and specifying the shape of the individualcomponents.

