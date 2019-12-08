Sparse Tensor Representation.

See also [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).



## Classes
[ `class SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor): Represents a sparse tensor.



## Functions
[ `add(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/add): Adds two tensors, at least one of each is a  `SparseTensor` .

[ `concat(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/concat): Concatenates a list of  `SparseTensor`  along the specified dimension. (deprecated arguments)

[ `cross(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/cross): Generates sparse cross from a list of sparse and dense tensors.

[ `cross_hashed(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/cross_hashed): Generates hashed sparse cross from a list of sparse and dense tensors.

[ `expand_dims(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/expand_dims): Inserts a dimension of 1 into a tensor's shape.

[ `eye(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/eye): Creates a two-dimensional sparse tensor with ones along the diagonal.

[ `fill_empty_rows(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/fill_empty_rows): Fills empty rows in the input 2-D  `SparseTensor`  with a default value.

[ `from_dense(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/from_dense): Converts a dense tensor into a sparse tensor.

[ `mask(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/mask): Masks elements of  `IndexedSlices` .

[ `maximum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/maximum): Returns the element-wise max of two SparseTensors.

[ `minimum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/minimum): Returns the element-wise min of two SparseTensors.

[ `reduce_max(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reduce_max): Computes the max of elements across dimensions of a SparseTensor.

[ `reduce_sum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reduce_sum): Computes the sum of elements across dimensions of a SparseTensor.

[ `reorder(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reorder): Reorders a  `SparseTensor`  into the canonical, row-major ordering.

[ `reset_shape(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reset_shape): Resets the shape of a  `SparseTensor`  with indices and values unchanged.

[ `reshape(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/reshape): Reshapes a  `SparseTensor`  to represent values in a new dense shape.

[ `retain(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/retain): Retains specified non-empty values within a  `SparseTensor` .

[ `segment_mean(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/segment_mean): Computes the mean along sparse segments of a tensor.

[ `segment_sqrt_n(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/segment_sqrt_n): Computes the sum along sparse segments of a tensor divided by the sqrt(N).

[ `segment_sum(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/segment_sum): Computes the sum along sparse segments of a tensor.

[ `slice(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/slice): Slice a  `SparseTensor`  based on the  `start`  and `size.

[ `softmax(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/softmax): Applies softmax to a batched N-D  `SparseTensor` .

[ `sparse_dense_matmul(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/sparse_dense_matmul): Multiply SparseTensor (of rank 2) "A" by dense matrix "B".

[ `split(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/split): Split a  `SparseTensor`  into  `num_split`  tensors along  `axis` .

[ `to_dense(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/to_dense): Converts a  `SparseTensor`  into a dense tensor.

[ `to_indicator(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/to_indicator): Converts a  `SparseTensor`  of ids into a dense bool indicator tensor.

[ `transpose(...)` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/transpose): Transposes a  `SparseTensor` 

