Returns the element-wise min of two SparseTensors.

**Aliases** : [ `tf.compat.v1.sparse.minimum` ](/api_docs/python/tf/sparse/minimum), [ `tf.compat.v1.sparse_minimum` ](/api_docs/python/tf/sparse/minimum), [ `tf.compat.v2.sparse.minimum` ](/api_docs/python/tf/sparse/minimum)

```
 tf.sparse.minimum(    sp_a,    sp_b,    name=None) 
```

Assumes the two SparseTensors have the same shape, i.e., no broadcasting.Example:

```
 sp_zero = sparse_tensor.SparseTensor([[0]], [0], [7])sp_one = sparse_tensor.SparseTensor([[1]], [1], [7])res = tf.sparse.minimum(sp_zero, sp_one).eval()# "res" should be equal to SparseTensor([[0], [1]], [0, 0], [7]). 
```

#### Args:
- **`sp_a`** : a  `SparseTensor`  operand whose dtype is real, and indiceslexicographically ordered.
- **`sp_b`** : the other  `SparseTensor`  operand with the same requirements (and thesame shape).
- **`name`** : optional name of the operation.


#### Returns:
- **`output`** : the output SparseTensor.
