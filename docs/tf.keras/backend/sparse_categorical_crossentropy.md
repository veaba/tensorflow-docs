带整数目标的分类交叉熵。

**别名** : [ `tf.compat.v1.keras.backend.sparse_categorical_crossentropy` ](/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy), [ `tf.compat.v2.keras.backend.sparse_categorical_crossentropy` ](/api_docs/python/tf/keras/backend/sparse_categorical_crossentropy)

```
 tf.keras.backend.sparse_categorical_crossentropy(
    target,
    output,
    from_logits=False,
    axis=-1
)
 
```

#### 参数：
- **`target`** : An integer tensor.
- **`output`** : A tensor resulting from a softmax(unless  `from_logits`  is True, in whichcase  `output`  is expected to be the logits).
- **`from_logits`** : Boolean, whether  `output`  is theresult of a softmax, or is a tensor of logits.
- **`axis`** : Int specifying the channels axis.  `axis=-1`  corresponds to dataformat  `channels_last', and` axis=1 `corresponds to data format` channels_first`.


#### 返回：
输出张量。

#### 加薪：
- **`ValueError`** : if  `axis`  is neither -1 nor one of the axes of  `output` .
