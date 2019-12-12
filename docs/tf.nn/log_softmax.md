计算Log SoftMax激活。

**别名** : [ `tf.compat.v2.math.log_softmax` ](/api_docs/python/tf/nn/log_softmax), [ `tf.compat.v2.nn.log_softmax` ](/api_docs/python/tf/nn/log_softmax), [ `tf.math.log_softmax` ](/api_docs/python/tf/nn/log_softmax)

```
 tf.nn.log_softmax(
    logits,
    axis=None,
    name=None
)
 
```

For each batch  `i`  and class  `j`  we have

```
 logsoftmax = logits - log(reduce_sum(exp(logits), axis))
 
```

#### 参数：
- **`logits`** : A non-empty  `Tensor` . Must be one of the following types:  `half` , `float32` ,  `float64` .
- **`axis`** : The dimension softmax would be performed on. The default is -1 whichindicates the last dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type as  `logits` . Same shape as  `logits` .

#### 加薪：
- **`InvalidArgumentError`** : if  `logits`  is empty or  `axis`  is beyond the lastdimension of  `logits` .
