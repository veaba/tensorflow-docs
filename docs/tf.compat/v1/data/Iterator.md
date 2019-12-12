

## Class  `Iterator` 
Represents the state of iterating through a  `Dataset` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L78-L116)

```
 __init__(
    iterator_resource,
    initializer,
    output_types,
    output_shapes,
    output_classes
)
 
```

从给定的迭代器资源创建新的迭代器。


**Note:**  Most users will not call this initializer directly, and willinstead use  `Dataset.make_initializable_iterator()`  or `Dataset.make_one_shot_iterator()` .


#### 参数：
- **`iterator_resource`** : A [ `tf.resource` ](https://tensorflow.google.cn/api_docs/python/tf#resource) scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) representing theiterator.
- **`initializer`** : A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that should be run to initialize thisiterator.
- **`output_types`** : A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding toeach component of an element of this iterator.
- **`output_shapes`** : A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objectscorresponding to each component of an element of this iterator.
- **`output_classes`** : A nested structure of Python  `type`  objects correspondingto each component of an element of this iterator.


## 属性


###  `element_spec` 
此迭代器的元素的类型规范。

#### 返回：
A nested structure of [ `tf.TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec) objects matching the structure of anelement of this iterator and specifying the type of individual components.

###  `initializer` 
A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that should be run to initialize this iterator.

#### 返回：
A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that should be run to initialize this iterator

#### 加薪：
- **`ValueError`** : If this iterator initializes itself automatically.


###  `output_classes` 
Returns the class of each component of an element of this iterator. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_classes(iterator)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_classes).
The expected values are [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) and [ `tf.SparseTensor` ](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor).

#### 返回：
A nested structure of Python  `type`  objects corresponding to eachcomponent of an element of this dataset.

###  `output_shapes` 
Returns the shape of each component of an element of this iterator. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_shapes(iterator)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_shapes).


#### 返回：
A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objects corresponding to eachcomponent of an element of this dataset.

###  `output_types` 
Returns the type of each component of an element of this iterator. (deprecated)


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:Use [ `tf.compat.v1.data.get_output_types(iterator)` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/data/get_output_types).


#### 返回：
A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding to each componentof an element of this dataset.

## 方法


###  `from_string_handle` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L222-L298)

```
 @staticmethod
from_string_handle(
    string_handle,
    output_types,
    output_shapes=None,
    output_classes=None
)
 
```

Creates a new, uninitialized  `Iterator`  based on the given handle.

This method allows you to define a "feedable" iterator where you can choosebetween concrete iterators by feeding a value in a  `tf.Session.run`  call.In that case,  `string_handle`  would be a [ `tf.compat.v1.placeholder` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/placeholder), and youwouldfeed it with the value of  `tf.data.Iterator.string_handle`  in each step.

For example, if you had two iterators that marked the current position ina training dataset and a test dataset, you could choose which to use ineach step as follows:

```
 train_iterator = tf.data.Dataset(...).make_one_shot_iterator()
train_iterator_handle = sess.run(train_iterator.string_handle())

test_iterator = tf.data.Dataset(...).make_one_shot_iterator()
test_iterator_handle = sess.run(test_iterator.string_handle())

handle = tf.compat.v1.placeholder(tf.string, shape=[])
iterator = tf.data.Iterator.from_string_handle(
    handle, train_iterator.output_types)

next_element = iterator.get_next()
loss = f(next_element)

train_loss = sess.run(loss, feed_dict={handle: train_iterator_handle})
test_loss = sess.run(loss, feed_dict={handle: test_iterator_handle})
 
```

#### 参数：
- **`string_handle`** : A scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) of type [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string) that evaluates toa handle produced by the  `Iterator.string_handle()`  method.
- **`output_types`** : A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding toeach component of an element of this dataset.
- **`output_shapes`** : (Optional.) A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objectscorresponding to each component of an element of this dataset. Ifomitted, each component will have an unconstrainted shape.
- **`output_classes`** : (Optional.) A nested structure of Python  `type`  objectscorresponding to each component of an element of this iterator. Ifomitted, each component is assumed to be of type [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor).


#### 返回：
An  `Iterator` .

###  `from_structure` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L118-L220)

```
 @staticmethod
from_structure(
    output_types,
    output_shapes=None,
    shared_name=None,
    output_classes=None
)
 
```

Creates a new, uninitialized  `Iterator`  with the given structure.

This iterator-constructing method can be used to create an iterator thatis reusable with many different datasets.

The returned iterator is not bound to a particular dataset, and it hasno  `initializer` . To initialize the iterator, run the operation returned by `Iterator.make_initializer(dataset)` .

下面是一个例子

```
 iterator = Iterator.from_structure(tf.int64, tf.TensorShape([]))

dataset_range = Dataset.range(10)
range_initializer = iterator.make_initializer(dataset_range)

dataset_evens = dataset_range.filter(lambda x: x % 2 == 0)
evens_initializer = iterator.make_initializer(dataset_evens)

# Define a model based on the iterator; in this example, the model_fn
# is expected to take scalar tf.int64 Tensors as input (see
# the definition of 'iterator' above).
prediction, loss = model_fn(iterator.get_next())

# Train for `num_epochs`, where for each epoch, we first iterate over
# dataset_range, and then iterate over dataset_evens.
for _ in range(num_epochs):
  # Initialize the iterator to `dataset_range`
  sess.run(range_initializer)
  while True:
    try:
      pred, loss_val = sess.run([prediction, loss])
    except tf.errors.OutOfRangeError:
      break

  # Initialize the iterator to `dataset_evens`
  sess.run(evens_initializer)
  while True:
    try:
      pred, loss_val = sess.run([prediction, loss])
    except tf.errors.OutOfRangeError:
      break
 
```

#### 参数：
- **`output_types`** : A nested structure of [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) objects corresponding toeach component of an element of this dataset.
- **`output_shapes`** : (Optional.) A nested structure of [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape) objectscorresponding to each component of an element of this dataset. Ifomitted, each component will have an unconstrainted shape.
- **`shared_name`** : (Optional.) If non-empty, this iterator will be shared underthe given name across multiple sessions that share the same devices(e.g. when using a remote server).
- **`output_classes`** : (Optional.) A nested structure of Python  `type`  objectscorresponding to each component of an element of this iterator. Ifomitted, each component is assumed to be of type [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor).


#### 返回：
An  `Iterator` .

#### 加薪：
- **`TypeError`** : If the structures of  `output_shapes`  and  `output_types`  arenot the same.


###  `get_next` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L373-L427)

```
 get_next(name=None)
 
```

Returns a nested structure of [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor)s representing the next element.

In graph mode, you should typically call this method *once* and use itsresult as the input to another computation. A typical loop will then call `tf.Session.run`  on the result of that computation. The loop will terminatewhen the  `Iterator.get_next()`  operation raises[ `tf.errors.OutOfRangeError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/OutOfRangeError). The following skeleton shows how to usethis method when building a training loop:

```
 dataset = ...  # A `tf.data.Dataset` object.
iterator = dataset.make_initializable_iterator()
next_element = iterator.get_next()

# Build a TensorFlow graph that does something with each element.
loss = model_function(next_element)
optimizer = ...  # A `tf.compat.v1.train.Optimizer` object.
train_op = optimizer.minimize(loss)

with tf.compat.v1.Session() as sess:
  try:
    while True:
      sess.run(train_op)
  except tf.errors.OutOfRangeError:
    pass
 
```

注意：It is legitimate to call  `Iterator.get_next()`  multiple times, e.g.when you are distributing different elements to multiple devices in a singlestep. However, a common pitfall arises when users call  `Iterator.get_next()` in each iteration of their training loop.  `Iterator.get_next()`  adds ops tothe graph, and executing each op allocates resources (including threads); asa consequence, invoking it in every iteration of a training loop causesslowdown and eventual resource exhaustion. To guard against this outcome, welog a warning when the number of uses crosses a fixed threshold ofsuspiciousness.

#### 参数：
- **`name`** : (Optional.) A name for the created operation.


#### 返回：
A nested structure of [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects.

###  `make_initializer` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L317-L371)

```
 make_initializer(
    dataset,
    name=None
)
 
```

Returns a [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that initializes this iterator on  `dataset` .

#### 参数：
- **`dataset`** : A  `Dataset`  with compatible structure to this iterator.
- **`name`** : (Optional.) A name for the created operation.


#### 返回：
A [ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) that can be run to initialize this iterator on the given `dataset` .

#### 加薪：
- **`TypeError`** : If  `dataset`  and this iterator do not have a compatibleelement structure.


###  `string_handle` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/iterator_ops.py#L429-L442)

```
 string_handle(name=None)
 
```

Returns a string-valued [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) that represents this iterator.

#### 参数：
- **`name`** : (Optional.) A name for the created operation.


#### 返回：
A scalar [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) of type [ `tf.string` ](https://tensorflow.google.cn/api_docs/python/tf#string).

