[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/fill_empty_rows) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L1856-L1920)  
  
  
Fills empty rows in the input 2-D `SparseTensor` with a default value.

### Aliases:

  * [`tf.compat.v1.sparse.fill_empty_rows`](/api_docs/python/tf/sparse/fill_empty_rows)
  * [`tf.compat.v1.sparse_fill_empty_rows`](/api_docs/python/tf/sparse/fill_empty_rows)
  * [`tf.compat.v2.sparse.fill_empty_rows`](/api_docs/python/tf/sparse/fill_empty_rows)

    
    
    tf.sparse.fill_empty_rows(
        sp_input,
        default_value,
        name=None
    )
    

This op adds entries with the specified `default_value` at index `[row, 0]`
for any row in the input that does not already have a value.

For example, suppose `sp_input` has shape `[5, 6]` and non-empty values:

    
    
    [0, 1]: a
    [0, 3]: b
    [2, 0]: c
    [3, 1]: d
    

Rows 1 and 4 are empty, so the output will be of shape `[5, 6]` with values:

    
    
    [0, 1]: a
    [0, 3]: b
    [1, 0]: default_value
    [2, 0]: c
    [3, 1]: d
    [4, 0]: default_value
    

Note that the input may have empty columns at the end, with no effect on this
op.

The output `SparseTensor` will be in row-major order and will have the same
shape as the input.

This op also returns an indicator vector such that

    
    
    empty_row_indicator[i] = True iff row i was an empty row.
    

#### Args:

  * **`sp_input`** : A `SparseTensor` with shape `[N, M]`.
  * **`default_value`** : The value to fill for empty rows, with the same type as `sp_input.`
  * **`name`** : A name prefix for the returned tensors (optional)

#### Returns:

  * **`sp_ordered_output`** : A `SparseTensor` with shape `[N, M]`, and with all empty rows filled in with `default_value`.
  * **`empty_row_indicator`** : A bool vector of length `N` indicating whether each input row was empty.

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

