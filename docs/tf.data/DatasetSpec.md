[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/data/DatasetSpec) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2463-L2525)  
  
  
## Class `DatasetSpec`

Type specification for
[`tf.data.Dataset`](https://tensorflow.google.cn/api_docs/python/tf/data/Dataset).

### Aliases:

  * Class [`tf.compat.v1.data.DatasetSpec`](/api_docs/python/tf/data/DatasetSpec)
  * Class [`tf.compat.v1.data.experimental.DatasetStructure`](/api_docs/python/tf/data/DatasetSpec)
  * Class [`tf.compat.v2.data.DatasetSpec`](/api_docs/python/tf/data/DatasetSpec)

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2468-L2470)

    
    
    __init__(
        element_spec,
        dataset_shape=()
    )
    

Initialize self. See help(type(self)) for accurate signature.

## Properties

### `value_type`

The Python type for values that are compatible with this TypeSpec.

## Methods

### `__eq__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L262-L265)

    
    
    __eq__(other)
    

Return self==value.

### `__ne__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L267-L268)

    
    
    __ne__(other)
    

Return self!=value.

### `from_value`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/data/ops/dataset_ops.py#L2499-L2501)

    
    
    @staticmethod
    from_value(value)
    

### `is_compatible_with`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L87-L102)

    
    
    is_compatible_with(spec_or_value)
    

Returns true if `spec_or_value` is compatible with this TypeSpec.

### `most_specific_compatible_type`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/type_spec.py#L104-L126)

    
    
    most_specific_compatible_type(other)
    

Returns the most specific TypeSpec compatible with `self` and `other`.

#### Args:

  * **`other`** : A `TypeSpec`.

#### Raises:

  * **`ValueError`** : If there is no TypeSpec that is compatible with both `self` and `other`.

