对每个批处理元素运行CTC丢失算法。

**别名** : [ `tf.compat.v1.keras.backend.ctc_batch_cost` ](/api_docs/python/tf/keras/backend/ctc_batch_cost), [ `tf.compat.v2.keras.backend.ctc_batch_cost` ](/api_docs/python/tf/keras/backend/ctc_batch_cost)

```
 tf.keras.backend.ctc_batch_cost(
    y_true,
    y_pred,
    input_length,
    label_length
)
 
```

#### 参数：
- **`y_true`** : tensor  `(samples, max_string_length)` containing the truth labels.
- **`y_pred`** : tensor  `(samples, time_steps, num_categories)` containing the prediction, or output of the softmax.
- **`input_length`** : tensor  `(samples, 1)`  containing the sequence length foreach batch item in  `y_pred` .
- **`label_length`** : tensor  `(samples, 1)`  containing the sequence length foreach batch item in  `y_true` .


#### 返回：
Tensor with shape (samples,1) containing the    CTC loss of each element.

