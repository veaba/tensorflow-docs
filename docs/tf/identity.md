返回与输入形状和内容相同的张量。

**别名** : [ `tf.compat.v1.identity` ](/api_docs/python/tf/identity), [ `tf.compat.v2.identity` ](/api_docs/python/tf/identity)

```
 tf.identity(
    input,
    name=None
)
 
```

### 在指南中使用：
- [Eager execution](https://tensorflow.google.cn/guide/eager)


#### 例如：


```
 import tensorflow as tf
val0 = tf.ones((1,), dtype=tf.float32)
a = tf.atan2(val0, val0)
a_identity = tf.identity(a)
print(a.numpy())          #[0.7853982]
print(a_identity.numpy()) #[0.7853982]
 
```

#### 参数：
- **`input`** : A  `Tensor` .
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

