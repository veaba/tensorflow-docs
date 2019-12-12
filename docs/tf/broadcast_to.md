广播兼容形状的数组。

**别名** : [ `tf.compat.v1.broadcast_to` ](/api_docs/python/tf/broadcast_to), [ `tf.compat.v2.broadcast_to` ](/api_docs/python/tf/broadcast_to)

```
 tf.broadcast_to(    input,    shape,    name=None) 
```

Broadcasting is the process of making arrays to have compatible shapesfor arithmetic operations. Two shapes are compatible if for eachdimension pair they are either equal or one of them is one. When tryingto broadcast a Tensor to a shape, it starts with the trailing dimensions,and works its way forward.

For example,

```
 x = tf.constant([1, 2, 3]) 
 y = tf.broadcast_to(x, [3, 3]) 
 sess.run(y) 
 array([[1, 2, 3], 
        [1, 2, 3], 
        [1, 2, 3]], dtype=int32) 

```

In the above example, the input Tensor with the shape of  `[1, 3]` is broadcasted to output Tensor with shape of  `[3, 3]` .

#### 参数：
- **`input`** : A  `Tensor` . A Tensor to broadcast.
- **`shape`** : A  `Tensor` . Must be one of the following types:  `int32` ,  `int64` .An 1-D  `int`  Tensor. The shape of the desired output.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `input` .

