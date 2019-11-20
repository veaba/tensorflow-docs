[ ![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/array_ops.py#L4128-L4292)  
---  
  
Gather slices from `params` into a Tensor with shape specified by `indices`.

### Aliases:

  * [`tf.compat.v1.manip.gather_nd`](/api_docs/python/tf/compat/v1/gather_nd)

    
    
    tf.compat.v1.gather_nd(
        params,
        indices,
        name=None,
        batch_dims=0
    )
    

`indices` is an K-dimensional integer tensor, best thought of as a
(K-1)-dimensional tensor of indices into `params`, where each element defines
a slice of `params`:

    
    
    output[\\(i_0, ..., i_{K-2}\\)] = params[indices[\\(i_0, ..., i_{K-2}\\)]]
    

Whereas in
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather)
`indices` defines slices into the first dimension of `params`, in
[`tf.gather_nd`](https://tensorflow.google.cn/api_docs/python/tf/gather_nd),
`indices` defines slices into the first `N` dimensions of `params`, where `N =
indices.shape[-1]`.

The last dimension of `indices` can be at most the rank of `params`:

    
    
    indices.shape[-1] <= params.rank
    

The last dimension of `indices` corresponds to elements (if `indices.shape[-1]
== params.rank`) or slices (if `indices.shape[-1] < params.rank`) along
dimension `indices.shape[-1]` of `params`. The output tensor has shape

    
    
    indices.shape[:-1] + params.shape[indices.shape[-1]:]
    

Additionally both 'params' and 'indices' can have M leading batch dimensions
that exactly match. In this case 'batch_dims' must be M.

Note that on CPU, if an out of bound index is found, an error is returned. On
GPU, if an out of bound index is found, a 0 is stored in the corresponding
output value.

Some examples below.

Simple indexing into a matrix:

    
    
        indices = [[0, 0], [1, 1]]
        params = [['a', 'b'], ['c', 'd']]
        output = ['a', 'd']
    

Slice indexing into a matrix:

    
    
        indices = [[1], [0]]
        params = [['a', 'b'], ['c', 'd']]
        output = [['c', 'd'], ['a', 'b']]
    

Indexing into a 3-tensor:

    
    
        indices = [[1]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [[['a1', 'b1'], ['c1', 'd1']]]
    
    
        indices = [[0, 1], [1, 0]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [['c0', 'd0'], ['a1', 'b1']]
    
    
        indices = [[0, 0, 1], [1, 0, 1]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = ['b0', 'b1']
    

The examples below are for the case when only indices have leading extra
dimensions. If both 'params' and 'indices' have leading batch dimensions, use
the 'batch_dims' parameter to run gather_nd in batch mode.

Batched indexing into a matrix:

    
    
        indices = [[[0, 0]], [[0, 1]]]
        params = [['a', 'b'], ['c', 'd']]
        output = [['a'], ['b']]
    

Batched slice indexing into a matrix:

    
    
        indices = [[[1]], [[0]]]
        params = [['a', 'b'], ['c', 'd']]
        output = [[['c', 'd']], [['a', 'b']]]
    

Batched indexing into a 3-tensor:

    
    
        indices = [[[1]], [[0]]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [[[['a1', 'b1'], ['c1', 'd1']]],
                  [[['a0', 'b0'], ['c0', 'd0']]]]
    
        indices = [[[0, 1], [1, 0]], [[0, 0], [1, 1]]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [[['c0', 'd0'], ['a1', 'b1']],
                  [['a0', 'b0'], ['c1', 'd1']]]
    
    
        indices = [[[0, 0, 1], [1, 0, 1]], [[0, 1, 1], [1, 1, 0]]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [['b0', 'b1'], ['d0', 'c1']]
    

Examples with batched 'params' and 'indices':

    
    
        batch_dims = 1
        indices = [[1], [0]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [['c0', 'd0'], ['a1', 'b1']]
    
        batch_dims = 1
        indices = [[[1]], [[0]]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [[['c0', 'd0']], [['a1', 'b1']]]
    
        batch_dims = 1
        indices = [[[1, 0]], [[0, 1]]]
        params = [[['a0', 'b0'], ['c0', 'd0']],
                  [['a1', 'b1'], ['c1', 'd1']]]
        output = [['c0'], ['b1']]
    

See also
[`tf.gather`](https://tensorflow.google.cn/api_docs/python/tf/gather).

#### Args:

  * **`params`** : A `Tensor`. The tensor from which to gather values.
  * **`indices`** : A `Tensor`. Must be one of the following types: `int32`, `int64`. Index tensor.
  * **`name`** : A name for the operation (optional).
  * **`batch_dims`** : An integer or a scalar 'Tensor'. The number of batch dimensions.

#### Returns:

A `Tensor`. Has the same type as `params`.

