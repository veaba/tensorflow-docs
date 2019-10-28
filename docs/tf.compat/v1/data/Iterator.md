## Class Iterator
Represents the state of iterating through a `Dataset`.
## __init__
View source

```
 __init__(
    iterator_resource,
    initializer,
    output_types,
    output_shapes,
    output_classes
)
```
Creates a new iterator from the given iterator resource.
#### Args:
- `iterator_resource`: A `tf.resource` scalar `tf.Tensor` representing the iterator.
- `initializer`: A `tf.Operation` that should be run to initialize this iterator.
- `output_types`: A nested structure of `tf.DType` objects corresponding to each component of an element of this iterator.
- `output_shapes`: A nested structure of `tf.TensorShape` objects corresponding to each component of an element of this iterator.
- `output_classes`: A nested structure of Python `type` objects corresponding to each component of an element of this iterator.
## Properties
### element_spec
The type specification of an element of this iterator.
#### Returns:
A nested structure of `tf.TypeSpec` objects matching the structure of an element of this iterator and specifying the type of individual components.
### initializer
A `tf.Operation` that should be run to initialize this iterator.
#### Returns:
A `tf.Operation` that should be run to initialize this iterator
#### Raises:
- `ValueError`: If this iterator initializes itself automatically.
### output_classes
Returns the class of each component of an element of this iterator. (deprecated)
The expected values are `tf.Tensor` and `tf.SparseTensor`.
#### Returns:
A nested structure of Python `type` objects corresponding to each component of an element of this dataset.
### output_shapes
Returns the shape of each component of an element of this iterator. (deprecated)
#### Returns:
A nested structure of `tf.TensorShape` objects corresponding to each component of an element of this dataset.
### output_types
Returns the type of each component of an element of this iterator. (deprecated)
#### Returns:
A nested structure of `tf.DType` objects corresponding to each component of an element of this dataset.
## Methods
### from_string_handle
View source

```
 @staticmethod
from_string_handle(
    string_handle,
    output_types,
    output_shapes=None,
    output_classes=None
)
```
Creates a new, uninitialized `Iterator` based on the given handle.
This method allows you to define a "feedable" iterator where you can choose between concrete iterators by feeding a value in a `tf.Session.run` call. In that case, `string_handle` would be a `tf.compat.v1.placeholder`, and you would feed it with the value of `tf.data.Iterator.string_handle` in each step.
For example, if you had two iterators that marked the current position in a training dataset and a test dataset, you could choose which to use in each step as follows:

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
#### Args:
#### Returns:
An `Iterator`.
### from_structure
View source

```
 @staticmethod
from_structure(
    output_types,
    output_shapes=None,
    shared_name=None,
    output_classes=None
)
```
Creates a new, uninitialized `Iterator` with the given structure.
This iterator-constructing method can be used to create an iterator that is reusable with many different datasets.
