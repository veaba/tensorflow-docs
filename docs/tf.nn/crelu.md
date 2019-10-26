Computes Concatenated ReLU.
- tf.compat.v2.nn.crelu

```
 tf.nn.crelu(
    features,
    axis=-1,
    name=None
)
```
[Understanding and Improving Convolutional Neural Networks via Concatenated Rectified Linear Units. W. Shang, et al.](https://arxiv.org/abs/1603.05201)Concatenates a ReLU which selects only the positive part of the activation with a ReLU which selects only the negative part of the activation. Note that as a result this non-linearity doubles the depth of the activations. Source: 

#### Args:
- features: A Tensor with type float, double, int32, int64, uint8, int16, or int8.
- name: A name for the operation (optional).
- axis: The axis that the output values are concatenated along. Default is -1.
#### Returns:
A Tensor with the same type as features.
