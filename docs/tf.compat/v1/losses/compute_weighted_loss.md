计算加权损失。

```
 tf.compat.v1.losses.compute_weighted_loss(    losses,    weights=1.0,    scope=None,    loss_collection=tf.GraphKeys.LOSSES,    reduction=Reduction.SUM_BY_NONZERO_WEIGHTS) 
```

#### 参数：
- **`losses`** :  `Tensor`  of shape  `[batch_size, d1, ... dN]` .
- **`weights`** : Optional  `Tensor`  whose rank is either 0, or the same rank as `losses` , and must be broadcastable to  `losses`  (i.e., all dimensions mustbe either  `1` , or the same as the corresponding  `losses`  dimension).
- **`scope`** : the scope for the operations performed in computing the loss.
- **`loss_collection`** : the loss will be added to these collections.
- **`reduction`** : Type of reduction to apply to loss.


#### 返回：
Weighted loss  `Tensor`  of the same type as  `losses` . If  `reduction`  is `NONE` , this has the same shape as  `losses` ; otherwise, it is scalar.

#### 加薪：
- **`ValueError`** : If  `weights`  is  `None`  or the shape is not compatible with `losses` , or if the number of dimensions (rank) of either  `losses`  or `weights`  is missing.


#### 注：
When calculating the gradient of a weighted loss contributions fromboth  `losses`  and  `weights`  are considered. If your  `weights`  dependon some model parameters but you do not want this to affect the lossgradient, you need to apply [ `tf.stop_gradient` ](https://tensorflow.google.cn/api_docs/python/tf/stop_gradient) to  `weights`  beforepassing them to  `compute_weighted_loss` .

#### 迫切的兼容性
The  `loss_collection`  argument is ignored when executing eagerly. Considerholding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

