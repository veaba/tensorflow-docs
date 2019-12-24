

## Class  `Optimizer` 
优化器的基类。

This class defines the API to add Ops to train a model.  You never use thisclass directly, but instead instantiate one of its subclasses such as `GradientDescentOptimizer` ,  `AdagradOptimizer` , or  `MomentumOptimizer` .

### 用法


```
 # Create an optimizer with the desired parameters.
opt = GradientDescentOptimizer(learning_rate=0.1)
# Add Ops to the graph to minimize a cost by updating a list of variables.
# "cost" is a Tensor, and the list of variables contains tf.Variable
# objects.
opt_op = opt.minimize(cost, var_list=<list of variables>)
 
```

在训练计划中，你只需要运行返回的操作。

```
 # Execute opt_op to do one step of training:
opt_op.run()
 
```

### 在应用渐变之前处理渐变。
Calling  `minimize()`  takes care of both computing the gradients andapplying them to the variables.  If you want to process the gradientsbefore applying them you can instead use the optimizer in three steps:

1. Compute the gradients with  `compute_gradients()` .
2. Process the gradients as you wish.
3. Apply the processed gradients with  `apply_gradients()` .


#### 示例：


```
 # Create an optimizer.
opt = GradientDescentOptimizer(learning_rate=0.1)

# Compute the gradients for a list of variables.
grads_and_vars = opt.compute_gradients(loss, <list of variables>)

# grads_and_vars is a list of tuples (gradient, variable).  Do whatever you
# need to the 'gradient' part, for example cap them, etc.
capped_grads_and_vars = [(MyCapper(gv[0]), gv[1]) for gv in grads_and_vars]

# Ask the optimizer to apply the capped gradients.
opt.apply_gradients(capped_grads_and_vars)
 
```

### 选通梯度
Both  `minimize()`  and  `compute_gradients()`  accept a  `gate_gradients` argument that controls the degree of parallelism during the application ofthe gradients.

The possible values are:  `GATE_NONE` ,  `GATE_OP` , and  `GATE_GRAPH` .

**`GATE_NONE`** : Compute and apply gradients in parallel.  This providesthe maximum parallelism in execution, at the cost of some non-reproducibilityin the results.  For example the two gradients of  `matmul`  depend on the inputvalues: With  `GATE_NONE`  one of the gradients could be applied to one of theinputs *before* the other gradient is computed resulting in non-reproducibleresults.

**`GATE_OP`** : For each Op, make sure all gradients are computed beforethey are used.  This prevents race conditions for Ops that generate gradientsfor multiple inputs where the gradients depend on the inputs.

**`GATE_GRAPH`** : Make sure all gradients for all variables are computedbefore any one of them is used.  This provides the least parallelism but canbe useful if you want to process all gradients before applying any of them.

### 插槽
Some optimizer subclasses, such as  `MomentumOptimizer`  and  `AdagradOptimizer` allocate and manage additional variables associated with the variables totrain.  These are called <i>Slots</i>.  Slots have names and you can ask theoptimizer for the names of the slots that it uses.  Once you have a slot nameyou can ask the optimizer for the variable it created to hold the slot value.

This can be useful if you want to log debug a training algorithm, report statsabout the slots, etc.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/training/optimizer.py#L313-L343)

```
 __init__(
    use_locking,
    name
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
