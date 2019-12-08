Sets summary recording on or off per the provided boolean value.



### Aliases:

- [ `tf.compat.v2.summary.record_if` ](/api_docs/python/tf/summary/record_if)



```
 tf.summary.record_if(condition)
 
```

The provided value can be a python boolean, a scalar boolean Tensor, or
or a callable providing such a value; if a callable is passed it will be
invoked on-demand to determine whether summary writing will occur.



#### Args:

- **`condition`** : can be True, False, a bool Tensor, or a callable providing such.



#### Yields:
Returns a context manager that sets this value on enter and restores the
previous value on exit.

