Sets the global Policy.
### Aliases:
- tf.compat.v1.keras.mixed_precision.experimental.set_policy
- tf.compat.v2.keras.mixed_precision.experimental.set_policy

```
 tf.keras.mixed_precision.experimental.set_policy(policy)
```
[tf.keras.backend.floatx()](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx)The global policy is the default policy used for layers, if no policy is passed to the layer constructor. If no global policy is set, layers will instead default to a Policy constructed from  in TensorFlow 2. In TensorFlow 1, layers default to an "infer" policy.

[keras.mixed_precision.experimental.Policy](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy)See  for more information.

#### Args:
- policy: A Policy, or a string that will be converted to a Policy..
