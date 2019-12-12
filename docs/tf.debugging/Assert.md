断言给定条件为真。

**别名** : [ `tf.Assert` ](/api_docs/python/tf/debugging/Assert), [ `tf.compat.v1.Assert` ](/api_docs/python/tf/debugging/Assert), [ `tf.compat.v1.debugging.Assert` ](/api_docs/python/tf/debugging/Assert), [ `tf.compat.v2.Assert` ](/api_docs/python/tf/debugging/Assert), [ `tf.compat.v2.debugging.Assert` ](/api_docs/python/tf/debugging/Assert)

```
 tf.debugging.Assert(
    condition,
    data,
    summarize=None,
    name=None
)
 
```

If  `condition`  evaluates to false, print the list of tensors in  `data` . `summarize`  determines how many entries of the tensors to print.

注意：In graph mode, to ensure that Assert executes, one usually attachesa dependency:

```
 # Ensure maximum element of x is smaller or equal to 1
assert_op = tf.Assert(tf.less_equal(tf.reduce_max(x), 1.), [x])
with tf.control_dependencies([assert_op]):
  ... code using x ...
 
```

#### 参数：
- **`condition`** : The condition to evaluate.
- **`data`** : The tensors to print out when condition is false.
- **`summarize`** : Print this many entries of each tensor.
- **`name`** : A name for this operation (optional).


#### 返回：
- **`assert_op`** : An  `Operation`  that, when executed, raises a[ `tf.errors.InvalidArgumentError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError) if  `condition`  is not true.


#### 加薪：
**NOTE**  The output of this function should be used.  If it is not, a warning will be logged.  To mark the output as used, call its .mark_used() method.

#### 迫切的兼容性
[ `tf.errors.InvalidArgumentError` ](https://tensorflow.google.cn/api_docs/python/tf/errors/InvalidArgumentError) if  `condition`  is not true

