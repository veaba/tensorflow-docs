

Gather slices from  `params`  into a Tensor with shape specified by  `indices` .

```
 tf.gather_nd(
    params,
    indices,
    batch_dims=0,
    name=None
)
 
```

 `indices`  is an K-dimensional integer tensor, best thought of as a(K-1)-dimensional tensor of indices into  `params` , where each element definesa slice of  `params` :

```
 output[\\(i_0, ..., i_{K-2}\\)] = params[indices[\\(i_0, ..., i_{K-2}\\)]]
 
```

Whereas in [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather)  `indices`  defines slices into the firstdimension of  `params` , in [ `tf.gather_nd` ](https://tensorflow.google.cn/api_docs/python/tf/gather_nd),  `indices`  defines slices into thefirst  `N`  dimensions of  `params` , where  `N = indices.shape[-1]` .

The last dimension of  `indices`  can be at most the rank of `params` :

```
 indices.shape[-1] <= params.rank
 
```

The last dimension of  `indices`  corresponds to elements(if  `indices.shape[-1] == params.rank` ) or slices(if  `indices.shape[-1] < params.rank` ) along dimension  `indices.shape[-1]` of  `params` .  The output tensor has shape

```
 indices.shape[:-1] + params.shape[indices.shape[-1]:]
 
```

Additionally both 'params' and 'indices' can have M leading batchdimensions that exactly match. In this case 'batch_dims' must be M.

Note that on CPU, if an out of bound index is found, an error is returned.On GPU, if an out of bound index is found, a 0 is stored in thecorresponding output value.

下面是一些例子。

矩阵的简单索引：

```
     indices = [[0, 0], [1, 1]]
    params = [['a', 'b'], ['c', 'd']]
    output = ['a', 'd']
 
```

将索引切片到矩阵中：

```
     indices = [[1], [0]]
    params = [['a', 'b'], ['c', 'd']]
    output = [['c', 'd'], ['a', 'b']]
 
```

Indexing into a 3-tensor:

```
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
 
```

The examples below are for the case when only indices have leading extradimensions. If both 'params' and 'indices' have leading batch dimensions, usethe 'batch_dims' parameter to run gather_nd in batch mode.

批量索引到矩阵：

```
     indices = [[[0, 0]], [[0, 1]]]
    params = [['a', 'b'], ['c', 'd']]
    output = [['a'], ['b']]
 
```

批量切片索引到矩阵：

```
     indices = [[[1]], [[0]]]
    params = [['a', 'b'], ['c', 'd']]
    output = [[['c', 'd']], [['a', 'b']]]
 
```

Batched indexing into a 3-tensor:

```
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
 
```

带有成批“params”和“index”的示例：

```
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
 
```

See also [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather).

#### 参数：
- **`params`** : A  `Tensor` . The tensor from which to gather values.
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .Index tensor.
- **`name`** : A name for the operation (optional).
- **`batch_dims`** : An integer or a scalar 'Tensor'. The number of batch dimensions.


#### 返回：
A  `Tensor` . Has the same type as  `params` .

