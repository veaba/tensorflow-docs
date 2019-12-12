Computes embeddings for the given ids and weights.

```
 tf.nn.embedding_lookup_sparse(
    params,
    sp_ids,
    sp_weights,
    combiner=None,
    max_norm=None,
    name=None
)
 
```

This op assumes that there is at least one id for each row in the dense tensorrepresented by sp_ids (i.e. there are no rows with empty features), and thatall the indices of sp_ids are in canonical row-major order.

It also assumes that all id values lie in the range [0, p0), where p0is the sum of the size of params along dimension 0.

#### Args:
- **`params`** : A single tensor representing the complete embedding tensor, or alist of P tensors all of same shape except for the first dimension,representing sharded embedding tensors.  Alternatively, a `PartitionedVariable` , created by partitioning along dimension 0. Eachelement must be appropriately sized for  `"div"`   `partition_strategy` .
- **`sp_ids`** : N x M  `SparseTensor`  of int64 ids where N is typically batch sizeand M is arbitrary.
- **`sp_weights`** : either a  `SparseTensor`  of float / double weights, or  `None`  toindicate all weights should be taken to be 1. If specified,  `sp_weights` must have exactly the same shape and indices as  `sp_ids` .
- **`combiner`** : A string specifying the reduction op. Currently "mean", "sqrtn"and "sum" are supported. "sum" computes the weighted sum of the embeddingresults for each row. "mean" is the weighted sum divided by the totalweight. "sqrtn" is the weighted sum divided by the square root of the sumof the squares of the weights.
- **`max_norm`** : If not  `None` , each embedding is clipped if its l2-norm is largerthan this value, before combining.
- **`name`** : Optional name for the op.


#### Returns:
A dense tensor representing the combined embeddings for thesparse ids. For each row in the dense tensor represented by  `sp_ids` , the oplooks up the embeddings for all ids in that row, multiplies them by thecorresponding weight, and combines these embeddings as specified.

In other words, if

 `shape(combined params) = [p0, p1, ..., pm]` 

and

 `shape(sp_ids) = shape(sp_weights) = [d0, d1, ..., dn]` 

then

 `shape(output) = [d0, d1, ..., dn-1, p1, ..., pm]` .

For instance, if params is a 10x20 matrix, and sp_ids / sp_weights are

```
 [0, 0]: id 1, weight 2.0
[0, 1]: id 3, weight 0.5
[1, 0]: id 0, weight 1.0
[2, 3]: id 1, weight 3.0
 
```

with  `combiner` ="mean", then the output will be a 3x20 matrix where

```
 output[0, :] = (params[1, :] * 2.0 + params[3, :] * 0.5) / (2.0 + 0.5)
output[1, :] = (params[0, :] * 1.0) / 1.0
output[2, :] = (params[1, :] * 3.0) / 3.0
 
```

#### Raises:
- **`TypeError`** : If  `sp_ids`  is not a  `SparseTensor` , or if  `sp_weights`  isneither  `None`  nor  `SparseTensor` .
- **`ValueError`** : If  `combiner`  is not one of {"mean", "sqrtn", "sum"}.
