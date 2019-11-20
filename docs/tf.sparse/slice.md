[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/sparse/slice) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/sparse_ops.py#L944-L991)  
  
  
Slice a `SparseTensor` based on the `start` and `size.

### Aliases:

  * [`tf.compat.v1.sparse.slice`](/api_docs/python/tf/sparse/slice)
  * [`tf.compat.v1.sparse_slice`](/api_docs/python/tf/sparse/slice)
  * [`tf.compat.v2.sparse.slice`](/api_docs/python/tf/sparse/slice)

    
    
    tf.sparse.slice(
        sp_input,
        start,
        size,
        name=None
    )
    

For example, if the input is

    
    
    input_tensor = shape = [2, 7]
    [    a   d e  ]
    [b c          ]
    

Graphically the output tensors are:

    
    
    sparse.slice([0, 0], [2, 4]) = shape = [2, 4]
    [    a  ]
    [b c    ]
    
    sparse.slice([0, 4], [2, 3]) = shape = [2, 3]
    [ d e  ]
    [      ]
    

#### Args:

  * **`sp_input`** : The `SparseTensor` to split.
  * **`start`** : 1-D. tensor represents the start of the slice.
  * **`size`** : 1-D. tensor represents the size of the slice.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `SparseTensor` objects resulting from splicing.

#### Raises:

  * **`TypeError`** : If `sp_input` is not a `SparseTensor`.

