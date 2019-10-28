## Class CancelledError
Raised when an operation or step is cancelled.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.CancelledError`
- Class `tf.compat.v2.errors.CancelledError`
For example, a long-running operation (e.g. `tf.QueueBase.enqueue` may be cancelled by running another operation (e.g. `tf.QueueBase.close`, or by `tf.Session.close`. A step that is running such a long-running operation will fail by raising `CancelledError`.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates a `CancelledError`.
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
