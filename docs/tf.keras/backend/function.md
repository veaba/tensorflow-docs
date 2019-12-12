实例化一个keras函数。

**别名** : [ `tf.compat.v1.keras.backend.function` ](/api_docs/python/tf/keras/backend/function), [ `tf.compat.v2.keras.backend.function` ](/api_docs/python/tf/keras/backend/function)

```
 tf.keras.backend.function(
    inputs,
    outputs,
    updates=None,
    name=None,
    **kwargs
)
 
```

#### 参数：
- **`inputs`** : List of placeholder tensors.
- **`outputs`** : List of output tensors.
- **`updates`** : List of update ops.
- **`name`** : String, name of function.
- **`**kwargs`** : Passed to  `tf.Session.run` .


#### 返回：
将值输出为numpy数组。

#### 加薪：
- **`ValueError`** : if invalid kwargs are passed in or if in eager execution.
