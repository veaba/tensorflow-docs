Return a list of physical devices visible to the runtime.

**Aliases** : [ `tf.compat.v1.config.experimental.list_physical_devices` ](/api_docs/python/tf/config/experimental/list_physical_devices), [ `tf.compat.v2.config.experimental.list_physical_devices` ](/api_docs/python/tf/config/experimental/list_physical_devices)

```
 tf.config.experimental.list_physical_devices(device_type=None)
 
```

### Used in the guide:
- [Use a GPU](https://tensorflow.google.cn/guide/gpu)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### Used in the tutorials:
- [Customization basics: tensors and operations](https://tensorflow.google.cn/tutorials/customization/basics)
- [Text classification with TensorFlow Hub: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification_with_hub)
Physical devices are hardware devices locally present on the current machine.By default all discovered CPU and GPU devices are considered visible. The `list_physical_devices`  allows querying the hardware prior to runtimeinitialization.

The following example ensures the machine can see at least 1 GPU.

```
 physical_devices = tf.config.experimental.list_physical_devices('GPU')
assert len(physical_devices) > 0, "No GPUs found."
 
```

#### Args:
- **`device_type`** : (optional) Device type to filter by such as "CPU" or "GPU"


#### Returns:
List of PhysicalDevice objects

