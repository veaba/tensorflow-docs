## Class RMSprop
Optimizer that implements the RMSprop algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.RMSprop`
- Class `tf.compat.v2.keras.optimizers.RMSprop`
- Class `tf.compat.v2.optimizers.RMSprop`
- Class `tf.optimizers.RMSprop`
### Used in the guide:
- ``T``r``a``i``n`` ``a``n``d`` ``e``v``a``l``u``a``t``e`` ``w``i``t``h`` ``K``e``r``a``s``
- ``T``h``e`` ``K``e``r``a``s`` ``f``u``n``c``t``i``o``n``a``l`` ``A``P``I`` ``i``n`` ``T``e``n``s``o``r``F``l``o``w``
- ``K``e``r``a``s`` ``o``v``e``r``v``i``e``w``
- ``S``a``v``e`` ``a``n``d`` ``s``e``r``i``a``l``i``z``e`` ``m``o``d``e``l``s`` ``w``i``t``h`` ``K``e``r``a``s``
- ``K``e``r``a``s`` ``c``u``s``t``o``m`` ``c``a``l``l``b``a``c``k``s``
### Used in the tutorials:
- ``T``r``a``n``s``f``e``r`` ``l``e``a``r``n``i``n``g`` ``w``i``t``h`` ``a`` ``p``r``e``t``r``a``i``n``e``d`` ``C``o``n``v``N``e``t``
- ``T``i``m``e`` ``s``e``r``i``e``s`` ``f``o``r``e``c``a``s``t``i``n``g``
- ``B``a``s``i``c`` ``r``e``g``r``e``s``s``i``o``n``:`` ``P``r``e``d``i``c``t`` ``f``u``e``l`` ``e``f``f``i``c``i``e``n``c``y``
- ``L``o``a``d`` ``N``u``m``P``y`` ``d``a``t``a``
A detailed description of rmsprop.
- ``m``a``i``n``t``a``i``n`` ``a`` ``m``o``v``i``n``g`` ``(``d``i``s``c``o``u``n``t``e``d``)`` ``a``v``e``r``a``g``e`` ``o``f`` ``t``h``e`` ``s``q``u``a``r``e`` ``o``f`` ``g``r``a``d``i``e``n``t``s``
- ``d``i``v``i``d``e`` ``g``r``a``d``i``e``n``t`` ``b``y`` ``t``h``e`` ``r``o``o``t`` ``o``f`` ``t``h``i``s`` ``a``v``e``r``a``g``e``
This implementation of RMSprop uses plain momentum, not Nesterov momentum.
The centered version additionally maintains a moving average of the gradients, and uses that average to estimate the variance:
References See ([pdf] http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf).
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    rho=0.9,
    momentum=0.0,
    epsilon=1e-07,
    centered=False,
    name='RMSprop',
    **kwargs
)
```
Construct a new RMSprop optimizer.
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `rho`: Discounting factor for the history/coming gradient
- `momentum`: A scalar tensor.
- `epsilon`: Small value to avoid zero denominator.
- `centered`: If True, gradients are normalized by the estimated variance of the gradient; if False, by the un`centered` second moment. Setting this to True may help with training, but is slightly more expensive in terms of computation and memory. Defaults to False.
- `name`: Optional `name` prefix for the operations created when applying gradients. Defaults to "RMSprop". @compatibility(eager) When eager execution is enabled, `learning_rate`, `decay`, `momentum`, and `epsilon` can each be a callable that takes no arguments and returns the actual value to use. This can be useful for changing these values across different invocations of optimizer functions. @end_compatibility
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
