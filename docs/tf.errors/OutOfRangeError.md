## Class OutOfRangeError

Raised when an operation iterates past the valid input range.
[OpError](https://www.tensorflow.org/api_docs/python/tf/errors/OpError)Inherits From: 

### Aliases:
- Class `tf.compat.v1.errors.OutOfRangeError`
- Class `tf.compat.v2.errors.OutOfRangeError`

This exception is raised in "end-of-file" conditions, such as when a tf.QueueBase.dequeue operation is blocked on an empty queue, and a tf.QueueBase.close operation executes.
## __init__
[View source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L419-L422)


```
 __init__(
    node_def,
    op,
    message
)
```

Creates an OutOfRangeError.
## Properties
### error_code

The integer error code that describes the error.
### message

The error message that describes the error.
### node_def

The NodeDef proto representing the op that failed.
### op

The operation that failed, if known.
[tf.Operation](https://www.tensorflow.org/api_docs/python/tf/Operation)N.B. If the failed op was synthesized at runtime, e.g. a Send or Recv op, there will be no corresponding  object. In that case, this will return None, and you should instead use the tf.errors.OpError.node_def to discover information about the op.

#### Returns:

The Operation that failed, or None.
