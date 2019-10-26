Defined in generated file: python/ops/gen_nn_ops.py
Computes rectified linear: max(features, 0).
### Aliases:
- tf.compat.v1.nn.relu
- tf.compat.v2.nn.relu

```
 tf.nn.relu(
    features,
    name=None
)
```
### Used in the guide:
- Better performance with tf.function and AutoGraph
- Writing custom layers and models with Keras
### Used in the tutorials:
- Custom layers
- Image captioning with visual attention
#### Args:
- features: A Tensor. Must be one of the following types: float32, float64, int32, uint8, int16, int8, int64, bfloat16, uint16, half, uint32, uint64, qint8.
- name: A name for the operation (optional).
#### Returns:
A Tensor. Has the same type as features.
