
Computes Rectified Linear 6: min(max(features, 0), 6).
### Aliases:
- `tf.compat.v1.nn.relu6`
- `tf.compat.v2.nn.relu6`

```
 tf.nn.relu6(
    features,
    name=None
)
```
[Convolutional Deep Belief Networks on CIFAR-10. A. Krizhevsky](http://www.cs.utoronto.ca/~kriz/conv-cifar10-aug2010.pdf)Source: 

#### Args:
- `features`: A `Tensor` with type `float`, `double`, `int32`, `int64`, `uint8`, `int16`, or `int8`.
- `name`: A `name` for the operation (optional).
#### Returns:

A Tensor with the same type as features.
