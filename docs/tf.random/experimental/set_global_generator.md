[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/random/experimental/set_global_generator)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/stateful_random_ops.py#L687-L706)  
  
  
Replaces the global generator with another `Generator` object.

### Aliases:

  * [`tf.compat.v1.random.experimental.set_global_generator`](/api_docs/python/tf/random/experimental/set_global_generator)
  * [`tf.compat.v2.random.experimental.set_global_generator`](/api_docs/python/tf/random/experimental/set_global_generator)

    
    
    tf.random.experimental.set_global_generator(generator)
    

This function creates a new Generator object (and the Variable object within),
which does not work well with tf.function because (1) tf.function puts
restrictions on Variable creation thus reset_global_generator can't be freely
used inside tf.function; (2) redirecting a global variable to a new object is
problematic with tf.function because the old object may be captured by a
'tf.function'ed function and still be used by it. A 'tf.function'ed function
only keeps weak references to variables, so deleting a variable and then
calling that function again may raise an error, as demonstrated by
random_test.py/RandomTest.testResetGlobalGeneratorBadWithDefun .

#### Args:

  * **`generator`** : the new `Generator` object.

