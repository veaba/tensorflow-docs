## Class RMSPropOptimizer
Optimizer that implements the RMSProp algorithm.
Inherits From: `Optimizer`
See the paper.
## __init__
View source

```
 __init__(
    learning_rate,
    decay=0.9,
    momentum=0.0,
    epsilon=1e-10,
    use_locking=False,
    centered=False,
    name='RMSProp'
)
```
Construct a new RMSProp optimizer.
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `decay`: Discounting factor for the history/coming gradient
- `momentum`: A scalar tensor.
- `epsilon`: Small value to avoid zero denominator.
- `use_locking`: If True use locks for update operation.
- `centered`: If True, gradients are normalized by the estimated variance of the gradient; if False, by the un`centered` second moment. Setting this to True may help with training, but is slightly more expensive in terms of computation and memory. Defaults to False.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "RMSProp".
#### Eager Compatibility
When eager execution is enabled, `learning_rate`, `decay`, `momentum`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions.
## Methods
### apply_gradients
View source

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
```
Apply gradients to variables.
