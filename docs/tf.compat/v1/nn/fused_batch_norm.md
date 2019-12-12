Batch normalization.

```
 tf.compat.v1.nn.fused_batch_norm(    x,    scale,    offset,    mean=None,    variance=None,    epsilon=0.001,    data_format='NHWC',    is_training=True,    name=None) 
```

See Source: [Batch Normalization: Accelerating Deep Network Training byReducing Internal Covariate Shift; S. Ioffe, C. Szegedy](http://arxiv.org/abs/1502.03167).

#### Args:
- **`x`** : Input  `Tensor`  of 4 dimensions.
- **`scale`** : A  `Tensor`  of 1 dimension for scaling.
- **`offset`** : A  `Tensor`  of 1 dimension for bias.
- **`mean`** : A  `Tensor`  of 1 dimension for population mean used for inference.
- **`variance`** : A  `Tensor`  of 1 dimension for population variance      used for inference.
- **`epsilon`** : A small float number added to the variance of x.
- **`data_format`** : The data format for x. Either "NHWC" (default) or "NCHW".
- **`is_training`** : A bool value to specify if the operation is used for         training or inference.
- **`name`** : A name for this operation (optional).


#### Returns:
- **`y`** : A 4D Tensor for the normalized, scaled, offsetted x.
- **`batch_mean`** : A 1D Tensor for the mean of x.
- **`batch_var`** : A 1D Tensor for the variance of x.


#### Raises:
- **`ValueError`** : If mean or variance is not None when is_training is True.
