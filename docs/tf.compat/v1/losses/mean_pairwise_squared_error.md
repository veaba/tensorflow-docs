Adds a pairwise-errors-squared loss to the training procedure.

```
 tf.compat.v1.losses.mean_pairwise_squared_error(
    labels,
    predictions,
    weights=1.0,
    scope=None,
    loss_collection=tf.GraphKeys.LOSSES
)
 
```

Unlike  `mean_squared_error` , which is a measure of the differences betweencorresponding elements of  `predictions`  and  `labels` , `mean_pairwise_squared_error`  is a measure of the differences between pairs ofcorresponding elements of  `predictions`  and  `labels` .

For example, if  `labels` =[a, b, c] and  `predictions` =[x, y, z], there arethree pairs of differences are summed to compute the loss:  loss = [ ((a-b) - (x-y)).^2 + ((a-c) - (x-z)).^2 + ((b-c) - (y-z)).^2 ] / 3

Note that since the inputs are of shape  `[batch_size, d0, ... dN]` , thecorresponding pairs are computed within each batch sample but not acrosssamples within a batch. For example, if  `predictions`  represents a batch of16 grayscale images of dimension [batch_size, 100, 200], then the set of pairsis drawn from each image, but not across images.

 `weights`  acts as a coefficient for the loss. If a scalar is provided, thenthe loss is simply scaled by the given value. If  `weights`  is a tensor of size `[batch_size]` , then the total loss for each sample of the batch is rescaledby the corresponding element in the  `weights`  vector.

#### Args:
- **`labels`** : The ground truth output tensor, whose shape must match the shape of `predictions` .
- **`predictions`** : The predicted outputs, a tensor of size `[batch_size, d0, .. dN]`  where N+1 is the total number of dimensions in `predictions` .
- **`weights`** : Coefficients for the loss a scalar, a tensor of shape `[batch_size]`  or a tensor whose shape matches  `predictions` .
- **`scope`** : The scope for the operations performed in computing the loss.
- **`loss_collection`** : collection to which the loss will be added.


#### Returns:
A scalar  `Tensor`  that returns the weighted loss.

#### Raises:
- **`ValueError`** : If the shape of  `predictions`  doesn't match that of  `labels`  orif the shape of  `weights`  is invalid.  Also if  `labels`  or  `predictions` is None.


#### Eager Compatibility
The  `loss_collection`  argument is ignored when executing eagerly. Considerholding on to the return value or collecting losses via a [ `tf.keras.Model` ](https://tensorflow.google.cn/api_docs/python/tf/keras/Model).

