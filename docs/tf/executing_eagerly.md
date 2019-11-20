[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/executing_eagerly) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/eager/context.py#L1601-L1612)  
  
  
Returns True if the current thread has eager execution enabled.

### Aliases:

  * [`tf.compat.v1.executing_eagerly`](/api_docs/python/tf/executing_eagerly)
  * [`tf.compat.v2.executing_eagerly`](/api_docs/python/tf/executing_eagerly)

    
    
    tf.executing_eagerly()
    

### Used in the guide:

  * [Eager execution](https://tensorflow.google.cn/guide/eager)

### Used in the tutorials:

  * [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
  * [Text classification with TensorFlow Hub: Movie reviews](https://tensorflow.google.cn/tutorials/keras/text_classification_with_hub)

Eager execution is typically enabled via
[`tf.compat.v1.enable_eager_execution`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/enable_eager_execution),
but may also be enabled within the context of a Python function via
tf.contrib.eager.py_func.

