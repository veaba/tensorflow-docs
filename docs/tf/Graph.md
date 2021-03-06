

## Class  `Graph` 
A TensorFlow computation, represented as a dataflow graph.

**别名** : [ `tf.compat.v1.Graph` ](/api_docs/python/tf/Graph), [ `tf.compat.v2.Graph` ](/api_docs/python/tf/Graph)

A  `Graph`  contains a set of[ `tf.Operation` ](https://tensorflow.google.cn/api_docs/python/tf/Operation) objects,which represent units of computation; and[ `tf.Tensor` ](https://tensorflow.google.cn/api_docs/python/tf/Tensor) objects, which representthe units of data that flow between operations.

A default  `Graph`  is always registered, and accessible by calling[ `tf.compat.v1.get_default_graph` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/get_default_graph).To add an operation to the default graph, simply call one of the functionsthat defines a new  `Operation` :

```
 c = tf.constant(4.0)
assert c.graph is tf.compat.v1.get_default_graph()
 
```

Another typical usage involves the[ `tf.Graph.as_default` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#as_default)context manager, which overrides the current default graph for thelifetime of the context:

```
 g = tf.Graph()
with g.as_default():
  # Define operations and tensors in `g`.
  c = tf.constant(30.0)
  assert c.graph is g
 
```

Important 注意：This class *is not* thread-safe for graph construction. Alloperations should be created from a single thread, or externalsynchronization must be provided. Unless otherwise specified, all methodsare not thread-safe.

A  `Graph`  instance supports an arbitrary number of "collections"that are identified by name. For convenience when building a largegraph, collections can store groups of related objects: forexample, the [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable) uses a collection (named `tf.GraphKeys.GLOBAL_VARIABLES` ) forall variables that are created during the construction of a graph. The callermay define additional collections by specifying a new name.

##  `__init__` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2814-L2926)

```
 __init__()
 
```

Creates a new, empty Graph.

## 属性


###  `building_function` 
如果此图表示函数，则返回true。

###  `collections` 
返回此图已知的集合的名称。

###  `finalized` 
如果此图已完成，则为true。

###  `graph_def_versions` 
此图的graphdef版本信息。

For details on the meaning of each version, see[ `GraphDef` ](https://tensorflow.google.cn/code/tensorflow/core/framework/graph.proto).

#### 返回：
A  `VersionDef` .

###  `seed` 
The graph-level random seed of this graph.

###  `version` 
返回一个版本号，该版本号随着操作添加到图中而增加。

Note that this is unrelated to the[ `tf.Graph.graph_def_versions` ](https://tensorflow.google.cn/api_docs/python/tf/Graph#graph_def_versions).

#### 返回：
一个整数版本，当操作添加到图中时会增加。

## 方法


###  `add_to_collection` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3879-L3895)

```
 add_to_collection(
    name,
    value
)
 
```

Stores  `value`  in the collection with the given  `name` .

Note that collections are not sets, so it is possible to add a value toa collection several times.

#### 参数：
- **`name`** : The key for the collection. The  `GraphKeys`  class contains manystandard names for collections.
- **`value`** : The value to add to the collection.


###  `add_to_collections` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3897-L3916)

```
 add_to_collections(
    names,
    value
)
 
```

Stores  `value`  in the collections given by  `names` .

Note that collections are not sets, so it is possible to add a value toa collection several times. This function makes sure that duplicates in `names`  are ignored, but it will not check for pre-existing membership of `value`  in any of the collections in  `names` .

 `names`  can be any iterable, but if  `names`  is a string, it is treated as asingle collection name.

#### 参数：
- **`names`** : The keys for the collections to add to. The  `GraphKeys`  classcontains many standard names for collections.
- **`value`** : The value to add to the collections.


###  `as_default` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3832-L3872)

```
 as_default()
 
```

Returns a context manager that makes this  `Graph`  the default graph.

This method should be used if you want to create multiple graphsin the same process. For convenience, a global default graph isprovided, and all ops will be added to this graph if you do notcreate a new graph explicitly.

Use this method with the  `with`  keyword to specify that ops created withinthe scope of a block should be added to this graph. In this case, oncethe scope of the  `with`  is exited, the previous default graph is set againas default. There is a stack, so it's ok to have multiple nested levelsof  `as_default`  calls.

The default graph is a property of the current thread. If youcreate a new thread, and wish to use the default graph in thatthread, you must explicitly add a  `with g.as_default():`  in thatthread's function.

以下代码示例是等效的：

```
 # 1. Using Graph.as_default():
g = tf.Graph()
with g.as_default():
  c = tf.constant(5.0)
  assert c.graph is g

# 2. Constructing and making default:
with tf.Graph().as_default() as g:
  c = tf.constant(5.0)
  assert c.graph is g
 
```

If eager execution is enabled ops created under this context manager will beadded to the graph instead of executed eagerly.

#### 返回：
用于将此图用作默认图的上下文管理器。

###  `as_graph_def` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3215-L3242)

```
 as_graph_def(
    from_version=None,
    add_shapes=False
)
 
```

Returns a serialized  `GraphDef`  representation of this graph.

The serialized  `GraphDef`  can be imported into another  `Graph` (using [ `tf.import_graph_def` ](https://tensorflow.google.cn/api_docs/python/tf/graph_util/import_graph_def)) or used with the[C++ Session API](https://tensorflow.google.cn/api_docs/api_docs/cc/index).

This method is thread-safe.

#### 参数：
- **`from_version`** : Optional.  If this is set, returns a  `GraphDef`  containingonly the nodes that were added to this graph since its  `version` property had the given value.
- **`add_shapes`** : If true, adds an "_output_shapes" list attr to each node withthe inferred shapes of each of its outputs.


#### 返回：
A[ `GraphDef` ](https://tensorflow.google.cn/code/tensorflow/core/framework/graph.proto)protocol buffer.

#### 加薪：
- **`ValueError`** : If the  `graph_def`  would be too large.


###  `as_graph_element` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3576-L3610)

```
 as_graph_element(
    obj,
    allow_tensor=True,
    allow_operation=True
)
 
```

Returns the object referred to by  `obj` , as an  `Operation`  or  `Tensor` .

This function validates that  `obj`  represents an element of thisgraph, and gives an informative error message if it is not.

This function is the canonical way to get/validate an object ofone of the allowed types from an external argument reference in theSession API.

此方法可以从多个线程并发调用。

#### 参数：
- **`obj`** : A  `Tensor` , an  `Operation` , or the name of a tensor or operation. Canalso be any object with an  `_as_graph_element()`  method that returns avalue of one of these types. 注意： `_as_graph_element`  will be calledinside the graph's lock and so may not modify the graph.
- **`allow_tensor`** : If true,  `obj`  may refer to a  `Tensor` .
- **`allow_operation`** : If true,  `obj`  may refer to an  `Operation` .


#### 返回：
The  `Tensor`  or  `Operation`  in the Graph corresponding to  `obj` .

#### 加薪：
- **`TypeError`** : If  `obj`  is not a type we support attempting to convertto types.
- **`ValueError`** : If  `obj`  is of an appropriate type but invalid. Forexample, an invalid string.
- **`KeyError`** : If  `obj`  is not an object in the graph.


###  `clear_collection` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3984-L3994)

```
 clear_collection(name)
 
```

清除集合中的所有值。

#### 参数：
- **`name`** : The key for the collection. The  `GraphKeys`  class contains manystandard names for collections.


###  `colocate_with` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4230-L4301)

```
 colocate_with(
    op,
    ignore_existing=False
)
 
```

返回一个上下文管理器，该上下文管理器指定要与之并置的操作。


**Note:**  this function is not for public use, only for internal libraries.


#### 例如：


```
 a = tf.Variable([1.0])
with g.colocate_with(a):
  b = tf.constant(1.0)
  c = tf.add(a, b)
 
```

 `b`  and  `c`  will always be colocated with  `a` , no matter where  `a` is eventually placed.

**NOTE**  Using a colocation scope resets any existing device constraints.

If  `op`  is  `None`  then  `ignore_existing`  must be  `True`  and the newscope resets all colocation and device constraints.

#### 参数：
- **`op`** : The op to colocate all created ops with, or  `None` .
- **`ignore_existing`** : If true, only applies colocation of this op within thecontext, rather than applying all colocation properties on the stack.If  `op`  is  `None` , this value must be  `True` .


#### 加薪：
- **`ValueError`** : if op is None but ignore_existing is False.


#### 收益率：
A context manager that specifies the op with which to colocatenewly created ops.

###  `container` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4407-L4457)

```
 container(container_name)
 
```

返回指定要使用的资源容器的上下文管理器。

Stateful operations, such as variables and queues, can maintain theirstates on devices so that they can be shared by multiple processes.A resource container is a string name under which these statefuloperations are tracked. These resources can be released or clearedwith  `tf.Session.reset()` .

#### 例如：


```
 with g.container('experiment0'):
  # All stateful Operations constructed in this context will be placed
  # in resource container "experiment0".
  v1 = tf.Variable([1.0])
  v2 = tf.Variable([2.0])
  with g.container("experiment1"):
    # All stateful Operations constructed in this context will be
    # placed in resource container "experiment1".
    v3 = tf.Variable([3.0])
    q1 = tf.queue.FIFOQueue(10, tf.float32)
  # All stateful Operations constructed in this context will be
  # be created in the "experiment0".
  v4 = tf.Variable([4.0])
  q1 = tf.queue.FIFOQueue(20, tf.float32)
  with g.container(""):
    # All stateful Operations constructed in this context will be
    # be placed in the default resource container.
    v5 = tf.Variable([5.0])
    q3 = tf.queue.FIFOQueue(30, tf.float32)

# Resets container "experiment0", after which the state of v1, v2, v4, q1
# will become undefined (such as uninitialized).
tf.Session.reset(target, ["experiment0"])
 
```

#### 参数：
- **`container_name`** : container name string.


#### 返回：
A context manager for defining resource containers for stateful ops,  yields the container name.

###  `control_dependencies` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4588-L4699)

```
 control_dependencies(control_inputs)
 
```

返回指定控件依赖项的上下文管理器。

Use with the  `with`  keyword to specify that all operations constructedwithin the context should have control dependencies on `control_inputs` . For example:

```
 with g.control_dependencies([a, b, c]):
  # `d` and `e` will only run after `a`, `b`, and `c` have executed.
  d = ...
  e = ...
 
```

Multiple calls to  `control_dependencies()`  can be nested, and inthat case a new  `Operation`  will have control dependencies on the unionof  `control_inputs`  from all active contexts.

```
 with g.control_dependencies([a, b]):
  # Ops constructed here run after `a` and `b`.
  with g.control_dependencies([c, d]):
    # Ops constructed here run after `a`, `b`, `c`, and `d`.
 
```

您可以传递“无”以清除控件依赖项：

```
 with g.control_dependencies([a, b]):
  # Ops constructed here run after `a` and `b`.
  with g.control_dependencies(None):
    # Ops constructed here run normally, not waiting for either `a` or `b`.
    with g.control_dependencies([c, d]):
      # Ops constructed here run after `c` and `d`, also not waiting
      # for either `a` or `b`.
 
```

*N.B.* The control dependencies context applies *only* to ops thatare constructed within the context. Merely using an op or tensorin the context does not add a control dependency. The followingexample illustrates this point:

```
 # WRONG
def my_func(pred, tensor):
  t = tf.matmul(tensor, tensor)
  with tf.control_dependencies([pred]):
    # The matmul op is created outside the context, so no control
    # dependency will be added.
    return t

# RIGHT
def my_func(pred, tensor):
  with tf.control_dependencies([pred]):
    # The matmul op is created in the context, so a control dependency
    # will be added.
    return tf.matmul(tensor, tensor)
 
```

Also note that though execution of ops created under this scope will triggerexecution of the dependencies, the ops created under this scope might stillbe pruned from a normal tensorflow graph. For example, in the followingsnippet of code the dependencies are never executed:

```
   loss = model.loss()
  with tf.control_dependencies(dependencies):
    loss = loss + tf.constant(1)  # 注意：dependencies ignored in the
                                  # backward pass
  return tf.gradients(loss, model.variables)
 
```

This is because evaluating the gradient graph does not require evaluatingthe constant(1) op created in the forward pass.

#### 参数：
- **`control_inputs`** : A list of  `Operation`  or  `Tensor`  objects which must beexecuted or computed before running the operations defined in thecontext.  Can also be  `None`  to clear the control dependencies.


#### 返回：
A context manager that specifies control dependencies for alloperations constructed within the context.

#### 加薪：
- **`TypeError`** : If  `control_inputs`  is not a list of  `Operation`  or `Tensor`  objects.


###  `create_op` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3304-L3360)

```
 create_op(
    op_type,
    inputs,
    dtypes=None,
    input_types=None,
    name=None,
    attrs=None,
    op_def=None,
    compute_shapes=True,
    compute_device=True
)
 
```

Creates an  `Operation`  in this graph. (deprecated arguments)


**Warning:**  SOME ARGUMENTS ARE DEPRECATED:  `(compute_shapes)` . They will be removed in a future version.Instructions for updating:Shapes are always computed; don't use the compute_shapes as it has no effect.
This is a low-level interface for creating an  `Operation` . Mostprograms will not call this method directly, and instead use thePython op constructors, such as [ `tf.constant()` ](https://tensorflow.google.cn/api_docs/python/tf/constant), which add ops tothe default graph.

#### 参数：
- **`op_type`** : The  `Operation`  type to create. This corresponds to the `OpDef.name`  field for the proto that defines the operation.
- **`inputs`** : A list of  `Tensor`  objects that will be inputs to the  `Operation` .
- **`dtypes`** : (Optional) A list of  `DType`  objects that will be the types of thetensors that the operation produces.
- **`input_types`** : (Optional.) A list of  `DType` s that will be the types of thetensors that the operation consumes. By default, uses the base  `DType` of each input in  `inputs` . Operations that expect reference-typed inputsmust specify  `input_types`  explicitly.
- **`name`** : (Optional.) A string name for the operation. If not specified, aname is generated based on  `op_type` .
- **`attrs`** : (Optional.) A dictionary where the key is the attribute name (astring) and the value is the respective  `attr`  attribute of the `NodeDef`  proto that will represent the operation (an  `AttrValue` proto).
- **`op_def`** : (Optional.) The  `OpDef`  proto that describes the  `op_type`  thatthe operation will have.
- **`compute_shapes`** : (Optional.) Deprecated. Has no effect (shapes are alwayscomputed).
- **`compute_device`** : (Optional.) If True, device functions will be executed tocompute the device property of the Operation.


#### 加薪：
- **`TypeError`** : if any of the inputs is not a  `Tensor` .
- **`ValueError`** : if colocation conflicts with existing device assignment.


#### 返回：
An  `Operation`  object.

###  `device` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4310-L4379)

```
 device(device_name_or_function)
 
```

返回指定要使用的默认设备的上下文管理器。

The  `device_name_or_function`  argument may either be a device namestring, a device function, or None:

- If it is a device name string, all operations constructed inthis context will be assigned to the device with that name, unlessoverridden by a nested  `device()`  context.
- If it is a function, it will be treated as a function fromOperation objects to device name strings, and invoked each timea new Operation is created. The Operation will be assigned tothe device with the returned name.
- If it is None, all  `device()`  invocations from the enclosing contextwill be ignored.
For information about the valid syntax of device name strings, seethe documentation in[ `DeviceNameUtils` ](https://tensorflow.google.cn/code/tensorflow/core/util/device_name_utils.h).

#### 例如：


```
 with g.device('/device:GPU:0'):
  # All operations constructed in this context will be placed
  # on GPU 0.
  with g.device(None):
    # All operations constructed in this context will have no
    # assigned device.

# Defines a function from `Operation` to device string.
def matmul_on_gpu(n):
  if n.type == "MatMul":
    return "/device:GPU:0"
  else:
    return "/cpu:0"

with g.device(matmul_on_gpu):
  # All operations of type "MatMul" constructed in this context
  # will be placed on GPU 0; all other operations will be placed
  # on CPU 0.
 
```

**N.B.**  The device scope may be overridden by op wrappers orother library code. For example, a variable assignment op `v.assign()`  must be colocated with the [ `tf.Variable` ](https://tensorflow.google.cn/api_docs/python/tf/Variable)  `v` , andincompatible device scopes will be ignored.

#### 参数：
- **`device_name_or_function`** : The device name or function to use in thecontext.


#### 收益率：
A context manager that specifies the default device to use for newlycreated ops.

#### 加薪：
- **`RuntimeError`** : If device scopes are not properly nested.


###  `finalize` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3084-L3092)

```
 finalize()
 
```

Finalizes this graph, making it read-only.

After calling  `g.finalize()` , no new operations can be added to `g` .  This method is used to ensure that no operations are addedto a graph when it is shared between multiple threads, for examplewhen using a [ `tf.compat.v1.train.QueueRunner` ](https://tensorflow.google.cn/api_docs/python/tf/compat/v1/train/QueueRunner).

###  `get_all_collection_keys` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3979-L3982)

```
 get_all_collection_keys()
 
```

返回此图中使用的集合的列表。

###  `get_collection` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3943-L3977)

```
 get_collection(
    name,
    scope=None
)
 
```

Returns a list of values in the collection with the given  `name` .

This is different from  `get_collection_ref()`  which always returns theactual collection list if it exists in that it returns a new list each timeit is called.

#### 参数：
- **`name`** : The key for the collection. For example, the  `GraphKeys`  classcontains many standard names for collections.
- **`scope`** : (Optional.) A string. If supplied, the resulting list is filteredto include only items whose  `name`  attribute matches  `scope`  using `re.match` . Items without a  `name`  attribute are never returned if ascope is supplied. The choice of  `re.match`  means that a  `scope`  withoutspecial tokens filters by prefix.


#### 返回：
The list of values in the collection with the given  `name` , oran empty list if no value has been added to that collection. Thelist contains the values in the order under which they werecollected.

###  `get_collection_ref` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3918-L3941)

```
 get_collection_ref(name)
 
```

Returns a list of values in the collection with the given  `name` .

If the collection exists, this returns the list itself, which canbe modified in place to change the collection.  If the collection doesnot exist, it is created as an empty list and the list is returned.

This is different from  `get_collection()`  which always returns a copy ofthe collection list if it exists and never creates an empty collection.

#### 参数：
- **`name`** : The key for the collection. For example, the  `GraphKeys`  classcontains many standard names for collections.


#### 返回：
The list of values in the collection with the given  `name` , or an emptylist if no value has been added to that collection.

###  `get_name_scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4200-L4215)

```
 get_name_scope()
 
```

返回当前名称范围。

#### 例如：


```
 with tf.name_scope('scope1'):
  with tf.name_scope('scope2'):
    print(tf.compat.v1.get_default_graph().get_name_scope())
 
```

would print the string  `scope1/scope2` .

#### 返回：
表示当前名称作用域的字符串。

###  `get_operation_by_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3719-L3738)

```
 get_operation_by_name(name)
 
```

Returns the  `Operation`  with the given  `name` .

此方法可以从多个线程并发调用。

#### 参数：
- **`name`** : The name of the  `Operation`  to return.


#### 返回：
The  `Operation`  with the given  `name` .

#### 加薪：
- **`TypeError`** : If  `name`  is not a string.
- **`KeyError`** : If  `name`  does not correspond to an operation in this graph.


###  `get_operations` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3701-L3717)

```
 get_operations()
 
```

返回图形中的操作列表。

You can modify the operations in place, but modificationsto the list such as inserts/delete have no effect on thelist of operations known to the graph.

此方法可以从多个线程并发调用。

#### 返回：
操作列表。

###  `get_tensor_by_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L3767-L3786)

```
 get_tensor_by_name(name)
 
```

Returns the  `Tensor`  with the given  `name` .

此方法可以从多个线程并发调用。

#### 参数：
- **`name`** : The name of the  `Tensor`  to return.


#### 返回：
The  `Tensor`  with the given  `name` .

#### 加薪：
- **`TypeError`** : If  `name`  is not a string.
- **`KeyError`** : If  `name`  does not correspond to a tensor in this graph.


###  `gradient_override_map` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4831-L4890)

```
 gradient_override_map(op_type_map)
 
```

实验性的：用于覆盖渐变函数的上下文管理器。

This context manager can be used to override the gradient functionthat will be used for ops within the scope of the context.

#### 例如：


```
 @tf.RegisterGradient("CustomSquare")
def _custom_square_grad(op, grad):
  # ...

with tf.Graph().as_default() as g:
  c = tf.constant(5.0)
  s_1 = tf.square(c)  # Uses the default gradient for tf.square.
  with g.gradient_override_map({"Square": "CustomSquare"}):
    s_2 = tf.square(s_2)  # Uses _custom_square_grad to compute the
                          # gradient of s_2.
 
```

#### 参数：
- **`op_type_map`** : A dictionary mapping op type strings to alternative op typestrings.


#### 返回：
A context manager that sets the alternative op type to be used for oneor more ops created in that context.

#### 加薪：
- **`TypeError`** : If  `op_type_map`  is not a dictionary mapping strings tostrings.


###  `is_feedable` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4898-L4900)

```
 is_feedable(tensor)
 
```

Returns  `True`  if and only if  `tensor`  is feedable.

###  `is_fetchable` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4906-L4911)

```
 is_fetchable(tensor_or_op)
 
```

Returns  `True`  if and only if  `tensor_or_op`  is fetchable.

###  `name_scope` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4033-L4144)

```
 name_scope(name)
 
```

返回为操作创建分层名称的上下文管理器。

A graph maintains a stack of name scopes. A  `with name_scope(...):` statement pushes a new name onto the stack for the lifetime of the context.

The  `name`  argument will be interpreted as follows:

- A string (not ending with '/') will create a new name scope, in which `name`  is appended to the prefix of all operations created in thecontext. If  `name`  has been used before, it will be made unique bycalling  `self.unique_name(name)` .
- A scope previously captured from a  `with g.name_scope(...) asscope:`  statement will be treated as an "absolute" name scope, whichmakes it possible to re-enter existing scopes.
- A value of  `None`  or the empty string will reset the current name scopeto the top-level (empty) name scope.


#### 例如：


```
 with)
 )
 )
 )
 )
 )
 )
          assert e.op.name == "e"
 
```

The name of the scope itself can be captured by  `withg.name_scope(...) as scope:` , which stores the name of the scopein the variable  `scope` . This value can be used to name anoperation that represents the overall result of executing the opsin a scope. For example:

```
 inputs)
 )
  affine = tf.matmul(inputs, weights) + biases
  output = tf.nn.relu(affine, name=scope)
 
```

注意：This constructor validates the given  `name` . Valid scopenames match one of the following regular expressions:

```
 [A-Za-z0-9.][A-Za-z0-9_.\-/]* (for scopes at the root)
[A-Za-z0-9_.\-/]* (for other scopes)
 
```

#### 参数：
- **`name`** : A name for the scope.


#### 返回：
A context manager that installs  `name`  as a new name scope.

#### 加薪：
- **`ValueError`** : If  `name`  is not a valid scope name, according to the rulesabove.


###  `prevent_feeding` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4894-L4896)

```
 prevent_feeding(tensor)
 
```

Marks the given  `tensor`  as unfeedable in this graph.

###  `prevent_fetching` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4902-L4904)

```
 prevent_fetching(op)
 
```

Marks the given  `op`  as unfetchable in this graph.

###  `switch_to_thread_local` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4913-L4928)

```
 switch_to_thread_local()
 
```

Make device, colocation and dependencies stacks thread-local.

Device, colocation and dependencies stacks are not thread-local be default.If multiple threads access them, then the state is shared.  This means thatone thread may affect the behavior of another thread.

After this method is called, the stacks become thread-local.  If multiplethreads access them, then the state is not shared.  Each thread uses its ownvalue; a thread doesn't affect other threads by mutating such a stack.

The initial value for every thread's stack is set to the current valueof the stack when  `switch_to_thread_local()`  was first called.

###  `unique_name` 
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L4148-L4198)

```
 unique_name(
    name,
    mark_as_used=True
)
 
```

Return a unique operation name for  `name` .


**Note:**  You rarely need to call  `unique_name()`  directly.  Most ofthe time you just need to create  `with g.name_scope()`  blocks togenerate structured names.
 `unique_name`  is used to generate structured names, separated by `"/"` , to help identify operations when debugging a graph.Operation names are displayed in error messages reported by theTensorFlow runtime, and in various visualization tools such asTensorBoard.

If  `mark_as_used`  is set to  `True` , which is the default, a newunique name is created and marked as in use. If it's set to  `False` ,the unique name is returned without actually being marked as used.This is useful when the caller simply wants to know what the nameto be created will be.

#### 参数：
- **`name`** : The name for an operation.
- **`mark_as_used`** : Whether to mark this name as being used.


#### 返回：
A string to be passed to  `create_op()`  that will be usedto name the operation being created.

