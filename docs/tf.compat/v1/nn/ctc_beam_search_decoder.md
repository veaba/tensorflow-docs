对输入中给定的登录执行波束搜索解码。

```
 tf.compat.v1.nn.ctc_beam_search_decoder(
    inputs,
    sequence_length,
    beam_width=100,
    top_paths=1,
    merge_repeated=True
)
 
```

**Note**  The  `ctc_greedy_decoder`  is a special case of the `ctc_beam_search_decoder`  with  `top_paths=1`  and  `beam_width=1`  (butthat decoder is faster for this special case).

If  `merge_repeated`  is  `True` , merge repeated classes in the output beams.This means that if consecutive entries in a beam are the same,only the first of these is emitted.  That is, when the sequence is `A B B * B * B`  (where '*' is the blank label), the return value is:

-  `A B`  if  `merge_repeated = True` .
-  `A B B B`  if  `merge_repeated = False` .


#### 参数：
- **`inputs`** : 3-D  `float`   `Tensor` , size  `[max_time x batch_size x num_classes]` .The logits.
- **`sequence_length`** : 1-D  `int32`  vector containing sequence lengths, having size `[batch_size]` .
- **`beam_width`** : An int scalar >= 0 (beam search beam width).
- **`top_paths`** : An int scalar >= 0, <= beam_width (controls output size).
- **`merge_repeated`** : Boolean.  Default: True.


#### 返回：
A tuple  `(decoded, log_probabilities)`  where

- **`decoded`** : A list of length top_paths, where  `decoded[j]` is a  `SparseTensor`  containing the decoded outputs:

 `decoded[j].indices` : Indices matrix  `(total_decoded_outputs[j] x 2)` The rows store: [batch, time].

 `decoded[j].values` : Values vector, size  `(total_decoded_outputs[j])` .The vector stores the decoded classes for beam j.

 `decoded[j].dense_shape` : Shape vector, size  `(2)` .The shape values are:  `[batch_size, max_decoded_length[j]]` .


- **`log_probability`** : A  `float`  matrix  `(batch_size x top_paths)`  containingsequence log-probabilities.


