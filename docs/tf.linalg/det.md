Defined in generated file:  `python/ops/gen_linalg_ops.py` 

Computes the determinant of one or more square matrices.



### Aliases:

- [ `tf.compat.v1.linalg.det` ](/api_docs/python/tf/linalg/det)

- [ `tf.compat.v1.matrix_determinant` ](/api_docs/python/tf/linalg/det)

- [ `tf.compat.v2.linalg.det` ](/api_docs/python/tf/linalg/det)



```
 tf.linalg.det(
    input,
    name=None
)
 
```

The input is a tensor of shape  `[..., M, M]`  whose inner-most 2 dimensions
form square matrices. The output is a tensor containing the determinants
for all input submatrices  `[..., :, :]` .



#### Args:

- **`input`** : A  `Tensor` . Must be one of the following types:  `half` ,  `float32` ,  `float64` ,  `complex64` ,  `complex128` .
Shape is  `[..., M, M]` .

- **`name`** : A name for the operation (optional).



#### Returns:
A  `Tensor` . Has the same type as  `input` .

