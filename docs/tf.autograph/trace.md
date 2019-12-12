在编译时跟踪参数信息。

**别名** : [ `tf.compat.v1.autograph.trace` ](/api_docs/python/tf/autograph/trace), [ `tf.compat.v2.autograph.trace` ](/api_docs/python/tf/autograph/trace)

```
 tf.autograph.trace(*args) 
```

 `trace`  is useful when debugging, and it always executes during the tracingphase, that is, when the TF graph is constructed.

*Example usage*

```
 import tensorflow as tf

for i in tf.range(10):
  tf.autograph.trace(i)
# Output: <Tensor ...>
 
```

#### 参数：
- **`*args`** : Arguments to print to  `sys.stdout` .
