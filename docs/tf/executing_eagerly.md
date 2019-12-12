Returns True if the current thread has eager execution enabled.

**Aliases** : [ `tf.compat.v1.executing_eagerly` ](/api_docs/python/tf/executing_eagerly), [ `tf.compat.v2.executing_eagerly` ](/api_docs/python/tf/executing_eagerly)

```
 tf.executing_eagerly()
 
```

### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### Used in the tutorials:
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Text classification with TensorFlow Hub: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification_with_hub)
Eager execution is typically enabled via[ `tf.compat.v1.enable_eager_execution` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/enable_eager_execution), but may also be enabled within thecontext of a Python function via tf.contrib.eager.py_func.

