复制一个张量，在每个最里面的矩阵中设置中心带之外的所有内容

**别名** : [ `tf.compat.v1.linalg.band_part` ](/api_docs/python/tf/linalg/band_part), [ `tf.compat.v1.matrix_band_part` ](/api_docs/python/tf/linalg/band_part), [ `tf.compat.v2.linalg.band_part` ](/api_docs/python/tf/linalg/band_part)

```
 tf.linalg.band_part(
    input,
    num_lower,
    num_upper,
    name=None
)
 
```

### 在教程中使用：
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
归零。

The  `band`  part is computed as follows:Assume  `input`  has  `k`  dimensions  `[I, J, K, ..., M, N]` , then the output is atensor with the same shape where

 `band[i, j, k, ..., m, n] = in_band(m, n) * input[i, j, k, ..., m, n]` .

指示器功能

 `in_band(m, n) = (num_lower < 0 || (m-n) <= num_lower)) &amp;&amp;                 (num_upper < 0 || (n-m) <= num_upper)` .

#### 例如：


```
 # if 'input' is [[ 0,  1,  2, 3]
                 [-1,  0,  1, 2]
                 [-2, -1,  0, 1]
                 [-3, -2, -1, 0]],

tf.matrix_band_part(input, 1, -1) ==> [[ 0,  1,  2, 3]
                                       [-1,  0,  1, 2]
                                       [ 0, -1,  0, 1]
                                       [ 0,  0, -1, 0]],

tf.matrix_band_part(input, 2, 1) ==> [[ 0,  1,  0, 0]
                                      [-1,  0,  1, 0]
                                      [-2, -1,  0, 1]
                                      [ 0, -2, -1, 0]]
 
```

#### 有用的特殊情况：


```
  tf.matrix_band_part(input, 0, -1) ==> Upper triangular part.
 tf.matrix_band_part(input, -1, 0) ==> Lower triangular part.
 tf.matrix_band_part(input, 0, 0) ==> Diagonal.
 
```

#### 参数：
- **`input`** : A  `Tensor` . Rank  `k`  tensor.
- **`num_lower`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .0-D tensor. Number of subdiagonals to keep. If negative, keep entirelower triangle.
- **`num_upper`** : A  `Tensor` . Must have the same type as  `num_lower` .0-D tensor. Number of superdiagonals to keep. If negative, keepentire upper triangle.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

