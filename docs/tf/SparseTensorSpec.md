## Class SparseTensorSpec
[tf.SparseTensor](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)Type specification for a .

### Aliases:
- Class `tf.compat.v1.SparseTensorSpec`
- Class `tf.compat.v2.SparseTensorSpec`
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L268-L277)


```
 __init__(
    shape=None,
    dtype=tf.dtypes.float32
)
```
[tf.SparseTensor](https://tensorflow.google.cn/api_docs/python/tf/sparse/SparseTensor)Constructs a type specification for a .

#### Args:
- `shape`: The dense `shape` of the `SparseTensor`, or `None` to allow any dense `shape`.
- `dtype`: `tf.DType` of values in the `SparseTensor`.
## Properties
### dtype
[tf.dtypes.DType](https://tensorflow.google.cn/api_docs/python/tf/dtypes/DType)The  specified by this type for the SparseTensor.

### shape
[tf.TensorShape](https://tensorflow.google.cn/api_docs/python/tf/TensorShape)The  specified by this type for the SparseTensor.

### value_type
## Methods
### __eq__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L262-L265)


```
 __eq__(other)
```
Return self==value.
### __ne__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L267-L268)


```
 __ne__(other)
```
Return self!=value.
### from_value
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/sparse_tensor.py#L366-L376)


```
 @classmethod
from_value(
    cls,
    value
)
```
### is_compatible_with
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L87-L102)


```
 is_compatible_with(spec_or_value)
```
Returns true if `spec_or_value` is compatible with this TypeSpec.
### most_specific_compatible_type
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L104-L126)


```
 most_specific_compatible_type(other)
```
Returns the most specific TypeSpec compatible with `self` and `other`.
#### Args:
- `other`: A `TypeSpec`.
#### Raises:
- `ValueError`: If there is no TypeSpec that is compatible with both `self` and `other`.
