Forces summary writer to send any buffered data to storage.



### Aliases:

- [ `tf.compat.v2.summary.flush` ](/api_docs/python/tf/summary/flush)



```
 tf.summary.flush(
    writer=None,
    name=None
)
 
```

This operation blocks until that finishes.



#### Args:

- **`writer`** : The [ `tf.summary.SummaryWriter` ](https://tensorflow.google.cn/api_docs/python/tf/summary/SummaryWriter) resource to flush.
The thread default will be used if this parameter is None.
Otherwise a [ `tf.no_op` ](https://tensorflow.google.cn/api_docs/python/tf/no_op) is returned.

- **`name`** : A name for the operation (optional).



#### Returns:
The created [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation).

