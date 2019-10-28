## Class CsvDataset
A Dataset comprising lines from one or more CSV files.
## __init__
View source

```
 __init__(
    filenames,
    record_defaults,
    compression_type=None,
    buffer_size=None,
    header=False,
    field_delim=',',
    use_quote_delim=True,
    na_value='',
    select_cols=None
)
```
Creates a `CsvDataset` by reading and decoding CSV files.
The elements of this dataset correspond to records from the file(s). RFC 4180 format is expected for CSV files (https://tools.ietf.org/html/rfc4180) Note that we allow leading and trailing spaces with int or float field.
For example, suppose we have a file 'my_file0.csv' with four CSV columns of different data types:

```
 abcdefg,4.28E10,5.55E6,12
hijklmn,-5.3E14,,2
```
We can construct a CsvDataset from it as follows:

```
 tf.compat.v1.enable_eager_execution()

 dataset = tf.data.experimental.CsvDataset(
    "my_file*.csv",
    [tf.float32,  # Required field, use dtype or empty tensor
     tf.constant([0.0], dtype=tf.float32),  # Optional field, default to 0.0
     tf.int32,  # Required field, use dtype or empty tensor
     ],
    select_cols=[1,2,3]  # Only parse last three columns
)
```
The expected output of its iterations is:

```
 for element in dataset:
  print(element)

>> (4.28e10, 5.55e6, 12)
>> (-5.3e14, 0.0, 2)
```
#### Args:
- `filenames`: A `tf.string` tensor containing one or more `filenames`.
- `record_defaults`: A list of default values for the CSV fields. Each item in the list is either a valid CSV `DType` (float32, float64, int32, int64, string), or a `Tensor` object with one of the above types. One per column of CSV data, with either a scalar `Tensor` default value for the column if it is optional, or `DType` or empty `Tensor` if required. If both this and `select_columns` are specified, these must have the same lengths, and `column_defaults` is assumed to be sorted in order of increasing column index.
- `compression_type`: (Optional.) A `tf.string` scalar evaluating to one of `""` (no compression), `"ZLIB"`, or `"GZIP"`. Defaults to no compression.
- `buffer_size`: (Optional.) A `tf.int64` scalar denoting the number of bytes to buffer while reading files. Defaults to 4MB.
- `header`: (Optional.) A `tf.bool` scalar indicating whether the CSV file(s) have `header` line(s) that should be skipped when parsing. Defaults to `False`.
- `field_delim`: (Optional.) A `tf.string` scalar containing the delimiter character that separates fields in a record. Defaults to `","`.
- `use_quote_delim`: (Optional.) A `tf.bool` scalar. If `False`, treats double quotation marks as regular characters inside of string fields (ignoring RFC 4180, Section 2, Bullet 5). Defaults to `True`.
- `na_value`: (Optional.) A `tf.string` scalar indicating a value that will be treated as NA/NaN.
- `select_cols`: (Optional.) A sorted list of column indices to select from the input data. If specified, only this subset of columns will be parsed. Defaults to parsing all columns.
## Properties
### element_spec
The type specification of an element of this dataset.
#### Returns:
A nested structure of `tf.TypeSpec` objects matching the structure of an element of this dataset and specifying the type of individual components.
### output_classes
Returns the class of each component of an element of this dataset. (deprecated)
#### Returns:
A nested structure of Python `type` objects corresponding to each component of an element of this dataset.
### output_shapes
Returns the shape of each component of an element of this dataset. (deprecated)
#### Returns:
A nested structure of `tf.TensorShape` objects corresponding to each component of an element of this dataset.
### output_types
Returns the type of each component of an element of this dataset. (deprecated)
#### Returns:
A nested structure of `tf.DType` objects corresponding to each component of an element of this dataset.
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
### filter_with_legacy_function
View source

```
 filter_with_legacy_function(predicate)
```
Filters this dataset according to `predicate`. (deprecated)
NOTE: This is an escape hatch for existing uses of `filter` that do not work with V2 functions. New uses are strongly discouraged and existing uses should migrate to `filter` as this method will be removed in V2.
#### Args:
- `predicate`: A function mapping a nested structure of tensors (having shapes and types defined by `self.output_shapes` and `self.output_types`) to a scalar `tf.bool` tensor.
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
