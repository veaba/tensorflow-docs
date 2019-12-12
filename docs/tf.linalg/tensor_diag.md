返回具有给定对角值的对角张量。

**别名** : [ `tf.compat.v1.diag` ](/api_docs/python/tf/linalg/tensor_diag), [ `tf.compat.v1.linalg.tensor_diag` ](/api_docs/python/tf/linalg/tensor_diag), [ `tf.compat.v2.linalg.tensor_diag` ](/api_docs/python/tf/linalg/tensor_diag)

```
 tf.linalg.tensor_diag(
    diagonal,
    name=None
)
 
```

Given a  `diagonal` , this operation returns a tensor with the  `diagonal`  andeverything else padded with zeros. The diagonal is computed as follows:

Assume  `diagonal`  has dimensions [D1,..., Dk], then the output is a tensor ofrank 2k with dimensions [D1,..., Dk, D1,..., Dk] where:

 `output[i1,..., ik, i1,..., ik] = diagonal[i1, ..., ik]`  and 0 everywhere else.

#### 例如：


```
 # 'diagonal' is [1, 2, 3, 4]
tf.diag(diagonal) ==> [[1, 0, 0, 0]
                       [0, 2, 0, 0]
                       [0, 0, 3, 0]
                       [0, 0, 0, 4]]
 
```

#### 参数：
- **`diagonal`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .Rank k tensor where k is at most 1.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `diagonal` .

