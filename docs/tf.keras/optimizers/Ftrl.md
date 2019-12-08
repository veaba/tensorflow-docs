



## Class  `Ftrl` 
Optimizer that implements the FTRL algorithm.

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)



### Aliases:

- Class [ `tf.compat.v1.keras.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl)

- Class [ `tf.compat.v2.keras.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl)

- Class [ `tf.compat.v2.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl)

- Class [ `tf.optimizers.Ftrl` ](/api_docs/python/tf/keras/optimizers/Ftrl)

See Algorithm 1 of this [paper](https://www.eecs.tufts.edu/%7Edsculley/papers/ad-click-prediction.pdf).
This version has support for both online L2 (the L2 penalty given in the paper
above) and shrinkage-type L2 (which is the addition of an L2 penalty to the
loss function).



#### Initialization:

t=0

n0=0

σ0=0

z0=0
Update (


i

t=t+1

nt,i=nt−1,i+g2t,i

σt,i=(√nt,i−√nt−1,i)/α

zt,i=zt−1,i+gt,i−σt,i∗wt,i<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="28.591ex" height="2.376ex" viewBox="0 -664.4 12310 1023.1" role="img" focusable="false" style="vertical-align: -0.833ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-7A" x="0" y="0"></use><g transform="translate(465,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="640" y="0"></use></g><use xlink:href="#MJMAIN-3D" x="1540" y="0"></use><g transform="translate(2596,0)"><use xlink:href="#MJMATHI-7A" x="0" y="0"></use><g transform="translate(465,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="1640" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="1919" y="0"></use></g></g><use xlink:href="#MJMAIN-2B" x="4985" y="0"></use><g transform="translate(5986,0)"><use xlink:href="#MJMATHI-67" x="0" y="0"></use><g transform="translate(477,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="640" y="0"></use></g></g><use xlink:href="#MJMAIN-2212" x="7482" y="0"></use><g transform="translate(8483,0)"><use xlink:href="#MJMATHI-3C3" x="0" y="0"></use><g transform="translate(571,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="640" y="0"></use></g></g><use xlink:href="#MJMAIN-2217" x="10073" y="0"></use><g transform="translate(10796,0)"><use xlink:href="#MJMATHI-77" x="0" y="0"></use><g transform="translate(716,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="640" y="0"></use></g></g></g></svg>

wt,i=−((β+√n+t)/α+λ2)−1∗(zi−sgn(zi)∗λ1)if\abszi>λielse0<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="72.939ex" height="2.968ex" viewBox="0 -919.2 31404.1 1277.8" role="img" focusable="false" style="vertical-align: -0.833ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-77" x="0" y="0"></use><g transform="translate(716,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2C" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="640" y="0"></use></g><use xlink:href="#MJMAIN-3D" x="1791" y="0"></use><use xlink:href="#MJMAIN-2212" x="2847" y="0"></use><use xlink:href="#MJMAIN-28" x="3625" y="0"></use><use xlink:href="#MJMAIN-28" x="4015" y="0"></use><use xlink:href="#MJMATHI-3B2" x="4404" y="0"></use><use xlink:href="#MJMAIN-2B" x="5200" y="0"></use><g transform="translate(6201,0)"><use xlink:href="#MJMAIN-221A" x="0" y="-7"></use><rect stroke="none" width="2184" height="60" x="833" y="734"></rect><g transform="translate(833,0)"><use xlink:href="#MJMATHI-6E" x="0" y="0"></use><use xlink:href="#MJMAIN-2B" x="822" y="0"></use><use xlink:href="#MJMATHI-74" x="1823" y="0"></use></g></g><use xlink:href="#MJMAIN-29" x="9219" y="0"></use><use xlink:href="#MJMAIN-2F" x="9609" y="0"></use><use xlink:href="#MJMATHI-3B1" x="10109" y="0"></use><use xlink:href="#MJMAIN-2B" x="10972" y="0"></use><g transform="translate(11973,0)"><use xlink:href="#MJMATHI-3BB" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-32" x="825" y="-213"></use></g><g transform="translate(13010,0)"><use xlink:href="#MJMAIN-29" x="0" y="0"></use><g transform="translate(389,362)"><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="778" y="0"></use></g></g><use xlink:href="#MJMAIN-2217" x="14626" y="0"></use><use xlink:href="#MJMAIN-28" x="15349" y="0"></use><g transform="translate(15738,0)"><use xlink:href="#MJMATHI-7A" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="658" y="-213"></use></g><use xlink:href="#MJMAIN-2212" x="16771" y="0"></use><use xlink:href="#MJMATHI-73" x="17771" y="0"></use><use xlink:href="#MJMATHI-67" x="18241" y="0"></use><use xlink:href="#MJMATHI-6E" x="18721" y="0"></use><use xlink:href="#MJMAIN-28" x="19322" y="0"></use><g transform="translate(19711,0)"><use xlink:href="#MJMATHI-7A" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="658" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="20521" y="0"></use><use xlink:href="#MJMAIN-2217" x="21133" y="0"></use><g transform="translate(21855,0)"><use xlink:href="#MJMATHI-3BB" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="825" y="-213"></use></g><use xlink:href="#MJMAIN-29" x="22893" y="0"></use><use xlink:href="#MJMATHI-69" x="23282" y="0"></use><use xlink:href="#MJMATHI-66" x="23628" y="0"></use><g fill="red" stroke="red" transform="translate(24178,0)"><use xlink:href="#MJMAIN-5C"></use><use xlink:href="#MJMAIN-61" x="500" y="0"></use><use xlink:href="#MJMAIN-62" x="1001" y="0"></use><use xlink:href="#MJMAIN-73" x="1557" y="0"></use></g><g transform="translate(26130,0)"><use xlink:href="#MJMATHI-7A" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="658" y="-213"></use></g><use xlink:href="#MJMAIN-3E" x="27218" y="0"></use><g transform="translate(28274,0)"><use xlink:href="#MJMATHI-3BB" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-69" x="825" y="-213"></use></g><use xlink:href="#MJMATHI-65" x="29202" y="0"></use><use xlink:href="#MJMATHI-6C" x="29669" y="0"></use><use xlink:href="#MJMATHI-73" x="29967" y="0"></use><use xlink:href="#MJMATHI-65" x="30437" y="0"></use><use xlink:href="#MJMAIN-30" x="30903" y="0"></use></g></svg><script type="math/tex" id="MathJax-Element-10">w_{t,i} = - ((\beta+\sqrt{n+{t}}) / \alpha + \lambda_{2})^{-1} * (z_{i} -
             sgn(z_{i}) * \lambda_{1}) if \abs{z_{i}} > \lambda_{i} else 0</script>


Check the documentation for the l2_shrinkage_regularization_strength
parameter for more details when shrinkage is enabled, where gradient is
replaced with gradient_with_shrinkage.



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/ftrl.py#L57-L136)



```
 __init__(
    learning_rate=0.001,
    learning_rate_power=-0.5,
    initial_accumulator_value=0.1,
    l1_regularization_strength=0.0,
    l2_regularization_strength=0.0,
    name='Ftrl',
    l2_shrinkage_regularization_strength=0.0,
    **kwargs
)
 
```

Construct a new FTRL optimizer.



#### Args:

- **`learning_rate`** : A float value or a constant float  `Tensor` .

- **`learning_rate_power`** : A float value, must be less or equal to zero.
Controls how the learning rate decreases during training. Use zero for
a fixed learning rate.

- **`initial_accumulator_value`** : The starting value for accumulators.
Only zero or positive values are allowed.

- **`l1_regularization_strength`** : A float value, must be greater than or
equal to zero.

- **`l2_regularization_strength`** : A float value, must be greater than or
equal to zero.

- **`name`** : Optional name prefix for the operations created when applying
gradients.  Defaults to "Ftrl".

- **`l2_shrinkage_regularization_strength`** : A float value, must be greater than
or equal to zero. This differs from L2 above in that the L2 above is a
stabilization penalty, whereas this L2 shrinkage is a magnitude penalty.
The FTRL formulation can be written as:
w_{t+1} = argmin<em>w(\hat{g}</em>{1:t}w + L1<em>||w||_1 + L2</em>||w||_2^2), where
\hat{g} = g + (2<em>L2_shrinkage</em>w), and g is the gradient of the loss
function w.r.t. the weights w.
Specifically, in the absence of L1 regularization, it is equivalent to
the following update rule:
w_{t+1} = w_t - lr_t / (1 + 2<em>L2</em>lr_t) * g_t -
        2<em>L2_shrinkage</em>lr_t / (1 + 2<em>L2</em>lr_t) * w_t
where lr_t is the learning rate at t.
When input is sparse shrinkage will only happen on the active weights.\

- **`**kwargs`** : keyword arguments. Allowed to be { `clipnorm` ,  `clipvalue` ,  `lr` ,
 `decay` }.  `clipnorm`  is clip gradients by norm;  `clipvalue`  is clip
gradients by value,  `decay`  is included for backward compatibility to
allow time inverse decay of learning rate.  `lr`  is included for backward
compatibility, recommended to use  `learning_rate`  instead.



#### Raises:

- **`ValueError`** : If one of the arguments is invalid.

References
  See [paper](https://www.eecs.tufts.edu/%7Edsculley/papers/ad-click-prediction.pdf)



## Properties


###  `iterations` 
Variable. The number of training steps this Optimizer has run.



###  `weights` 
Returns variables of this Optimizer based on the order created.



## Methods


###  `add_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L567-L594)



```
 add_slot(
    var,
    slot_name,
    initializer='zeros'
)
 
```

Add a new slot variable for  `var` .



###  `add_weight` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L768-L808)



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



###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L408-L441)



```
 apply_gradients(
    grads_and_vars,
    name=None
)
 
```

Apply gradients to variables.

This is the second part of  `minimize()` . It returns an  `Operation`  that
applies gradients.



#### Args:

- **`grads_and_vars`** : List of (gradient, variable) pairs.

- **`name`** : Optional name for the returned operation.  Default to the name
passed to the  `Optimizer`  constructor.



#### Returns:
An  `Operation`  that applies the specified gradients. If  `global_step` 
was not None, that operation also increments  `global_step` .



#### Raises:

- **`TypeError`** : If  `grads_and_vars`  is malformed.

- **`ValueError`** : If none of the variables have gradients.



###  `from_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L698-L721)



```
 from_config(
    cls,
    config,
    custom_objects=None
)
 
```

Creates an optimizer from its config.

This method is the reverse of  `get_config` ,
capable of instantiating the same optimizer from the config
dictionary.



#### Arguments:

- **`config`** : A Python dictionary, typically the output of get_config.

- **`custom_objects`** : A Python dictionary mapping names to additional Python
objects used to create this optimizer, such as a function used for a
hyperparameter.



#### Returns:
An optimizer instance.



###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/ftrl.py#L226-L244)



```
 get_config()
 
```

Returns the config of the optimimizer.

An optimizer config is a Python dictionary (serializable)
containing the configuration of an optimizer.
The same optimizer can be reinstantiated later
(without any saved state) from this configuration.



#### Returns:
Python dictionary.



###  `get_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406)



```
 get_gradients(
    loss,
    params
)
 
```

Returns gradients of  `loss`  with respect to  `params` .



#### Arguments:

- **`loss`** : Loss tensor.

- **`params`** : List of variables.



#### Returns:
List of gradient tensors.



#### Raises:

- **`ValueError`** : In case any gradient cannot be computed (e.g. if gradient
function not implemented).



###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L596-L599)



```
 get_slot(
    var,
    slot_name
)
 
```



###  `get_slot_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L563-L565)



```
 get_slot_names()
 
```

A list of names for this optimizer's slots.



###  `get_updates` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)



```
 get_updates(
    loss,
    params
)
 
```



###  `get_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L743-L745)



```
 get_weights()
 
```



###  `minimize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L290-L319)



```
 minimize(
    loss,
    var_list,
    grad_loss=None,
    name=None
)
 
```

Minimize  `loss`  by updating  `var_list` .

This method simply computes gradient using [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and calls
 `apply_gradients()` . If you want to process the gradient before applying
then call [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and  `apply_gradients()`  explicitly instead
of using this function.



#### Args:

- **`loss`** : A callable taking no arguments which returns the value to minimize.

- **`var_list`** : list or tuple of  `Variable`  objects to update to minimize
 `loss` , or a callable returning the list or tuple of  `Variable`  objects.
Use callable when the variable list would otherwise be incomplete before
 `minimize`  since the variables are created at the first time  `loss`  is
called.

- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .

- **`name`** : Optional name for the returned operation.



#### Returns:
An Operation that updates the variables in  `var_list` .  If  `global_step` 
was not  `None` , that operation also increments  `global_step` .



#### Raises:

- **`ValueError`** : If some of the variables are not  `Variable`  objects.



###  `set_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L748-L766)



```
 set_weights(weights)
 
```



###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)



```
 variables()
 
```

Returns variables of this Optimizer based on the order created.

