[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/mixed_precision/experimental/set_policy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/policy.py#L416-L441)  
---|---  
  
Sets the global Policy.

### Aliases:

  * [`tf.compat.v1.keras.mixed_precision.experimental.set_policy`](/api_docs/python/tf/keras/mixed_precision/experimental/set_policy)
  * [`tf.compat.v2.keras.mixed_precision.experimental.set_policy`](/api_docs/python/tf/keras/mixed_precision/experimental/set_policy)

    
    
    tf.keras.mixed_precision.experimental.set_policy(policy)
    

The global policy is the default policy used for layers, if no policy is
passed to the layer constructor. If no global policy is set, layers will
instead default to a Policy constructed from
[`tf.keras.backend.floatx()`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx)
in TensorFlow 2. In TensorFlow 1, layers default to an "infer" policy.

See
[`keras.mixed_precision.experimental.Policy`](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy)
for more information.

#### Args:

  * **`policy`** : A Policy, or a string that will be converted to a Policy..

