[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/TensorShape) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L722-L1208)  
---|---  
  
## Class `TensorShape`

Represents the shape of a `Tensor`.

### Aliases:

  * Class [`tf.compat.v1.TensorShape`](/api_docs/python/tf/TensorShape)
  * Class [`tf.compat.v2.TensorShape`](/api_docs/python/tf/TensorShape)

### Used in the guide:

  * [Migrate your TensorFlow 1 code to TensorFlow 2](https://tensorflow.google.cn/guide/migrate)
  * [Recurrent Neural Networks (RNN) with Keras](https://tensorflow.google.cn/guide/keras/rnn)

### Used in the tutorials:

  * [Text generation with an RNN](https://tensorflow.google.cn/tutorials/text/text_generation)

A `TensorShape` represents a possibly-partial shape specification for a
`Tensor`. It may be one of the following:

  * _Fully-known shape:_ has a known number of dimensions and a known size for each dimension. e.g. `TensorShape([16, 256])`
  * _Partially-known shape:_ has a known number of dimensions, and an unknown size for one or more dimension. e.g. `TensorShape([None, 256])`
  * _Unknown shape:_ has an unknown number of dimensions, and an unknown size in all dimensions. e.g. `TensorShape(None)`

If a tensor is produced by an operation of type `"Foo"`, its shape may be
inferred if there is a registered shape function for `"Foo"`. See [Shape
functions](https://tensorflow.org/extend/adding_an_op#shape_functions_in_c)
for details of shape functions and how to register them. Alternatively, the
shape may be set explicitly using
[`tf.Tensor.set_shape`](https://tensorflow.google.cn/api_docs/python/tf/Tensor#set_shape).

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L743-L776)

    
    
    __init__(dims)
    

Creates a new TensorShape with the given dimensions.

#### Args:

  * **`dims`** : A list of Dimensions, or None if the shape is unspecified.

#### Raises:

  * **`TypeError`** : If dims cannot be converted to a list of dimensions.

## Properties

### `dims`

Returns a list of Dimensions, or None if the shape is unspecified.

### `ndims`

Deprecated accessor for `rank`.

### `rank`

Returns the rank of this shape, or None if it is unspecified.

## Methods

### `__add__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L936-L939)

    
    
    __add__(other)
    

### `__bool__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L830-L832)

    
    
    __bool__()
    

Returns True if this shape contains non-zero information.

### `__concat__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1207-L1208)

    
    
    __concat__(other)
    

### `__eq__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1184-L1190)

    
    
    __eq__(other)
    

Returns True if `self` is equivalent to `other`.

### `__getitem__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L847-L895)

    
    
    __getitem__(key)
    

Returns the value of a dimension or a shape, depending on the key.

#### Args:

  * **`key`** : If `key` is an integer, returns the dimension at that index; otherwise if `key` is a slice, returns a TensorShape whose dimensions are those selected by the slice from `self`.

#### Returns:

An integer if `key` is an integer, or a `TensorShape` if `key` is a slice.

#### Raises:

  * **`ValueError`** : If `key` is a slice and `self` is completely unknown and the step is set.

### `__iter__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L837-L845)

    
    
    __iter__()
    

Returns `self.dims` if the rank is known, otherwise raises ValueError.

### `__len__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L824-L828)

    
    
    __len__()
    

Returns the rank of this shape, or raises ValueError if unspecified.

### `__ne__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1192-L1202)

    
    
    __ne__(other)
    

Returns True if `self` is known to be different from `other`.

### `__nonzero__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L830-L832)

    
    
    __nonzero__()
    

Returns True if this shape contains non-zero information.

### `__radd__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L941-L944)

    
    
    __radd__(other)
    

### `as_list`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1161-L1172)

    
    
    as_list()
    

Returns a list of integers or `None` for each dimension.

#### Returns:

A list of integers or `None` for each dimension.

#### Raises:

  * **`ValueError`** : If `self` is an unknown shape with an unknown rank.

### `as_proto`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1174-L1182)

    
    
    as_proto()
    

Returns this shape as a `TensorShapeProto`.

### `assert_has_rank`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L985-L995)

    
    
    assert_has_rank(rank)
    

Raises an exception if `self` is not compatible with the given `rank`.

#### Args:

  * **`rank`** : An integer.

#### Raises:

  * **`ValueError`** : If `self` does not represent a shape with the given `rank`.

### `assert_is_compatible_with`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1102-L1115)

    
    
    assert_is_compatible_with(other)
    

Raises exception if `self` and `other` do not represent the same shape.

This method can be used to assert that there exists a shape that both `self`
and `other` represent.

#### Args:

  * **`other`** : Another TensorShape.

#### Raises:

  * **`ValueError`** : If `self` and `other` do not represent the same shape.

### `assert_is_fully_defined`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1152-L1159)

    
    
    assert_is_fully_defined()
    

Raises an exception if `self` is not fully defined in every dimension.

#### Raises:

  * **`ValueError`** : If `self` does not have a known value for every dimension.

### `assert_same_rank`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L969-L983)

    
    
    assert_same_rank(other)
    

Raises an exception if `self` and `other` do not have compatible ranks.

#### Args:

  * **`other`** : Another `TensorShape`.

#### Raises:

  * **`ValueError`** : If `self` and `other` do not represent shapes with the same rank.

### `concatenate`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L946-L967)

    
    
    concatenate(other)
    

Returns the concatenation of the dimension in `self` and `other`.

_N.B._ If either `self` or `other` is completely unknown, concatenation will
discard information about the other shape. In future, we might support
concatenation that preserves this information for use with slicing.

#### Args:

  * **`other`** : Another `TensorShape`.

#### Returns:

A `TensorShape` whose dimensions are the concatenation of the dimensions in
`self` and `other`.

### `is_compatible_with`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1055-L1100)

    
    
    is_compatible_with(other)
    

Returns True iff `self` is compatible with `other`.

Two possibly-partially-defined shapes are compatible if there exists a fully-
defined shape that both shapes can represent. Thus, compatibility allows the
shape inference code to reason about partially-defined shapes. For example:

  * TensorShape(None) is compatible with all shapes.

  * TensorShape([None, None]) is compatible with all two-dimensional shapes, such as TensorShape([32, 784]), and also TensorShape(None). It is not compatible with, for example, TensorShape([None]) or TensorShape([None, None, None]).

  * TensorShape([32, None]) is compatible with all two-dimensional shapes with size 32 in the 0th dimension, and also TensorShape([None, None]) and TensorShape(None). It is not compatible with, for example, TensorShape([32]), TensorShape([32, None, 1]) or TensorShape([64, None]).

  * TensorShape([32, 784]) is compatible with itself, and also TensorShape([32, None]), TensorShape([None, 784]), TensorShape([None, None]) and TensorShape(None). It is not compatible with, for example, TensorShape([32, 1, 784]) or TensorShape([None]).

The compatibility relation is reflexive and symmetric, but not transitive. For
example, TensorShape([32, 784]) is compatible with TensorShape(None), and
TensorShape(None) is compatible with TensorShape([4, 4]), but TensorShape([32,
784]) is not compatible with TensorShape([4, 4]).

#### Args:

  * **`other`** : Another TensorShape.

#### Returns:

True iff `self` is compatible with `other`.

### `is_fully_defined`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1147-L1150)

    
    
    is_fully_defined()
    

Returns True iff `self` is fully defined in every dimension.

### `merge_with`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L907-L934)

    
    
    merge_with(other)
    

Returns a `TensorShape` combining the information in `self` and `other`.

The dimensions in `self` and `other` are merged elementwise, according to the
rules defined for `Dimension.merge_with()`.

#### Args:

  * **`other`** : Another `TensorShape`.

#### Returns:

A `TensorShape` containing the combined information of `self` and `other`.

#### Raises:

  * **`ValueError`** : If `self` and `other` are not compatible.

### `most_specific_compatible_shape`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1117-L1145)

    
    
    most_specific_compatible_shape(other)
    

Returns the most specific TensorShape compatible with `self` and `other`.

  * TensorShape([None, 1]) is the most specific TensorShape compatible with both TensorShape([2, 1]) and TensorShape([5, 1]). Note that TensorShape(None) is also compatible with above mentioned TensorShapes.

  * TensorShape([1, 2, 3]) is the most specific TensorShape compatible with both TensorShape([1, 2, 3]) and TensorShape([1, 2, 3]). There are more less specific TensorShapes compatible with above mentioned TensorShapes, e.g. TensorShape([1, 2, None]), TensorShape(None).

#### Args:

  * **`other`** : Another `TensorShape`.

#### Returns:

A `TensorShape` which is the most specific compatible shape of `self` and
`other`.

### `num_elements`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L897-L905)

    
    
    num_elements()
    

Returns the total number of elements, or none for incomplete shapes.

### `with_rank`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L997-L1015)

    
    
    with_rank(rank)
    

Returns a shape based on `self` with the given rank.

This method promotes a completely unknown shape to one with a known rank.

#### Args:

  * **`rank`** : An integer.

#### Returns:

A shape that is at least as specific as `self` with the given rank.

#### Raises:

  * **`ValueError`** : If `self` does not represent a shape with the given `rank`.

### `with_rank_at_least`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1017-L1034)

    
    
    with_rank_at_least(rank)
    

Returns a shape based on `self` with at least the given rank.

#### Args:

  * **`rank`** : An integer.

#### Returns:

A shape that is at least as specific as `self` with at least the given rank.

#### Raises:

  * **`ValueError`** : If `self` does not represent a shape with at least the given `rank`.

### `with_rank_at_most`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_shape.py#L1036-L1053)

    
    
    with_rank_at_most(rank)
    

Returns a shape based on `self` with at most the given rank.

#### Args:

  * **`rank`** : An integer.

#### Returns:

A shape that is at least as specific as `self` with at most the given rank.

#### Raises:

  * **`ValueError`** : If `self` does not represent a shape with at most the given `rank`.

