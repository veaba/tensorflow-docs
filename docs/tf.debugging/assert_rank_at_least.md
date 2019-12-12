Assert that  `x`  has rank of at least  `rank` .

```
 tf.debugging.assert_rank_at_least(    x,    rank,    message=None,    name=None) 
```

This Op checks that the rank of  `x`  is greater or equal to  `rank` .

If  `x`  has a rank lower than  `rank` ,  `message` , as well as the shape of  `x` are printed, and  `InvalidArgumentError`  is raised.

#### 参数：
- **`x`** :  `Tensor` .
- **`rank`** : Scalar integer  `Tensor` .
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional).  Defaults to"assert_rank_at_least".


#### 返回：
Op raising  `InvalidArgumentError`  unless  `x`  has specified rank or higher.If static checks determine  `x`  has correct rank, a  `no_op`  is returned.This can be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)sto block followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** :  `x`  does not have rank at least  `rank` , but the rankcannot be statically determined.
- **`ValueError`** : If static checks determine  `x`  has mismatched rank.


#### 迫切的兼容性
returns None

