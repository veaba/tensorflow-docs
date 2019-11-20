[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/get_strategy) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribution_strategy_context.py#L179-L196)  
  
  
Returns the current
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
object.

### Aliases:

  * [`tf.compat.v1.distribute.get_strategy`](/api_docs/python/tf/distribute/get_strategy)
  * [`tf.compat.v2.distribute.get_strategy`](/api_docs/python/tf/distribute/get_strategy)

    
    
    tf.distribute.get_strategy()
    

Typically only used in a cross-replica context:

    
    
    if tf.distribute.in_cross_replica_context():
      strategy = tf.distribute.get_strategy()
      ...
    

#### Returns:

A
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
object. Inside a `with strategy.scope()` block, it returns `strategy`,
otherwise it returns the default (single-replica)
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
object.

