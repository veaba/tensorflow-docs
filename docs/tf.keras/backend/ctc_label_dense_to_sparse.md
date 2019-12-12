将CTC标签从密集转换为稀疏。

**别名** : [ `tf.compat.v1.keras.backend.ctc_label_dense_to_sparse` ](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse), [ `tf.compat.v2.keras.backend.ctc_label_dense_to_sparse` ](/api_docs/python/tf/keras/backend/ctc_label_dense_to_sparse)

```
 tf.keras.backend.ctc_label_dense_to_sparse(
    labels,
    label_lengths
)
 
```

#### 参数：
- **`labels`** : dense CTC labels.
- **`label_lengths`** : length of the labels.


#### 返回：
标签的稀疏张量表示。

