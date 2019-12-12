Continuously yield new checkpoint files as they appear.

**Aliases** : [ `tf.compat.v1.train.checkpoints_iterator` ](/api_docs/python/tf/train/checkpoints_iterator), [ `tf.compat.v2.train.checkpoints_iterator` ](/api_docs/python/tf/train/checkpoints_iterator)

```
 tf.train.checkpoints_iterator(
    checkpoint_dir,
    min_interval_secs=0,
    timeout=None,
    timeout_fn=None
)
 
```

The iterator only checks for new checkpoints when control flow has beenreverted to it. This means it can miss checkpoints if your code takes longerto run between iterations than  `min_interval_secs`  or the interval at whichnew checkpoints are written.

The  `timeout`  argument is the maximum number of seconds to block waiting fora new checkpoint.  It is used in combination with the  `timeout_fn`  asfollows:

- If the timeout expires and no  `timeout_fn`  was specified, the iteratorstops yielding.
- If a  `timeout_fn`  was specified, that function is called and if it returnsa true boolean value the iterator stops yielding.
- If the function returns a false boolean value then the iterator resumes thewait for new checkpoints.  At this point the timeout logic applies again.
This behavior gives control to callers on what to do if checkpoints do notcome fast enough or stop being generated.  For example, if callers have a wayto detect that the training has stopped and know that no new checkpointswill be generated, they can provide a  `timeout_fn`  that returns  `True`  whenthe training has stopped.  If they know that the training is still going onthey return  `False`  instead.

#### Args:
- **`checkpoint_dir`** : The directory in which checkpoints are saved.
- **`min_interval_secs`** : The minimum number of seconds between yieldingcheckpoints.
- **`timeout`** : The maximum number of seconds to wait between checkpoints. If leftas  `None` , then the process will wait indefinitely.
- **`timeout_fn`** : Optional function to call after a timeout.  If the functionreturns True, then it means that no new checkpoints will be generated andthe iterator will exit.  The function is called with no arguments.


#### Yields:
String paths to latest checkpoint files as they arrive.

