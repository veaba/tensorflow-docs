## Class AdamOptimizer
Optimizer that implements the Adam algorithm.
Inherits From: `Optimizer`
### Used in the guide:
- ``M``i``g``r``a``t``e`` ``y``o``u``r`` ``T``e``n``s``o``r``F``l``o``w`` ``1`` ``c``o``d``e`` ``t``o`` ``T``e``n``s``o``r``F``l``o``w`` ``2``
See Kingma et al., 2014 (pdf).
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    beta1=0.9,
    beta2=0.999,
    epsilon=1e-08,
    use_locking=False,
    name='Adam'
)
```
Construct a new Adam optimizer.
#### Initialization:
The update rule for `variable` with `g`radient `g` uses an optimization described at the end of section 2 of the paper:
The default value of 1e-8 for epsilon might not be a good default in general. For example, when training an Inception network on ImageNet a current good choice is 1.0 or 0.1. Note that since AdamOptimizer uses the formulation just before Section 2.1 of the Kingma and Ba paper rather than the formulation in Algorithm 1, the "epsilon" referred to here is "epsilon hat" in the paper.
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `beta1`: A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
- `beta2`: A float value or a constant float tensor. The exponential decay rate for the 2nd moment estimates.
- `epsilon`: A small constant for numerical stability. This `epsilon` is "`epsilon` hat" in the Kingma and Ba paper (in the formula just before Section 2.1), not the `epsilon` in Algorithm 1 of the paper.
- `use_locking`: If True use locks for update operations.
- `name`: Optional `name` for the operations created when applying gradients. Defaults to "Adam". @compatibility(eager) When eager execution is enabled, `learning_rate`, `beta1`, `beta2`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
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
