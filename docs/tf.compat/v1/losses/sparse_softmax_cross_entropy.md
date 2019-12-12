Cross-entropy loss using [ `tf.nn.sparse_softmax_cross_entropy_with_logits` ](https://tensorflow.google.cn/api_docs/python/tf/nn/sparse_softmax_cross_entropy_with_logits).

```
 tf.compat.v1.losses.sparse_softmax_cross_entropy(
    labels,
    logits,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES,
    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS
)
 
```

 `weights`  acts as a coefficient for the loss. If a scalar is provided,then the loss is simply scaled by the given value. If  `weights`  is atensor of shape  `[batch_size]` , then the loss weights apply to eachcorresponding sample.

#### 参数：
- **`labels`** :  `Tensor`  of shape  `[d_0, d_1, ..., d_{r-1}]`  (where  `r`  is rank of `labels`  and result) and dtype  `int32`  or  `int64` . Each entry in  `labels` must be an index in  `[0, num_classes)` . Other values will raise anexception when this op is run on CPU, and return  `NaN`  for correspondingloss and gradient rows on GPU.
- **`logits`** : Unscaled log probabilities of shape `[d_0, d_1, ..., d_{r-1}, num_classes]`  and dtype  `float16` ,  `float32`  or `float64` .
- **`weights`** : Coefficients for the loss. This must be scalar or broadcastable to `labels`  (i.e. same rank and each dimension is either 1 or the same).
- **`scope`** : the scope for the operations performed in computing the loss.
- **`loss_collection`** : collection to which the loss will be added.
- **`reduction`** : Type of reduction to apply to loss.


#### 返回：
Weighted loss  `Tensor`  of the same type as  `logits` . If  `reduction`  is `NONE` , this has the same shape as  `labels` ; otherwise, it is scalar.

#### 加薪：
- **`ValueError`** : If the shapes of  `logits` ,  `labels` , and  `weights`  areincompatible, or if any of them are None.


#### 迫切的兼容性
The  `loss_collection`  argument is ignored when executing eagerly. Considerholding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

