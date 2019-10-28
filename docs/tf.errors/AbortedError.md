## Class AbortedError
The operation was aborted, typically due to a concurrent action.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.AbortedError`
- Class `tf.compat.v2.errors.AbortedError`
For example, running a `tf.QueueBase.enqueue` operation may raise `AbortedError` if a `tf.QueueBase.close` operation previously ran.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates an `AbortedError`.
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
