如果当前线程已启用紧急执行，则返回true。

**别名** : [ `tf.compat.v1.executing_eagerly` ](/api_docs/python/tf/executing_eagerly), [ `tf.compat.v2.executing_eagerly` ](/api_docs/python/tf/executing_eagerly)

```
 tf.executing_eagerly()
 
```

### 在指南中使用：
- [Eager execution](https://tensorflow.google.cn/guide/eager)


### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Text classification with TensorFlow Hub: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification_with_hub)
Eager execution is typically enabled via[ `tf.compat.v1.enable_eager_execution` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/enable_eager_execution), but may also be enabled within thecontext of a Python function via tf.contrib.eager.py_func.

