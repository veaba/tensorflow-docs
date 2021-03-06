Adds sparse  `updates`  to an existing tensor according to  `indices` .

**别名** : [ `tf.compat.v1.tensor_scatter_add` ](/api_docs/python/tf/tensor_scatter_nd_add), [ `tf.compat.v1.tensor_scatter_nd_add` ](/api_docs/python/tf/tensor_scatter_nd_add), [ `tf.compat.v2.tensor_scatter_nd_add` ](/api_docs/python/tf/tensor_scatter_nd_add)

```
 tf.tensor_scatter_nd_add(
    tensor,
    indices,
    updates,
    name=None
)
 
```

This operation creates a new tensor by adding sparse  `updates`  to the passedin  `tensor` .This operation is very similar to  `tf.scatter_nd_add` , except that the updatesare added onto an existing tensor (as opposed to a variable). If the memoryfor the existing tensor cannot be re-used, a copy is made and updated.

 `indices`  is an integer tensor containing indices into a new tensor of shape `shape` .  The last dimension of  `indices`  can be at most the rank of  `shape` :

```
 indices.shape[-1] <= shape.rank
 
```

The last dimension of  `indices`  corresponds to indices into elements(if  `indices.shape[-1] = shape.rank` ) or slices(if  `indices.shape[-1] < shape.rank` ) along dimension  `indices.shape[-1]`  of `shape` .   `updates`  is a tensor with shape

```
 indices.shape[:-1] + shape[indices.shape[-1]:]
 
```

The simplest form of tensor_scatter_add is to add individual elements to atensor by index. For example, say we want to add 4 elements in a rank-1tensor with 8 elements.

In Python, this scatter add operation would look like this:

```
     indices = tf.constant([[4], [3], [1], [7]])
    updates = tf.constant([9, 10, 11, 12])
    tensor = tf.ones([8], dtype=tf.int32)
    updated = tf.tensor_scatter_add(tensor, indices, updates)
    with tf.Session() as sess:
      print(sess.run(scatter))
 
```

生成的张量如下所示：

```
 [1, 12, 1, 11, 10, 1, 1, 13]
 
```

We can also, insert entire slices of a higher rank tensor all at once. Forexample, if we wanted to insert two slices in the first dimension of arank-3 tensor with two matrices of new values.

In Python, this scatter add operation would look like this:

```
     indices = tf.constant([[0], [2]])
    updates = tf.constant([[[5, 5, 5, 5], [6, 6, 6, 6],
                            [7, 7, 7, 7], [8, 8, 8, 8]],
                           [[5, 5, 5, 5], [6, 6, 6, 6],
                            [7, 7, 7, 7], [8, 8, 8, 8]]])
    tensor = tf.ones([4, 4, 4])
    updated = tf.tensor_scatter_add(tensor, indices, updates)
    with tf.Session() as sess:
      print(sess.run(scatter))
 
```

生成的张量如下所示：

```
 [[[6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8], [9, 9, 9, 9]],
 [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
 [[6, 6, 6, 6], [7, 7, 7, 7], [8, 8, 8, 8], [9, 9, 9, 9]],
 [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]]
 
```

Note that on CPU, if an out of bound index is found, an error is returned.On GPU, if an out of bound index is found, the index is ignored.

#### 参数：
- **`tensor`** : A  `Tensor` . Tensor to copy/update.
- **`indices`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .Index tensor.
- **`updates`** : A  `Tensor` . Must have the same type as  `tensor` .Updates to scatter into output.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `tensor` .

