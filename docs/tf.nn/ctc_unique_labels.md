Get unique labels and indices for batched labels for [ `tf.nn.ctc_loss` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_loss).

**别名** : [ `tf.compat.v1.nn.ctc_unique_labels` ](/api_docs/python/tf/nn/ctc_unique_labels), [ `tf.compat.v2.nn.ctc_unique_labels` ](/api_docs/python/tf/nn/ctc_unique_labels)

```
 tf.nn.ctc_unique_labels(
    labels,
    name=None
)
 
```

For use with [ `tf.nn.ctc_loss` ](https://tensorflow.google.cn/api_docs/python/tf/nn/ctc_loss) optional argument  `unique` : This op can beused to preprocess labels in input pipeline to for better speed/memory usecomputing the ctc loss on TPU.

#### 示例：
ctc_unique_labels([[3, 4, 4, 3]]) ->  unique labels padded with 0: [[3, 4, 0, 0]]  indices of original labels in unique: [0, 1, 1, 0]

#### 参数：
- **`labels`** : tensor of shape [batch_size, max_label_length] padded with 0.
- **`name`** : A name for this  `Op` . Defaults to "ctc_unique_labels".


#### 返回：
tuple of  - unique labels, tensor of shape  `[batch_size, max_label_length]`   - indices into unique labels, shape  `[batch_size, max_label_length]` 

