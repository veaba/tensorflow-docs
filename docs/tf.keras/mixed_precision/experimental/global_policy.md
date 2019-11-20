[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/keras/mixed_precision/experimental/global_policy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/policy.py#L370-L390)  
---|---  
  
Returns the global Policy.

### Aliases:

  * [`tf.compat.v1.keras.mixed_precision.experimental.global_policy`](/api_docs/python/tf/keras/mixed_precision/experimental/global_policy)
  * [`tf.compat.v2.keras.mixed_precision.experimental.global_policy`](/api_docs/python/tf/keras/mixed_precision/experimental/global_policy)

    
    
    tf.keras.mixed_precision.experimental.global_policy()
    

The global policy is the default policy used for layers, if no policy is
passed to the layer constructor. If no policy has been set with
[`keras.mixed_precision.experimental.set_policy`](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/set_policy),
this will return a policy constructed from
[`tf.keras.backend.floatx()`](https://tensorflow.google.cn/api_docs/python/tf/keras/backend/floatx)
in TensorFlow 2, or an "infer" policy in TensorFlow 1.

See
[`keras.mixed_precision.experimental.Policy`](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/Policy)
for more information.

#### Returns:

The global Policy.

