

## Class  `Operation` 
表示对张量执行计算的图形节点。

**别名** : [ `tf.compat.v1.Operation` ](/api_docs/python/tf/Operation), [ `tf.compat.v2.Operation` ](/api_docs/python/tf/Operation)

An  `Operation`  is a node in a TensorFlow  `Graph`  that takes zero ormore  `Tensor`  objects as input, and produces zero or more  `Tensor` objects as output. Objects of type  `Operation`  are created bycalling a Python op constructor (such as[ `tf.matmul` ](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul))or [ `tf.Graph.create_op` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#create_op).

For example  `c = tf.matmul(a, b)`  creates an  `Operation`  of type"MatMul" that takes tensors  `a`  and  `b`  as input, and produces  `c` as output.

After the graph has been launched in a session, an  `Operation`  canbe executed by passing it to `tf.Session.run` . `op.run()`  is a shortcut for calling `tf.compat.v1.get_default_session().run(op)` .

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L1640-L1792)

```
 __init__(
    node_def,
    g,
    inputs=None,
    output_types=None,
    control_inputs=None,
    input_types=None,
    original_op=None,
    op_def=None
)
 
```

Creates an  `Operation` .

注意：This constructor validates the name of the  `Operation`  (passedas  `node_def.name` ). Valid  `Operation`  names match the followingregular expression:

```
 [A-Za-z0-9.][A-Za-z0-9_.\\-/]*
 
```

#### 参数：
- **`node_def`** :  `node_def_pb2.NodeDef` .   `NodeDef`  for the  `Operation` . Used forattributes of  `node_def_pb2.NodeDef` , typically  `name` ,  `op` , and `device` .  The  `input`  attribute is irrelevant here as it will becomputed when generating the model.
- **`g`** :  `Graph` . The parent graph.
- **`inputs`** : list of  `Tensor`  objects. The inputs to this  `Operation` .
- **`output_types`** : list of  `DType`  objects.  List of the types of the  `Tensors` computed by this operation.  The length of this list indicates thenumber of output endpoints of the  `Operation` .
- **`control_inputs`** : list of operations or tensors from which to have a controldependency.
- **`input_types`** : List of  `DType`  objects representing the types of the tensorsaccepted by the  `Operation` .  By default uses  `[x.dtype.base_dtype for xin inputs]` .  Operations that expect reference-typed inputs must specifythese explicitly.
- **`original_op`** : Optional. Used to associate the new  `Operation`  with anexisting  `Operation`  (for example, a replica with the op that wasreplicated).
- **`op_def`** : Optional. The  `op_def_pb2.OpDef`  proto that describes the op typethat this  `Operation`  represents.


#### 加薪：
- **`TypeError`** : if control inputs are not Operations or Tensors,or if  `node_def`  is not a  `NodeDef` ,or if  `g`  is not a  `Graph` ,or if  `inputs`  are not tensors,or if  `inputs`  and  `input_types`  are incompatible.
- **`ValueError`** : if the  `node_def`  name is not valid.


## 属性


###  `control_inputs` 
The  `Operation`  objects on which this op has a control dependency.

Before this op is executed, TensorFlow will ensure that theoperations in  `self.control_inputs`  have finished executing. Thismechanism can be used to run ops sequentially for performancereasons, or to ensure that the side effects of an op are observedin the correct order.

#### 返回：
A list of  `Operation`  objects.

###  `device` 
The name of the device to which this op has been assigned, if any.

#### 返回：
The string name of the device to which this op has beenassigned, or an empty string if it has not been assigned to adevice.

###  `graph` 
The  `Graph`  that contains this operation.

###  `inputs` 
The list of  `Tensor`  objects representing the data inputs of this op.

###  `name` 
此操作的全名。

###  `node_def` 
Returns the  `NodeDef`  representation of this operation.

#### 返回：
A[ `NodeDef` ](https://tensorflow.google.cn/code/tensorflow/core/framework/node_def.proto)protocol buffer.

###  `op_def` 
Returns the  `OpDef`  proto that represents the type of this op.

#### 返回：
An[ `OpDef` ](https://tensorflow.google.cn/code/tensorflow/core/framework/op_def.proto)protocol buffer.

###  `outputs` 
The list of  `Tensor`  objects representing the outputs of this op.

###  `traceback` 
返回构造此操作时的调用堆栈。

###  `traceback_with_start_lines` 
与回溯相同，但包含函数定义的起始行。

#### 返回：
A list of 5-tuples (filename, lineno, name, code, func_start_lineno).

###  `type` 
The type of the op (e.g.  `"MatMul"` ).

## 方法


###  `colocation_groups` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L1840-L1857)

```
 colocation_groups()
 
```

返回操作的托管组列表。

###  `get_attr` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2368-L2405)

```
 get_attr(name)
 
```

Returns the value of the attr of this op with the given  `name` .

#### 参数：
- **`name`** : The name of the attr to fetch.


#### 返回：
The value of the attr, as a Python object.

#### 加薪：
- **`ValueError`** : If this op does not have an attr with the given  `name` .


###  `run` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2426-L2442)

```
 run(
    feed_dict=None,
    session=None
)
 
```

Runs this operation in a  `Session` .

Calling this method will execute all preceding operations thatproduce the inputs needed for this operation.

*N.B.* Before invoking [ `Operation.run()` ](https://tensorflow.google.cn/api_docs/python/tf/Operation#run), its graph must have beenlaunched in a session, and either a default session must beavailable, or  `session`  must be specified explicitly.

#### 参数：
- **`feed_dict`** : A dictionary that maps  `Tensor`  objects to feed values. See `tf.Session.run`  for a description of the valid feed values.
- **`session`** : (Optional.) The  `Session`  to be used to run to this operation. Ifnone, the default session will be used.


###  `values` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L1859-L1861)

```
 values()
 
```

不推荐：使用输出。

