Destroy Keras' multiprocessing pools to prevent deadlocks.

**Aliases** : [ `tf.compat.v1.keras.experimental.terminate_keras_multiprocessing_pools` ](/api_docs/python/tf/keras/experimental/terminate_keras_multiprocessing_pools), [ `tf.compat.v2.keras.experimental.terminate_keras_multiprocessing_pools` ](/api_docs/python/tf/keras/experimental/terminate_keras_multiprocessing_pools)

```
 tf.keras.experimental.terminate_keras_multiprocessing_pools(
    grace_period=0.1,
    use_sigkill=False
)
 
```

In general multiprocessing.Pool can interact quite badly with other, seeminglyunrelated, parts of a codebase due to Pool's reliance on fork. This methodcleans up all pools which are known to belong to Keras (and thus can be safelyterminated).

#### Args:
- **`grace_period`** : Time (in seconds) to wait for process cleanup to propagate.
- **`use_sigkill`** : Boolean of whether or not to perform a cleanup pass usingSIGKILL.


#### Returns:
A list of human readable strings describing all issues encountered. It is upto the caller to decide whether to treat this as an error condition.

