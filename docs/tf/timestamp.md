Defined in generated file:  `python/ops/gen_logging_ops.py` 

Provides the time since epoch in seconds.



### Aliases:

- [ `tf.compat.v1.timestamp` ](/api_docs/python/tf/timestamp)

- [ `tf.compat.v2.timestamp` ](/api_docs/python/tf/timestamp)



```
 tf.timestamp(name=None)
 
```

Returns the timestamp as a  `float64`  for seconds since the Unix epoch.


<aside class="note">**Note:**  the timestamp is computed when the op is executed, not when it is added
to the graph.</aside>


#### Args:

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor`  of type  `float64` .

