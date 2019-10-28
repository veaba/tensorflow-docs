Computes softmax cross entropy between `logits` and `labels`. (deprecated)

```
 tf.compat.v1.nn.softmax_cross_entropy_with_logits(
    _sentinel=None,
    labels=None,
    logits=None,
    dim=-1,
    name=None,
    axis=None
)
```
Future major versions of TensorFlow will allow gradients to flow into the labels input on backprop by default.
See `tf.nn.softmax_cross_entropy_with_logits_v2`.
Measures the probability error in discrete classification tasks in which the classes are mutually exclusive (each entry is in exactly one class). For example, each CIFAR-10 image is labeled with one and only one label: an image can be a dog or a truck, but not both.
NOTE: While the classes are mutually exclusive, their probabilities need not be. All that is required is that each row of `labels` is a valid probability distribution. If they are not, the computation of the gradient will be incorrect.
If using exclusive `labels` (wherein one and only one class is true at a time), see `sparse_softmax_cross_entropy_with_logits`.
WARNING: This op expects unscaled `logits`, since it performs a `softmax` on `logits` internally for efficiency. Do not call this op with the output of `softmax`, as it will produce incorrect results.
A common use case is to have logits and labels of shape `[batch_size, num_classes]`, but higher `dim`ensions are supported, with the `dim` argument specifying the class `dim`ension.
Backpropagation will happen only into `logits`. To calculate a cross entropy loss that allows backpropagation into both `logits` and `labels`, see `tf.nn.softmax_cross_entropy_with_logits_v2`.
Note that to avoid confusion, it is required to pass only named arguments to this function.
#### Args:
- `_sentinel`: Used to prevent positional parameters. Internal, do not use.
- `labels`: Each vector along the class dimension should hold a valid probability distribution e.g. for the case in which `labels` are of shape `[batch_size, num_classes]`, each row of `labels`[i] must be a valid probability distribution.
- `logits`: Per-label activations, typically a linear output. These activation energies are interpreted as unnormalized log probabilities.
- `dim`: The class `dim`ension. Defaulted to -1 which is the last `dim`ension.
- `name`: A `name` for the operation (optional).
- `axis`: Alias for dim.
#### Returns:
A `Tensor` that contains the softmax cross entropy loss. Its type is the same as `logits` and its shape is the same as `labels` except that it does not have the last dimension of `labels`.
