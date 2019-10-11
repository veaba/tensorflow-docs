## Class Operation

Represents a graph node that performs computation on tensors.
### Aliases:
- Class `tf.compat.v1.Operation`
- Class `tf.compat.v2.Operation`
[tf.matmul](https://tensorflow.google.cn/api_docs/python/tf/linalg/matmul)An Operation is a node in a TensorFlow Graph that takes zero or more Tensor objects as input, and produces zero or more Tensor objects as output. Objects of type Operation are created by calling a Python op constructor (such as ) or tf.Graph.create_op.


For example c = tf.matmul(a, b) creates an Operation of type "MatMul" that takes tensors a and b as input, and produces c as output.

After the graph has been launched in a session, an Operation can be executed by passing it to tf.Session.run. op.run() is a shortcut for calling tf.compat.v1.get_default_session().run(op).
## __init__
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

Creates an Operation.

NOTE: This constructor validates the name of the Operation (passed as node_def.name). Valid Operation names match the following regular expression:

```
 [A-Za-z0-9.][A-Za-z0-9_.\\-/]*
```
#### Args:
- `node_def`: `node_def`_pb2.`NodeDef`. `NodeDef` for the `Operation`. Used for attributes of `node_def`_pb2.`NodeDef`, typically `name`, `op`, and `device`. The `input` attribute is irrelevant here as it will be computed when generating the model.
- `g`: `Graph`. The parent `g`raph.
- `input`s: list of `Tensor` objects. The `input`s to this `Operation`.
- `output_types`: list of `DType` objects. List of the types of the `Tensor`s computed by this `op`eration. The len`g`th of this list indicates the number of output endpoints of the `Operation`.
- `control_inputs`: list of `op`erations or tensors from which to have a control dependency.
- `input``_``t``y``p``e``s`:` `L`i``s``t`` ``o``f`` ``DType`` ``o``b`j`e`c`t``s`` ``r``e``p``r``e``s``e``n``t``i``n``g`` ``t`h`e`` ``t``y``p``e``s`` ``o``f`` ``t`h`e`` ``t``e``n``s``o``r``s`` ``a`cc`e``p``t``e``d`` ``b``y`` ``t`h`e`` ``Operation``.`` `B`y`` ``d``e``f``a``u`l`t`` ``u``s``e``s`` `[`x``.``d``t``y``p``e``.``b``a``s``e``_``d``t``y``p``e`` ``f``o``r`` ``x`` ``i``n`` ``input``s`]`.`` ``Operation``s`` ``t`h`a``t`` ``e``x``p``e`c`t`` ``r``e``f``e``r``e``n`c`e`-`t``y``p``e``d`` ``input``s`` `m`u``s``t`` ``s``p``e`c`i``f``y`` ``t`h`e``s``e`` ``e``x``p`l`i`c`i``t`l`y``.`
- `o``r``i``g``i``n``a`l`_``op`:` `O`p``t``i``o``n``a`l`.`` `U`s``e``d`` ``t``o`` ``a``s``s``o`c`i``a``t``e`` ``t`h`e`` ``n``e`w` ``Operation`` `w`i``t`h` ``a``n`` ``e``x``i``s``t``i``n``g`` ``Operation`` `(`f``o``r`` ``e``x``a`m`p`l`e`,` ``a`` ``r``e``p`l`i`c`a`` `w`i``t`h` ``t`h`e`` ``op`` ``t`h`a``t`` `w`a``s`` ``r``e``p`l`i`c`a``t``e``d`)`.`
- `op``_``d``e``f`:` `O`p``t``i``o``n``a`l`.`` `Th`e`` ``op``_``d``e``f``_``p``b`2`.`O`p`D`e``f`` ``p``r``o``t``o`` ``t`h`a``t`` ``d``e``s`c`r``i``b``e``s`` ``t`h`e`` ``op`` ``t``y``p``e`` ``t`h`a``t`` ``t`h`i``s`` ``Operation`` ``r``e``p``r``e``s``e``n``t``s``.`
#### Raises:
- `TypeError`: if control `inputs` are not Operations or Tensors, or if `node_def` is not a `NodeDef`, or if `g` is not a `Graph`, or if `inputs` are not tensors, or if `inputs` and `input_types` are incompatible.
- `ValueError`: if the `node_def` name is not valid.
## Properties
### control_inputs

The Operation objects on which this op has a control dependency.

Before this op is executed, TensorFlow will ensure that the operations in self.control_inputs have finished executing. This mechanism can be used to run ops sequentially for performance reasons, or to ensure that the side effects of an op are observed in the correct order.
#### Returns:

A list of Operation objects.
### device

The name of the device to which this op has been assigned, if any.
#### Returns:

The string name of the device to which this op has been assigned, or an empty string if it has not been assigned to a device.
### graph

The Graph that contains this operation.
### inputs

The list of Tensor objects representing the data inputs of this op.
### name

The full name of this operation.
### node_def

Returns the NodeDef representation of this operation.
#### Returns:
[NodeDef](https://tensorflow.google.cn/code/tensorflow/core/framework/node_def.proto)A  protocol buffer.

### op_def

Returns the OpDef proto that represents the type of this op.
#### Returns:
[OpDef](https://tensorflow.google.cn/code/tensorflow/core/framework/op_def.proto)An  protocol buffer.

### outputs

The list of Tensor objects representing the outputs of this op.
### traceback

Returns the call stack from when this operation was constructed.
### traceback_with_start_lines

Same as traceback but includes start line of function definition.
#### Returns:

A list of 5-tuples (filename, lineno, name, code, func_start_lineno).
### type

The type of the op (e.g. "MatMul").
## Methods
### colocation_groups
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L1840-L1857)


```
 colocation_groups()
```

Returns the list of colocation groups of the op.
### get_attr
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2368-L2405)


```
 get_attr(name)
```

Returns the value of the attr of this op with the given name.
#### Args:
- `name`: The `name` of the attr to fetch.
#### Returns:

The value of the attr, as a Python object.
#### Raises:
- `ValueError`: If this op does not have an attr with the given `name`.
### run
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L2426-L2442)


```
 run(
    feed_dict=None,
    session=None
)
```

Runs this operation in a Session.

Calling this method will execute all preceding operations that produce the inputs needed for this operation.
[Operation.run()](https://tensorflow.google.cn/api_docs/python/tf/Operation#run)N.B. Before invoking , its graph must have been launched in a session, and either a default session must be available, or session must be specified explicitly.

#### Args:
- `feed_dict`: A dictionary that maps `Tensor` objects to feed values. See `tf.Session.run` for a description of the valid feed values.
- `session`: (Optional.) The `Session` to be used to run to this operation. If none, the default `session` will be used.
### values
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/ops.py#L1859-L1861)


```
 values()
```

DEPRECATED: Use outputs.
