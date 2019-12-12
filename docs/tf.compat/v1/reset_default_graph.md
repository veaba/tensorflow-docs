清除默认图形堆栈并重置全局默认图形。

```
 tf.compat.v1.reset_default_graph()
 
```

注意：The default graph is a property of the current thread. Thisfunction applies only to the current thread.  Calling this function whilea [ `tf.compat.v1.Session` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Session) or [ `tf.compat.v1.InteractiveSession` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/InteractiveSession) is active willresult in undefinedbehavior. Using any previously created [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) or [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objectsafter calling this function will result in undefined behavior.Raises:  AssertionError: If this function is called within a nested graph.

