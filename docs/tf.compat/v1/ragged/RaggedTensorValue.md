## Class RaggedTensorValue
Represents the value of a `RaggedTensor`.
See `tf.RaggedTensor` for a description of ragged tensors.
## __init__
View source

```
 __init__(
    values,
    row_splits
)
```
Creates a `RaggedTensorValue`.
#### Args:
- `values`: A numpy array of any type and shape; or a RaggedTensorValue.
- `row_splits`: A 1-D int32 or int64 numpy array.
## Properties
### dtype
The numpy dtype of values in this tensor.
### flat_values
The innermost `values` array for this ragged tensor value.
### nested_row_splits
The row_splits for all ragged dimensions in this ragged tensor value.
### ragged_rank
The number of ragged dimensions in this ragged tensor value.
### row_splits
The split indices for the ragged tensor value.
### shape
A tuple indicating the shape of this RaggedTensorValue.
### values
The concatenated values for all rows in this tensor.
## Methods
### to_list
View source

```
 to_list()
```
Returns this ragged tensor value as a nested Python list.
