## Class UnknownError
Unknown error.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.UnknownError`
- Class `tf.compat.v2.errors.UnknownError`
An example of where this error may be returned is if a Status value received from another address space belongs to an error-space that is not known to this address space. Also errors raised by APIs that do not return enough error information may be converted to this error.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message,
    error_code=UNKNOWN
)
```
Creates an `UnknownError`.
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
