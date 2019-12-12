如果输入为collections.abc.sequence（字符串除外），则返回true。

**别名** : [ `tf.compat.v1.nest.is_nested` ](/api_docs/python/tf/nest/is_nested), [ `tf.compat.v2.nest.is_nested` ](/api_docs/python/tf/nest/is_nested)

```
 tf.nest.is_nested(seq)
 
```

#### 参数：
- **`seq`** : an input sequence.


#### 返回：
True if the sequence is a not a string and is a collections.abc.Sequenceor a dict.

