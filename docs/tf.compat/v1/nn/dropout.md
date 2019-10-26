Computes dropout. (deprecated arguments)

```
 tf.compat.v1.nn.dropout(
    x,
    keep_prob=None,
    noise_shape=None,
    seed=None,
    name=None,
    rate=None
)
```
For each element of x, with probability rate, outputs 0, and otherwise scales up the input by 1 / (1-rate). The scaling is such that the expected sum is unchanged.
[broadcastable](http://docs.scipy.org/doc/numpy/user/basics.broadcasting.html)By default, each element is kept or dropped independently. If noise_shape is specified, it must be  to the shape of x, and only dimensions with noise_shape[i] == shape(x)[i] will make independent decisions. For example, if shape(x) = [k, l, m, n] and noise_shape = [k, 1, 1, n], each batch and channel component will be kept independently and each row and column will be kept or not kept together.

#### Args:
- x: A floating point tensor.
- keep_prob: (deprecated) A deprecated alias for (1-rate).
- noise_shape: A 1-D Tensor of type int32, representing the shape for randomly generated keep/drop flags.
- seed: A Python integer. Used to create random seeds. See tf.compat.v1.set_random_seed for behavior.
- name: A name for this operation (optional).
- rate: A scalar Tensor with the same type as x. The probability that each element of x is discarded.
#### Returns:
A Tensor of the same shape of x.
#### Raises:
- ValueError: If rate is not in [0, 1) or if x is not a floating point tensor.
