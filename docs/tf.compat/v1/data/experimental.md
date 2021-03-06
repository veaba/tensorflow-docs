
Experimental API for building input pipelines.
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)This module contains experimental Dataset sources and transformations that can be used in conjunction with the  API. Note that the tf.data.experimental API is not subject to the same backwards compatibility guarantees as tf.data, but we will provide deprecation advice in advance of removing existing functionality.

[Importing Data](https://tensorflow.org/guide/datasets)See  for an overview.

## Classes
[class CheckpointInputPipelineHook](https://www.tensorflow.org/api_docs/python/tf/data/experimental/CheckpointInputPipelineHook): Checkpoints input pipeline state every N steps or seconds.

[class CsvDataset](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/CsvDataset): A Dataset comprising lines from one or more CSV files.

[class DatasetStructure](https://www.tensorflow.org/api_docs/python/tf/data/DatasetSpec): Type specification for tf.data.Dataset.

[class DistributeOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/DistributeOptions): Represents options for distributed data processing.

[class MapVectorizationOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/MapVectorizationOptions): Represents options for the MapVectorization optimization.

[class OptimizationOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/OptimizationOptions): Represents options for dataset optimizations.

[class Optional](https://www.tensorflow.org/api_docs/python/tf/data/experimental/Optional): Wraps a value that may/may not be present at runtime.

[class OptionalStructure](https://www.tensorflow.org/api_docs/python/tf/OptionalSpec): Represents an optional potentially containing a structured value.

[class RandomDataset](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/RandomDataset): A Dataset of pseudorandom values.

[class Reducer](https://www.tensorflow.org/api_docs/python/tf/data/experimental/Reducer): A reducer is used for reducing a set of elements.

[class SqlDataset](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/SqlDataset): A Dataset consisting of the results from a SQL query.

[class StatsAggregator](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/StatsAggregator): A stateful resource that aggregates statistics from one or more iterators.

[class StatsOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/StatsOptions): Represents options for collecting dataset stats using StatsAggregator.

[class Structure](https://www.tensorflow.org/api_docs/python/tf/TypeSpec): Specifies a TensorFlow value type.

[class TFRecordWriter](https://www.tensorflow.org/api_docs/python/tf/data/experimental/TFRecordWriter): Writes data to a TFRecord file.

[class ThreadingOptions](https://www.tensorflow.org/api_docs/python/tf/data/experimental/ThreadingOptions): Represents options for dataset threading.

## Functions
[Counter(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/Counter): Creates a Dataset that counts from start in steps of size step.

[RaggedTensorStructure(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/RaggedTensorStructure): DEPRECATED FUNCTION

[SparseTensorStructure(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/SparseTensorStructure): DEPRECATED FUNCTION

[TensorArrayStructure(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/TensorArrayStructure): DEPRECATED FUNCTION

[TensorStructure(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/TensorStructure): DEPRECATED FUNCTION

[bucket_by_sequence_length(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/bucket_by_sequence_length): A transformation that buckets elements in a Dataset by length.

[bytes_produced_stats(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/bytes_produced_stats): Records the number of bytes produced by each element of the input dataset.

[cardinality(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/cardinality): Returns the cardinality of dataset, if known.

[choose_from_datasets(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/choose_from_datasets): Creates a dataset that deterministically chooses elements from datasets.

[copy_to_device(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/copy_to_device): A transformation that copies dataset elements to the given target_device.

[dense_to_sparse_batch(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/dense_to_sparse_batch): A transformation that batches ragged elements into tf.SparseTensors.

[enumerate_dataset(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/enumerate_dataset): A transformation that enumerates the elements of a dataset. (deprecated)

[from_variant(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/from_variant): Constructs a dataset from the given variant and structure.

[get_next_as_optional(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/get_next_as_optional): Returns an Optional that contains the next value from the iterator.

[get_single_element(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/get_single_element): Returns the single element in dataset as a nested structure of tensors.

[get_structure(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/get_structure): Returns the type specification of an element of a Dataset or Iterator.

[group_by_reducer(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/group_by_reducer): A transformation that groups elements and performs a reduction.

[group_by_window(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/group_by_window): A transformation that groups windows of elements by key and reduces them.

[ignore_errors(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/ignore_errors): Creates a Dataset from another Dataset and silently ignores any errors.

[latency_stats(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/latency_stats): Records the latency of producing each element of the input dataset.

[make_batched_features_dataset(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/make_batched_features_dataset)

[make_csv_dataset(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/make_csv_dataset): Reads CSV files into a dataset.

[make_saveable_from_iterator(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/make_saveable_from_iterator): Returns a SaveableObject for saving/restoring iterator state using Saver.

[map_and_batch(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/map_and_batch): Fused implementation of map and batch. (deprecated)

[map_and_batch_with_legacy_function(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/map_and_batch_with_legacy_function): Fused implementation of map and batch. (deprecated)

[parallel_interleave(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/parallel_interleave): A parallel version of the Dataset.interleave() transformation. (deprecated)

[parse_example_dataset(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/parse_example_dataset): A transformation that parses Example protos into a dict of tensors.

[prefetch_to_device(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/prefetch_to_device): A transformation that prefetches dataset values to the given device.

[rejection_resample(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/rejection_resample): A transformation that resamples a dataset to achieve a target distribution.

[sample_from_datasets(...)](https://www.tensorflow.org/api_docs/python/tf/compat/v1/data/experimental/sample_from_datasets): Samples elements at random from the datasets in datasets.

[scan(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/scan): A transformation that scans a function across an input dataset.

[shuffle_and_repeat(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/shuffle_and_repeat): Shuffles and repeats a Dataset returning a new permutation for each epoch. (deprecated)

[take_while(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/take_while): A transformation that stops dataset iteration based on a predicate.

[to_variant(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/to_variant): Returns a variant representing the given dataset.

[unbatch(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/unbatch): Splits elements of a dataset into multiple elements on the batch dimension. (deprecated)

[unique(...)](https://www.tensorflow.org/api_docs/python/tf/data/experimental/unique): Creates a Dataset from another Dataset, discarding duplicates.

## Other Members
- `AUTOTUNE = -1`
- `INFINITE_CARDINALITY = -1`
- `UNKNOWN_CARDINALITY = -2`
