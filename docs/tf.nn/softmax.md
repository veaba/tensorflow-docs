计算SoftMax激活。

**别名** : [ `tf.compat.v2.math.softmax` ](/api_docs/python/tf/nn/softmax), [ `tf.compat.v2.nn.softmax` ](/api_docs/python/tf/nn/softmax), [ `tf.math.softmax` ](/api_docs/python/tf/nn/softmax)

```
 tf.nn.softmax(
    logits,
    axis=None,
    name=None
)
 
```

### 在教程中使用：
- [Custom training: walkthrough](https://tensorflow.google.cn/tutorials/customization/custom_training_walkthrough)
- [Image captioning with visual attention](https://tensorflow.google.cn/tutorials/text/image_captioning)
- [Neural machine translation with attention](https://tensorflow.google.cn/tutorials/text/nmt_with_attention)
- [Transformer model for language understanding](https://tensorflow.google.cn/tutorials/text/transformer)
此函数执行与

```
 softmax = tf.exp(logits) / tf.reduce_sum(tf.exp(logits), axis)
 
```

#### 参数：
- **`logits`** : A non-empty  `Tensor` . Must be one of the following types:  `half` , `float32` ,  `float64` .
- **`axis`** : The dimension softmax would be performed on. The default is -1 whichindicates the last dimension.
- **`name`** : A name for the operation (optional).


#### 返回：
A  `Tensor` . Has the same type and shape as  `logits` .

#### 加薪：
- **`InvalidArgumentError`** : if  `logits`  is empty or  `axis`  is beyond the lastdimension of  `logits` .
