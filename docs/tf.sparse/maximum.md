Returns the element-wise max of two SparseTensors.

**别名** : [ `tf.compat.v1.sparse.maximum` ](/api_docs/python/tf/sparse/maximum), [ `tf.compat.v1.sparse_maximum` ](/api_docs/python/tf/sparse/maximum), [ `tf.compat.v2.sparse.maximum` ](/api_docs/python/tf/sparse/maximum)

```
 tf.sparse.maximum(    sp_a,    sp_b,    name=None) 
```

Assumes the two SparseTensors have the same shape, i.e., no broadcasting.Example:

```
 sp_zero = sparse_tensor.SparseTensor([[0]], [0], [7])sp_one = sparse_tensor.SparseTensor([[1]], [1], [7])res = tf.sparse.maximum(sp_zero, sp_one).eval()# "res" should be equal to SparseTensor([[0], [1]], [0, 1], [7]). 
```

#### 参数：
- **`sp_a`** : a  `SparseTensor`  operand whose dtype is real, and indiceslexicographically ordered.
- **`sp_b`** : the other  `SparseTensor`  operand with the same requirements (and thesame shape).
- **`name`** : optional name of the operation.


#### 返回：
- **`output`** : the output SparseTensor.
