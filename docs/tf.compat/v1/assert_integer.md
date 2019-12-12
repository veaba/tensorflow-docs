Assert that  `x`  is of integer dtype.

```
 tf.compat.v1.assert_integer(
    x,
    message=None,
    name=None
)
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.compat.v1.assert_integer(x)]):
  output = tf.reduce_sum(x)
 
```

#### 参数：
- **`x`** :  `Tensor`  whose basetype is integer and is not quantized.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_integer".


#### 加薪：
- **`TypeError`** :  If  `x.dtype`  is anything other than non-quantized integer.


#### 返回：
A  `no_op`  that does nothing.  Type can be determined statically.

