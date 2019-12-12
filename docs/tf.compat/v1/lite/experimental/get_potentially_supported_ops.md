Returns operations potentially supported by TensorFlow Lite.

```
 tf.compat.v1.lite.experimental.get_potentially_supported_ops()
 
```

The potentially support list contains a list of ops that are partially orfully supported, which is derived by simply scanning op names to check whetherthey can be handled without real conversion and specific parameters.

Given that some ops may be partially supported, the optimal way to determineif a model's operations are supported is by converting using the TensorFlowLite converter.

#### Returns:
A list of SupportedOp.

