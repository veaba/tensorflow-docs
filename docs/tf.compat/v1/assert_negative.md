Assert the condition  `x < 0`  holds element-wise.

```
 tf.compat.v1.assert_negative(
    x,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.compat.v1.assert_negative(x)]):
  output = tf.reduce_sum(x)
 
```

Negative means, for every element  `x[i]`  of  `x` , we have  `x[i] < 0` .If  `x`  is empty this is trivially satisfied.

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`data`** :  The tensors to print out if the condition is False.  Defaults toerror message and first few entries of  `x` .
- **`summarize`** : Print this many entries of each tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_negative".


#### 返回：
Op raising  `InvalidArgumentError`  unless  `x`  is all negative.

