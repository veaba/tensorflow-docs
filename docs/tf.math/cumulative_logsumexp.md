Compute the cumulative log-sum-exp of the tensor  `x`  along  `axis` .

**Aliases** : [ `tf.compat.v1.math.cumulative_logsumexp` ](/api_docs/python/tf/math/cumulative_logsumexp), [ `tf.compat.v2.math.cumulative_logsumexp` ](/api_docs/python/tf/math/cumulative_logsumexp)

```
 tf.math.cumulative_logsumexp(
    x,
    axis=0,
    exclusive=False,
    reverse=False,
    name=None
)
 
```

By default, this op performs an inclusive cumulative log-sum-exp, which meansthat the first element of the input is identical to the first element ofthe output.

This operation is significantly more numerically stable than the equivalenttensorflow operation  `tf.math.log(tf.math.cumsum(tf.math.exp(x)))` , althoughcomputes the same result given infinite numerical precision. However, notethat in some cases, it may be less stable than [ `tf.math.reduce_logsumexp` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_logsumexp)for a given element, as it applies the "log-sum-exp trick" in a differentway.

More precisely, where [ `tf.math.reduce_logsumexp` ](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_logsumexp) uses the following trick:

```
 log(sum(exp(x))) == log(sum(exp(x - max(x)))) + max(x)
 
```

it cannot be directly used here as there is no fast way of applying itto each prefix  `x[:i]` . Instead, this function implements a prefixscan using pairwise log-add-exp, which is a commutative and associative(up to floating point precision) operator:

```
 log_add_exp(x, y) = log(exp(x) + exp(y))
                  = log(1 + exp(min(x, y) - max(x, y))) + max(x, y)
 
```

However, reducing using the above operator leads to a different computationtree (logs are taken repeatedly instead of only at the end), and the maximumis only computed pairwise instead of over the entire prefix. In general, thisleads to a different and slightly less precise computation.

#### Args:
- **`x`** : A  `Tensor` . Must be one of the following types:  `float16` ,  `float32` , `float64` .
- **`axis`** : A  `Tensor`  of type  `int32`  or  `int64`  (default: 0). Must be in therange  `[-rank(x), rank(x))` .
- **`exclusive`** : If  `True` , perform exclusive cumulative log-sum-exp.
- **`reverse`** : If  `True` , performs the cumulative log-sum-exp in the reversedirection.
- **`name`** : A name for the operation (optional).


#### Returns:
A  `Tensor` . Has the same shape and type as  `x` .

