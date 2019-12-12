计算log（sum（exp（张量维度上的元素））。

**别名** : [ `tf.compat.v2.math.reduce_logsumexp` ](/api_docs/python/tf/math/reduce_logsumexp), [ `tf.compat.v2.reduce_logsumexp` ](/api_docs/python/tf/math/reduce_logsumexp), [ `tf.reduce_logsumexp` ](/api_docs/python/tf/math/reduce_logsumexp)

```
 tf.math.reduce_logsumexp(    input_tensor,    axis=None,    keepdims=False,    name=None) 
```

Reduces  `input_tensor`  along the dimensions given in  `axis` .Unless  `keepdims`  is true, the rank of the tensor is reduced by 1 for eachentry in  `axis` . If  `keepdims`  is true, the reduced dimensionsare retained with length 1.

If  `axis`  has no entries, all dimensions are reduced, and atensor with a single element is returned.

This function is more numerically stable than log(sum(exp(input))). It avoidsoverflows caused by taking the exp of large inputs and underflows caused bytaking the log of small inputs.

#### 例如：


```
 x = tf.constant([[0., 0., 0.], [0., 0., 0.]])tf.reduce_logsumexp(x)  # log(6)tf.reduce_logsumexp(x, 0)  # [log(2), log(2), log(2)]tf.reduce_logsumexp(x, 1)  # [log(3), log(3)]tf.reduce_logsumexp(x, 1, keepdims=True)  # [[log(3)], [log(3)]]tf.reduce_logsumexp(x, [0, 1])  # log(6) 
```

#### 参数：
- **`input_tensor`** : The tensor to reduce. Should have numeric type.
- **`axis`** : The dimensions to reduce. If  `None`  (the default), reduces alldimensions. Must be in the range  `[-rank(input_tensor),rank(input_tensor))` .
- **`keepdims`** : If true, retains reduced dimensions with length 1.
- **`name`** : A name for the operation (optional).


#### 返回：
简化张量。

