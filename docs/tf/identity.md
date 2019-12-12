Return a tensor with the same shape and contents as input.

**Aliases** : [ `tf.compat.v1.identity` ](/api_docs/python/tf/identity), [ `tf.compat.v2.identity` ](/api_docs/python/tf/identity)

```
 tf.identity(
    input,
    name=None
)
 
```

### Used in the guide:
- [Eager execution](https://tensorflow.google.cn/guide/eager)


#### For example:


```
 import tensorflow as tf
val0 = tf.ones((1,), dtype=tf.float32)
a = tf.atan2(val0, val0)
a_identity = tf.identity(a)
print(a.numpy())          #[0.7853982]
print(a_identity.numpy()) #[0.7853982]
 
```

#### Args:
- **`input`** : A  `Tensor` .
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same type as  `input` .

