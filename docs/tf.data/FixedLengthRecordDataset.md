## Class FixedLengthRecordDataset
A `Dataset` of fixed-length records from one or more binary files.
### Aliases:
- Class `tf.compat.v2.data.FixedLengthRecordDataset`
## __init__
View source

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
Creates a `FixedLengthRecordDataset`.
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
A nested structure of `tf.TypeSpec` objects matching the structure of an element of this dataset and specifying the type of individual components.
## Methods
### __iter__
View source

```
 __iter__()
```
Creates an `Iterator` for enumerating the elements of this dataset.
The returned iterator implements the Python iterator protocol and therefore can only be used in eager mode.
#### Returns:
An `Iterator` over the elements of this dataset.
#### Raises:
- `RuntimeError`: If not inside of tf.function and not executing eagerly.
### apply
View source

```
 apply(transformation_func)
```
Applies a transformation function to this dataset.
`apply` enables chaining of custom `Dataset` transformations, which are represented as functions that take one `Dataset` argument and return a transformed `Dataset`.
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
View source

```
 batch(
    batch_size,
    drop_remainder=False
)
```
Combines consecutive elements of this dataset into batches.
The components of the resulting element will have an additional outer dimension, which will be `batch_size` (or `N % batch_size` for the last element if `batch_size` does not divide the number of input elements `N` evenly and `drop_remainder` is `False`). If your program depends on the batches having the same outer dimension, you should set the `drop_remainder` argument to `True` to prevent the smaller batch from being produced.
#### Args:
- `batch_size`: A `tf.int64` scalar `tf.Tensor`, representing the number of consecutive elements of this dataset to combine in a single batch.
- `drop_remainder`: (Optional.) A `tf.bool` scalar `tf.Tensor`, representing whether the last batch should be dropped in the case it has fewer than `batch_size` elements; the default behavior is not to drop the smaller batch.
#### Returns:
- `Dataset`: A `Dataset`.
### cache
View source

```
 cache(filename='')
```
Caches the elements in this dataset.
#### Args:
- `filename`: A `tf.string` scalar `tf.Tensor`, representing the name of a directory on the filesystem to use for caching elements in this Dataset. If a `filename` is not provided, the dataset will be cached in memory.
#### Returns:
- `Dataset`: A `Dataset`.
### concatenate
View source

```
 concatenate(dataset)
```
Creates a `Dataset` by concatenating the given dataset with this dataset.

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
View source

```
 enumerate(start=0)
```
Enumerates the elements of this dataset.
It is similar to python's `enumerate`.
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
View source

```
 filter(predicate)
```
Filters this dataset according to `predicate`.

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
### flat_map
View source

```
 flat_map(map_func)
```
Maps `map_func` across this dataset and flattens the result.
Use `flat_map` if you want to make sure that the order of your dataset stays the same. For example, to flatten a dataset of batches into a dataset of their elements:

```
 a = Dataset.from_tensor_slices([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])

a.flat_map(lambda x: Dataset.from_tensor_slices(x + 1)) # ==>
#  [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
