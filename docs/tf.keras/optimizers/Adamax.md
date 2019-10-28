## Class Adamax
Optimizer that implements the Adamax algorithm.
Inherits From: `Optimizer`
### Aliases:
- Class `tf.compat.v1.keras.optimizers.Adamax`
- Class `tf.compat.v2.keras.optimizers.Adamax`
- Class `tf.compat.v2.optimizers.Adamax`
- Class `tf.optimizers.Adamax`
It is a variant of Adam based on the infinity norm. Default parameters follow those provided in the paper. Adamax is sometimes superior to adam, specially in models with embeddings.
References see Section 7 of Kingma et al., 2014 (pdf).
## __init__
View source

```
 __init__(
    learning_rate=0.001,
    beta_1=0.9,
    beta_2=0.999,
    epsilon=1e-07,
    name='Adamax',
    **kwargs
)
```
Construct a new Adamax optimizer.
#### Initialization:

```
 m_0 <- 0 (Initialize initial 1st moment vector)
v_0 <- 0 (Initialize the exponentially weighted infinity norm)
t <- 0 (Initialize timestep)
```
The update rule for `variable` with `g`radient `g` uses an optimization described at the end of section 7.1 of the paper:

```
 t <- t + 1

m_t <- beta1 * m_{t-1} + (1 - beta1) * g
v_t <- max(beta2 * v_{t-1}, abs(g))
variable <- variable - learning_rate / (1 - beta1^t) * m_t / (v_t + epsilon)
```
Similar to AdamOptimizer, the epsilon is added for numerical stability (especially to get rid of division by zero when v_t = 0).
[tf.gather](https://tensorflow.google.cn/api_docs/python/tf/gather)

#### Args:
- `learning_rate`: A Tensor or a floating point value. The learning rate.
- `beta_1`: A float value or a constant float tensor. The exponential decay rate for the 1st moment estimates.
- `beta_2`: A float value or a constant float tensor. The exponential decay rate for the exponentially weighted infinity norm.
- `epsilon`: A small constant for numerical stability.
- `name`: Optional `name` for the operations created when applying gradients. Defaults to "Adamax".
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
