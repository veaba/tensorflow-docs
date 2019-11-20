[ ![](https://tensorflow.google.cn/images/tf_logo_32px.png) TensorFlow 1
version](/versions/r1.15/api_docs/python/tf/errors/AbortedError) |  [
![](https://tensorflow.google.cn/images/GitHub-Mark-32px.png) View source on
GitHub
](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L389-L403)  
---|---  
  
## Class `AbortedError`

The operation was aborted, typically due to a concurrent action.

Inherits From:
[`OpError`](https://tensorflow.google.cn/api_docs/python/tf/errors/OpError)

### Aliases:

  * Class [`tf.compat.v1.errors.AbortedError`](/api_docs/python/tf/errors/AbortedError)
  * Class [`tf.compat.v2.errors.AbortedError`](/api_docs/python/tf/errors/AbortedError)

For example, running a `tf.QueueBase.enqueue` operation may raise
`AbortedError` if a `tf.QueueBase.close` operation previously ran.

## `__init__`

[View
source](https://github.com/tensorflow/tensorflow/blob/r2.0/tensorflow/python/framework/errors_impl.py#L401-L403)

    
    
    __init__(
        node_def,
        op,
        message
    )
    

Creates an `AbortedError`.

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

