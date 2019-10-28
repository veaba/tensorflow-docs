## Class InvalidArgumentError
Raised when an operation receives an invalid argument.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.InvalidArgumentError`
- Class `tf.compat.v2.errors.InvalidArgumentError`
This may occur, for example, if an operation is receives an input tensor that has an invalid value or shape. For example, the `tf.matmul` op will raise this error if it receives an input that is not a matrix, and the `tf.reshape` op will raise this error if the new shape does not match the number of elements in the input tensor.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates an `InvalidArgumentError`.
## Properties
### error_code
The integer error code that describes the error.
### message
The error message that describes the error.
### node_def
The `NodeDef` proto representing the op that failed.
### op
The operation that failed, if known.
N.B. If the failed op was synthesized at runtime, e.g. a `Send` or `Recv` op, there will be no corresponding `tf.Operation` object. In that case, this will return `None`, and you should instead use the `tf.errors.OpError.node_def` to discover information about the op.
#### Returns:
The `Operation` that failed, or None.
