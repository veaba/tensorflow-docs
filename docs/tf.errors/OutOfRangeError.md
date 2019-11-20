[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/errors/OutOfRangeError) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L407-L422)  
---|---  
  
## Class `OutOfRangeError`

Raised when an operation iterates past the valid input range.

Inherits From:
[`OpError`](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

### Aliases:

  * Class [`tf.compat.v1.errors.OutOfRangeError`](/api_docs/python/tf/errors/OutOfRangeError)
  * Class [`tf.compat.v2.errors.OutOfRangeError`](/api_docs/python/tf/errors/OutOfRangeError)

This exception is raised in "end-of-file" conditions, such as when a
`tf.QueueBase.dequeue` operation is blocked on an empty queue, and a
`tf.QueueBase.close` operation executes.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L419-L422)

    
    
    __init__(
        node_def,
        op,
        message
    )
    

Creates an `OutOfRangeError`.

## Properties

### `error_code`

The integer error code that describes the error.

### `message`

The error message that describes the error.

### `node_def`

The `NodeDef` proto representing the op that failed.

### `op`

The operation that failed, if known.

_N.B._ If the failed op was synthesized at runtime, e.g. a `Send` or `Recv`
op, there will be no corresponding
[`tf.Operation`](https://tensorflow.google.cn/api_docs/python/tf/Operation)
object. In that case, this will return `None`, and you should instead use the
[`tf.errors.OpError.node_def`](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError#node_def)
to discover information about the op.

#### Returns:

The `Operation` that failed, or None.

