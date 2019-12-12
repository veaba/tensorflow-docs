Assert that  `x`  has a rank in  `ranks` .

```
 tf.debugging.assert_rank_in(    x,    ranks,    message=None,    name=None) 
```

This Op checks that the rank of  `x`  is in  `ranks` .

If  `x`  has a different rank,  `message` , as well as the shape of  `x`  areprinted, and  `InvalidArgumentError`  is raised.

#### 参数：
- **`x`** :  `Tensor` .
- **`ranks`** :  `Iterable`  of scalar  `Tensor`  objects.
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional). Defaults to "assert_rank_in".


#### 返回：
Op raising  `InvalidArgumentError`  unless rank of  `x`  is in  `ranks` .If static checks determine  `x`  has matching rank, a  `no_op`  is returned.This can be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)sto block followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** :  `x`  does not have rank in  `ranks` , but the rank cannotbe statically determined.
- **`ValueError`** : If static checks determine  `x`  has mismatched rank.


#### 迫切的兼容性
returns None

