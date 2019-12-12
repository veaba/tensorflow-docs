

## Class  `RaggedTensor` 
Represents a ragged tensor.

**Aliases** : [ `tf.compat.v1.RaggedTensor` ](/api_docs/python/tf/RaggedTensor), [ `tf.compat.v2.RaggedTensor` ](/api_docs/python/tf/RaggedTensor)

### Used in the guide:
- [Ragged tensors](https://tensorflow.google.cn/guide/ragged_tensor)


### Used in the tutorials:
- [Unicode strings](https://tensorflow.google.cn/tutorials/load_data/unicode)
A  `RaggedTensor`  is a tensor with one or more *ragged dimensions*, which aredimensions whose slices may have different lengths.  For example, the inner(column) dimension of  `rt=[[3, 1, 4, 1], [], [5, 9, 2], [6], []]`  is ragged,since the column slices ( `rt[0, :]` , ...,  `rt[4, :]` ) have different lengths.Dimensions whose slices all have the same length are called *uniformdimensions*.  The outermost dimension of a  `RaggedTensor`  is always uniform,since it consists of a single slice (and so there is no possibility fordiffering slice lengths).

The total number of dimensions in a  `RaggedTensor`  is called its *rank*,and the number of ragged dimensions in a  `RaggedTensor`  is called its*ragged-rank*.  A  `RaggedTensor` 's ragged-rank is fixed at graph creationtime: it can't depend on the runtime values of  `Tensor` s, and can't varydynamically for different session runs.

