Assert  `x`  has rank equal to  `rank` .

```
 tf.compat.v1.assert_rank(
    x,
    rank,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.compat.v1.assert_rank(x, 2)]):
  output = tf.reduce_sum(x)
 
```

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`rank`** :  Scalar integer  `Tensor` .
- **`data`** :  The tensors to print out if the condition is False.  Defaults toerror message and the shape of  `x` .
- **`summarize`** : Print this many entries of each tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to "assert_rank".


#### 返回：
Op raising  `InvalidArgumentError`  unless  `x`  has specified rank.If static checks determine  `x`  has correct rank, a  `no_op`  is returned.

#### 加薪：
- **`ValueError`** :  If static checks determine  `x`  has wrong rank.
