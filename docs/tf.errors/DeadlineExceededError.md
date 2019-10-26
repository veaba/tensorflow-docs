## Class DeadlineExceededError
Raised when a deadline expires before an operation could complete.
[OpError](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)Inherits From: 

### Aliases:
- Class tf.compat.v1.errors.DeadlineExceededError
- Class tf.compat.v2.errors.DeadlineExceededError
This exception is not currently used.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L281-L284)


```
 __init__(
    node_def,
    op,
    message
)
```
Creates a DeadlineExceededError.
## Properties
### error_code
The integer error code that describes the error.
### message
The error message that describes the error.
### node_def
The NodeDef proto representing the op that failed.
### op
The operation that failed, if known.
[tf.Operation](https://tensorflow.google.cn/api_docs/python/tf/Operation)N.B. If the failed op was synthesized at runtime, e.g. a Send or Recv op, there will be no corresponding  object. In that case, this will return None, and you should instead use the tf.errors.OpError.node_def to discover information about the op.

#### Returns:
The Operation that failed, or None.
