返回多个张量变量的值。

**别名** : [ `tf.compat.v1.keras.backend.batch_get_value` ](/api_docs/python/tf/keras/backend/batch_get_value), [ `tf.compat.v2.keras.backend.batch_get_value` ](/api_docs/python/tf/keras/backend/batch_get_value)

```
 tf.keras.backend.batch_get_value(tensors)
 
```

#### 参数：
- **`tensors`** : list of ops to run.


#### 返回：
numpy数组的列表。

#### 加薪：
- **`RuntimeError`** : If this method is called inside defun.
