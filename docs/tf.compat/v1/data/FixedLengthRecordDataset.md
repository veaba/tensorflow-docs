## Class FixedLengthRecordDataset

A Dataset of fixed-length records from one or more binary files.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/readers.py#L469-L480)


```
 __init__(
    filenames,
    record_bytes,
    header_bytes=None,
    footer_bytes=None,
    buffer_size=None,
    compression_type=None,
    num_parallel_reads=None
)
```

Creates a FixedLengthRecordDataset.
#### Args:
- `filenames`: A `tf.string` tensor or `tf.data.Dataset` containing one or more `filenames`.
- `record_bytes`: A `tf.int64` scalar representing the number of bytes in each record.
- `header_bytes`: (Optional.) A `tf.int64` scalar representing the number of bytes to skip at the start of a file.
- `footer_bytes`: (Optional.) A `tf.int64` scalar representing the number of bytes to ignore at the end of a file.
- `buffer_size`: (Optional.) A `tf.int64` scalar representing the number of bytes to buffer when reading.
- `compression_type`: (Optional.) A `tf.string` scalar evaluating to one of `""` (no compression), `"ZLIB"`, or `"GZIP"`.
- `num_parallel_reads`: (Optional.) A `tf.int64` scalar representing the number of files to read in parallel. If greater than one, the records of files read in parallel are outputted in an interleaved order. If your input pipeline is I/O bottlenecked, consider setting this parameter to a value greater than one to parallelize the I/O. If `None`, files will be read sequentially.
## Properties
### element_spec

The type specification of an element of this dataset.
#### Returns:
[tf.TypeSpec](https://www.tensorflow.org/api_docs/python/tf/TypeSpec)A nested structure of  objects matching the structure of an element of this dataset and specifying the type of individual components.

### output_classes

Returns the class of each component of an element of this dataset. (deprecated)
#### Returns:

A nested structure of Python type objects corresponding to each component of an element of this dataset.
### output_shapes

Returns the shape of each component of an element of this dataset. (deprecated)
#### Returns:
[tf.TensorShape](https://www.tensorflow.org/api_docs/python/tf/TensorShape)A nested structure of  objects corresponding to each component of an element of this dataset.

### output_types

Returns the type of each component of an element of this dataset. (deprecated)
#### Returns:
[tf.DType](https://www.tensorflow.org/api_docs/python/tf/dtypes/DType)A nested structure of  objects corresponding to each component of an element of this dataset.

## Methods
### __iter__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2024-L2025)


```
 __iter__()
```

Creates an Iterator for enumerating the elements of this dataset.

The returned iterator implements the Python iterator protocol and therefore can only be used in eager mode.
#### Returns:

An Iterator over the elements of this dataset.
#### Raises:
- `RuntimeError`: If not inside of tf.function and not executing eagerly.
### apply
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1346-L1375)


```
 apply(transformation_func)
```

Applies a transformation function to this dataset.

apply enables chaining of custom Dataset transformations, which are represented as functions that take one Dataset argument and return a transformed Dataset.
#### For example:

```
 dataset = (dataset.map(lambda x: x ** 2)
           .apply(group_by_window(key_func, reduce_func, window_size))
           .map(lambda x: x ** 3))
```
#### Args:
- `transformation_func`: A function that takes one `Dataset` argument and returns a `Dataset`.
#### Returns:
- `Dataset`: The `Dataset` returned by applying `transformation_func` to this dataset.
### batch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1017-L1038)


```
 batch(
    batch_size,
    drop_remainder=False
)
```

Combines consecutive elements of this dataset into batches.

The components of the resulting element will have an additional outer dimension, which will be batch_size (or N % batch_size for the last element if batch_size does not divide the number of input elements N evenly and drop_remainder is False). If your program depends on the batches having the same outer dimension, you should set the drop_remainder argument to True to prevent the smaller batch from being produced.
#### Args:
- `batch_size`: A `tf.int64` scalar `tf.Tensor`, representing the number of consecutive elements of this dataset to combine in a single batch.
- `drop_remainder`: (Optional.) A `tf.bool` scalar `tf.Tensor`, representing whether the last batch should be dropped in the case it has fewer than `batch_size` elements; the default behavior is not to drop the smaller batch.
#### Returns:
- `Dataset`: A `Dataset`.
### cache
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L923-L934)


```
 cache(filename='')
```

Caches the elements in this dataset.
#### Args:
- `filename`: A `tf.string` scalar `tf.Tensor`, representing the name of a directory on the filesystem to use for caching elements in this Dataset. If a `filename` is not provided, the dataset will be cached in memory.
#### Returns:
- `Dataset`: A `Dataset`.
### concatenate
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L746-L768)


```
 concatenate(dataset)
```

Creates a Dataset by concatenating the given dataset with this dataset.

```
 a = Dataset.range(1, 4)  # ==> [ 1, 2, 3 ]
b = Dataset.range(4, 8)  # ==> [ 4, 5, 6, 7 ]

# The input dataset and dataset to be concatenated should have the same
# nested structures and output types.
# c = Dataset.range(8, 14).batch(2)  # ==> [ [8, 9], [10, 11], [12, 13] ]
# d = Dataset.from_tensor_slices([14.0, 15.0, 16.0])
# a.concatenate(c) and a.concatenate(d) would result in error.

a.concatenate(b)  # ==> [ 1, 2, 3, 4, 5, 6, 7 ]
```
#### Args:
- `dataset`: `Dataset` to be concatenated.
#### Returns:
- `Dataset`: A `Dataset`.
### enumerate
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L864-L892)


```
 enumerate(start=0)
```

Enumerates the elements of this dataset.

It is similar to python's enumerate.
#### For example:

```
 # NOTE: The following examples use `{ ... }` to represent the
# contents of a dataset.
a = { 1, 2, 3 }
b = { (7, 8), (9, 10) }

# The nested structure of the `datasets` argument determines the
# structure of elements in the resulting dataset.
a.enumerate(start=5)) == { (5, 1), (6, 2), (7, 3) }
b.enumerate() == { (0, (7, 8)), (1, (9, 10)) }
```
#### Args:
- `start`: A `tf.int64` scalar `tf.Tensor`, representing the `start` value for enumeration.
#### Returns:
- `Dataset`: A `Dataset`.
### filter
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1322-L1344)


```
 filter(predicate)
```

Filters this dataset according to predicate.

```
 d = tf.data.Dataset.from_tensor_slices([1, 2, 3])

d = d.filter(lambda x: x < 3)  # ==> [1, 2]

# `tf.math.equal(x, y)` is required for equality comparison
def filter_fn(x):
  return tf.math.equal(x, 1)

d = d.filter(filter_fn)  # ==> [1]
```
#### Args:
- `predicate`: A function mapping a dataset element to a boolean.
#### Returns:
- `Dataset`: The `Dataset` containing the elements of this dataset for which `predicate` is `True`.
### filter_with_legacy_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1960-L1977)


```
 filter_with_legacy_function(predicate)
```

Filters this dataset according to predicate. (deprecated)

NOTE: This is an escape hatch for existing uses of filter that do not work with V2 functions. New uses are strongly discouraged and existing uses should migrate to filter as this method will be removed in V2.
#### Args:
- `predicate`: A function mapping a nested structure of tensors (having shapes and types defined by `self.output_shapes` and `self.output_types`) to a scalar `tf.bool` tensor.
#### Returns:
- `Dataset`: The `Dataset` containing the elements of this dataset for which `predicate` is `True`.
### flat_map
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1216-L1240)


```
 flat_map(map_func)
```

Maps map_func across this dataset and flattens the result.

Use flat_map if you want to make sure that the order of your dataset stays the same. For example, to flatten a dataset of batches into a dataset of their elements:

```
 a = Dataset.from_tensor_slices([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])

a.flat_map(lambda x: Dataset.from_tensor_slices(x + 1)) # ==>
#  [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
[tf.data.Dataset.interleave()](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#interleave) is a generalization of flat_map, since flat_map produces the same output as tf.data.Dataset.interleave(cycle_length=1)

#### Args:
- `map_func`: A function mapping a dataset element to a dataset.
#### Returns:
- `Dataset`: A `Dataset`.
### from_generator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L473-L676)


```
 from_generator(
    generator,
    output_types,
    output_shapes=None,
    args=None
)
```

Creates a Dataset whose elements are generated by generator.

The generator argument must be a callable object that returns an object that supports the iter() protocol (e.g. a generator function). The elements generated by generator must be compatible with the given output_types and (optional) output_shapes arguments.
#### For example:

```
 import itertools
tf.compat.v1.enable_eager_execution()

def gen():
  for i in itertools.count(1):
    yield (i, [1] * i)

ds = tf.data.Dataset.from_generator(
    gen, (tf.int64, tf.int64), (tf.TensorShape([]), tf.TensorShape([None])))

for value in ds.take(2):
  print value
# (1, array([1]))
# (2, array([1, 1]))
```
[tf.numpy_function](https://www.tensorflow.org/api_docs/python/tf/numpy_function)NOTE: The current implementation of Dataset.from_generator() uses  and inherits the same constraints. In particular, it requires the Dataset- and Iterator-related operations to be placed on a device in the same process as the Python program that called Dataset.from_generator(). The body of generator will not be serialized in a GraphDef, and you should not use this method if you need to serialize your model and restore it in a different environment.


NOTE: If generator depends on mutable global variables or other external state, be aware that the runtime may invoke generator multiple times (in order to support repeating the Dataset) and at any time between the call to Dataset.from_generator() and the production of the first element from the generator. Mutating global variables or external state can cause undefined behavior, and we recommend that you explicitly cache any external state in generator before calling Dataset.from_generator().
#### Args:
- `generator`: A callable object that returns an object that supports the `iter`() protocol. If `args` is not specified, `generator` must take no arguments; otherwise it must take as many arguments as there are values in `args`.
- `output_types`: A nested structure of `tf.DType` objects corresponding to each component of an element yielded by `generator`.
- `output_shapes`: (Optional.) A nested structure of `tf.TensorShape` objects corresponding to each component of an element yielded by `generator`.
- `args`: (Optional.) A tuple of `tf.Tensor` objects that will be evaluated and passed to `generator` as NumPy-array arguments.
#### Returns:
- `Dataset`: A `Dataset`.
### from_sparse_tensor_slices
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1815-L1826)


```
 from_sparse_tensor_slices(sparse_tensor)
```
[tf.SparseTensor](https://www.tensorflow.org/api_docs/python/tf/sparse/SparseTensor)Splits each rank-N  in this dataset row-wise. (deprecated)

#### Args:
- `sparse_tensor`: A `tf.SparseTensor`.
#### Returns:
- `Dataset`: A `Dataset` of rank-(N-1) sparse tensors.
### from_tensor_slices
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L416-L435)


```
 from_tensor_slices(tensors)
```

Creates a Dataset whose elements are slices of the given tensors.
[tf.constant](https://www.tensorflow.org/api_docs/python/tf/constant)Note that if tensors contains a NumPy array, and eager execution is not enabled, the values will be embedded in the graph as one or more  operations. For large datasets (> 1 GB), this can waste memory and run into byte limits of graph serialization. If tensors contains one or more large NumPy arrays, consider the alternative described in this guide.

#### Args:
- `tensors`: A dataset element, with each component having the same size in the 0th dimension.
#### Returns:
- `Dataset`: A `Dataset`.
### from_tensors
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L396-L414)


```
 from_tensors(tensors)
```

Creates a Dataset with a single element, comprising the given tensors.
[tf.constant](https://www.tensorflow.org/api_docs/python/tf/constant)Note that if tensors contains a NumPy array, and eager execution is not enabled, the values will be embedded in the graph as one or more  operations. For large datasets (> 1 GB), this can waste memory and run into byte limits of graph serialization. If tensors contains one or more large NumPy arrays, consider the alternative described in this guide.

#### Args:
- `tensors`: A dataset element.
#### Returns:
- `Dataset`: A `Dataset`.
### interleave
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1242-L1320)


```
 interleave(
    map_func,
    cycle_length=AUTOTUNE,
    block_length=1,
    num_parallel_calls=None
)
```

Maps map_func across this dataset, and interleaves the results.

For example, you can use Dataset.interleave() to process many input files concurrently:

```
 # Preprocess 4 files concurrently, and interleave blocks of 16 records from
# each file.
filenames = ["/var/data/file1.txt", "/var/data/file2.txt", ...]
dataset = (Dataset.from_tensor_slices(filenames)
           .interleave(lambda x:
               TextLineDataset(x).map(parse_fn, num_parallel_calls=1),
               cycle_length=4, block_length=16))
```
[tf.data.Dataset.flat_map](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#flat_map)The cycle_length and block_length arguments control the order in which elements are produced. cycle_length controls the number of input elements that are processed concurrently. If you set cycle_length to 1, this transformation will handle one input element at a time, and will produce identical results to . In general, this transformation will apply map_func to cycle_length input elements, open iterators on the returned Dataset objects, and cycle through them producing block_length consecutive elements from each iterator, and consuming the next input element each time it reaches the end of an iterator.

#### For example:

```
 a = Dataset.range(1, 6)  # ==> [ 1, 2, 3, 4, 5 ]

# NOTE: New lines indicate "block" boundaries.
a.interleave(lambda x: Dataset.from_tensors(x).repeat(6),
            cycle_length=2, block_length=4)  # ==> [1, 1, 1, 1,
                                             #      2, 2, 2, 2,
                                             #      1, 1,
                                             #      2, 2,
                                             #      3, 3, 3, 3,
                                             #      4, 4, 4, 4,
                                             #      3, 3,
                                             #      4, 4,
                                             #      5, 5, 5, 5,
                                             #      5, 5]
```

NOTE: The order of elements yielded by this transformation is deterministic, as long as map_func is a pure function. If map_func contains any stateful operations, the order in which that state is accessed is undefined.
#### Args:
- `map_func`: A function mapping a dataset element to a dataset.
- `cycle_length`: (Optional.) The number of input elements that will be processed concurrently. If not specified, the value will be derived from the number of available CPU cores. If the `num_parallel_calls` argument is set to `tf.data.experimental.AUTOTUNE`, the `cycle_length` argument also identifies the maximum degree of parallelism.
- `block_length`: (Optional.) The number of consecutive elements to produce from each input element before cycling to another input element.
- `num_parallel_calls`: (Optional.) If specified, the implementation creates a threadpool, which is used to fetch inputs from cycle elements asynchronously and in parallel. The default behavior is to fetch inputs from cycle elements synchronously with no parallelism. If the value `tf.data.experimental.AUTOTUNE` is used, then the number of parallel calls is set dynamically based on available CPU.
#### Returns:
- `Dataset`: A `Dataset`.
### list_files
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L788-L846)


```
 list_files(
    file_pattern,
    shuffle=None,
    seed=None
)
```

A dataset of all files matching one or more glob patterns.

NOTE: The default behavior of this method is to return filenames in a non-deterministic random shuffled order. Pass a seed or shuffle=False to get results in a deterministic order.
#### Example:

If we had the following files on our filesystem: - /path/to/dir/a.txt - /path/to/dir/b.py - /path/to/dir/c.py If we pass "/path/to/dir/*.py" as the directory, the dataset would produce: - /path/to/dir/b.py - /path/to/dir/c.py
#### Args:
- `file_pattern`: A string, a list of strings, or a `tf.Tensor` of string type (scalar or vector), representing the filename glob (i.e. shell wildcard) pattern(s) that will be matched.
- `shuffle`: (Optional.) If `True`, the file names will be `shuffle`d randomly. Defaults to `True`.
- `seed`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the random `seed` that will be used to create the distribution. See `tf.compat.v1.set_random_seed` for behavior.
#### Returns:
- `Dataset`: A `Dataset` of strings corresponding to file names.
### make_initializable_iterator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1704-L1734)


```
 make_initializable_iterator(shared_name=None)
```

Creates an Iterator for enumerating the elements of this dataset. (deprecated)

```
 dataset = ...
iterator = dataset.make_initializable_iterator()
# ...
sess.run(iterator.initializer)
```
#### Args:
- `shared_name`: (Optional.) If non-empty, the returned iterator will be shared under the given name across multiple sessions that share the same devices (e.g. when using a remote server).
#### Returns:

An Iterator over the elements of this dataset.
#### Raises:
- `RuntimeError`: If eager execution is enabled.
### make_one_shot_iterator
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1637-L1651)


```
 make_one_shot_iterator()
```

Creates an Iterator for enumerating the elements of this dataset. (deprecated)
#### Returns:

An Iterator over the elements of this dataset.
### map
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1099-L1214)


```
 map(
    map_func,
    num_parallel_calls=None
)
```

Maps map_func across the elements of this dataset.

This transformation applies map_func to each element of this dataset, and returns a new dataset containing the transformed elements, in the same order as they appeared in the input.
#### For example:

```
 a = Dataset.range(1, 6)  # ==> [ 1, 2, 3, 4, 5 ]

a.map(lambda x: x + 1)  # ==> [ 2, 3, 4, 5, 6 ]
```

The input signature of map_func is determined by the structure of each element in this dataset. For example:

```
 # NOTE: The following examples use `{ ... }` to represent the
# contents of a dataset.
# Each element is a `tf.Tensor` object.
a = { 1, 2, 3, 4, 5 }
# `map_func` takes a single argument of type `tf.Tensor` with the same
# shape and dtype.
result = a.map(lambda x: ...)

# Each element is a tuple containing two `tf.Tensor` objects.
b = { (1, "foo"), (2, "bar"), (3, "baz") }
# `map_func` takes two arguments of type `tf.Tensor`.
result = b.map(lambda x_int, y_str: ...)

# Each element is a dictionary mapping strings to `tf.Tensor` objects.
c = { {"a": 1, "b": "foo"}, {"a": 2, "b": "bar"}, {"a": 3, "b": "baz"} }
# `map_func` takes a single argument of type `dict` with the same keys as
# the elements.
result = c.map(lambda d: ...)
```

The value or values returned by map_func determine the structure of each element in the returned dataset.

```
 # `map_func` returns a scalar `tf.Tensor` of type `tf.float32`.
def f(...):
  return tf.constant(37.0)
result = dataset.map(f)
result.output_classes == tf.Tensor
result.output_types == tf.float32
result.output_shapes == []  # scalar

# `map_func` returns two `tf.Tensor` objects.
def g(...):
  return tf.constant(37.0), tf.constant(["Foo", "Bar", "Baz"])
result = dataset.map(g)
result.output_classes == (tf.Tensor, tf.Tensor)
result.output_types == (tf.float32, tf.string)
result.output_shapes == ([], [3])

# Python primitives, lists, and NumPy arrays are implicitly converted to
# `tf.Tensor`.
def h(...):
  return 37.0, ["Foo", "Bar", "Baz"], np.array([1.0, 2.0] dtype=np.float64)
result = dataset.map(h)
result.output_classes == (tf.Tensor, tf.Tensor, tf.Tensor)
result.output_types == (tf.float32, tf.string, tf.float64)
result.output_shapes == ([], [3], [2])

# `map_func` can return nested structures.
def i(...):
  return {"a": 37.0, "b": [42, 16]}, "foo"
result.output_classes == ({"a": tf.Tensor, "b": tf.Tensor}, tf.Tensor)
result.output_types == ({"a": tf.float32, "b": tf.int32}, tf.string)
result.output_shapes == ({"a": [], "b": [2]}, [])
```

map_func can accept as arguments and return any type of dataset element.

Note that irrespective of the context in which map_func is defined (eager vs. graph), tf.data traces the function and executes it as a graph. To use Python code inside of the function you have two options:

1) Rely on AutoGraph to convert Python code into an equivalent graph computation. The downside of this approach is that AutoGraph can convert some but not all Python code.
[tf.py_function](https://www.tensorflow.org/api_docs/python/tf/py_function)2) Use , which allows you to write arbitrary Python code but will generally result in worse performance than 1). For example:


```
 d = tf.data.Dataset.from_tensor_slices(['hello', 'world'])

# transform a string tensor to upper case string using a Python function
def upper_case_fn(t: tf.Tensor) -> str:
    return t.numpy().decode('utf-8').upper()

d.map(lambda x: tf.py_function(func=upper_case_fn,
      inp=[x], Tout=tf.string))  # ==> [ "HELLO", "WORLD" ]
```
#### Args:
- `map_func`: A function mapping a dataset element to another dataset element.
- `num_parallel_calls`: (Optional.) A `tf.int32` scalar `tf.Tensor`, representing the number elements to process asynchronously in parallel. If not specified, elements will be processed sequentially. If the value `tf.data.experimental.AUTOTUNE` is used, then the number of parallel calls is set dynamically based on available CPU.
#### Returns:
- `Dataset`: A `Dataset`.
### map_with_legacy_function
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1906-L1941)


```
 map_with_legacy_function(
    map_func,
    num_parallel_calls=None
)
```

Maps map_func across the elements of this dataset. (deprecated)

NOTE: This is an escape hatch for existing uses of map that do not work with V2 functions. New uses are strongly discouraged and existing uses should migrate to map as this method will be removed in V2.
#### Args:
- `map_func`: A function mapping a nested structure of tensors (having shapes and types defined by `self.output_shapes` and `self.output_types`) to another nested structure of tensors.
- `num_parallel_calls`: (Optional.) A `tf.int32` scalar `tf.Tensor`, representing the number elements to process asynchronously in parallel. If not specified, elements will be processed sequentially. If the value `tf.data.experimental.AUTOTUNE` is used, then the number of parallel calls is set dynamically based on available CPU.
#### Returns:
- `Dataset`: A `Dataset`.
### options
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2017-L2018)


```
 options()
```

Returns the options for this dataset and its inputs.
#### Returns:
[tf.data.Options](https://www.tensorflow.org/api_docs/python/tf/data/Options)A  object representing the dataset options.

### padded_batch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1040-L1097)


```
 padded_batch(
    batch_size,
    padded_shapes,
    padding_values=None,
    drop_remainder=False
)
```

Combines consecutive elements of this dataset into padded batches.

This transformation combines multiple consecutive elements of the input dataset into a single element.
[tf.data.Dataset.batch](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#batch)Like , the components of the resulting element will have an additional outer dimension, which will be batch_size (or N % batch_size for the last element if batch_size does not divide the number of input elements N evenly and drop_remainder is False). If your program depends on the batches having the same outer dimension, you should set the drop_remainder argument to True to prevent the smaller batch from being produced.

[tf.data.Dataset.batch](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#batch)Unlike , the input elements to be batched may have different shapes, and this transformation will pad each component to the respective shape in padding_shapes. The padding_shapes argument determines the resulting shape for each dimension of each component in an output element:

- If the dimension is a constant (e.g. tf.compat.v1.Dimension(37)), the component will be padded out to that length in that dimension.
- If the dimension is unknown (e.g. tf.compat.v1.Dimension(None)), the component will be padded out to the maximum length of all elements in that dimension.
[tf.data.experimental.dense_to_sparse_batch](https://www.tensorflow.org/api_docs/python/tf/data/experimental/dense_to_sparse_batch)See also , which combines elements that may have different shapes into a tf.SparseTensor.

#### Args:
- `batch_size`: A `tf.int64` scalar `tf.Tensor`, representing the number of consecutive elements of this dataset to combine in a single batch.
- `padded_shapes`: A nested structure of `tf.Tensor`Shape or `tf.int64` vector tensor-like objects representing the shape to which the respective component of each input element should be padded prior to batching. Any unknown dimensions (e.g. tf.compat.v1.Dimension(None) in a `tf.Tensor`Shape or `-1` in a tensor-like object) will be padded to the maximum size of that dimension in each batch.
- `padding_values`: (Optional.) A nested structure of scalar-shaped `tf.Tensor`, representing the padding values to use for the respective components. Defaults are `0` for numeric types and the empty string for string types.
- `drop_remainder`: (Optional.) A `tf.bool` scalar `tf.Tensor`, representing whether the last batch should be dropped in the case it has fewer than `batch_size` elements; the default behavior is not to drop the smaller batch.
#### Returns:
- `Dataset`: A `Dataset`.
### prefetch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L770-L786)


```
 prefetch(buffer_size)
```

Creates a Dataset that prefetches elements from this dataset.
#### Args:
- `buffer_size`: A `tf.int64` scalar `tf.Tensor`, representing the maximum number of elements that will be buffered when prefetching.
#### Returns:
- `Dataset`: A `Dataset`.
### range
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L678-L705)


```
 range(*args)
```

Creates a Dataset of a step-separated range of values.
#### For example:

```
 Dataset.range(5) == [0, 1, 2, 3, 4]
Dataset.range(2, 5) == [2, 3, 4]
Dataset.range(1, 5, 2) == [1, 3]
Dataset.range(1, 5, -2) == []
Dataset.range(5, 1) == []
Dataset.range(5, 1, -2) == [5, 3]
```
#### Args:
#### Returns:
- `Dataset`: A `RangeDataset`.
#### Raises:
- `ValueError`: if len(args) == 0.
### reduce
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1427-L1537)


```
 reduce(
    initial_state,
    reduce_func
)
```

Reduces the input dataset to a single element.

The transformation calls reduce_func successively on every element of the input dataset until the dataset is exhausted, aggregating information in its internal state. The initial_state argument is used for the initial state and the final state is returned as the result.
#### For example:
- tf.data.Dataset.range(`5`).reduce(np.int64(0), lambda x, _: x + 1) produces `5`
- tf.data.Dataset.range(`5`).reduce(np.int64(0), lambda x, y: x + y) produces `10`
#### Args:
- `initial_state`: An element representing the initial state of the transformation.
- `reduce_func`: A function that maps (`old_state, input_element`) to `new_state`. It must take two arguments and return a new element The structure of `new_state` must match the structure of `initial_state`.
#### Returns:

A dataset element corresponding to the final state of the transformation.
### repeat
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L848-L862)


```
 repeat(count=None)
```

Repeats this dataset count times.

NOTE: If this dataset is a function of global state (e.g. a random number generator), then different repetitions may produce different elements.
#### Args:
- `count`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the number of times the dataset should be repeated. The default behavior (if `count` is `None` or `-1`) is for the dataset be repeated indefinitely.
#### Returns:
- `Dataset`: A `Dataset`.
### shard
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L964-L1015)


```
 shard(
    num_shards,
    index
)
```

Creates a Dataset that includes only 1/num_shards of this dataset.

This dataset operator is very useful when running distributed training, as it allows each worker to read a unique subset.

When reading a single input file, you can skip elements as follows:

```
 d = tf.data.TFRecordDataset(input_file)
d = d.shard(num_workers, worker_index)
d = d.repeat(num_epochs)
d = d.shuffle(shuffle_buffer_size)
d = d.map(parser_fn, num_parallel_calls=num_map_threads)
```
#### Important caveats:
- ``B``e`` ``s``u``r``e`` ``t``o`` ``s``h``a``r``d`` ``b``e``f``o``r``e`` ``y``o``u`` ``u``s``e`` ``a``n``y`` ``r``a``n``d``o``m``i``z``i``n``g`` ``o``p``e``r``a``t``o``r`` ``(``s``u``c``h`` ``a``s`` ``s``h``u``f``f``l``e``)``.``
- ``G``e``n``e``r``a``l``l``y`` ``i``t`` ``i``s`` ``b``e``s``t`` ``i``f`` ``t``h``e`` ``s``h``a``r``d`` ``o``p``e``r``a``t``o``r`` ``i``s`` ``u``s``e``d`` ``e``a``r``l``y`` ``i``n`` ``t``h``e`` ``d``a``t``a``s``e``t`` ``p``i``p``e``l``i``n``e``.`` ``F``o``r`` ``e``x``a``m``p``l``e``,`` ``w``h``e``n`` ``r``e``a``d``i``n``g`` ``f``r``o``m`` ``a`` ``s``e``t`` ``o``f`` ``T``F``R``e``c``o``r``d`` ``f``i``l``e``s``,`` ``s``h``a``r``d`` ``b``e``f``o``r``e`` ``c``o``n``v``e``r``t``i``n``g`` ``t``h``e`` ``d``a``t``a``s``e``t`` ``t``o`` ``i``n``p``u``t`` ``s``a``m``p``l``e``s``.`` ``T``h``i``s`` ``a``v``o``i``d``s`` ``r``e``a``d``i``n``g`` ``e``v``e``r``y`` ``f``i``l``e`` ``o``n`` ``e``v``e``r``y`` ``w``o``r``k``e``r``.`` ``T``h``e`` ``f``o``l``l``o``w``i``n``g`` ``i``s`` ``a``n`` ``e``x``a``m``p``l``e`` ``o``f`` ``a``n`` ``e``f``f``i``c``i``e``n``t`` ``s``h``a``r``d``i``n``g`` ``s``t``r``a``t``e``g``y`` ``w``i``t``h``i``n`` ``a`` ``c``o``m``p``l``e``t``e`` ``p``i``p``e``l``i``n``e``:``

```
 d = Dataset.list_files(pattern)
d = d.shard(num_workers, worker_index)
d = d.repeat(num_epochs)
d = d.shuffle(shuffle_buffer_size)
d = d.interleave(tf.data.TFRecordDataset,
                 cycle_length=num_readers, block_length=1)
d = d.map(parser_fn, num_parallel_calls=num_map_threads)
```
#### Args:
- `num_shards`: A `tf.int64` scalar `tf.Tensor`, representing the number of shards operating in parallel.
- `index`: A `tf.int64` scalar `tf.Tensor`, representing the worker `index`.
#### Returns:
- `Dataset`: A `Dataset`.
#### Raises:
- `InvalidArgumentError`: if `num_shards` or `index` are illegal values. Note: error checking is done on a best-effort basis, and errors aren't guaranteed to be caught upon dataset creation. (e.g. providing in a placeholder tensor bypasses the early checking, and will instead result in an error during a session.run call.)
### shuffle
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L894-L921)


```
 shuffle(
    buffer_size,
    seed=None,
    reshuffle_each_iteration=None
)
```

Randomly shuffles the elements of this dataset.

This dataset fills a buffer with buffer_size elements, then randomly samples elements from this buffer, replacing the selected elements with new elements. For perfect shuffling, a buffer size greater than or equal to the full size of the dataset is required.

For instance, if your dataset contains 10,000 elements but buffer_size is set to 1,000, then shuffle will initially select a random element from only the first 1,000 elements in the buffer. Once an element is selected, its space in the buffer is replaced by the next (i.e. 1,001-st) element, maintaining the 1,000 element buffer.
#### Args:
- `buffer_size`: A `tf.int64` scalar `tf.Tensor`, representing the number of elements from this dataset from which the new dataset will sample.
- `seed`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the random `seed` that will be used to create the distribution. See `tf.compat.v1.set_random_seed` for behavior.
- `reshuffle_each_iteration`: (Optional.) A boolean, which if true indicates that the dataset should be pseudorandomly reshuffled each time it is iterated over. (Defaults to `True`.)
#### Returns:
- `Dataset`: A `Dataset`.
### skip
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L950-L962)


```
 skip(count)
```

Creates a Dataset that skips count elements from this dataset.
#### Args:
- `count`: A `tf.int64` scalar `tf.Tensor`, representing the number of elements of this dataset that should be skipped to form the new dataset. If `count` is greater than the size of this dataset, the new dataset will contain no elements. If `count` is -1, skips the entire dataset.
#### Returns:
- `Dataset`: A `Dataset`.
### take
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L936-L948)


```
 take(count)
```

Creates a Dataset with at most count elements from this dataset.
#### Args:
- `count`: A `tf.int64` scalar `tf.Tensor`, representing the number of elements of this dataset that should be taken to form the new dataset. If `count` is -1, or if `count` is greater than the size of this dataset, the new dataset will contain all elements of this dataset.
#### Returns:
- `Dataset`: A `Dataset`.
### unbatch
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1539-L1581)


```
 unbatch()
```

Splits elements of a dataset into multiple elements.

For example, if elements of the dataset are shaped [B, a0, a1, ...], where B may vary for each input element, then for each element in the dataset, the unbatched dataset will contain B consecutive elements of shape [a0, a1, ...].

```
 # NOTE: The following example uses `{ ... }` to represent the contents
# of a dataset.
ds = { ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'c', 'd'] }

ds.unbatch() == {'a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'd'}
```
#### Returns:
[tf.data.Dataset.apply](https://www.tensorflow.org/api_docs/python/tf/data/Dataset#apply)A Dataset transformation function, which can be passed to .

### window
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1377-L1425)


```
 window(
    size,
    shift=None,
    stride=1,
    drop_remainder=False
)
```

Combines (nests of) input elements into a dataset of (nests of) windows.

A "window" is a finite dataset of flat elements of size size (or possibly fewer if there are not enough input elements to fill the window and drop_remainder evaluates to false).

The stride argument determines the stride of the input elements, and the shift argument determines the shift of the window.

For example, letting {...} to represent a Dataset:
- tf.data.Dataset.range(7).window(2) produces { {0, 1}, {2, 3}, {4, 5}, {6}}
- tf.data.Dataset.range(7).window(3, 2, 1, True) produces `{ {0, 1, 2}, {2, 3, 4}, {4, 5, 6}}`
- tf.data.Dataset.range(7).window(3, 1, 2, True) produces `{ {0, 2, 4}, {1, 3, 5}, {2, 4, 6}}`

Note that when the window transformation is applied to a dataset of nested elements, it produces a dataset of nested windows.
#### For example:
- tf.data.Dataset.from_tensor_slices((range(4), range(4))).window(2) produces {({0, 1}, {0, 1}), ({2, 3}, {2, 3})}
- tf.data.Dataset.from_tensor_slices({"a": range(4)}).window(2) produces `{ {"a": {0, 1}}, {"a": {2, 3}}}`
#### Args:
- `size`: A `tf.int64` scalar `tf.Tensor`, representing the number of elements of the input dataset to combine into a window.
- `shift`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the forward `shift` of the sliding window in each iteration. Defaults to `size`.
- `stride`: (Optional.) A `tf.int64` scalar `tf.Tensor`, representing the `stride` of the input elements in the sliding window.
- `drop_remainder`: (Optional.) A `tf.bool` scalar `tf.Tensor`, representing whether a window should be dropped in case its `size` is smaller than `window_size`.
#### Returns:
- `Dataset`: A `Dataset` of (nests of) windows -- a finite datasets of flat elements created from the (nests of) input elements.
### with_options
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1583-L1599)


```
 with_options(options)
```
[tf.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset)Returns a new  with the given options set.


The options are "global" in the sense they apply to the entire dataset. If options are set multiple times, they are merged as long as different options do not use different non-default values.
#### Args:
- `options`: A `tf.data.Options` that identifies the `options` the use.
#### Returns:
- `Dataset`: A `Dataset` with the given options.
#### Raises:
- `ValueError`: when an option is set more than once to a non-default value
### zip
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L707-L744)


```
 zip(datasets)
```

Creates a Dataset by zipping together the given datasets.

This method has similar semantics to the built-in zip() function in Python, with the main difference being that the datasets argument can be an arbitrary nested structure of Dataset objects. For example:

```
 a = Dataset.range(1, 4)  # ==> [ 1, 2, 3 ]
b = Dataset.range(4, 7)  # ==> [ 4, 5, 6 ]
c = Dataset.range(7, 13).batch(2)  # ==> [ [7, 8], [9, 10], [11, 12] ]
d = Dataset.range(13, 15)  # ==> [ 13, 14 ]

# The nested structure of the `datasets` argument determines the
# structure of elements in the resulting dataset.
Dataset.zip((a, b))  # ==> [ (1, 4), (2, 5), (3, 6) ]
Dataset.zip((b, a))  # ==> [ (4, 1), (5, 2), (6, 3) ]

# The `datasets` argument may contain an arbitrary number of
# datasets.
Dataset.zip((a, b, c))  # ==> [ (1, 4, [7, 8]),
                        #       (2, 5, [9, 10]),
                        #       (3, 6, [11, 12]) ]

# The number of elements in the resulting dataset is the same as
# the size of the smallest dataset in `datasets`.
Dataset.zip((a, d))  # ==> [ (1, 13), (2, 14) ]
```
#### Args:
- `datasets`: A nested structure of `datasets`.
#### Returns:
- `Dataset`: A `Dataset`.
