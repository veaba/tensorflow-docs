[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/reorder) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L680-L728)  
  
  
Reorders a `SparseTensor` into the canonical, row-major ordering.

### Aliases:

  * [`tf.compat.v1.sparse.reorder`](/api_docs/python/tf/sparse/reorder)
  * [`tf.compat.v1.sparse_reorder`](/api_docs/python/tf/sparse/reorder)
  * [`tf.compat.v2.sparse.reorder`](/api_docs/python/tf/sparse/reorder)

    
    
    tf.sparse.reorder(
        sp_input,
        name=None
    )
    

Note that by convention, all sparse ops preserve the canonical ordering along
increasing dimension number. The only time ordering can be violated is during
manual manipulation of the indices and values to add entries.

Reordering does not affect the shape of the `SparseTensor`.

For example, if `sp_input` has shape `[4, 5]` and `indices` / `values`:

    
    
    [0, 3]: b
    [0, 1]: a
    [3, 1]: d
    [2, 0]: c
    

then the output will be a `SparseTensor` of shape `[4, 5]` and `indices` /
`values`:

    
    
    [0, 1]: a
    [0, 3]: b
    [2, 0]: c
    [3, 1]: d
    

#### Args:

  * **`sp_input`** : The input `SparseTensor`.
  * **`name`** : A name prefix for the returned tensors (optional)

#### Returns:

A `SparseTensor` with the same shape and non-empty values, but in canonical
ordering.

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

