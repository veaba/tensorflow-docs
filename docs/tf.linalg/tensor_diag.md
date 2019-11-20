[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/linalg/tensor_diag)  
---  
  
Defined in generated file: `python/ops/gen_array_ops.py`

Returns a diagonal tensor with a given diagonal values.

### Aliases:

  * [`tf.compat.v1.diag`](/api_docs/python/tf/linalg/tensor_diag)
  * [`tf.compat.v1.linalg.tensor_diag`](/api_docs/python/tf/linalg/tensor_diag)
  * [`tf.compat.v2.linalg.tensor_diag`](/api_docs/python/tf/linalg/tensor_diag)

    
    
    tf.linalg.tensor_diag(
        diagonal,
        name=None
    )
    

Given a `diagonal`, this operation returns a tensor with the `diagonal` and
everything else padded with zeros. The diagonal is computed as follows:

Assume `diagonal` has dimensions [D1,..., Dk], then the output is a tensor of
rank 2k with dimensions [D1,..., Dk, D1,..., Dk] where:

`output[i1,..., ik, i1,..., ik] = diagonal[i1, ..., ik]` and 0 everywhere
else.

#### For example:

    
    
    # 'diagonal' is [1, 2, 3, 4]
    tf.diag(diagonal) ==> [[1, 0, 0, 0]
                           [0, 2, 0, 0]
                           [0, 0, 3, 0]
                           [0, 0, 0, 4]]
    

#### Args:

  * **`diagonal`** : A `Tensor`. Must be one of the following types: `bfloat16`, `half`, `float32`, `float64`, `int32`, `int64`, `complex64`, `complex128`. Rank k tensor where k is at most 1.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same type as `diagonal`.

