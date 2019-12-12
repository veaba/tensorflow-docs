检查张量的NaN和INF值。

**别名** : [ `tf.compat.v1.check_numerics` ](/api_docs/python/tf/debugging/check_numerics), [ `tf.compat.v1.debugging.check_numerics` ](/api_docs/python/tf/debugging/check_numerics), [ `tf.compat.v2.debugging.check_numerics` ](/api_docs/python/tf/debugging/check_numerics)

```
 tf.debugging.check_numerics(
    tensor,
    message,
    name=None
)
 
```

When run, reports an  `InvalidArgument`  error if  `tensor`  has any valuesthat are not a number (NaN) or infinity (Inf). Otherwise, passes  `tensor`  as-is.

#### 参数：
- **`tensor`** : A  `Tensor` . Must be one of the following types:  `bfloat16` ,  `half` ,  `float32` ,  `float64` .
- **`message`** : A  `string` . Prefix of the error message.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `tensor` .

