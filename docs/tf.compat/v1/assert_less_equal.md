Assert the condition  `x <= y`  holds element-wise.

```
 tf.compat.v1.assert_less_equal(
    x,
    y,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.compat.v1.assert_less_equal(x, y)]):
  output = tf.reduce_sum(x)
 
```

This condition holds if for every pair of (possibly broadcast) elements `x[i]` ,  `y[i]` , we have  `x[i] <= y[i]` .If both  `x`  and  `y`  are empty, this is trivially satisfied.

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`y`** :  Numeric  `Tensor` , same dtype as and broadcastable to  `x` .
- **`data`** :  The tensors to print out if the condition is False.  Defaults toerror message and first few entries of  `x` ,  `y` .
- **`summarize`** : Print this many entries of each tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_less_equal"


#### 返回：
Op that raises  `InvalidArgumentError`  if  `x <= y`  is False.

