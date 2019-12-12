

## Class  `Adam` 
实现ADAM算法的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

**别名** : [ `tf.compat.v1.keras.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam), [ `tf.compat.v2.keras.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam), [ `tf.compat.v2.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam), [ `tf.optimizers.Adam` ](/api_docs/python/tf/keras/optimizers/Adam)

### 在指南中使用：
- [Training checkpoints](https://tensorflow.google.cn/guide/checkpoint)
- [Writing custom layers and models with Keras](https://tensorflow.google.cn/guide/keras/custom_layers_and_models)
- [Keras overview](https://tensorflow.google.cn/guide/keras/overview)
- [Eager execution](https://tensorflow.google.cn/guide/eager)
- [Train and evaluate with Keras](https://tensorflow.google.cn/guide/keras/train_and_evaluate)


### 在教程中使用：
- [CycleGAN](https://tensorflow.google.cn/tutorials/generative/cyclegan)
- [Distributed training with Keras](https://tensorflow.google.cn/tutorials/distribute/keras)
- [Deep Convolutional Generative Adversarial Network](https://tensorflow.google.cn/tutorials/generative/dcgan)
- [Pix2Pix](https://tensorflow.google.cn/tutorials/generative/pix2pix)
- [Text classification with an RNN](https://tensorflow.google.cn/tutorials/text/text_classification_rnn)
Adam optimization is a stochastic gradient descent method that is based onadaptive estimation of first-order and second-order moments.According to the paper[Adam: A Method for Stochastic Optimization. Kingma et al.,2014](http://arxiv.org/abs/1412.6980), the method is "*computationally efficient, has little memoryrequirement, invariant to diagonal rescaling of gradients, and is well suitedfor problems that are large in terms of data/parameters*".

For AMSGrad see [On The Convergence Of Adam And Beyond.Reddi et al., 5-8](https://openreview.net/pdf?id=ryQu7f-RZ).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L48-L140)

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

构造一个新的adam优化器。

If amsgrad = False:  Initialization:


The update rule for  `variable`  with gradient  `g`  uses an optimization  described at the end of section 2 of the paper:


If amsgrad = True:  Initialization:


The update rule for  `variable`  with gradient  `g`  uses an optimization  described at the end of section 2 of the paper:


The default value of 1e-7 for epsilon might not be a good default ingeneral. For example, when training an Inception network on ImageNet acurrent good choice is 1.0 or 0.1. Note that since AdamOptimizer uses theformulation just before Section 2.1 of the Kingma and Ba paper rather thanthe formulation in Algorithm 1, the "epsilon" referred to here is "epsilonhat" in the paper.

The sparse implementation of this algorithm (used when the gradient is anIndexedSlices object, typically because of [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) or an embeddinglookup in the forward pass) does apply momentum to variable slices even ifthey were not used in the forward pass (meaning they have a gradient equalto zero). Momentum decay (beta1) is also applied to the entire momentumaccumulator. This means that the sparse behavior is equivalent to the densebehavior (in contrast to some momentum implementations which ignore momentumunless a variable slice was actually used).

#### 参数：
- **`learning_rate`** : A Tensor or a floating point value.  The learning rate.
- **`beta_1`** : A float value or a constant float tensor. The exponential decayrate for the 1st moment estimates.
- **`beta_2`** : A float value or a constant float tensor. The exponential decayrate for the 2nd moment estimates.
- **`epsilon`** : A small constant for numerical stability. This epsilon is"epsilon hat" in the Kingma and Ba paper (in the formula just beforeSection 2.1), not the epsilon in Algorithm 1 of the paper.
- **`amsgrad`** : boolean. Whether to apply AMSGrad variant of this algorithm fromthe paper "On the Convergence of Adam and beyond".
- **`name`** : Optional name for the operations created when applying gradients.Defaults to "Adam".  @compatibility(eager) When eager execution isenabled,  `learning_rate` ,  `beta_1` ,  `beta_2` , and  `epsilon`  can each bea callable that takes no arguments and returns the actual value to use.This can be useful for changing these values across differentinvocations of optimizer functions. @end_compatibility
- **`**kwargs`** : keyword arguments. Allowed to be { `clipnorm` ,  `clipvalue` ,  `lr` , `decay` }.  `clipnorm`  is clip gradients by norm;  `clipvalue`  is clipgradients by value,  `decay`  is included for backward compatibility toallow time inverse decay of learning rate.  `lr`  is included for backwardcompatibility, recommended to use  `learning_rate`  instead.


## 属性


###  `iterations` 
变量。此优化器已运行的训练步骤数。

###  `weights` 
根据创建的顺序返回此优化器的变量。

## 方法


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

对变量应用渐变。

This is the second part of  `minimize()` . It returns an  `Operation`  thatapplies gradients.

#### 参数：
- **`grads_and_vars`** : List of (gradient, variable) pairs.
- **`name`** : Optional name for the returned operation.  Default to the namepassed to the  `Optimizer`  constructor.


#### 返回：
An  `Operation`  that applies the specified gradients. If  `global_step` was not None, that operation also increments  `global_step` .

#### 加薪：
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

从其配置创建优化器。

This method is the reverse of  `get_config` ,capable of instantiating the same optimizer from the configdictionary.

#### 参数：
- **`config`** : A Python dictionary, typically the output of get_config.
- **`custom_objects`** : A Python dictionary mapping names to additional Pythonobjects used to create this optimizer, such as a function used for ahyperparameter.


#### 返回：
优化器实例。

###  `get_config` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L261-L271)

```
 get_config()
 
```

返回优化程序的配置。

An optimizer config is a Python dictionary (serializable)containing the configuration of an optimizer.The same optimizer can be reinstantiated later(without any saved state) from this configuration.

#### 返回：
python字典。

###  `get_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L374-L406)

```
 get_gradients(
    loss,
    params
)
 
```

Returns gradients of  `loss`  with respect to  `params` .

#### 参数：
- **`loss`** : Loss tensor.
- **`params`** : List of variables.


#### 返回：
梯度张量列表。

#### 加薪：
- **`ValueError`** : In case any gradient cannot be computed (e.g. if gradientfunction not implemented).


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

此优化器插槽的名称列表。

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

This method simply computes gradient using [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and calls `apply_gradients()` . If you want to process the gradient before applyingthen call [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) and  `apply_gradients()`  explicitly insteadof using this function.

#### 参数：
- **`loss`** : A callable taking no arguments which returns the value to minimize.
- **`var_list`** : list or tuple of  `Variable`  objects to update to minimize `loss` , or a callable returning the list or tuple of  `Variable`  objects.Use callable when the variable list would otherwise be incomplete before `minimize`  since the variables are created at the first time  `loss`  iscalled.
- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .
- **`name`** : Optional name for the returned operation.


#### 返回：
An Operation that updates the variables in  `var_list` .  If  `global_step` was not  `None` , that operation also increments  `global_step` .

#### 加薪：
- **`ValueError`** : If some of the variables are not  `Variable`  objects.


###  `set_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/adam.py#L174-L182)

```
 set_weights(weights)
 
```

###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L734-L736)

```
 variables()
 
```

根据创建的顺序返回此优化器的变量。

