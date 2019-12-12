Wrapper for [ `Graph.device()` ](/api_docs/python/tf/Graph#device) using the default graph.

```
 tf.compat.v1.device(device_name_or_function)
 
```

See [ `tf.Graph.device` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#device) for more details.

#### 参数：
- **`device_name_or_function`** : The device name or function to use in the context.


#### 返回：
A context manager that specifies the default device to use for newlycreated ops.

#### 加薪：
- **`RuntimeError`** : If eager execution is enabled and a function is passed in.
