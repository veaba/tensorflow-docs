[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/ragged/ragged_factory_ops.py#L90-L145)  
---  
  
Constructs a RaggedTensorValue from a nested Python list.

    
    
    tf.compat.v1.ragged.constant_value(
        pylist,
        dtype=None,
        ragged_rank=None,
        inner_shape=None,
        row_splits_dtype='int64'
    )
    

**Warning:** This function returns a `RaggedTensorValue`, not a
`RaggedTensor`. If you wish to construct a constant `RaggedTensor`, use
[`ragged.constant(...)`](/api_docs/python/tf/compat/v1/ragged/constant)
instead.

#### Example:

    
    
    ragged.constant_value([[1, 2], [3], [4, 5, 6]])
    RaggedTensorValue(values=[1, 2, 3, 4, 5, 6], splits=[0, 2, 3, 6])
    

All scalar values in `pylist` must have the same nesting depth `K`, and the
returned `RaggedTensorValue` will have rank `K`. If `pylist` contains no
scalar values, then `K` is one greater than the maximum depth of empty lists
in `pylist`. All scalar values in `pylist` must be compatible with `dtype`.

#### Args:

  * **`pylist`** : A nested `list`, `tuple` or `np.ndarray`. Any nested element that is not a `list` or `tuple` must be a scalar value compatible with `dtype`.
  * **`dtype`** : `numpy.dtype`. The type of elements for the returned `RaggedTensor`. If not specified, then a default is chosen based on the scalar values in `pylist`.
  * **`ragged_rank`** : An integer specifying the ragged rank of the returned `RaggedTensorValue`. Must be nonnegative and less than `K`. Defaults to `max(0, K - 1)` if `inner_shape` is not specified. Defaults to `max(0, K 
    * 1 - len(inner_shape))`if`inner_shape` is specified.
  * **`inner_shape`** : A tuple of integers specifying the shape for individual inner values in the returned `RaggedTensorValue`. Defaults to `()` if `ragged_rank` is not specified. If `ragged_rank` is specified, then a default is chosen based on the contents of `pylist`.
  * **`row_splits_dtype`** : data type for the constructed `RaggedTensorValue`'s row_splits. One of `numpy.int32` or `numpy.int64`.

#### Returns:

A `tf.RaggedTensorValue` or `numpy.array` with rank `K` and the specified
`ragged_rank`, containing the values from `pylist`.

#### Raises:

  * **`ValueError`** : If the scalar values in `pylist` have inconsistent nesting depth; or if ragged_rank or inner_shape are incompatible with `pylist`.

