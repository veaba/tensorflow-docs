![](https://tensorflow.google.cn/images/tf_logo_32px.png)
## Class  `IndexedSlicesSpec` 

Type specification for a [ `tf.IndexedSlices` ](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlices).

Inherits From: [ `TypeSpec` ](https://tensorflow.google.cn/api_docs/python/tf/TypeSpec)

### Aliases:

- Class [ `tf.compat.v1.IndexedSlicesSpec` ](/api_docs/python/tf/IndexedSlicesSpec)

- Class [ `tf.compat.v2.IndexedSlicesSpec` ](/api_docs/python/tf/IndexedSlicesSpec)

##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/indexed_slices.py#L191-L215)


```python
__init__(
  shape=None,
  dtype=tf.dtypes.float32,
  indices_dtype=tf.dtypes.int64,
  dense_shape_dtype=None,
  indices_shape=None
)

```


Constructs a type specification for a [ `tf.IndexedSlices` ](https://tensorflow.google.cn/api_docs/python/tf/IndexedSlices).

#### Args:

- **`shape`** : The dense shape of the  `IndexedSlices` , or  `None`  to allow anydense shape.

- **`dtype`** : [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) of values in the  `IndexedSlices` .

- **`indices_dtype`** : [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) of the  `indices`  in the  `IndexedSlices` .  Oneof [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32) or [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64).

- **`dense_shape_dtype`** : [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType) of the  `dense_shape`  in the  `IndexedSlices` .One of [ `tf.int32` ](https://tensorflow.google.cn/api_docs/python/tf#int32), [ `tf.int64` ](https://tensorflow.google.cn/api_docs/python/tf#int64), or  `None`  (if the  `IndexedSlices`  hasno  `dense_shape`  tensor).

- **`indices_shape`** : The shape of the  `indices`  component, which indicateshow many slices are in the  `IndexedSlices` .

## Properties

###  `value_type` 

## Methods

###  `__eq__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L262-L265)


```python
__eq__(other)

```


Return self==value.

###  `__ne__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L267-L268)


```python
__ne__(other)

```


Return self!=value.

###  `is_compatible_with` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L87-L102)


```python
is_compatible_with(spec_or_value)

```


Returns true if  `spec_or_value`  is compatible with this TypeSpec.

###  `most_specific_compatible_type` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L104-L126)


```python
most_specific_compatible_type(other)

```


Returns the most specific TypeSpec compatible with  `self`  and  `other` .

#### Args:

- **`other`** : A  `TypeSpec` .

#### Raises:

- **`ValueError`** : If there is no TypeSpec that is compatible with both  `self` and  `other` .
