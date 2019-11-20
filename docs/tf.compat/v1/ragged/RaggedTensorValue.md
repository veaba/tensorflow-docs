[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor_value.py#L27-L110)  
---  
  
## Class `RaggedTensorValue`

Represents the value of a `RaggedTensor`.

**Warning:** `RaggedTensorValue` should only be used in graph mode; in eager
mode, the
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)
class contains its value directly.

See
[`tf.RaggedTensor`](https://tensorflow.google.cn/api_docs/python/tf/RaggedTensor)
for a description of ragged tensors.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor_value.py#L36-L53)

    
    
    __init__(
        values,
        row_splits
    )
    

Creates a `RaggedTensorValue`.

#### Args:

  * **`values`** : A numpy array of any type and shape; or a RaggedTensorValue.
  * **`row_splits`** : A 1-D int32 or int64 numpy array.

## Properties

### `dtype`

The numpy dtype of values in this tensor.

### `flat_values`

The innermost `values` array for this ragged tensor value.

### `nested_row_splits`

The row_splits for all ragged dimensions in this ragged tensor value.

### `ragged_rank`

The number of ragged dimensions in this ragged tensor value.

### `row_splits`

The split indices for the ragged tensor value.

### `shape`

A tuple indicating the shape of this RaggedTensorValue.

### `values`

The concatenated values for all rows in this tensor.

## Methods

### `to_list`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_tensor_value.py#L101-L110)

    
    
    to_list()
    

Returns this ragged tensor value as a nested Python list.

