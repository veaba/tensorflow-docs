将重复的标签合并为单个标签。

**别名** : [ `tf.compat.v1.nn.collapse_repeated` ](/api_docs/python/tf/nn/collapse_repeated), [ `tf.compat.v2.nn.collapse_repeated` ](/api_docs/python/tf/nn/collapse_repeated)

```
 tf.nn.collapse_repeated(
    labels,
    seq_length,
    name=None
)
 
```

#### 参数：
- **`labels`** : Tensor of shape [batch, max value in seq_length]
- **`seq_length`** : Tensor of shape [batch], sequence length of each batch element.
- **`name`** : A name for this  `Op` . Defaults to "collapse_repeated_labels".


#### 返回：
A tuple  `(collapsed_labels, new_seq_length)`  where

- **`collapsed_labels`** : Tensor of shape [batch, max_seq_length] with repeatedlabels collapsed and padded to max_seq_length, eg: `[[A, A, B, B, A], [A, B, C, D, E]] => [[A, B, A, 0, 0], [A, B, C, D, E]]` 


- **`new_seq_length`** : int tensor of shape [batch] with new sequence lengths.


