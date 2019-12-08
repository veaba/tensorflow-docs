



## Class  `RMSprop` 
Optimizer that implements the RMSprop algorithm.

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)



### Aliases:

- Class [ `tf.compat.v1.keras.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop)

- Class [ `tf.compat.v2.keras.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop)

- Class [ `tf.compat.v2.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop)

- Class [ `tf.optimizers.RMSprop` ](/api_docs/python/tf/keras/optimizers/RMSprop)



### Used in the guide:

- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)

- [The Keras functional API in TensorFlow](https://tensorflow.google.cn/guide/keras/functional)

- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)

- [Save and serialize models with Keras](https://tensorflow.google.cn/guide/keras/save_and_serialize)

- [Keras custom callbacks](https://tensorflow.google.cn/guide/keras/custom_callback)



### Used in the tutorials:

- [Transfer learning with a pretrained ConvNet](https://tensorflow.google.cn/tutorials/images/transfer_learning)

- [Time series forecasting](https://tensorflow.google.cn/tutorials/structured_data/time_series)

- [Basic regression: Predict fuel efficiency](https://tensorflow.google.cn/tutorials/keras/regression)

- [Load NumPy data](https://tensorflow.google.cn/tutorials/load_data/numpy)

A detailed description of rmsprop.


- maintain a moving (discounted) average of the square of gradients

- divide gradient by the root of this average


meansquaret=rho∗meansquaret−1+(1−rho)∗gradient∗∗2

momt=momentum∗momt−1+learningrate∗gradient/√/meansquaret+ϵ<script type="math/tex; mode=display" id="MathJax-Element-2">mom_t = momentum * mom_{t-1} + learning_rate * gradient / \sqrt{ /
    mean_square_t + \epsilon}</script>

variablet:=variablet−1−momt
This implementation of RMSprop uses plain momentum, not Nesterov momentum.

The centered version additionally maintains a moving average of the
gradients, and uses that average to estimate the variance:


meangradt=rho∗meangradt−1+(1−rho)∗gradient

meansquaret=rho∗meansquaret−1+(1−rho)∗gradient∗∗2

momt=momentum∗momt−1+learningrate∗gradient/sqrt(meansquaret−meangradt∗∗2+epsilon)<script type="math/tex; mode=display" id="MathJax-Element-6">mom_t = momentum * mom_{t-1} + learning_rate * gradient /
    sqrt(mean_square_t - mean_grad_t**2 + epsilon)</script>

variablet:=variablet−1−momt<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="32.798ex" height="2.494ex" viewBox="0 -766.3 14121.2 1074" role="img" focusable="false" style="vertical-align: -0.715ex;"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#MJMATHI-76" x="0" y="0"></use><use xlink:href="#MJMATHI-61" x="485" y="0"></use><use xlink:href="#MJMATHI-72" x="1015" y="0"></use><use xlink:href="#MJMATHI-69" x="1466" y="0"></use><use xlink:href="#MJMATHI-61" x="1812" y="0"></use><use xlink:href="#MJMATHI-62" x="2341" y="0"></use><use xlink:href="#MJMATHI-6C" x="2771" y="0"></use><g transform="translate(3069,0)"><use xlink:href="#MJMATHI-65" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="659" y="-213"></use></g><g transform="translate(4169,0)"><use xlink:href="#MJMAIN-3A"></use><use xlink:href="#MJMAIN-3D" x="278" y="0"></use></g><use xlink:href="#MJMATHI-76" x="5504" y="0"></use><use xlink:href="#MJMATHI-61" x="5989" y="0"></use><use xlink:href="#MJMATHI-72" x="6519" y="0"></use><use xlink:href="#MJMATHI-69" x="6970" y="0"></use><use xlink:href="#MJMATHI-61" x="7316" y="0"></use><use xlink:href="#MJMATHI-62" x="7845" y="0"></use><use xlink:href="#MJMATHI-6C" x="8275" y="0"></use><g transform="translate(8573,0)"><use xlink:href="#MJMATHI-65" x="0" y="0"></use><g transform="translate(466,-150)"><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-2212" x="361" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMAIN-31" x="1140" y="0"></use></g></g><use xlink:href="#MJMAIN-2212" x="10522" y="0"></use><use xlink:href="#MJMATHI-6D" x="11523" y="0"></use><use xlink:href="#MJMATHI-6F" x="12401" y="0"></use><g transform="translate(12887,0)"><use xlink:href="#MJMATHI-6D" x="0" y="0"></use><use transform="scale(0.707)" xlink:href="#MJMATHI-74" x="1242" y="-213"></use></g></g></svg>
References
  See ([pdf]
    http://www.cs.toronto.edu/~tijmen/csc321/slides/lecture_slides_lec6.pdf).



##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L63-L119)



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

Note that in the dense implementation of this algorithm, variables and their
corresponding accumulators (momentum, gradient moving average, square
gradient moving average) will be updated even if the gradient is zero
(i.e. accumulators will decay, momentum will be applied). The sparse
implementation (used when the gradient is an  `IndexedSlices`  object,
typically because of [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) or an embedding lookup in the forward pass)
will not update variable slices or their accumulators unless those slices
were used in the forward pass (nor is there an "eventual" correction to
account for these omitted updates). This leads to more efficient updates for
large embedding lookup tables (where most of the slices are not accessed in
a particular graph execution), but differs from the published algorithm.



#### Args:

- **`learning_rate`** : A Tensor or a floating point value.  The learning rate.

- **`rho`** : Discounting factor for the history/coming gradient

- **`momentum`** : A scalar tensor.

- **`epsilon`** : Small value to avoid zero denominator.

- **`centered`** : If True, gradients are normalized by the estimated variance of
the gradient; if False, by the uncentered second moment. Setting this to
True may help with training, but is slightly more expensive in terms of
computation and memory. Defaults to False.

- **`name`** : Optional name prefix for the operations created when applying
gradients. Defaults to "RMSprop".  @compatibility(eager) When eager
execution is enabled,  `learning_rate` ,  `decay` ,  `momentum` , and
 `epsilon`  can each be a callable that takes no arguments and returns the
actual value to use. This can be useful for changing these values across
different invocations of optimizer functions. @end_compatibility

- **`**kwargs`** : keyword arguments. Allowed to be { `clipnorm` ,  `clipvalue` ,  `lr` ,
 `decay` }.  `clipnorm`  is clip gradients by norm;  `clipvalue`  is clip
gradients by value,  `decay`  is included for backward compatibility to
allow time inverse decay of learning rate.  `lr`  is included for backward
compatibility, recommended to use  `learning_rate`  instead.



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L256-L266)



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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/rmsprop.py#L247-L254)



```
 set_weights(weights)
 
```



###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)



```
 variables()
 
```

Returns variables of this Optimizer based on the order created.

