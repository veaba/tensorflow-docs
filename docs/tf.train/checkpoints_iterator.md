[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/train/checkpoints_iterator) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/checkpoint_utils.py#L137-L200)  
---|---  
  
Continuously yield new checkpoint files as they appear.

### Aliases:

  * [`tf.compat.v1.train.checkpoints_iterator`](/api_docs/python/tf/train/checkpoints_iterator)
  * [`tf.compat.v2.train.checkpoints_iterator`](/api_docs/python/tf/train/checkpoints_iterator)

    
    
    tf.train.checkpoints_iterator(
        checkpoint_dir,
        min_interval_secs=0,
        timeout=None,
        timeout_fn=None
    )
    

The iterator only checks for new checkpoints when control flow has been
reverted to it. This means it can miss checkpoints if your code takes longer
to run between iterations than `min_interval_secs` or the interval at which
new checkpoints are written.

The `timeout` argument is the maximum number of seconds to block waiting for a
new checkpoint. It is used in combination with the `timeout_fn` as follows:

  * If the timeout expires and no `timeout_fn` was specified, the iterator stops yielding.
  * If a `timeout_fn` was specified, that function is called and if it returns a true boolean value the iterator stops yielding.
  * If the function returns a false boolean value then the iterator resumes the wait for new checkpoints. At this point the timeout logic applies again.

This behavior gives control to callers on what to do if checkpoints do not
come fast enough or stop being generated. For example, if callers have a way
to detect that the training has stopped and know that no new checkpoints will
be generated, they can provide a `timeout_fn` that returns `True` when the
training has stopped. If they know that the training is still going on they
return `False` instead.

#### Args:

  * **`checkpoint_dir`** : The directory in which checkpoints are saved.
  * **`min_interval_secs`** : The minimum number of seconds between yielding checkpoints.
  * **`timeout`** : The maximum number of seconds to wait between checkpoints. If left as `None`, then the process will wait indefinitely.
  * **`timeout_fn`** : Optional function to call after a timeout. If the function returns True, then it means that no new checkpoints will be generated and the iterator will exit. The function is called with no arguments.

#### Yields:

String paths to latest checkpoint files as they arrive.

