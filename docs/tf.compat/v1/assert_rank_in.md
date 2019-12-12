Assert  `x`  has rank in  `ranks` .

```
 tf.compat.v1.assert_rank_in(
    x,
    ranks,
    data=None,
    summarize=None,
    message=None,
    name=None
)
 
```

向操作添加依赖项的示例：

```
 with tf.control_dependencies([tf.compat.v1.assert_rank_in(x, (2, 4))]):
  output = tf.reduce_sum(x)
 
```

#### 参数：
- **`x`** :  Numeric  `Tensor` .
- **`ranks`** :  Iterable of scalar  `Tensor`  objects.
- **`data`** :  The tensors to print out if the condition is False.  Defaults toerror message and first few entries of  `x` .
- **`summarize`** : Print this many entries of each tensor.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).Defaults to "assert_rank_in".


#### 返回：
Op raising  `InvalidArgumentError`  unless rank of  `x`  is in  `ranks` .If static checks determine  `x`  has matching rank, a  `no_op`  is returned.

#### 加薪：
- **`ValueError`** :  If static checks determine  `x`  has mismatched rank.
