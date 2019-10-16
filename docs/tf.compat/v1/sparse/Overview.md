
Sparse Tensor Representation.
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)See also .

## Classes
[class SparseConditionalAccumulator](https://www.tensorflow.org/api_docs/python/tf/compat/v1/SparseConditionalAccumulator): A conditional accumulator for aggregating sparse gradients.

[class SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor): Represents a sparse tensor.

## Functions
[add(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_add): Adds two tensors, at least one of each is a SparseTensor. (deprecated arguments)

[concat(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_concat): Concatenates a list of SparseTensor along the specified dimension. (deprecated arguments)

[cross(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/cross): Generates sparse cross from a list of sparse and dense tensors.

[cross_hashed(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/cross_hashed): Generates hashed sparse cross from a list of sparse and dense tensors.

[expand_dims(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/expand_dims): Inserts a dimension of 1 into a tensor's shape.

[eye(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/eye): Creates a two-dimensional sparse tensor with ones along the diagonal.

[fill_empty_rows(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/fill_empty_rows): Fills empty rows in the input 2-D SparseTensor with a default value.

[from_dense(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/from_dense): Converts a dense tensor into a sparse tensor.

[mask(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/mask): Masks elements of IndexedSlices.

[matmul(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/sparse_dense_matmul): Multiply SparseTensor (of rank 2) "A" by dense matrix "B".

[maximum(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/maximum): Returns the element-wise max of two SparseTensors.

[merge(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_merge): Combines a batch of feature ids and values into a single SparseTensor. (deprecated)

[minimum(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/minimum): Returns the element-wise min of two SparseTensors.

[placeholder(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_placeholder): Inserts a placeholder for a sparse tensor that will be always fed.

[reduce_max(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_reduce_max): Computes the max of elements across dimensions of a SparseTensor. (deprecated arguments) (deprecated arguments)

[reduce_max_sparse(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_reduce_max_sparse): Computes the max of elements across dimensions of a SparseTensor. (deprecated arguments)

[reduce_sum(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_reduce_sum): Computes the sum of elements across dimensions of a SparseTensor. (deprecated arguments) (deprecated arguments)

[reduce_sum_sparse(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_reduce_sum_sparse): Computes the sum of elements across dimensions of a SparseTensor. (deprecated arguments)

[reorder(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/reorder): Reorders a SparseTensor into the canonical, row-major ordering.

[reset_shape(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/reset_shape): Resets the shape of a SparseTensor with indices and values unchanged.

[reshape(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/reshape): Reshapes a SparseTensor to represent values in a new dense shape.

[retain(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/retain): Retains specified non-empty values within a SparseTensor.

[segment_mean(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_segment_mean): Computes the mean along sparse segments of a tensor.

[segment_sqrt_n(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_segment_sqrt_n): Computes the sum along sparse segments of a tensor divided by the sqrt(N).

[segment_sum(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_segment_sum): Computes the sum along sparse segments of a tensor.

[slice(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/slice): Slice a SparseTensor based on the start and `size.

[softmax(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/softmax): Applies softmax to a batched N-D SparseTensor.

[sparse_dense_matmul(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/sparse_dense_matmul): Multiply SparseTensor (of rank 2) "A" by dense matrix "B".

[split(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/sparse_split): Split a SparseTensor into num_split tensors along axis. (deprecated arguments)

[to_dense(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/to_dense): Converts a SparseTensor into a dense tensor.

[to_indicator(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/to_indicator): Converts a SparseTensor of ids into a dense bool indicator tensor.

[transpose(...)](https://www.tensorflow.org/api_docs/python/tf/sparse/transpose): Transposes a SparseTensor

