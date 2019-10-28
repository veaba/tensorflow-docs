## Class AlreadyExistsError
Raised when an entity that we attempted to create already exists.
Inherits From: `OpError`
### Aliases:
- Class `tf.compat.v1.errors.AlreadyExistsError`
- Class `tf.compat.v2.errors.AlreadyExistsError`
For example, running an operation that saves a file (e.g. `tf.train.Saver.save`) could potentially raise this exception if an explicit filename for an existing file was passed.
## __init__
View source

```
 __init__(
    node_def,
    op,
    message
)
```
Creates an `AlreadyExistsError`.
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
