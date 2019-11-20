[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/compat/v1/data/experimental)  
---  
  
Experimental API for building input pipelines.

This module contains experimental `Dataset` sources and transformations that
can be used in conjunction with the
[`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset)
API. Note that the
[`tf.data.experimental`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental)
API is not subject to the same backwards compatibility guarantees as
[`tf.data`](https://tensorflow.google.cn/api_docs/python/tf/data), but we will
provide deprecation advice in advance of removing existing functionality.

See [Importing Data](https://tensorflow.org/guide/datasets) for an overview.

## Classes

[`class
CheckpointInputPipelineHook`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/CheckpointInputPipelineHook):
Checkpoints input pipeline state every N steps or seconds.

[`class
CsvDataset`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/CsvDataset):
A Dataset comprising lines from one or more CSV files.

[`class
DatasetStructure`](https://tensorflow.google.cn/api_docs/python/tf/data/DatasetSpec):
Type specification for
[`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

[`class
DistributeOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/DistributeOptions):
Represents options for distributed data processing.

[`class
MapVectorizationOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/MapVectorizationOptions):
Represents options for the MapVectorization optimization.

[`class
OptimizationOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/OptimizationOptions):
Represents options for dataset optimizations.

[`class
Optional`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/Optional):
Wraps a value that may/may not be present at runtime.

[`class
OptionalStructure`](https://tensorflow.google.cn/api_docs/python/tf/OptionalSpec):
Represents an optional potentially containing a structured value.

[`class
RandomDataset`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/RandomDataset):
A `Dataset` of pseudorandom values.

[`class
Reducer`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/Reducer):
A reducer is used for reducing a set of elements.

[`class
SqlDataset`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/SqlDataset):
A `Dataset` consisting of the results from a SQL query.

[`class
StatsAggregator`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/StatsAggregator):
A stateful resource that aggregates statistics from one or more iterators.

[`class
StatsOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/StatsOptions):
Represents options for collecting dataset stats using `StatsAggregator`.

[`class Structure`](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec):
Specifies a TensorFlow value type.

[`class
TFRecordWriter`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/TFRecordWriter):
Writes data to a TFRecord file.

[`class
ThreadingOptions`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/ThreadingOptions):
Represents options for dataset threading.

## Functions

[`Counter(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/Counter):
Creates a `Dataset` that counts from `start` in steps of size `step`.

[`RaggedTensorStructure(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/RaggedTensorStructure):
DEPRECATED FUNCTION

[`SparseTensorStructure(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/SparseTensorStructure):
DEPRECATED FUNCTION

[`TensorArrayStructure(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/TensorArrayStructure):
DEPRECATED FUNCTION

[`TensorStructure(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/TensorStructure):
DEPRECATED FUNCTION

[`bucket_by_sequence_length(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/bucket_by_sequence_length):
A transformation that buckets elements in a `Dataset` by length.

[`bytes_produced_stats(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/bytes_produced_stats):
Records the number of bytes produced by each element of the input dataset.

[`cardinality(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/cardinality):
Returns the cardinality of `dataset`, if known.

[`choose_from_datasets(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/choose_from_datasets):
Creates a dataset that deterministically chooses elements from `datasets`.

[`copy_to_device(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/copy_to_device):
A transformation that copies dataset elements to the given `target_device`.

[`dense_to_sparse_batch(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/dense_to_sparse_batch):
A transformation that batches ragged elements into
[`tf.SparseTensor`](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)s.

[`enumerate_dataset(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/enumerate_dataset):
A transformation that enumerates the elements of a dataset. (deprecated)

[`from_variant(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/from_variant):
Constructs a dataset from the given variant and structure.

[`get_next_as_optional(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/get_next_as_optional):
Returns an `Optional` that contains the next value from the iterator.

[`get_single_element(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/get_single_element):
Returns the single element in `dataset` as a nested structure of tensors.

[`get_structure(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/get_structure):
Returns the type specification of an element of a `Dataset` or `Iterator`.

[`group_by_reducer(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/group_by_reducer):
A transformation that groups elements and performs a reduction.

[`group_by_window(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/group_by_window):
A transformation that groups windows of elements by key and reduces them.

[`ignore_errors(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/ignore_errors):
Creates a `Dataset` from another `Dataset` and silently ignores any errors.

[`latency_stats(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/latency_stats):
Records the latency of producing each element of the input dataset.

[`make_batched_features_dataset(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/make_batched_features_dataset)

[`make_csv_dataset(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/make_csv_dataset):
Reads CSV files into a dataset.

[`make_saveable_from_iterator(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/make_saveable_from_iterator):
Returns a SaveableObject for saving/restoring iterator state using Saver.

[`map_and_batch(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/map_and_batch):
Fused implementation of `map` and `batch`. (deprecated)

[`map_and_batch_with_legacy_function(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/map_and_batch_with_legacy_function):
Fused implementation of `map` and `batch`. (deprecated)

[`parallel_interleave(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/parallel_interleave):
A parallel version of the
[`Dataset.interleave()`](/api_docs/python/tf/data/Dataset#interleave)
transformation. (deprecated)

[`parse_example_dataset(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/parse_example_dataset):
A transformation that parses `Example` protos into a `dict` of tensors.

[`prefetch_to_device(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/prefetch_to_device):
A transformation that prefetches dataset values to the given `device`.

[`rejection_resample(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/rejection_resample):
A transformation that resamples a dataset to achieve a target distribution.

[`sample_from_datasets(...)`](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/experimental/sample_from_datasets):
Samples elements at random from the datasets in `datasets`.

[`scan(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/scan):
A transformation that scans a function across an input dataset.

[`shuffle_and_repeat(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/shuffle_and_repeat):
Shuffles and repeats a Dataset returning a new permutation for each epoch.
(deprecated)

[`take_while(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/take_while):
A transformation that stops dataset iteration based on a `predicate`.

[`to_variant(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/to_variant):
Returns a variant representing the given dataset.

[`unbatch(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/unbatch):
Splits elements of a dataset into multiple elements on the batch dimension.
(deprecated)

[`unique(...)`](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/unique):
Creates a `Dataset` from another `Dataset`, discarding duplicates.

## Other Members

  * `AUTOTUNE = -1`
  * `INFINITE_CARDINALITY = -1`
  * `UNKNOWN_CARDINALITY = -2`

