将字符串前缀与TensorFlow图中的整数计数器相关联。

**别名** : [ `tf.compat.v1.keras.backend.get_uid` ](/api_docs/python/tf/keras/backend/get_uid), [ `tf.compat.v2.keras.backend.get_uid` ](/api_docs/python/tf/keras/backend/get_uid)

```
 tf.keras.backend.get_uid(prefix='')
 
```

#### 参数：
- **`prefix`** : String prefix to index.


#### 返回：
唯一整数ID。

#### 示例：


```
   >>> get_uid('dense')
  1
  >>> get_uid('dense')
  2
 
```

