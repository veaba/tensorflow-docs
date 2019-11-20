[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/has_strategy) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribution_strategy_context.py#L199-L212)  
  
  
Return if there is a current non-default
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy).

### Aliases:

  * [`tf.compat.v1.distribute.has_strategy`](/api_docs/python/tf/distribute/has_strategy)
  * [`tf.compat.v2.distribute.has_strategy`](/api_docs/python/tf/distribute/has_strategy)

    
    
    tf.distribute.has_strategy()
    
    
    
    assert not tf.distribute.has_strategy()
    with strategy.scope():
      assert tf.distribute.has_strategy()
    

#### Returns:

True if inside a `with strategy.scope():`.

