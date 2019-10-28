## Class UnimplementedError
Raised when an operation has not been implemented.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.UnimplementedError`
- Class `tf.compat.v2.errors.UnimplementedError`
Some operations may raise this error when passed otherwise-valid arguments that it does not currently support. For example, running the `tf.nn.max_pool2d` operation would raise this error if pooling was requested on the batch dimension, because this is not yet supported.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates an `UnimplementedError`.
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
