

## Class  `RMSPropOptimizer` 
实现rmsprop算法的优化器。

Inherits From: [ `Optimizer` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/Optimizer)

See the[paper](http://www.cs.toronto.edu/%7Etijmen/csc321/slides/lecture_slides_lec6.pdf).

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/rmsprop.py#L61-L114)

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

构造一个新的rmsprop优化器。

Note that in the dense implementation of this algorithm, variables and theircorresponding accumulators (momentum, gradient moving average, squaregradient moving average) will be updated even if the gradient is zero(i.e. accumulators will decay, momentum will be applied). The sparseimplementation (used when the gradient is an  `IndexedSlices`  object,typically because of [ `tf.gather` ](https://tensorflow.google.cn/api_docs/python/tf/gather) or an embedding lookup in the forward pass)will not update variable slices or their accumulators unless those sliceswere used in the forward pass (nor is there an "eventual" correction toaccount for these omitted updates). This leads to more efficient updates forlarge embedding lookup tables (where most of the slices are not accessed ina particular graph execution), but differs from the published algorithm.

#### 参数：
- **`learning_rate`** : A Tensor or a floating point value.  The learning rate.
- **`decay`** : Discounting factor for the history/coming gradient
- **`momentum`** : A scalar tensor.
- **`epsilon`** : Small value to avoid zero denominator.
- **`use_locking`** : If True use locks for update operation.
- **`centered`** : If True, gradients are normalized by the estimated variance ofthe gradient; if False, by the uncentered second moment. Setting this toTrue may help with training, but is slightly more expensive in terms ofcomputation and memory. Defaults to False.
- **`name`** : Optional name prefix for the operations created when applyinggradients. Defaults to "RMSProp".


#### 迫切的兼容性
When eager execution is enabled,  `learning_rate` ,  `decay` ,  `momentum` , and `epsilon`  can each be a callable that takes no arguments and returns theactual value to use. This can be useful for changing these values acrossdifferent invocations of optimizer functions.

## 方法


###  `apply_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L531-L638)

```
 apply_gradients(
    grads_and_vars,
    global_step=None,
    name=None
)
 
```

对变量应用渐变。

This is the second part of  `minimize()` . It returns an  `Operation`  thatapplies gradients.

#### 参数：
- **`grads_and_vars`** : List of (gradient, variable) pairs as returned by `compute_gradients()` .
- **`global_step`** : Optional  `Variable`  to increment by one after thevariables have been updated.
- **`name`** : Optional name for the returned operation.  Default to thename passed to the  `Optimizer`  constructor.


#### 返回：
An  `Operation`  that applies the specified gradients. If  `global_step` was not None, that operation also increments  `global_step` .

#### 加薪：
- **`TypeError`** : If  `grads_and_vars`  is malformed.
- **`ValueError`** : If none of the variables have gradients.
- **`RuntimeError`** : If you should use  `_distributed_apply()`  instead.


###  `compute_gradients` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L415-L519)

```
 compute_gradients(
    loss,
    var_list=None,
    gate_gradients=GATE_OP,
    aggregation_method=None,
    colocate_gradients_with_ops=False,
    grad_loss=None
)
 
```

Compute gradients of  `loss`  for the variables in  `var_list` .

This is the first part of  `minimize()` .  It returns a listof (gradient, variable) pairs where "gradient" is the gradientfor "variable".  Note that "gradient" can be a  `Tensor` , an `IndexedSlices` , or  `None`  if there is no gradient for thegiven variable.

#### 参数：
- **`loss`** : A Tensor containing the value to minimize or a callable takingno arguments which returns the value to minimize. When eager executionis enabled it must be a callable.
- **`var_list`** : Optional list or tuple of [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) to update to minimize `loss` .  Defaults to the list of variables collected in the graphunder the key  `GraphKeys.TRAINABLE_VARIABLES` .
- **`gate_gradients`** : How to gate the computation of gradients.  Can be `GATE_NONE` ,  `GATE_OP` , or  `GATE_GRAPH` .
- **`aggregation_method`** : Specifies the method used to combine gradient terms.Valid values are defined in the class  `AggregationMethod` .
- **`colocate_gradients_with_ops`** : If True, try colocating gradients withthe corresponding op.
- **`grad_loss`** : Optional. A  `Tensor`  holding the gradient computed for  `loss` .


#### 返回：
A list of (gradient, variable) pairs. Variable is always present, butgradient can be  `None` .

#### 加薪：
- **`TypeError`** : If  `var_list`  contains anything else than  `Variable`  objects.
- **`ValueError`** : If some arguments are invalid.
- **`RuntimeError`** : If called with eager execution enabled and  `loss`  isnot callable.


#### 迫切的兼容性
When eager execution is enabled,  `gate_gradients` ,  `aggregation_method` ,and  `colocate_gradients_with_ops`  are ignored.

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
