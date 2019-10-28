Experimental API for building input pipelines.
This module contains experimental `Dataset` sources and transformations that can be used in conjunction with the `tf.data.Dataset` API. Note that the `tf.data.experimental` API is not subject to the same backwards compatibility guarantees as `tf.data`, but we will provide deprecation advice in advance of removing existing functionality.
See Importing Data for an overview.
## Classes
`class CheckpointInputPipelineHook`: Checkpoints input pipeline state every N steps or seconds.
`class CsvDataset`: A Dataset comprising lines from one or more CSV files.
`class DistributeOptions`: Represents options for distributed data processing.
`class MapVectorizationOptions`: Represents options for the MapVectorization optimization.
`class OptimizationOptions`: Represents options for dataset optimizations.
`class Optional`: Wraps a value that may/may not be present at runtime.
`class RandomDataset`: A `Dataset` of pseudorandom values.
`class Reducer`: A reducer is used for reducing a set of elements.
`class SqlDataset`: A `Dataset` consisting of the results from a SQL query.
`class StatsAggregator`: A stateful resource that aggregates statistics from one or more iterators.
`class StatsOptions`: Represents options for collecting dataset stats using `StatsAggregator`.
`class TFRecordWriter`: Writes data to a TFRecord file.
`class ThreadingOptions`: Represents options for dataset threading.
## Functions
