
Lookup embedding results, accounting for invalid IDs and empty features.
### Aliases:
- `tf.compat.v2.nn.safe_embedding_lookup_sparse`

```
 tf.nn.safe_embedding_lookup_sparse(
    embedding_weights,
    sparse_ids,
    sparse_weights=None,
    combiner='mean',
    default_id=None,
    max_norm=None,
    name=None
)
```
[tf.compat.v1.get_variable()](https://www.tensorflow.org/api_docs/python/tf/compat/v1/get_variable)The partitioned embedding in embedding_weights must all be the same shape except for the first dimension. The first dimension is allowed to vary as the vocabulary size is not necessarily a multiple of P. embedding_weights may be a PartitionedVariable as returned by using  with a partitioner.


Invalid IDs (< 0) are pruned from input IDs and weights, as well as any IDs with non-positive weight. For an entry with no features, the embedding vector for default_id is returned, or the 0-vector if default_id is not supplied.

The ids and weights may be multi-dimensional. Embeddings are always aggregated along the last dimension.
#### Args:
- `embedding_weights`:` `A` `list` `of` ``P`` `float` ``Tensor`s` `or` `valu`e`s` `r`e`pr`e`s`e`nting` `partition`e`d` ``e``m`b`e`dding` ``Tensor`s`.`` `Alt`e`rnativ`e`ly`,`` `a` ``P`artition`e`dVariabl`e`` `cr`e`at`e`d` `by` `partitioning` `along` `di`m``e`nsion` ``0``.`` `Th`e`` `total` `unpartition`e`d` `shap`e`` `should` `b`e`` `[`e``_``0``,`` ``e``_``1``,`` ``.``.``.``,`` ``e``_``m`]`,`` `wh`e`r`e`` ``e``_``0`` `r`e`pr`e`s`e`nts` `th`e`` `vocab` `siz`e`` `and` ``e``_``1``,`` ``.``.``.``,`` ``e``_``m`` `ar`e`` `th`e`` ``e``m`b`e`dding` `di`m``e`nsions`.`
- `sparse_ids`:` ``SparseTensor`` `of` `shap`e`` `[`d``_``0``,`` ``d``_``1``,`` ``.``.``.``,`` ``d``_``n`]` `co`n`tai`n`i`n`g` `th`e`` `i`d`s`.`` ``d``_``0`` `is` `typically` `batch` `siz`e``.`
- `sparse_weights`:` ``SparseTensor`` `of` `sa`m``e`` `shap`e`` `as` ``sparse_ids``,`` `co`n`tai`n`i`n`g` `float` `w`e`ights` `corr`e`spo`n``d`i`n`g` `to` ``sparse_ids``,`` `or` ``None`` `if` `all` `w`e`ights` `ar`e`` `b`e`` `assu`m``e``d`` `to` `b`e`` ``1``.``0``.`
- `combiner`:` `A` `stri`n`g` `sp`e`cifyi`n`g` `how` `to` `co`m`bi`n``e`` ``e``m`b`e``d``d`i`n`g` `r`e`sults` `for` ``e`ach` ``e``n`try`.`` `Curr`e``n`tly` `"`m``e`a`n`"`,`` `"sqrt`n`"` `a`n``d`` `"su`m`"` `ar`e`` `support`e``d``,`` `with` `"`m``e`a`n`"` `th`e`` ``d``e`fault`.`
- `d``e`fault`_`i`d`:` `Th`e`` `i`d`` `to` `us`e`` `for` `a`n`` ``e``n`try` `with` ``n`o` `f`e`atur`e`s`.`
- `m`ax`_``n`or`m`:` `If` ``n`ot` ``None``,`` `all` ``e``m`b`e``d``d`i`n`gs` `ar`e`` `l2-`n`or`m`aliz`e``d`` `to` ``m`ax`_``n`or`m`` `b`e`for`e`` `co`m`bi`n`i`n`g`.`
- `n`a`m``e`:` `A` ``n`a`m``e`` `for` `this` `op`e`ratio`n`` `(optio`n`al)`.`
#### Returns:

Dense Tensor of shape [d_0, d_1, ..., d_{n-1}, e_1, ..., e_m].
#### Raises:
- `ValueError`: if `embedding_weights` is empty.
