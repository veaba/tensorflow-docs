Returns the frequency-weighted mean and variance of  `x` .

```
 tf.nn.weighted_moments(    x,    axes,    frequency_weights,    keepdims=False,    name=None) 
```

#### Args:
- **`x`** : A tensor.
- **`axes`** : 1-d tensor of int32 values; these are the axes along whichto compute mean and variance.
- **`frequency_weights`** : A tensor of positive weights which can bebroadcast with x.
- **`keepdims`** : Produce moments with the same dimensionality as the input.
- **`name`** : Name used to scope the operation.


#### Returns:
Two tensors:  `weighted_mean`  and  `weighted_variance` .

