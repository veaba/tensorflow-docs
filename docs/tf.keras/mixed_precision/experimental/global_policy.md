Returns the global Policy.

**Aliases** : [ `tf.compat.v1.keras.mixed_precision.experimental.global_policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/global_policy), [ `tf.compat.v2.keras.mixed_precision.experimental.global_policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/global_policy)

```
 tf.keras.mixed_precision.experimental.global_policy()
 
```

The global policy is the default policy used for layers, if no policy ispassed to the layer constructor. If no policy has been set with[ `keras.mixed_precision.experimental.set_policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/set_policy), this will return a policyconstructed from [ `tf.keras.backend.floatx()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx) in TensorFlow 2, or an "infer"policy in TensorFlow 1.

See [ `keras.mixed_precision.experimental.Policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy) for more information.

#### Returns:
The global Policy.

