## Class RegisterGradient
A decorator for registering the gradient function for an op type.
### Aliases:
- Class `tf.compat.v1.RegisterGradient`
- Class `tf.compat.v2.RegisterGradient`
This decorator is o`n`ly used whe`n` defi`n`i`n`g a `n`ew op type. For a`n` op with `m` i`n`puts a`n`d `n` outputs, the gradie`n`t fu`n`ctio`n` is a fu`n`ctio`n` that takes the origi`n`al `Operation` a`n`d `n` `Tensor` objects (represe`n`ti`n`g the gradie`n`ts with respect to each output of the op), a`n`d retur`n`s `m` `Tensor` objects (represe`n`ti`n`g the partial gradie`n`ts with respect to each i`n`put of the op).
For e`x`ample, assuming that operations of t`y`pe `"Sub"` take two inputs `x` and `y`, and return a single output `x` - `y`, the following gradient function would be registered:

```
 @tf.RegisterGradient("Sub")
def _sub_grad(unused_op, grad):
  return grad, tf.negative(grad)
```
The decorator argument `op_type` is the string type of an operation. This corresponds to the `OpDef.name` field for the proto that defines the operation.
## __init__
View source

```
 __init__(op_type)
```
Creates a new decorator with `op_type` as the Operation type.
#### Args:
- `op_type`: The string type of an operation. This corresponds to the `OpDef.name` field for the proto that defines the operation.
#### Raises:
- `TypeError`: If `op_type` is not string.
## Methods
### __call__
View source

```
 __call__(f)
```
Registers the `f`unction `f` as gradient `f`unction `f`or `op_type`.
