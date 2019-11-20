[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/in_cross_replica_context)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribution_strategy_context.py#L154-L176)  
  
  
Returns `True` if in a cross-replica context.

### Aliases:

  * [`tf.compat.v1.distribute.in_cross_replica_context`](/api_docs/python/tf/distribute/in_cross_replica_context)
  * [`tf.compat.v2.distribute.in_cross_replica_context`](/api_docs/python/tf/distribute/in_cross_replica_context)

    
    
    tf.distribute.in_cross_replica_context()
    

See
[`tf.distribute.get_replica_context`](https://tensorflow.google.cn/api_docs/python/tf/distribute/get_replica_context)
for details.

    
    
    assert not tf.distribute.in_cross_replica_context()
    with strategy.scope():
      assert tf.distribute.in_cross_replica_context()
    
      def f():
        assert not tf.distribute.in_cross_replica_context()
    
      strategy.experimental_run_v2(f)
    

#### Returns:

`True` if in a cross-replica context (`get_replica_context()` returns `None`),
or `False` if in a replica context (`get_replica_context()` returns
non-`None`).

