Computes softmax cross entropy between  `logits`  and  `labels` . (deprecated)

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


**Warning:**  THIS FUNCTION IS DEPRECATED. It will be removed in a future version.Instructions for updating:
Future major versions of TensorFlow will allow gradients to flowinto the labels input on backprop by default.

See  `tf.nn.softmax_cross_entropy_with_logits_v2` .

Measures the probability error in discrete classification tasks in which theclasses are mutually exclusive (each entry is in exactly one class).  Forexample, each CIFAR-10 image is labeled with one and only one label: an imagecan be a dog or a truck, but not both.

**NOTE:**   While the classes are mutually exclusive, their probabilitiesneed not be.  All that is required is that each row of  `labels`  isa valid probability distribution.  If they are not, the computation of thegradient will be incorrect.

If using exclusive  `labels`  (wherein one and onlyone class is true at a time), see  `sparse_softmax_cross_entropy_with_logits` .

**WARNING:**  This op expects unscaled logits, since it performs a  `softmax` on  `logits`  internally for efficiency.  Do not call this op with theoutput of  `softmax` , as it will produce incorrect results.

A common use case is to have logits and labels of shape `[batch_size, num_classes]` , but higher dimensions are supported, withthe  `dim`  argument specifying the class dimension.

Backpropagation will happen only into  `logits` .  To calculate a cross entropyloss that allows backpropagation into both  `logits`  and  `labels` , see `tf.nn.softmax_cross_entropy_with_logits_v2` .

**Note that to avoid confusion, it is required to pass only named arguments tothis function.** 

#### Args:
- **`_sentinel`** : Used to prevent positional parameters. Internal, do not use.
- **`labels`** : Each vector along the class dimension should hold a validprobability distribution e.g. for the case in which labels are of shape `[batch_size, num_classes]` , each row of  `labels[i]`  must be a validprobability distribution.
- **`logits`** : Per-label activations, typically a linear output. These activationenergies are interpreted as unnormalized log probabilities.
- **`dim`** : The class dimension. Defaulted to -1 which is the last dimension.
- **`name`** : A name for the operation (optional).
- **`axis`** : Alias for dim.


#### Returns:
A  `Tensor`  that contains the softmax cross entropy loss. Its type is thesame as  `logits`  and its shape is the same as  `labels`  except that it doesnot have the last dimension of  `labels` .

