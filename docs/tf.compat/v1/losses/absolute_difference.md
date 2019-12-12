将绝对差异损失添加到训练过程中。

```
 tf.compat.v1.losses.absolute_difference(    labels,    predictions,    weights=1.0,    scope=None,    loss_collection=tf.GraphKeys.LOSSES,    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS) 
```

 `weights`  acts as a coefficient for the loss. If a scalar is provided, thenthe loss is simply scaled by the given value. If  `weights`  is a  `Tensor`  ofshape  `[batch_size]` , then the total loss for each sample of the batch isrescaled by the corresponding element in the  `weights`  vector. If the shape of `weights`  matches the shape of  `predictions` , then the loss of eachmeasurable element of  `predictions`  is scaled by the corresponding value of `weights` .

#### 参数：
- **`labels`** : The ground truth output tensor, same dimensions as 'predictions'.
- **`predictions`** : The predicted outputs.
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `labels` , and must be broadcastable to  `labels`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `losses`  dimension).
- **`scope`** : The scope for the operations performed in computing the loss.
- **`loss_collection`** : collection to which this loss will be added.
- **`reduction`** : Type of reduction to apply to loss.


#### 返回：
Weighted loss float  `Tensor` . If  `reduction`  is  `NONE` , this has the sameshape as  `labels` ; otherwise, it is scalar.

#### 加薪：
- **`ValueError`** : If the shape of  `predictions`  doesn't match that of `labels`  or if the shape of  `weights`  is invalid or if  `labels` or  `predictions`  is None.


#### 迫切的兼容性
The  `loss_collection`  argument is ignored when executing eagerly. Considerholding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

