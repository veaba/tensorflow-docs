[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/autograph/trace) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/autograph/utils/ag_logging.py#L91-L111)  
  
  
Traces argument information at compilation time.

### Aliases:

  * [`tf.compat.v1.autograph.trace`](/api_docs/python/tf/autograph/trace)
  * [`tf.compat.v2.autograph.trace`](/api_docs/python/tf/autograph/trace)

    
    
    tf.autograph.trace(*args)
    

`trace` is useful when debugging, and it always executes during the tracing
phase, that is, when the TF graph is constructed.

_Example usage_

    
    
    import tensorflow as tf
    
    for i in tf.range(10):
      tf.autograph.trace(i)
    # Output: <Tensor ...>
    

#### Args:

  * **`*args`** : Arguments to print to `sys.stdout`.

