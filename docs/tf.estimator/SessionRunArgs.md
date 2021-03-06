

## Class  `SessionRunArgs` 
Represents arguments to be added to a  `Session.run()`  call.

**别名** : [ `tf.compat.v1.estimator.SessionRunArgs` ](/api_docs/python/tf/estimator/SessionRunArgs), [ `tf.compat.v1.train.SessionRunArgs` ](/api_docs/python/tf/estimator/SessionRunArgs), [ `tf.compat.v2.estimator.SessionRunArgs` ](/api_docs/python/tf/estimator/SessionRunArgs)

#### 参数：
- **`fetches`** : Exactly like the 'fetches' argument to Session.Run().Can be a single tensor or op, a list of 'fetches' or a dictionaryof fetches.  For example:fetches = global_step_tensorfetches = [train_op, summary_op, global_step_tensor]fetches = {'step': global_step_tensor, 'summ': summary_op}Note that this can recurse as expected:fetches = {'step': global_step_tensor,           'ops': [train_op, check_nan_op]}
- **`feed_dict`** : Exactly like the  `feed_dict`  argument to  `Session.Run()` 
- **`options`** : Exactly like the  `options`  argument to  `Session.run()` , i.e., aconfig_pb2.RunOptions proto.


##  `__new__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/session_run_hook.py#L210-L211)

```
 @staticmethod
__new__(
    cls,
    fetches,
    feed_dict=None,
    options=None
)
 
```

Create new instance of SessionRunArgs(fetches, feed_dict, options)

## 属性


###  `fetches` 


###  `feed_dict` 


###  `options` 
