

## Class  `MixedPrecisionLossScaleOptimizer` 
应用损失缩放的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)

Loss scaling is a process that multiplies the loss by a multiplier called theloss scale, and divides each gradient by the same multiplier. The pseudocodefor this process is:

```
 loss = ...
loss *= loss_scale
grads = gradients(loss, vars)
grads /= loss_scale
 
```

Mathematically, loss scaling has no effect, but can help avoid numericalunderflow in intermediate gradients when float16 tensors are used for mixedprecision training. By multiplying the loss, each intermediate gradient willhave the same multiplier applied.

The loss scale can either be a fixed constant, chosen by the user, or bedynamically determined. Dynamically determining the loss scale is convenientas a loss scale does not have to be explicitly chosen. However it reducesperformance.

This optimizer wraps another optimizer and applies loss scaling to it via a `LossScale` . Loss scaling is applied whenever gradients arecomputed, such as through  `minimize()` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale_optimizer.py#L59-L71)

```
 __init__(
    opt,
    loss_scale
)
 
```

创建新的优化器。

这必须由子类的构造函数调用。

#### 参数：
- **`use_locking`** : Bool. If True apply use locks to prevent concurrent updatesto variables.
- **`name`** : A non-empty string.  The name to use for accumulators createdfor the optimizer.


#### 加薪：
- **`ValueError`** : If name is malformed.


## 方法


###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale_optimizer.py#L145-L178)

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
 
```

对变量应用渐变。

This is the second part of  `minimize()` . It returns an  `Operation`  thatconditionally applies gradients if all gradient values are finite.Otherwise no update is performed (nor is  `global_step`  incremented).

#### 参数：
- **`grads_and_vars`** : List of (gradient, variable) pairs as returned by `compute_gradients()` .
- **`global_step`** : Optional  `Variable`  to increment by one after the variableshave been updated.
- **`name`** : Optional name for the returned operation.  Default to the namepassed to the  `Optimizer`  constructor.


#### 返回：
An  `Operation`  that conditionally applies the specified gradients. If `global_step`  was not None, that operation also increments  `global_step` .

#### 加薪：
- **`RuntimeError`** : If you should use  `_distributed_apply()`  instead.


###  `compute_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/experimental/loss_scale_optimizer.py#L77-L123)

```
 compute_gradients(
    loss,
    var_list=None,
    gate_gradients=optimizer.Optimizer.GATE_OP,
    aggregation_method=None,
    colocate_gradients_with_ops=False,
    grad_loss=None
)
 
```

Compute gradients of  `loss`  for the variables in  `var_list` .

This adjusts the dynamic range of the gradient evaluation by scaling upthe  `loss`  value. The gradient values are then scaled back down by therecipricol of the loss scale. This is useful in reduced precision trainingwhere small gradient values would otherwise underflow the representablerange.

#### 参数：
- **`loss`** : A Tensor containing the value to minimize or a callable taking noarguments which returns the value to minimize. When eager execution isenabled it must be a callable.
- **`var_list`** : Optional list or tuple of [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) to update to minimize `loss` .  Defaults to the list of variables collected in the graph underthe key  `GraphKeys.TRAINABLE_VARIABLES` .
- **`gate_gradients`** : How to gate the computation of gradients.  Can be `GATE_NONE` ,  `GATE_OP` , or  `GATE_GRAPH` .
- **`aggregation_method`** : Specifies the method used to combine gradient terms.Valid values are defined in the class  `AggregationMethod` .
- **`colocate_gradients_with_ops`** : If True, try colocating gradients with thecorresponding op.
- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .


#### 返回：
A list of (gradient, variable) pairs. Variable is always present, butgradient can be  `None` .

###  `get_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L352-L353)

```
 get_name()
 
```

###  `get_slot` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L735-L771)

```
 get_slot(
    var,
    name
)
 
```

Return a slot named  `name`  created for  `var`  by the Optimizer.

Some  `Optimizer`  subclasses use additional variables.  For example `Momentum`  and  `Adagrad`  use variables to accumulate updates.  This methodgives access to these  `Variable`  objects if for some reason you need them.

Use  `get_slot_names()`  to get the list of slot names created by the `Optimizer` .

#### 参数：
- **`var`** : A variable passed to  `minimize()`  or  `apply_gradients()` .
- **`name`** : A string.


#### 返回：
The  `Variable`  for the slot if it was created,  `None`  otherwise.

###  `get_slot_names` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L773-L781)

```
 get_slot_names()
 
```

Return a list of the names of slots created by the  `Optimizer` .

See  `get_slot()` .

#### 返回：
字符串列表。

###  `minimize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L355-L413)

```
 minimize(
    loss,
    global_step=None,
    var_list=None,
    gate_gradients=GATE_OP,
    aggregation_method=None,
    colocate_gradients_with_ops=False,
    name=None,
    grad_loss=None
)
 
```

Add operations to minimize  `loss`  by updating  `var_list` .

This method simply combines calls  `compute_gradients()`  and `apply_gradients()` . If you want to process the gradient before applyingthem call  `compute_gradients()`  and  `apply_gradients()`  explicitly insteadof using this function.

#### 参数：
- **`loss`** : A  `Tensor`  containing the value to minimize.
- **`global_step`** : Optional  `Variable`  to increment by one after thevariables have been updated.
- **`var_list`** : Optional list or tuple of  `Variable`  objects to update tominimize  `loss` .  Defaults to the list of variables collected inthe graph under the key  `GraphKeys.TRAINABLE_VARIABLES` .
- **`gate_gradients`** : How to gate the computation of gradients.  Can be `GATE_NONE` ,  `GATE_OP` , or   `GATE_GRAPH` .
- **`aggregation_method`** : Specifies the method used to combine gradient terms.Valid values are defined in the class  `AggregationMethod` .
- **`colocate_gradients_with_ops`** : If True, try colocating gradients withthe corresponding op.
- **`name`** : Optional name for the returned operation.
- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .


#### 返回：
An Operation that updates the variables in  `var_list` .  If  `global_step` was not  `None` , that operation also increments  `global_step` .

#### 加薪：
- **`ValueError`** : If some of the variables are not  `Variable`  objects.


#### 迫切的兼容性
When eager execution is enabled,  `loss`  should be a Python function thattakes no arguments and computes the value to be minimized. Minimization (andgradient computation) is done with respect to the elements of  `var_list`  ifnot None, else with respect to any trainable variables created during theexecution of the  `loss`  function.  `gate_gradients` ,  `aggregation_method` , `colocate_gradients_with_ops`  and  `grad_loss`  are ignored when eagerexecution is enabled.

###  `variables` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L783-L809)

```
 variables()
 
```

A list of variables which encode the current state of  `Optimizer` .

Includes slot variables and additional global variables created by theoptimizer in the current default graph.

#### 返回：
变量列表。

## Class 成员
-  `GATE_GRAPH = 2`  
-  `GATE_NONE = 0`  
-  `GATE_OP = 1`  
