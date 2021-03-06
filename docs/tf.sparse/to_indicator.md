Converts a  `SparseTensor`  of ids into a dense bool indicator tensor.

**别名** : [ `tf.compat.v1.sparse.to_indicator` ](/api_docs/python/tf/sparse/to_indicator), [ `tf.compat.v1.sparse_to_indicator` ](/api_docs/python/tf/sparse/to_indicator), [ `tf.compat.v2.sparse.to_indicator` ](/api_docs/python/tf/sparse/to_indicator)

```
 tf.sparse.to_indicator(
    sp_input,
    vocab_size,
    name=None
)
 
```

The last dimension of  `sp_input.indices`  is discarded and replaced withthe values of  `sp_input` .  If  `sp_input.dense_shape = [D0, D1, ..., Dn, K]` ,then  `output.shape = [D0, D1, ..., Dn, vocab_size]` , where

```
 output[d_0, d_1, ..., d_n, sp_input[d_0, d_1, ..., d_n, k]] = True
 
```

and False elsewhere in  `output` .

For example, if  `sp_input.dense_shape = [2, 3, 4]`  with non-empty values:

```
 [0, 0, 0]: 0
[0, 1, 0]: 10
[1, 0, 3]: 103
[1, 1, 1]: 150
[1, 1, 2]: 149
[1, 1, 3]: 150
[1, 2, 1]: 121
 
```

and  `vocab_size = 200` , then the output will be a  `[2, 3, 200]`  dense booltensor with False everywhere except at positions

```
 (0, 0, 0), (0, 1, 10), (1, 0, 103), (1, 1, 149), (1, 1, 150),
(1, 2, 121).
 
```

Note that repeats are allowed in the input SparseTensor.This op is useful for converting  `SparseTensor` s into dense formats forcompatibility with ops that expect dense tensors.

The input  `SparseTensor`  must be in row-major order.

#### 参数：
- **`sp_input`** : A  `SparseTensor`  with  `values`  property of type  `int32`  or `int64` .
- **`vocab_size`** : A scalar int64 Tensor (or Python int) containing the new sizeof the last dimension,  `all(0 <= sp_input.values < vocab_size)` .
- **`name`** : A name prefix for the returned tensors (optional)


#### 返回：
表示具有指定值的索引的稠密bool指示符张量。

#### 加薪：
- **`TypeError`** : If  `sp_input`  is not a  `SparseTensor` .
