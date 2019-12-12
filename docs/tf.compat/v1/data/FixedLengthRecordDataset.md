

## Class  `FixedLengthRecordDataset` 
A  `Dataset`  of fixed-length records from one or more binary files.

##  `__init__` 
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

Creates a  `FixedLengthRecordDataset` .

#### 参数：
- **`filenames`** : A [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string) tensor or [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) containing one ormore filenames.
- **`record_bytes`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar representing the number of bytes ineach record.
- **`header_bytes`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar representing the number ofbytes to skip at the start of a file.
- **`footer_bytes`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar representing the number ofbytes to ignore at the end of a file.
- **`buffer_size`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar representing the number ofbytes to buffer when reading.
- **`compression_type`** : (Optional.) A [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string) scalar evaluating to one of `""`  (no compression),  `"ZLIB"` , or  `"GZIP"` .
- **`num_parallel_reads`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar representing thenumber of files to read in parallel. If greater than one, the records offiles read in parallel are outputted in an interleaved order. If yourinput pipeline is I/O bottlenecked, consider setting this parameter to avalue greater than one to parallelize the I/O. If  `None` , files will beread sequentially.


## 属性


###  `element_spec` 
此数据集元素的类型规范。

#### 返回：
A nested structure of [ `tf.TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec) objects matching the structure of anelement of this dataset and specifying the type of individual components.

###  `output_classes` 
Returns the class of each component of an element of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_classes(dataset)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_classes).


#### 返回：
A nested structure of Python  `type`  objects corresponding to eachcomponent of an element of this dataset.

###  `output_shapes` 
Returns the shape of each component of an element of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_shapes(dataset)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_shapes).


#### 返回：
A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objects corresponding to eachcomponent of an element of this dataset.

###  `output_types` 
Returns the type of each component of an element of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_types(dataset)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_types).


#### 返回：
A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding to each componentof an element of this dataset.

## 方法


###  `__iter__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2024-L2025)

```
 __iter__()
 
```

Creates an  `Iterator`  for enumerating the elements of this dataset.

The returned iterator implements the Python iterator protocol and thereforecan only be used in eager mode.

#### 返回：
An  `Iterator`  over the elements of this dataset.

#### 加薪：
- **`RuntimeError`** : If not inside of tf.function and not executing eagerly.


###  `apply` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1346-L1375)

```
 apply(transformation_func)
 
```

将转换函数应用于此数据集。

 `apply`  enables chaining of custom  `Dataset`  transformations, which arerepresented as functions that take one  `Dataset`  argument and return atransformed  `Dataset` .

#### 例如：


```
 dataset = (dataset.map(lambda x: x ** 2)
           .apply(group_by_window(key_func, reduce_func, window_size))
           .map(lambda x: x ** 3))
 
```

#### 参数：
- **`transformation_func`** : A function that takes one  `Dataset`  argument andreturns a  `Dataset` .


#### 返回：
- **`Dataset`** : The  `Dataset`  returned by applying  `transformation_func`  to thisdataset.


###  `batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1017-L1038)

```
 batch(
    batch_size,
    drop_remainder=False
)
 
```

将此数据集的连续元素组合成批。

The components of the resulting element will have an additional outerdimension, which will be  `batch_size`  (or  `N % batch_size`  for the lastelement if  `batch_size`  does not divide the number of input elements  `N` evenly and  `drop_remainder`  is  `False` ). If your program depends on thebatches having the same outer dimension, you should set the  `drop_remainder` argument to  `True`  to prevent the smaller batch from being produced.

#### 参数：
- **`batch_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofconsecutive elements of this dataset to combine in a single batch.
- **`drop_remainder`** : (Optional.) A [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representingwhether the last batch should be dropped in the case it has fewer than `batch_size`  elements; the default behavior is not to drop the smallerbatch.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `cache` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L923-L934)

```
 cache(filename='')
 
```

缓存此数据集中的元素。

#### 参数：
- **`filename`** : A [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the name of adirectory on the filesystem to use for caching elements in this Dataset.If a filename is not provided, the dataset will be cached in memory.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `concatenate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L746-L768)

```
 concatenate(dataset)
 
```

Creates a  `Dataset`  by concatenating the given dataset with this dataset.

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

#### 参数：
- **`dataset`** :  `Dataset`  to be concatenated.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `enumerate` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L864-L892)

```
 enumerate(start=0)
 
```

枚举此数据集的元素。

It is similar to python's  `enumerate` .

#### 例如：


```
 # 注意：The following examples use `{ ... }` to represent the
# contents of a dataset.
a = { 1, 2, 3 }
b = { (7, 8), (9, 10) }

# The nested structure of the `datasets` argument determines the
# structure of elements in the resulting dataset.
a.enumerate(start=5)) == { (5, 1), (6, 2), (7, 3) }
b.enumerate() == { (0, (7, 8)), (1, (9, 10)) }
 
```

#### 参数：
- **`start`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the start value forenumeration.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `filter` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1322-L1344)

```
 filter(predicate)
 
```

Filters this dataset according to  `predicate` .

```
 d = tf.data.Dataset.from_tensor_slices([1, 2, 3])

d = d.filter(lambda x: x < 3)  # ==> [1, 2]

# `tf.math.equal(x, y)` is required for equality comparison
def filter_fn(x):
  return tf.math.equal(x, 1)

d = d.filter(filter_fn)  # ==> [1]
 
```

#### 参数：
- **`predicate`** : A function mapping a dataset element to a boolean.


#### 返回：
- **`Dataset`** : The  `Dataset`  containing the elements of this dataset for which `predicate`  is  `True` .


###  `filter_with_legacy_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1960-L1977)

```
 filter_with_legacy_function(predicate)
 
```

Filters this dataset according to  `predicate` . (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use `tf.data.Dataset.filter()
注意：This is an escape hatch for existing uses of  `filter`  that do not workwith V2 functions. New uses are strongly discouraged and existing usesshould migrate to  `filter`  as this method will be removed in V2.

#### 参数：
- **`predicate`** : A function mapping a nested structure of tensors (having shapesand types defined by  `self.output_shapes`  and  `self.output_types` ) to ascalar [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) tensor.


#### 返回：
- **`Dataset`** : The  `Dataset`  containing the elements of this dataset for which `predicate`  is  `True` .


###  `flat_map` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1216-L1240)

```
 flat_map(map_func)
 
```

Maps  `map_func`  across this dataset and flattens the result.

Use  `flat_map`  if you want to make sure that the order of your datasetstays the same. For example, to flatten a dataset of batches into adataset of their elements:

```
 a = Dataset.from_tensor_slices([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ])

a.flat_map(lambda x: Dataset.from_tensor_slices(x + 1)) # ==>
#  [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 
```

[ `tf.data.Dataset.interleave()` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#interleave) is a generalization of  `flat_map` , since `flat_map`  produces the same output as[ `tf.data.Dataset.interleave(cycle_length=1)` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#interleave)

#### 参数：
- **`map_func`** : A function mapping a dataset element to a dataset.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `from_generator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L473-L676)

```
 from_generator(
    generator,
    output_types,
    output_shapes=None,
    args=None
)
 
```

Creates a  `Dataset`  whose elements are generated by  `generator` .

The  `generator`  argument must be a callable object that returnsan object that supports the  `iter()`  protocol (e.g. a generator function).The elements generated by  `generator`  must be compatible with the given `output_types`  and (optional)  `output_shapes`  arguments.

#### 例如：


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

注意：The current implementation of [ `Dataset.from_generator()` ](/api_docs/python/tf/data/Dataset#from_generator) uses[ `tf.numpy_function` ](https://tensorflow.google.cn/api_docs/python/tf/numpy_function) and inherits the same constraints. In particular, itrequires the  `Dataset` - and  `Iterator` -related operations to be placedon a device in the same process as the Python program that called[ `Dataset.from_generator()` ](/api_docs/python/tf/data/Dataset#from_generator). The body of  `generator`  will not beserialized in a  `GraphDef` , and you should not use this method if youneed to serialize your model and restore it in a different environment.

注意：If  `generator`  depends on mutable global variables or other externalstate, be aware that the runtime may invoke  `generator`  multiple times(in order to support repeating the  `Dataset` ) and at any timebetween the call to [ `Dataset.from_generator()` ](/api_docs/python/tf/data/Dataset#from_generator) and the production of thefirst element from the generator. Mutating global variables or externalstate can cause undefined behavior, and we recommend that you explicitlycache any external state in  `generator`  before calling[ `Dataset.from_generator()` ](/api_docs/python/tf/data/Dataset#from_generator).

#### 参数：
- **`generator`** : A callable object that returns an object that supports the `iter()`  protocol. If  `args`  is not specified,  `generator`  must take noarguments; otherwise it must take as many arguments as there are valuesin  `args` .
- **`output_types`** : A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding toeach component of an element yielded by  `generator` .
- **`output_shapes`** : (Optional.) A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objectscorresponding to each component of an element yielded by  `generator` .
- **`args`** : (Optional.) A tuple of [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects that will be evaluatedand passed to  `generator`  as NumPy-array arguments.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `from_sparse_tensor_slices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1815-L1826)

```
 from_sparse_tensor_slices(sparse_tensor)
 
```

Splits each rank-N [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor) in this dataset row-wise. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.data.Dataset.from_tensor_slices()` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#from_tensor_slices).


#### 参数：
- **`sparse_tensor`** : A [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).


#### 返回：
- **`Dataset`** : A  `Dataset`  of rank-(N-1) sparse tensors.


###  `from_tensor_slices` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L416-L435)

```
 from_tensor_slices(tensors)
 
```

Creates a  `Dataset`  whose elements are slices of the given tensors.

Note that if  `tensors`  contains a NumPy array, and eager execution is notenabled, the values will be embedded in the graph as one or more[ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) operations. For large datasets (> 1 GB), this can wastememory and run into byte limits of graph serialization. If  `tensors` contains one or more large NumPy arrays, consider the alternative describedin [this guide](https://tensorflow.org/guide/datasets#consuming_numpy_arrays).

#### 参数：
- **`tensors`** : A dataset element, with each component having the same size inthe 0th dimension.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `from_tensors` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L396-L414)

```
 from_tensors(tensors)
 
```

Creates a  `Dataset`  with a single element, comprising the given tensors.

Note that if  `tensors`  contains a NumPy array, and eager execution is notenabled, the values will be embedded in the graph as one or more[ `tf.constant` ](https://tensorflow.google.cn/api_docs/python/tf/constant) operations. For large datasets (> 1 GB), this can wastememory and run into byte limits of graph serialization. If  `tensors` contains one or more large NumPy arrays, consider the alternative describedin [thisguide](https://tensorflow.org/guide/datasets#consuming_numpy_arrays).

#### 参数：
- **`tensors`** : A dataset element.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `interleave` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1242-L1320)

```
 interleave(
    map_func,
    cycle_length=AUTOTUNE,
    block_length=1,
    num_parallel_calls=None
)
 
```

Maps  `map_func`  across this dataset, and interleaves the results.

For example, you can use [ `Dataset.interleave()` ](/api_docs/python/tf/data/Dataset#interleave) to process many input filesconcurrently:

```
 # Preprocess 4 files concurrently, and interleave blocks of 16 records from
# each file.
filenames = ["/var/data/file1.txt", "/var/data/file2.txt", ...]
dataset = (Dataset.from_tensor_slices(filenames)
           .interleave(lambda x:
               TextLineDataset(x).map(parse_fn, num_parallel_calls=1),
               cycle_length=4, block_length=16))
 
```

The  `cycle_length`  and  `block_length`  arguments control the order in whichelements are produced.  `cycle_length`  controls the number of input elementsthat are processed concurrently. If you set  `cycle_length`  to 1, thistransformation will handle one input element at a time, and will produceidentical results to [ `tf.data.Dataset.flat_map` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#flat_map). In general,this transformation will apply  `map_func`  to  `cycle_length`  input elements,open iterators on the returned  `Dataset`  objects, and cycle through themproducing  `block_length`  consecutive elements from each iterator, andconsuming the next input element each time it reaches the end of aniterator.

#### 例如：


```
 a = Dataset.range(1, 6)  # ==> [ 1, 2, 3, 4, 5 ]

# 注意：New lines indicate "block" boundaries.
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

注意：The order of elements yielded by this transformation isdeterministic, as long as  `map_func`  is a pure function. If `map_func`  contains any stateful operations, the order in whichthat state is accessed is undefined.

#### 参数：
- **`map_func`** : A function mapping a dataset element to a dataset.
- **`cycle_length`** : (Optional.) The number of input elements that will beprocessed concurrently. If not specified, the value will be derived fromthe number of available CPU cores. If the  `num_parallel_calls`  argumentis set to [ `tf.data.experimental.AUTOTUNE` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#AUTOTUNE), the  `cycle_length`  argumentalso identifies the maximum degree of parallelism.
- **`block_length`** : (Optional.) The number of consecutive elements to producefrom each input element before cycling to another input element.
- **`num_parallel_calls`** : (Optional.) If specified, the implementation creates athreadpool, which is used to fetch inputs from cycle elementsasynchronously and in parallel. The default behavior is to fetch inputsfrom cycle elements synchronously with no parallelism. If the value[ `tf.data.experimental.AUTOTUNE` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#AUTOTUNE) is used, then the number of parallelcalls is set dynamically based on available CPU.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `list_files` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L788-L846)

```
 list_files(
    file_pattern,
    shuffle=None,
    seed=None
)
 
```

与一个或多个全局模式匹配的所有文件的数据集。

注意：The default behavior of this method is to return filenames ina non-deterministic random shuffled order. Pass a  `seed`  or  `shuffle=False` to get results in a deterministic order.

#### 示例：
If we had the following files on our filesystem:  - /path/to/dir/a.txt  - /path/to/dir/b.py  - /path/to/dir/c.pyIf we pass "/path/to/dir/*.py" as the directory, the datasetwould produce:  - /path/to/dir/b.py  - /path/to/dir/c.py

#### 参数：
- **`file_pattern`** : A string, a list of strings, or a [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) of string type(scalar or vector), representing the filename glob (i.e. shell wildcard)pattern(s) that will be matched.
- **`shuffle`** : (Optional.) If  `True` , the file names will be shuffled randomly.Defaults to  `True` .
- **`seed`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the randomseed that will be used to create the distribution. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.


#### 返回：
- **`Dataset`** : A  `Dataset`  of strings corresponding to file names.


###  `make_initializable_iterator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1704-L1734)

```
 make_initializable_iterator(shared_name=None)
 
```

Creates an  `Iterator`  for enumerating the elements of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use  `for ... in dataset:`  to iterate over a dataset. If using  `tf.estimator` , return the  `Dataset`  object directly from your input function. As a last resort, you can use  `tf.compat.v1.data.make_initializable_iterator(dataset)` .

**Note:**  The returned iterator will be in an uninitialized state,and you must run the  `iterator.initializer`  operation before using it:


```
 dataset = ...
iterator = dataset.make_initializable_iterator()
# ...
sess.run(iterator.initializer)
 
```

#### 参数：
- **`shared_name`** : (Optional.) If non-empty, the returned iterator will beshared under the given name across multiple sessions that share the samedevices (e.g. when using a remote server).


#### 返回：
An  `Iterator`  over the elements of this dataset.

#### 加薪：
- **`RuntimeError`** : If eager execution is enabled.


###  `make_one_shot_iterator` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1637-L1651)

```
 make_one_shot_iterator()
 
```

Creates an  `Iterator`  for enumerating the elements of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use  `for ... in dataset:`  to iterate over a dataset. If using  `tf.estimator` , return the  `Dataset`  object directly from your input function. As a last resort, you can use  `tf.compat.v1.data.make_one_shot_iterator(dataset)` .

**Note:**  The returned iterator will be initialized automatically.A "one-shot" iterator does not currently support re-initialization.


#### 返回：
An  `Iterator`  over the elements of this dataset.

###  `map` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1099-L1214)

```
 map(
    map_func,
    num_parallel_calls=None
)
 
```

Maps  `map_func`  across the elements of this dataset.

This transformation applies  `map_func`  to each element of this dataset, andreturns a new dataset containing the transformed elements, in the sameorder as they appeared in the input.

#### 例如：


```
 a = Dataset.range(1, 6)  # ==> [ 1, 2, 3, 4, 5 ]

a.map(lambda x: x + 1)  # ==> [ 2, 3, 4, 5, 6 ]
 
```

The input signature of  `map_func`  is determined by the structure of eachelement in this dataset. For example:

```
 # 注意：The following examples use `{ ... }` to represent the
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

The value or values returned by  `map_func`  determine the structure of eachelement in the returned dataset.

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

 `map_func`  can accept as arguments and return any type of dataset element.

Note that irrespective of the context in which  `map_func`  is defined (eagervs. graph), tf.data traces the function and executes it as a graph. To usePython code inside of the function you have two options:

1) Rely on AutoGraph to convert Python code into an equivalent graphcomputation. The downside of this approach is that AutoGraph can convertsome but not all Python code.

2) Use [ `tf.py_function` ](https://tensorflow.google.cn/api_docs/python/tf/py_function), which allows you to write arbitrary Python code butwill generally result in worse performance than 1). For example:

```
 d = tf.data.Dataset.from_tensor_slices(['hello', 'world'])

# transform a string tensor to upper case string using a Python function
def upper_case_fn(t: tf.Tensor) -> str:
    return t.numpy().decode('utf-8').upper()

d.map(lambda x: tf.py_function(func=upper_case_fn,
      inp=[x], Tout=tf.string))  # ==> [ "HELLO", "WORLD" ]
 
```

#### 参数：
- **`map_func`** : A function mapping a dataset element to another dataset element.
- **`num_parallel_calls`** : (Optional.) A [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),representing the number elements to process asynchronously in parallel.If not specified, elements will be processed sequentially. If the value[ `tf.data.experimental.AUTOTUNE` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#AUTOTUNE) is used, then the number of parallelcalls is set dynamically based on available CPU.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `map_with_legacy_function` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1906-L1941)

```
 map_with_legacy_function(
    map_func,
    num_parallel_calls=None
)
 
```

Maps  `map_func`  across the elements of this dataset. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use `tf.data.Dataset.map()
注意：This is an escape hatch for existing uses of  `map`  that do not workwith V2 functions. New uses are strongly discouraged and existing usesshould migrate to  `map`  as this method will be removed in V2.

#### 参数：
- **`map_func`** : A function mapping a nested structure of tensors (having shapesand types defined by  `self.output_shapes`  and  `self.output_types` ) toanother nested structure of tensors.
- **`num_parallel_calls`** : (Optional.) A [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor),representing the number elements to process asynchronously in parallel.If not specified, elements will be processed sequentially. If the value[ `tf.data.experimental.AUTOTUNE` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental#AUTOTUNE) is used, then the number of parallelcalls is set dynamically based on available CPU.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `options` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2017-L2018)

```
 options()
 
```

返回此数据集及其输入的选项。

#### 返回：
A [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) object representing the dataset options.

###  `padded_batch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1040-L1097)

```
 padded_batch(
    batch_size,
    padded_shapes,
    padding_values=None,
    drop_remainder=False
)
 
```

将此数据集的连续元素合并到填充的批中。

This transformation combines multiple consecutive elements of the inputdataset into a single element.

Like [ `tf.data.Dataset.batch` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#batch), the components of the resulting element willhave an additional outer dimension, which will be  `batch_size`  (or `N % batch_size`  for the last element if  `batch_size`  does not divide thenumber of input elements  `N`  evenly and  `drop_remainder`  is  `False` ). Ifyour program depends on the batches having the same outer dimension, youshould set the  `drop_remainder`  argument to  `True`  to prevent the smallerbatch from being produced.

Unlike [ `tf.data.Dataset.batch` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#batch), the input elements to be batched may havedifferent shapes, and this transformation will pad each component to therespective shape in  `padding_shapes` . The  `padding_shapes`  argumentdetermines the resulting shape for each dimension of each component in anoutput element:

- If the dimension is a constant (e.g. [ `tf.compat.v1.Dimension(37)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Dimension)), thecomponentwill be padded out to that length in that dimension.
- If the dimension is unknown (e.g. [ `tf.compat.v1.Dimension(None)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Dimension)), thecomponentwill be padded out to the maximum length of all elements in thatdimension.
See also [ `tf.data.experimental.dense_to_sparse_batch` ](https://tensorflow.google.cn/api_docs/python/tf/data/experimental/dense_to_sparse_batch), which combineselements that may have different shapes into a [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).

#### 参数：
- **`batch_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofconsecutive elements of this dataset to combine in a single batch.
- **`padded_shapes`** : A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) vectortensor-like objects representing the shape to which the respectivecomponent of each input element should be padded prior to batching. Anyunknown dimensions (e.g. [ `tf.compat.v1.Dimension(None)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/Dimension) in a[ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) or  `-1`  in a tensor-like object) will be padded to themaximum size of that dimension in each batch.
- **`padding_values`** : (Optional.) A nested structure of scalar-shaped[ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the padding values to use for the respectivecomponents.  Defaults are  `0`  for numeric types and the empty string forstring types.
- **`drop_remainder`** : (Optional.) A [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representingwhether the last batch should be dropped in the case it has fewer than `batch_size`  elements; the default behavior is not to drop the smallerbatch.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `prefetch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L770-L786)

```
 prefetch(buffer_size)
 
```

Creates a  `Dataset`  that prefetches elements from this dataset.


**Note:**  Like other  `Dataset`  methods, prefetch operates on theelements of the input dataset. It has no concept of examples vs. batches. `examples.prefetch(2)`  will prefetch two elements (2 examples),while  `examples.batch(20).prefetch(2)`  will prefetch 2 elements(2 batches, of 20 examples each).


#### 参数：
- **`buffer_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the maximumnumber of elements that will be buffered when prefetching.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `range` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L678-L705)

```
 range(*args)
 
```

Creates a  `Dataset`  of a step-separated range of values.

#### 例如：


```
 Dataset.range(5) == [0, 1, 2, 3, 4]
Dataset.range(2, 5) == [2, 3, 4]
Dataset.range(1, 5, 2) == [1, 3]
Dataset.range(1, 5, -2) == []
Dataset.range(5, 1) == []
Dataset.range(5, 1, -2) == [5, 3]
 
```

#### 参数：
- **`*args`** : follows the same semantics as python's xrange.len(args) == 1 -> start = 0, stop = args[0], step = 1len(args) == 2 -> start = args[0], stop = args[1], step = 1len(args) == 3 -> start = args[0], stop = args[1, stop = args[2]


#### 返回：
- **`Dataset`** : A  `RangeDataset` .


#### 加薪：
- **`ValueError`** : if len(args) == 0.


###  `reduce` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1427-L1537)

```
 reduce(
    initial_state,
    reduce_func
)
 
```

将输入数据集缩减为单个元素。

The transformation calls  `reduce_func`  successively on every element ofthe input dataset until the dataset is exhausted, aggregating information inits internal state. The  `initial_state`  argument is used for the initialstate and the final state is returned as the result.

#### 例如：
-  `tf.data.Dataset.range(5).reduce(np.int64(0), lambda x, _: x + 1)` produces  `5` 
-  `tf.data.Dataset.range(5).reduce(np.int64(0), lambda x, y: x + y)` produces  `10` 


#### 参数：
- **`initial_state`** : An element representing the initial state of thetransformation.
- **`reduce_func`** : A function that maps  `(old_state, input_element)`  to `new_state` . It must take two arguments and return a new elementThe structure of  `new_state`  must match the structure of `initial_state` .


#### 返回：
与转换的最终状态相对应的数据集元素。

###  `repeat` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L848-L862)

```
 repeat(count=None)
 
```

Repeats this dataset  `count`  times.

注意：If this dataset is a function of global state (e.g. a random numbergenerator), then different repetitions may produce different elements.

#### 参数：
- **`count`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing thenumber of times the dataset should be repeated. The default behavior (if `count`  is  `None`  or  `-1` ) is for the dataset be repeated indefinitely.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `shard` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L964-L1015)

```
 shard(
    num_shards,
    index
)
 
```

Creates a  `Dataset`  that includes only 1/ `num_shards`  of this dataset.

This dataset operator is very useful when running distributed training, asit allows each worker to read a unique subset.

When reading a single input file, you can skip elements as follows:

```
 d = tf.data.TFRecordDataset(input_file)
d = d.shard(num_workers, worker_index)
d = d.repeat(num_epochs)
d = d.shuffle(shuffle_buffer_size)
d = d.map(parser_fn, num_parallel_calls=num_map_threads)
 
```

#### 重要注意事项：
- Be sure to shard before you use any randomizing operator (such asshuffle).
- Generally it is best if the shard operator is used early in the datasetpipeline. For example, when reading from a set of TFRecord files, shardbefore converting the dataset to input samples. This avoids reading everyfile on every worker. The following is an example of an efficientsharding strategy within a complete pipeline:


```
 d = Dataset.list_files(pattern)
d = d.shard(num_workers, worker_index)
d = d.repeat(num_epochs)
d = d.shuffle(shuffle_buffer_size)
d = d.interleave(tf.data.TFRecordDataset,
                 cycle_length=num_readers, block_length=1)
d = d.map(parser_fn, num_parallel_calls=num_map_threads)
 
```

#### 参数：
- **`num_shards`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofshards operating in parallel.
- **`index`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the worker index.


#### 返回：
- **`Dataset`** : A  `Dataset` .


#### 加薪：
- **`InvalidArgumentError`** : if  `num_shards`  or  `index`  are illegal values.注意：error checking is done on a best-effort basis, and errors aren'tguaranteed to be caught upon dataset creation. (e.g. providing in aplaceholder tensor bypasses the early checking, and will instead resultin an error during a session.run call.)


###  `shuffle` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L894-L921)

```
 shuffle(
    buffer_size,
    seed=None,
    reshuffle_each_iteration=None
)
 
```

随机洗牌此数据集的元素。

This dataset fills a buffer with  `buffer_size`  elements, then randomlysamples elements from this buffer, replacing the selected elements with newelements. For perfect shuffling, a buffer size greater than or equal to thefull size of the dataset is required.

For instance, if your dataset contains 10,000 elements but  `buffer_size`  isset to 1,000, then  `shuffle`  will initially select a random element fromonly the first 1,000 elements in the buffer. Once an element is selected,its space in the buffer is replaced by the next (i.e. 1,001-st) element,maintaining the 1,000 element buffer.

#### 参数：
- **`buffer_size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofelements from this dataset from which the new dataset will sample.
- **`seed`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the randomseed that will be used to create the distribution. See[ `tf.compat.v1.set_random_seed` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/set_random_seed) for behavior.
- **`reshuffle_each_iteration`** : (Optional.) A boolean, which if true indicatesthat the dataset should be pseudorandomly reshuffled each time it isiterated over. (Defaults to  `True` .)


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `skip` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L950-L962)

```
 skip(count)
 
```

Creates a  `Dataset`  that skips  `count`  elements from this dataset.

#### 参数：
- **`count`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofelements of this dataset that should be skipped to form the new dataset.If  `count`  is greater than the size of this dataset, the new datasetwill contain no elements.  If  `count`  is -1, skips the entire dataset.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `take` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L936-L948)

```
 take(count)
 
```

Creates a  `Dataset`  with at most  `count`  elements from this dataset.

#### 参数：
- **`count`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number ofelements of this dataset that should be taken to form the new dataset.If  `count`  is -1, or if  `count`  is greater than the size of thisdataset, the new dataset will contain all elements of this dataset.


#### 返回：
- **`Dataset`** : A  `Dataset` .


###  `unbatch` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1539-L1581)

```
 unbatch()
 
```

将数据集的元素拆分为多个元素。

For example, if elements of the dataset are shaped  `[B, a0, a1, ...]` ,where  `B`  may vary for each input element, then for each element in thedataset, the unbatched dataset will contain  `B`  consecutive elementsof shape  `[a0, a1, ...]` .

```
 # 注意：The following example uses `{ ... }` to represent the contents
# of a dataset.
ds = { ['a', 'b', 'c'], ['a', 'b'], ['a', 'b', 'c', 'd'] }

ds.unbatch() == {'a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'd'}
 
```

#### 返回：
A  `Dataset`  transformation function, which can be passed to[ `tf.data.Dataset.apply` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset#apply).

###  `window` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1377-L1425)

```
 window(
    size,
    shift=None,
    stride=1,
    drop_remainder=False
)
 
```

将（嵌套的）输入元素合并到（嵌套的）窗口的数据集中。

A "window" is a finite dataset of flat elements of size  `size`  (or possiblyfewer if there are not enough input elements to fill the window and `drop_remainder`  evaluates to false).

The  `stride`  argument determines the stride of the input elements, and the `shift`  argument determines the shift of the window.

For example, letting {...} to represent a Dataset:

-  `tf.data.Dataset.range(7).window(2)`  produces `{ {0, 1}, {2, 3}, {4, 5}, {6}}` 
-  `tf.data.Dataset.range(7).window(3, 2, 1, True)`  produces `{ {0, 1, 2}, {2, 3, 4}, {4, 5, 6}}` 
-  `tf.data.Dataset.range(7).window(3, 1, 2, True)`  produces `{ {0, 2, 4}, {1, 3, 5}, {2, 4, 6}}` 
Note that when the  `window`  transformation is applied to a dataset ofnested elements, it produces a dataset of nested windows.

#### 例如：
-  `tf.data.Dataset.from_tensor_slices((range(4), range(4))).window(2)` produces  `{({0, 1}, {0, 1}), ({2, 3}, {2, 3})}` 
-  `tf.data.Dataset.from_tensor_slices({"a": range(4)}).window(2)` produces  `{ {"a": {0, 1}}, {"a": {2, 3}}}` 


#### 参数：
- **`size`** : A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing the number of elementsof the input dataset to combine into a window.
- **`shift`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing theforward shift of the sliding window in each iteration. Defaults to `size` .
- **`stride`** : (Optional.) A [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representing thestride of the input elements in the sliding window.
- **`drop_remainder`** : (Optional.) A [ `tf.bool` ](https://tensorflow.google.cn/api_docs/python/tf#bool) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor), representingwhether a window should be dropped in case its size is smaller than `window_size` .


#### 返回：
- **`Dataset`** : A  `Dataset`  of (nests of) windows -- a finite datasets of flatelements created from the (nests of) input elements.


###  `with_options` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L1583-L1599)

```
 with_options(options)
 
```

Returns a new [ `tf.data.Dataset` ](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset) with the given options set.

The options are "global" in the sense they apply to the entire dataset.If options are set multiple times, they are merged as long as differentoptions do not use different non-default values.

#### 参数：
- **`options`** : A [ `tf.data.Options` ](https://tensorflow.google.cn/api_docs/python/tf/data/Options) that identifies the options the use.


#### 返回：
- **`Dataset`** : A  `Dataset`  with the given options.


#### 加薪：
- **`ValueError`** : when an option is set more than once to a non-default value


###  `zip` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L707-L744)

```
 zip(datasets)
 
```

Creates a  `Dataset`  by zipping together the given datasets.

This method has similar semantics to the built-in  `zip()`  functionin Python, with the main difference being that the  `datasets` argument can be an arbitrary nested structure of  `Dataset`  objects.For example:

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

#### 参数：
- **`datasets`** : A nested structure of datasets.


#### 返回：
- **`Dataset`** : A  `Dataset` .
