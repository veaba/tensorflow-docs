

## Class  `TargetSpec` 
Specification of target device.



### Aliases:

- Class [ `tf.compat.v1.lite.TargetSpec` ](/api_docs/python/tf/lite/TargetSpec)

- Class [ `tf.compat.v2.lite.TargetSpec` ](/api_docs/python/tf/lite/TargetSpec)

Details about target device. Converter optimizes the generated model for
specific device.



#### Attributes:

- **`supported_ops`** : Experimental flag, subject to change. Set of OpsSet options
supported by the device. (default set([OpsSet.TFLITE_BUILTINS]))

- **`supported_types`** : List of types for constant values on the target device.
Supported values are types exported by lite.constants. Frequently, an
optimization choice is driven by the most compact (i.e. smallest)
type in this list (default [constants.FLOAT])



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/lite/python/lite.py#L149-L155)



```
 __init__(
    supported_ops=None,
    supported_types=None
)
 
```

Initialize self.  See help(type(self)) for accurate signature.

