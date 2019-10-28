## Class FailedPreconditionError
Operation was rejected because the system is not in a state to execute it.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.FailedPreconditionError`
- Class `tf.compat.v2.errors.FailedPreconditionError`
This exception is most commonly raised when running an operation that reads a `tf.Variable` before it has been initialized.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates a `FailedPreconditionError`.
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
