Defined in generated file:  `python/ops/gen_array_ops.py` 

Returns the diagonal part of the tensor.



### Aliases:

- [ `tf.compat.v1.diag_part` ](/api_docs/python/tf/linalg/tensor_diag_part)

- [ `tf.compat.v1.linalg.tensor_diag_part` ](/api_docs/python/tf/linalg/tensor_diag_part)

- [ `tf.compat.v2.linalg.tensor_diag_part` ](/api_docs/python/tf/linalg/tensor_diag_part)



```
 tf.linalg.tensor_diag_part(
    input,
    name=None
)
 
```

This operation returns a tensor with the  `diagonal`  part
of the  `input` . The  `diagonal`  part is computed as follows:

Assume  `input`  has dimensions  `[D1,..., Dk, D1,..., Dk]` , then the output is a
tensor of rank  `k`  with dimensions  `[D1,..., Dk]`  where:

 `diagonal[i1,..., ik] = input[i1, ..., ik, i1,..., ik]` .



#### For example:


```
 # 'input' is [[1, 0, 0, 0]
              [0, 2, 0, 0]
              [0, 0, 3, 0]
              [0, 0, 0, 4]]

tf.diag_part(input) ==> [1, 2, 3, 4]
 
```



#### Args:

- **`input`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` ,  `int32` ,  `int64` ,  `complex64` ,  `complex128` .
Rank k tensor where k is even and not zero.

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `input` .

