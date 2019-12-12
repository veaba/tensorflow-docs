

## Class  `LossScaleOptimizer` 
应用损失缩放的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer)

**别名** : [ `tf.compat.v1.keras.mixed_precision.experimental.LossScaleOptimizer` ](/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer), [ `tf.compat.v2.keras.mixed_precision.experimental.LossScaleOptimizer` ](/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer)

Loss scaling is a process that multiplies the loss by a multiplier called theloss scale, and divides each gradient by the same multiplier. The pseudocodefor this process is:

```
 loss = ...
loss *= loss_scale
grads = gradients(loss, vars)
grads /= loss_scale
 
```

Mathematically, loss scaling has no effect, but can help avoid numericalunderflow in intermediate gradients when float16 tensors are used. Bymultiplying the loss, each intermediate gradient will have the same multiplierapplied.

The loss scale can either be a fixed constant, chosen by the user, or bedynamically determined. Dynamically determining the loss scale is convenientas a loss scale does not have to be explicitly chosen. However it reducesperformance.

This optimizer wraps another optimizer and applies loss scaling to it via a `LossScale` . Loss scaling is applied whenever gradients arecomputed, either through  `minimize()`  or  `get_gradients()` . The loss scale isupdated via [ `LossScale.update()` ](https://tensorflow.google.cn/api_docs/python/tf/train/experimental/LossScale#update) whenever gradients are applied, eitherthrough  `minimize()`  or  `apply_gradients()` . For example:

```
 opt = tf.keras.optimizers.SGD(0.1)
opt = tf.keras.mixed_precision.experimental.LossScaleOptimizer(opt, "dynamic")
# 'minimize' applies loss scaling to the loss and updates the loss sale.
opt.minimize(loss_fn)
 
```

If a [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape) is used to compute gradients instead of[ `LossScaleOptimizer.minimize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer#minimize) or [ `LossScaleOptimizer.get_gradients` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#get_gradients), the lossand gradients must be scaled manually. This can be done by calling[ `LossScaleOptimizer.get_scaled_loss` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#get_scaled_loss) before passing the loss to[ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape), and [ `LossScaleOptimizer.get_unscaled_gradients` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#get_unscaled_gradients) aftercomputing the gradients with [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). For example:

```
 opt = tf.keras.mixed_precision.experimental.LossScaleOptimizer(...)
vars = ...
with tf.GradientTape() as tape:
  loss = ...
  scaled_loss = opt.get_scaled_loss(loss)
scaled_grads = tape.gradient(scaled_loss, vars)
grads = opt.get_unscaled_gradients(scaled_grads)
opt.apply_gradients(zip(grads, vars))  # Loss scale will be updated here
 
```

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L104-L142)

```
 __init__(
    optimizer,
    loss_scale
)
 
```

初始化此损失比例优化器。

#### 参数：
- **`optimizer`** : The Optimizer instance to wrap.
- **`loss_scale`** : The loss scale to scale the loss and gradients. This caneither be an int/float to use a fixed loss scale, the string "dynamic"to use dynamic loss scaling, or an instance of a LossScale. The string"dynamic" equivalent to passing  `DynamicLossScale()` , and passing anint/float is equivalent to passing a FixedLossScale with the given lossscale.


## 属性


###  `iterations` 
变量。此优化器已运行的训练步骤数。

###  `learning_rate` 


###  `loss_scale` 
The  `LossScale`  instance associated with this optimizer.

###  `lr` 


###  `weights` 
根据创建的顺序返回此优化器的变量。

## 方法


###  `add_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L324-L328)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L214-L219)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L256-L263)

```
 @classmethod
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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L248-L254)

```
 get_config()
 
```

返回优化程序的配置。

An optimizer config is a Python dictionary (serializable)containing the configuration of an optimizer.The same optimizer can be reinstantiated later(without any saved state) from this configuration.

#### 返回：
python字典。

###  `get_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L209-L212)

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


###  `get_scaled_loss` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L149-L173)

```
 get_scaled_loss(loss)
 
```

用损失量表来衡量损失。

This method is only needed if you compute gradients manually, e.g. with[ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). In that case, call this method to scale the loss beforepassing the loss to [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). If you use[ `LossScaleOptimizer.minimize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer#minimize) or [ `LossScaleOptimizer.get_gradients` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#get_gradients), lossscaling is automatically applied and this method is unneeded.

If this method is called,  `get_unscaled_gradients`  should also be called.See the [ `tf.keras.mixed_precision.experimental.LossScaleOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer) doc foran example.

#### 参数：
- **`loss`** : The loss, which will be multiplied by the loss scale. Can either bea tensor or a callable returning a tensor.


#### 返回：
 `loss`  multiplied by [ `LossScaleOptimizer.loss_scale()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#loss_scale).

###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L313-L322)

```
 get_slot(
    var,
    slot_name
)
 
```

###  `get_slot_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L276-L277)

```
 get_slot_names()
 
```

此优化器插槽的名称列表。

###  `get_unscaled_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L175-L198)

```
 get_unscaled_gradients(grads)
 
```

用损失量表来解释梯度。

This method is only needed if you compute gradients manually, e.g. with[ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). In that case, call this method to unscale the gradientsafter computing them with [ `tf.GradientTape` ](https://tensorflow.google.cn/api_docs/python/tf/GradientTape). If you use[ `LossScaleOptimizer.minimize` ](https://tensorflow.google.cn/api_docs/python/tf/keras/optimizers/Optimizer#minimize) or [ `LossScaleOptimizer.get_gradients` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#get_gradients), lossscaling is automatically applied and this method is unneeded.

If this method is called,  `get_scaled_loss`  should also be called. Seethe [ `tf.keras.mixed_precision.experimental.LossScaleOptimizer` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer) doc for anexample.

#### 参数：
- **`grads`** : A list of tensors, each which will be divided by the loss scale.Can have None values, which are ignored.


#### 返回：
A new list the same size as  `grads` , where every non-None value in  `grads` is divided by [ `LossScaleOptimizer.loss_scale()` ](https://tensorflow.google.cn/api_docs/python/tf/keras/mixed_precision/experimental/LossScaleOptimizer#loss_scale).

###  `get_updates` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/optimizer_v2/optimizer_v2.py#L499-L506)

```
 get_updates(
    loss,
    params
)
 
```

###  `get_weights` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L286-L287)

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
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L289-L290)

```
 set_weights(weights)
 
```

###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/keras/mixed_precision/experimental/loss_scale_optimizer.py#L279-L280)

```
 variables()
 
```

根据创建的顺序返回此优化器的变量。

