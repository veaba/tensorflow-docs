## Class SparseTensor
Represents a sparse tensor.
### Aliases:
- Class `tf.SparseTensor`
- Class `tf.compat.v1.SparseTensor`
- Class `tf.compat.v1.sparse.SparseTensor`
- Class `tf.compat.v2.SparseTensor`
- Class `tf.compat.v2.sparse.SparseTensor`
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``R``a``g``g``e``d`` ``t``e``n``s``o``r``s``
TensorFlow represents a sparse tensor as three separate dense tensors: `indices`, `values`, and `dense_shape`. In Python, the three tensors are collected into a `SparseTensor` class for ease of use. If you have separate `indices`, `values`, and `dense_shape` tensors, wrap them in a `SparseTensor` object before passing to the ops below.
