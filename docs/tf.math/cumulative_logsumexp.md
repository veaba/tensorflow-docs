[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/math/cumulative_logsumexp) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/ops/math_ops.py#L3369-L3421)  
  
  
Compute the cumulative log-sum-exp of the tensor `x` along `axis`.

### Aliases:

  * [`tf.compat.v1.math.cumulative_logsumexp`](/api_docs/python/tf/math/cumulative_logsumexp)
  * [`tf.compat.v2.math.cumulative_logsumexp`](/api_docs/python/tf/math/cumulative_logsumexp)

    
    
    tf.math.cumulative_logsumexp(
        x,
        axis=0,
        exclusive=False,
        reverse=False,
        name=None
    )
    

By default, this op performs an inclusive cumulative log-sum-exp, which means
that the first element of the input is identical to the first element of the
output.

This operation is significantly more numerically stable than the equivalent
tensorflow operation `tf.math.log(tf.math.cumsum(tf.math.exp(x)))`, although
computes the same result given infinite numerical precision. However, note
that in some cases, it may be less stable than
[`tf.math.reduce_logsumexp`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_logsumexp)
for a given element, as it applies the "log-sum-exp trick" in a different way.

More precisely, where
[`tf.math.reduce_logsumexp`](https://tensorflow.google.cn/api_docs/python/tf/math/reduce_logsumexp)
uses the following trick:

    
    
    log(sum(exp(x))) == log(sum(exp(x - max(x)))) + max(x)
    

it cannot be directly used here as there is no fast way of applying it to each
prefix `x[:i]`. Instead, this function implements a prefix scan using pairwise
log-add-exp, which is a commutative and associative (up to floating point
precision) operator:

    
    
    log_add_exp(x, y) = log(exp(x) + exp(y))
                      = log(1 + exp(min(x, y) - max(x, y))) + max(x, y)
    

However, reducing using the above operator leads to a different computation
tree (logs are taken repeatedly instead of only at the end), and the maximum
is only computed pairwise instead of over the entire prefix. In general, this
leads to a different and slightly less precise computation.

#### Args:

  * **`x`** : A `Tensor`. Must be one of the following types: `float16`, `float32`, `float64`.
  * **`axis`** : A `Tensor` of type `int32` or `int64` (default: 0). Must be in the range `[-rank(x), rank(x))`.
  * **`exclusive`** : If `True`, perform exclusive cumulative log-sum-exp.
  * **`reverse`** : If `True`, performs the cumulative log-sum-exp in the reverse direction.
  * **`name`** : A name for the operation (optional).

#### Returns:

A `Tensor`. Has the same shape and type as `x`.

