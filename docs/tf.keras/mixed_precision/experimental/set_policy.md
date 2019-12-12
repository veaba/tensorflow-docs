Sets the global Policy.

**Aliases** : [ `tf.compat.v1.keras.mixed_precision.experimental.set_policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/set_policy), [ `tf.compat.v2.keras.mixed_precision.experimental.set_policy` ](/api_docs/python/tf/keras/mixed_precision/experimental/set_policy)

```
 tf.keras.mixed_precision.experimental.set_policy(policy)
 
```

The global policy is the default policy used for layers, if no policy ispassed to the layer constructor. If no global policy is set, layers willinstead default to a Policy constructed from [ `tf.keras.backend.floatx()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx) inTensorFlow 2. In TensorFlow 1, layers default to an "infer" policy.

See [ `keras.mixed_precision.experimental.Policy` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy) for more information.

#### Args:
- **`policy`** : A Policy, or a string that will be converted to a Policy..
