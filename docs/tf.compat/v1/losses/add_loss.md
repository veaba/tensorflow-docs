将外部定义的损失添加到损失集合。

```
 tf.compat.v1.losses.add_loss(    loss,    loss_collection=tf.GraphKeys.LOSSES) 
```

#### 参数：
- **`loss`** : A loss  `Tensor` .
- **`loss_collection`** : Optional collection to add the loss to.
