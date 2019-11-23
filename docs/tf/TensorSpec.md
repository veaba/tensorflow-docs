

## Class  `TensorSpec` 

Describes a tf.Tensor.


### Aliases:
- Class [ `tf.compat.v1.TensorSpec` ](/api_docs/python/tf/TensorSpec)
- Class [ `tf.compat.v2.TensorSpec` ](/api_docs/python/tf/TensorSpec)


### Used in the guide:
- [Using the SavedModel format](https://tensorflow.google.cn/guide/saved_model)


### Used in the tutorials:
- [Better performance with tf.function](https://tensorflow.google.cn/tutorials/customization/performance)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)

Metadata for describing the [ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects accepted or returnedby some TensorFlow APIs.


##  `__init__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L42-L60)


```
__init__(
    shape,
    dtype=tf.dtypes.float32,
    name=None
)

```


Creates a TensorSpec.


#### Args:
- **`shape`** : Value convertible to [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape). The shape of the tensor.
- **`dtype`** : Value convertible to [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType). The type of the tensor values.
- **`name`** : Optional name for the Tensor.


#### Raises:
- **`TypeError`** : If shape is not convertible to a [ `tf.TensorShape` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape), or dtype isnot convertible to a [ `tf.DType` ](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType).


## Properties


###  `dtype` 

Returns the  `dtype`  of elements in the tensor.


###  `name` 

Returns the (optionally provided) name of the described tensor.


###  `shape` 

Returns the  `TensorShape`  that represents the shape of the tensor.


###  `value_type` 


## Methods


###  `__eq__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L113-L118)


```
__eq__(other)

```


Return self==value.


###  `__ne__` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L120-L121)


```
__ne__(other)

```


Return self!=value.


###  `from_spec` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L62-L64)


```
@classmethod
from_spec(
    cls,
    spec,
    name=None
)

```



###  `from_tensor` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L66-L73)


```
@classmethod
from_tensor(
    cls,
    tensor,
    name=None
)

```



###  `is_compatible_with` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L90-L104)


```
is_compatible_with(spec_or_tensor)

```


Returns True if spec_or_tensor is compatible with this TensorSpec.

Two tensors are considered compatible if they have the same dtypeand their shapes are compatible (see [ `tf.TensorShape.is_compatible_with` ](https://tensorflow.google.cn/api_docs/python/tf/TensorShape#is_compatible_with)).


#### Args:
- **`spec_or_tensor`** : A tf.TensorSpec or a tf.Tensor


#### Returns:

True if spec_or_tensor is compatible with self.


###  `most_specific_compatible_type` 

[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/tensor_spec.py#L125-L130)


```
most_specific_compatible_type(other)

```


Returns the most specific TypeSpec compatible with  `self`  and  `other` .


#### Args:
- **`other`** : A  `TypeSpec` .


#### Raises:
- **`ValueError`** : If there is no TypeSpec that is compatible with both  `self` and  `other` .
