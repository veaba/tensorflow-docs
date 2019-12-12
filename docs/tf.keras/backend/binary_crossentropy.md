输出张量和目标张量之间的二元交叉熵。

**别名** : [ `tf.compat.v1.keras.backend.binary_crossentropy` ](/api_docs/python/tf/keras/backend/binary_crossentropy), [ `tf.compat.v2.keras.backend.binary_crossentropy` ](/api_docs/python/tf/keras/backend/binary_crossentropy)

```
 tf.keras.backend.binary_crossentropy(
    target,
    output,
    from_logits=False
)
 
```

#### 参数：
- **`target`** : A tensor with the same shape as  `output` .
- **`output`** : A tensor.
- **`from_logits`** : Whether  `output`  is expected to be a logits tensor.By default, we consider that  `output` encodes a probability distribution.


#### 返回：
张量

