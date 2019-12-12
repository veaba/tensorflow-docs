断言张量形状和张量之间的维度大小关系。

```
 tf.compat.v1.debugging.assert_shapes(
    shapes,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

This Op checks that a collection of tensors shape relationshipssatisfies given constraints.

#### 示例：


```
 tf.assert_shapes({
  (x, ('N', 'Q')),
  (y, ('N', 'D')),
  (param, ('Q',)),
  (scalar, ())
})
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.assert_shapes(shapes)]):
  output = tf.matmul(x, y, transpose_a=True)
 
```

If  `x` ,  `y` ,  `param`  or  `scalar`  does not have a shape that satisfiesall specified constraints,  `message` , as well as the first  `summarize`  entriesof the first encountered violating tensor are printed, and `InvalidArgumentError`  is raised.

Size entries in the specified shapes are checked against other entries bytheir **hash** , except:  - a size entry is interpreted as an explicit size if it can be parsed as an    integer primitive.  - a size entry is interpreted as *any* size if it is None or '.'.

If the first entry of a shape is  `...`  (type  `Ellipsis` ) or '*' that indicatesa variable number of outer dimensions of unspecified size, i.e. the constraintapplies to the inner-most dimensions only.

Scalar tensors and specified shapes of length zero (excluding the 'inner-most'prefix) are both treated as having a single dimension of size one.

#### 参数：
- **`shapes`** : dictionary with ( `Tensor`  to shape) items. A shape must be aniterable.
- **`data`** : The tensors to print out if the condition is False.  Defaults to errormessage and first few entries of the violating tensor.
- **`summarize`** : Print this many entries of the tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_shapes".


#### 返回：
Op raising  `InvalidArgumentError`  unless all shape constraints aresatisfied.If static checks determine all constraints are satisfied, a  `no_op`  isreturned.

#### 加薪：
- **`ValueError`** :  If static checks determine any shape constraint is violated.
