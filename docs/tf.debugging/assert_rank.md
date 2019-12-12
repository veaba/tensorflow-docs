Assert that  `x`  has rank equal to  `rank` .

**别名** : [ `tf.assert_rank` ](/api_docs/python/tf/debugging/assert_rank), [ `tf.compat.v2.assert_rank` ](/api_docs/python/tf/debugging/assert_rank), [ `tf.compat.v2.debugging.assert_rank` ](/api_docs/python/tf/debugging/assert_rank)

```
 tf.debugging.assert_rank(
    x,
    rank,
    message=None,
    name=None
)
 
```

This Op checks that the rank of  `x`  is equal to  `rank` .

If  `x`  has a different rank,  `message` , as well as the shape of  `x`  areprinted, and  `InvalidArgumentError`  is raised.

#### 参数：
- **`x`** :  `Tensor` .
- **`rank`** : Scalar integer  `Tensor` .
- **`message`** : A string to prefix to the default message.
- **`name`** : A name for this operation (optional). Defaults to"assert_rank".


#### 返回：
Op raising  `InvalidArgumentError`  unless  `x`  has specified rank.If static checks determine  `x`  has correct rank, a  `no_op`  is returned.This can be used with [ `tf.control_dependencies` ](https://tensorflow.google.cn/api_docs/python/tf/control_dependencies) inside of [ `tf.function` ](https://tensorflow.google.cn/api_docs/python/tf/function)sto block followup computation until the check has executed.

#### 加薪：
- **`InvalidArgumentError`** : if the check can be performed immediately and `x`  does not have rank  `rank` . The check can be performed immediatelyduring eager execution or if the shape of  `x`  is statically known.


#### 迫切的兼容性
returns None

