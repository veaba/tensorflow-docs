## Class Dataset
Represents a potentially large set of elements.
### Aliases:
- Class `tf.compat.v2.data.Dataset`
### Used in the guide:
- ``t``f``.``d``a``t``a``:`` ``B``u``i``l``d`` ``T``e``n``s``o``r``F``l``o``w`` ``i``n``p``u``t`` ``p``i``p``e``l``i``n``e``s``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``T``e``n``s``o``r``F``l``o``w``
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
### Used in the tutorials:
- ``T``i``m``e`` ``s``e``r``i``e``s`` ``f``o``r``e``c``a``s``t``i``n``g``
- ``B``e``t``t``e``r`` ``p``e``r``f``o``r``m``a``n``c``e`` ``w``i``t``h`` ``t``f``.``f``u``n``c``t``i``o``n``
- ``T``F``R``e``c``o``r``d`` ``a``n``d`` ``t``f``.``E``x``a``m``p``l``e``
- ``G``r``a``d``i``e``n``t`` ``B``o``o``s``t``e``d`` ``T``r``e``e``s``:`` ``M``o``d``e``l`` ``u``n``d``e``r``s``t``a``n``d``i``n``g``
- ``P``r``e``m``a``d``e`` ``E``s``t``i``m``a``t``o``r``s``
A `Dataset` can be used to represent an input pipeline as a collection of elements and a "logical plan" of transformations that act on those elements.
A dataset contains elements that each have the same (nested) structure and the individual components of the structure can be of any type representable by `tf.TypeSpec`, including `tf.Tensor`, `tf.data.Dataset`, `tf.SparseTensor`, `tf.RaggedTensor`, or `tf.Tensor`Array.
#### Example elements:

```
 # Integer element
a = 1
# Float element
b = 2.0
# Tuple element with 2 components
c = (1, 2)
# Dict element with 3 components
d = {"a": (2, 2), "b": 3}
# Element containing a dataset
e = tf.data.Dataset.from_element(10)
```
## __init__
View source

```
 __init__(variant_tensor)
```
Creates a DatasetV2 object.
This is a difference between DatasetV1 and DatasetV2. DatasetV1 does not take anything in its constructor whereas in the DatasetV2, we expect subclasses to create a variant_tensor and pass it in to the super() call.
#### Args:
- `variant_tensor`: A DT_VARIANT tensor that represents the dataset.
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
