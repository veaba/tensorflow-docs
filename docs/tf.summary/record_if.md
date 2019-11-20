[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/summary_ops_v2.py#L100-L121)  
---  
  
Sets summary recording on or off per the provided boolean value.

### Aliases:

  * [`tf.compat.v2.summary.record_if`](/api_docs/python/tf/summary/record_if)

    
    
    tf.summary.record_if(condition)
    

The provided value can be a python boolean, a scalar boolean Tensor, or or a
callable providing such a value; if a callable is passed it will be invoked
on-demand to determine whether summary writing will occur.

#### Args:

  * **`condition`** : can be True, False, a bool Tensor, or a callable providing such.

#### Yields:

Returns a context manager that sets this value on enter and restores the
previous value on exit.

