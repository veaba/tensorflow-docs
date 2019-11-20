[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/distribute/experimental_set_strategy)
|  [ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source
on GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/distribute/distribution_strategy_context.py#L220-L266)  
---|---  
  
Set a
[`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy)
as current without `with strategy.scope()`.

### Aliases:

  * [`tf.compat.v1.distribute.experimental_set_strategy`](/api_docs/python/tf/distribute/experimental_set_strategy)
  * [`tf.compat.v2.distribute.experimental_set_strategy`](/api_docs/python/tf/distribute/experimental_set_strategy)

    
    
    tf.distribute.experimental_set_strategy(strategy)
    
    
    
    tf.distribute.experimental_set_strategy(strategy1)
    f()
    tf.distribute.experimental_set_strategy(strategy2)
    g()
    tf.distribute.experimental_set_strategy(None)
    h()
    

is equivalent to:

    
    
    with strategy1.scope():
      f()
    with strategy2.scope():
      g()
    h()
    

In general, you should use the `with strategy.scope():` API, but this
alternative may be convenient in notebooks where you would have to put each
cell in a `with strategy.scope():` block.

**Note:** This should only be called outside of any TensorFlow scope to avoid
improper nesting.

#### Args:

  * **`strategy`** : A [`tf.distribute.Strategy`](https://tensorflow.google.cn/api_docs/python/tf/distribute/Strategy) object or None.

#### Raises:

  * **`RuntimeError`** : If called inside a `with strategy.scope():`.

