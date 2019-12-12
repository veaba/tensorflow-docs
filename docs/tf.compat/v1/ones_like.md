创建所有元素都设置为1的张量。

```
 tf.compat.v1.ones_like(
    tensor,
    dtype=None,
    name=None,
    optimize=True
)
 
```

Given a single tensor ( `tensor` ), this operation returns a tensor of the sametype and shape as  `tensor`  with all elements set to 1. Optionally, you canspecify a new type ( `dtype` ) for the returned tensor.

#### 例如：


```
 tensor = tf.constant([[1, 2, 3], [4, 5, 6]])
tf.ones_like(tensor)  # [[1, 1, 1], [1, 1, 1]]
 
```

#### 参数：
- **`tensor`** : A  `Tensor` .
- **`dtype`** : A type for the returned  `Tensor` . Must be  `float32` ,  `float64` , `int8` ,  `uint8` ,  `int16` ,  `uint16` ,  `int32` ,  `int64` ,  `complex64` , `complex128`  or  `bool` .
- **`name`** : A name for the operation (optional).
- **`optimize`** : if true, attempt to statically determine the shape of 'tensor' andencode it as a constant.


#### 返回：
A  `Tensor`  with all elements set to 1.

