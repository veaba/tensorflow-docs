A transformation that copies dataset elements to the given  `target_device` .

**Aliases** : [ `tf.compat.v1.data.experimental.copy_to_device` ](/api_docs/python/tf/data/experimental/copy_to_device), [ `tf.compat.v2.data.experimental.copy_to_device` ](/api_docs/python/tf/data/experimental/copy_to_device)

```
 tf.data.experimental.copy_to_device(
    target_device,
    source_device='/cpu:0'
)
 
```

#### Args:
- **`target_device`** : The name of a device to which elements will be copied.
- **`source_device`** : The original device on which  `input_dataset`  will be placed.


#### Returns:
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

