## Class ResourceExhaustedError
Some resource has been exhausted.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.ResourceExhaustedError`
- Class `tf.compat.v2.errors.ResourceExhaustedError`
For example, this error might be raised if a per-user quota is exhausted, or perhaps the entire file system is out of space.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates a `ResourceExhaustedError`.
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
