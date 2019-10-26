Returns operations potentially supported by TensorFlow Lite.

```
 tf.compat.v1.lite.experimental.get_potentially_supported_ops()
```
The potentially support list contains a list of ops that are partially or fully supported, which is derived by simply scanning op names to check whether they can be handled without real conversion and specific parameters.
Given that some ops may be partially supported, the optimal way to determine if a model's operations are supported is by converting using the TensorFlow Lite converter.
#### Returns:
A list of SupportedOp.
