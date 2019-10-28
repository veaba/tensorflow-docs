## Class Adam
Optimizer that implements the Adam algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Adam`
- Class `tf.compat.v2.keras.optimizers.Adam`
- Class `tf.compat.v2.optimizers.Adam`
- Class `tf.optimizers.Adam`
### Used in the guide:
- ``T``r``a``i``n``i``n``g`` ``c``h``e``c``k``p``o``i``n``t``s``
- ``W``r``i``t``i``n``g`` ``c``u``s``t``o``m`` ``l``a``y``e``r``s`` ``a``n``d`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``E``a``g``e``r`` ``e``x``e``c``u``t``i``o``n``
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
### Used in the tutorials:
- ``C``y``c``l``e``G``A``N``
- ``D``i``s``t``r``i``b``u``t``e``d`` ``t``r``a``i``n``i``n``g`` ``w``i``t``h`` ``K``e``r``a``s``
- ``D``e``e``p`` ``C``o``n``v``o``l``u``t``i``o``n``a``l`` ``G``e``n``e``r``a``t``i``v``e`` ``A``d``v``e``r``s``a``r``i``a``l`` ``N``e``t``w``o``r``k``
- ``P``i``x``2``P``i``x``
- ``T``e``x``t`` ``c``l``a``s``s``i``f``i``c``a``t``i``o``n`` ``w``i``t``h`` ``a``n`` ``R``N``N``
Adam optimization is a stochastic gradient descent method that is based on adaptive estimation of first-order and second-order moments. According to the paper Adam: A Method for Stochastic Optimization. Kingma et al., 2014, the method is "computationally efficient, has little memory requirement, invariant to diagonal rescaling of gradients, and is well suited for problems that are large in terms of data/parameters".
For AMSGrad see On The Convergence Of Adam And Beyond. Reddi et al., 5-8.
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999,
    epsilon=1e-07,
    amsgrad=False,
    name='Adam',
    **kwargs
)
```
Construct a new Adam optimizer.
If amsgrad = False: Initialization:
The update rule for `variable` with `g`radient `g` uses an optimization described at the end of section 2 of the paper:
If amsgrad = True: Initialization:
The update rule for `variable` with `g`radient `g` uses an optimization described at the end of section 2 of the paper:
The default value of 1e-7 for epsilon might not be a good default in general. For example, when training an Inception network on ImageNet a current good choice is 1.0 or 0.1. Note that since AdamOptimizer uses the formulation just before Section 2.1 of the Kingma and Ba paper rather than the formulation in Algorithm 1, the "epsilon" referred to here is "epsilon hat" in the paper.
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `beta_1`: A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
- `beta_2`: A float value or a constant float tensor. The exponential decay rate for the 2nd moment estimates.
- `epsilon`: A small constant for numerical stability. This `epsilon` is "`epsilon` hat" in the Kingma and Ba paper (in the formula just before Section 2.1), not the `epsilon` in Algorithm 1 of the paper.
- `amsgrad`: boolean. Whether to apply AMSGrad variant of this algorithm from the paper "On the Convergence of Adam and beyond".
- `name`: Optional `name` for the operations created when applying gradients. Defaults to "Adam". @compatibility(eager) When eager execution is enabled, `learning_rate`, `beta_1`, `beta_2`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
## Properties
### iterations
Variable. The number of training steps this Optimizer has run.
### weights
Returns variables of this Optimizer based on the order created.
## Methods
### add_slot
View source

```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
```
Add a new slot `var`iable for `var`.
### add_weight
View source

```
 add_weight(
    name,
    shape,
    dtype=None,
    initializer='zeros',
    trainable=None,
    synchronization=tf.VariableSynchronization.AUTO,
    aggregation=tf.compat.v1.VariableAggregation.NONE
)
```
### apply_gradients
View source

```
 apply_gradients(
    grads_and_vars,
    name=None
)
```
Apply gradients to variables.
