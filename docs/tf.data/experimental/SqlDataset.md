## Class SqlDataset
A `Dataset` consisting of the results from a SQL query.
### Aliases:
- Class `tf.compat.v2.data.experimental.SqlDataset`
## __init__
View source

```
 __init__(
    driver_name,
    data_source_name,
    query,
    output_types
)
```
Creates a `SqlDataset`.
`SqlDataset` allows a user to read data from the result set of a SQL query. For example:

```
 tf.compat.v1.enable_eager_execution()

dataset = tf.data.experimental.SqlDataset("sqlite", "/foo/bar.sqlite3",
                                          "SELECT name, age FROM people",
                                          (tf.string, tf.int32))
# Prints the rows of the result set of the above query.
for element in dataset:
  print(element)
```
#### Args:
- `driver_name`: A 0-D `tf.string` tensor containing the database type. Currently, the only supported value is 'sqlite'.
- `data_source_name`: A 0-D `tf.string` tensor containing a connection string to connect to the database.
- `query`: A 0-D `tf.string` tensor containing the SQL `query` to execute.
- `output_types`: A tuple of `tf.DType` objects representing the types of the columns returned by `query`.
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
