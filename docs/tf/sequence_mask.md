返回表示每个单元格的前n个位置的掩码张量。

**别名** : [ `tf.compat.v1.sequence_mask` ](/api_docs/python/tf/sequence_mask), [ `tf.compat.v2.sequence_mask` ](/api_docs/python/tf/sequence_mask)

```
 tf.sequence_mask(    lengths,    maxlen=None,    dtype=tf.dtypes.bool,    name=None) 
```

If  `lengths`  has shape  `[d_1, d_2, ..., d_n]`  the resulting tensor  `mask`  hasdtype  `dtype`  and shape  `[d_1, d_2, ..., d_n, maxlen]` , with

```
 mask[i_1, i_2, ..., i_n, j] = (j < lengths[i_1, i_2, ..., i_n])
 
```

#### 示例：


```
 tf.sequence_mask([1, 3, 2], 5)  # [[True, False, False, False, False],
                                #  [True, True, True, False, False],
                                #  [True, True, False, False, False]]

tf.sequence_mask([[1, 3],[2,0]])  # [[[True, False, False],
                                  #   [True, True, True]],
                                  #  [[True, True, False],
                                  #   [False, False, False]]]
 
```

#### 参数：
- **`lengths`** : integer tensor, all its values <= maxlen.
- **`maxlen`** : scalar integer tensor, size of last dimension of returned tensor.Default is the maximum value in  `lengths` .
- **`dtype`** : output type of the resulting tensor.
- **`name`** : name of the op.


#### 返回：
A mask tensor of shape  `lengths.shape + (maxlen,)` , cast to specified dtype.

#### 加薪：
- **`ValueError`** : if  `maxlen`  is not a scalar.
