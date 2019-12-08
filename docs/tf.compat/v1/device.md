Wrapper for [ `Graph.device()` ](/api_docs/python/tf/Graph#device) using the default graph.



```
 tf.compat.v1.device(device_name_or_function)
 
```

See [ `tf.Graph.device` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#device) for more details.



#### Args:

- **`device_name_or_function`** : The device name or function to use in the context.



#### Returns:
A context manager that specifies the default device to use for newly
created ops.



#### Raises:

- **`RuntimeError`** : If eager execution is enabled and a function is passed in.

